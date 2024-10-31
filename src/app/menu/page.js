'use client'

import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import Section from '@/Components/Section'
import Image from 'next/image'
import { useDarkMode } from '../DarkModeContext'

const menuItems = [
  {
    name: 'Margherita Pizza',
    category: 'Pizza',
    price: 'Rs12.99',
    description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
    image:
      'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww',
  },
  {
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    price: 'Rs14.99',
    description: 'Pepperoni, mozzarella, and tomato sauce.',
    image:
      'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVwcGVyb25pJTIwUGl6emF8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'BBQ Chicken Pizza',
    category: 'Pizza',
    price: 'Rs15.99',
    description: 'BBQ chicken, red onions, and cilantro.',
    image:
      'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJCUSUyMENoaWNrZW4lMjBQaXp6YXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Veggie Pizza',
    category: 'Pizza',
    price: 'Rs13.99',
    description: 'Bell peppers, olives, onions, and mushrooms.',
    image:
      'https://images.unsplash.com/photo-1617470702892-e01504297e84?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmVnZ2llJTIwUGl6emF8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Caesar Salad',
    category: 'Salad',
    price: 'Rs9.99',
    description: 'Romaine lettuce, Caesar dressing, and croutons.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
  },
  {
    name: 'Greek Salad',
    category: 'Salad',
    price: 'Rs10.99',
    description: 'Mixed greens, feta cheese, olives, and vinaigrette.',
    image:
      'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZWslMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Spaghetti Bolognese',
    category: 'Pasta',
    price: 'Rs14.99',
    description: 'Spaghetti with a rich meat sauce.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc',
  },
  {
    name: 'Fettuccine Alfredo',
    category: 'Pasta',
    price: 'Rs13.99',
    description: 'Fettuccine pasta with creamy Alfredo sauce.',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2',
  },
  {
    name: 'Chicken Parmesan',
    category: 'Entree',
    price: 'Rs16.99',
    description: 'Breaded chicken breast with marinara and cheese.',
    image:
      'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFBhcm1lc2FufGVufDB8fDB8fHww',
  },
  {
    name: 'Tiramisu',
    category: 'Dessert',
    price: 'Rs6.99',
    description: 'Classic Italian dessert with coffee and mascarpone.',
    image:
      'https://images.unsplash.com/photo-1631206753348-db44968fd440?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFRpcmFtaXN1fGVufDB8fDB8fHww',
  },
]

const categories = [...new Set(menuItems.map((item) => item.category)), 'All']

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  const { darkMode } = useDarkMode();

  return (
    <main className='min-h-screen flex flex-col'>
      <Section>
        <h1 className='text-6xl text-center font-bold tracking-wide mb-12'>
          Our Menu
          <span
            className={`blinking-underscore ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            _
          </span>
        </h1>
        <div className='flex justify-center mb-8'>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full mr-2 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className='bg-gray-300 rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105'
            >
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h2 className='text-2xl text-black font-bold mb-2'>
                  {item.name}
                </h2>
                <p className='text-gray-700 mb-4'>{item.description}</p>
                <p className='text-lg font-semibold text-blue-600'>
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  )
}

export default Menu
