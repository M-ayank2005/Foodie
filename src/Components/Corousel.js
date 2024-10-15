import { useState, useEffect } from 'react';
import Image from 'next/image';
import food1 from '../lib/food1.jpg';
import food2 from '../lib/food2.jpg';
import food3 from '../lib/food3.jpg';
import food4 from '../lib/food4.jpg';
import food5 from '../lib/food5.jpg';

const slides = [food1, food2, food3, food4, food5];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Adjust timing for auto-slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="fullpage-carousel" className="relative w-full h-screen overflow-hidden">
      {/* Slide Container */}
      <div className="w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide}
              layout="fill"
              objectFit="cover"
              alt={`Slide ${index + 1}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-10 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        className="absolute top-1/2 left-5 z-30 transform -translate-y-1/2 bg-black/30 p-3 rounded-full hover:bg-black/50 focus:outline-none transition-all duration-300"
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-1/2 right-5 z-30 transform -translate-y-1/2 bg-black/30 p-3 rounded-full hover:bg-black/50 focus:outline-none transition-all duration-300"
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
