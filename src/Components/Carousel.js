import { useState, useEffect } from 'react'
import Image from 'next/image'
import food1 from '../lib/food1.jpg'
import food2 from '../lib/food2.jpg'
import food3 from '../lib/food3.jpg'
import food4 from '../lib/food4.jpg'
import food5 from '../lib/food5.jpg'

const slides = [food1, food2, food3, food4, food5]

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000) // Increased interval for better viewing experience

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id='default-carousel'
      className='relative w-full max-w-7xl mx-auto p-2 my-5 mt-1 pt-0'
    >
      <div className=' h-96  overflow-hidden rounded-lg shadow-xl'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-450 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide}
              layout='fill'
              objectFit='cover'
              alt={`Slide ${index + 1}`}
              className='rounded-lg'
            />
          </div>
        ))}
      </div>

      <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
        {slides.map((_, index) => (
          <button
            key={index}
            type='button'
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type='button'
        className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none transition-all duration-300'>
          <svg
            className='w-4 h-4 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <button
        type='button'
        className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={() =>
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none transition-all duration-300'>
          <svg
            className='w-4 h-4 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
    </div>
  )
}

export default Carousel
