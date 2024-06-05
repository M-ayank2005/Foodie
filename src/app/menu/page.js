import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/footer';
import Image from 'next/image';

const menuItems = [
  { 
    name: 'Margherita Pizza', 
    price: 'Rs12.99', 
    description: 'Classic pizza with tomato sauce, mozzarella, and basil.', 
    image: 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww' 
  },
  { 
    name: 'Pepperoni Pizza', 
    price: 'Rs14.99', 
    description: 'Pepperoni, mozzarella, and tomato sauce.', 
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGVwcGVyb25pJTIwUGl6emF8ZW58MHx8MHx8fDA%3D' 
  },
  { 
    name: 'BBQ Chicken Pizza', 
    price: 'Rs15.99', 
    description: 'BBQ chicken, red onions, and cilantro.', 
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJCUSUyMENoaWNrZW4lMjBQaXp6YXxlbnwwfHwwfHx8MA%3D%3D' 
  },
  { 
    name: 'Veggie Pizza', 
    price: 'Rs13.99', 
    description: 'Bell peppers, olives, onions, and mushrooms.', 
    image: 'https://images.unsplash.com/photo-1617470702892-e01504297e84?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmVnZ2llJTIwUGl6emF8ZW58MHx8MHx8fDA%3D' 
  },
  { 
    name: 'Caesar Salad', 
    price: 'Rs9.99', 
    description: 'Romaine lettuce, Caesar dressing, and croutons.', 
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b' 
  },
  { 
    name: 'Greek Salad', 
    price: 'Rs10.99', 
    description: 'Mixed greens, feta cheese, olives, and vinaigrette.', 
    image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZWslMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D' 
  },
  { 
    name: 'Spaghetti Bolognese', 
    price: 'Rs14.99', 
    description: 'Spaghetti with a rich meat sauce.', 
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc' 
  },
  { 
    name: 'Fettuccine Alfredo', 
    price: 'Rs13.99', 
    description: 'Fettuccine pasta with creamy Alfredo sauce.', 
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2' 
  },
  { 
    name: 'Chicken Parmesan', 
    price: 'Rs16.99', 
    description: 'Breaded chicken breast with marinara and cheese.', 
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFBhcm1lc2FufGVufDB8fDB8fHww' 
  },
  { 
    name: 'Tiramisu', 
    price: 'Rs6.99', 
    description: 'Classic Italian dessert with coffee and mascarpone.', 
    image: 'https://images.unsplash.com/photo-1631206753348-db44968fd440?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFRpcmFtaXN1fGVufDB8fDB8fHww' 
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex flex-col px-4 md:px-32 py-12">
        <h1 className="text-6xl text-center font-bold tracking-wide mb-12">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-gray-300 rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
              <Image src={item.image} alt={item.name} width={50} height={50} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <p className="text-lg font-semibold text-blue-600">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
