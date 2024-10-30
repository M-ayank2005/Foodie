'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Carousel from '@/Components/Carousel'
import Card from '@/Components/Card'
import image1 from '../lib/pizza.jpg'
import image2 from '../lib/pizza2.jpg'
import image3 from '../lib/fries.jpg'
import image4 from '../lib/chow.jpg'
import image5 from '../lib/berger.jpg'
import Section from '@/Components/Section'
import { useDarkMode } from './DarkModeContext'
import './globals.css' // Import the CSS file where we'll define the blinking cursor class

export default function Home() {
  const { darkMode } = useDarkMode()

  // List of attributes
  const attributes = [
    'Adventurous',
    'Gourmet',
    'Sweet-Toothed',
    'Savory-Lover',
    'Spice Enthusiast',
    'Local Foodie',
    'Health-Conscious',
    'Vegan',
  ]

  const [currentAttribute, setCurrentAttribute] = useState('')
  const [index, setIndex] = useState(0)
  const [typing, setTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)
  const [isPausing, setIsPausing] = useState(false)

  useEffect(() => {
    let timeout

    if (typing) {
      if (charIndex < attributes[index].length) {
        timeout = setTimeout(() => {
          setCurrentAttribute((prev) => prev + attributes[index][charIndex])
          setCharIndex((prev) => prev + 1)
        }, 100)
      } else {
        setTyping(false)
        setIsPausing(true)
        timeout = setTimeout(() => setIsPausing(false), 0) // Pause after typing
      }
    } else if (!typing && !isPausing) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentAttribute((prev) => prev.slice(0, -1))
          setCharIndex((prev) => prev - 1)
        }, 150) // Detyping speed
      } else {
        setTyping(true)
        setIndex((prevIndex) => (prevIndex + 1) % attributes.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [typing, charIndex, index, isPausing])


  return (
    <main>
      <Section>
        <Carousel />
      </Section>

      <div
        className={`flex flex-col items-center text-center ${
          darkMode ? 'bg-gray-700' : 'bg-slate-200'
        } p-3 mb-5 w-full rounded-xl justify-center`}
      >
        <h2
          className={`text-3xl font-bold font-mono flex-initial w-full ${
            darkMode ? 'text-white' : 'text-black'
          }`}
          style={{ marginBottom: '5px' }}
        >
          Are You A {currentAttribute}
          <span className='blinking-cursor'>|</span> Foodie?
        </h2>

        <h3 style={{ fontFamily: 'monospace' }}>We have got you covered!</h3>
      </div>

      <Section customStyle={`${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className='mt-6 mx-auto w-full'>
          <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Card
              imageSrc={image1}
              title='Delicious Pizza'
              description='A tasty pizza with fresh ingredients.'
              link='/pizza'
            />
            <Card
              imageSrc={image2}
              title='Delicious Burger'
              description='A tasty burger with fresh ingredients.'
              link='/burger'
            />
            <Card
              imageSrc={image3}
              title='Tasty French Fries'
              description='Tasty french fries with fresh ingredients.'
              link='/fries'
            />
            <Card
              imageSrc={image4}
              title='Delicious Chowmein'
              description='A tasty chowmein made with fresh ingredients.'
              link='/chowmein'
            />
            <Card
              imageSrc={image5}
              title='Delicious Burger'
              description='A tasty burger with fresh ingredients.'
              link='/burger'
            />
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  )
}
