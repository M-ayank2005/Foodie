// components/CustomerReviewCarousel.js

import React from 'react'
import Slider from 'react-slick'
import { useDarkMode } from '../app/DarkModeContext'


const reviews = [
  {
    name: 'Alice Johnson',
    review: 'This product is amazing! I love using it every day.',
    rating: 5,
  },
  {
    name: 'Bob Smith',
    review: 'Great customer service and high quality. Highly recommended!',
    rating: 4,
  },
  {
    name: 'Claire Lee',
    review: 'Exceeded my expectations. I would buy it again!',
    rating: 5,
  },
  {
    name: 'James Anderson',
    review: 'Good quality Food',
    rating: 4,
  },

  // Add more reviews as needed
]

const CustomerReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className='carousel-container'>
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '2em',
          marginBottom: '20px',
        }}
        className='{darkMode ? "text-white" : "text-black"}'
      >
        Our Customer Reviews
      </h1>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className='review-slide'>
            <p>&quot;{review.review}&quot;</p>
            <h3
              style={{
                color: '#322',
              }}
            >
              - {review.name}
            </h3>
            <p>Rating: {Array(review.rating).fill('⭐')}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CustomerReviewCarousel
