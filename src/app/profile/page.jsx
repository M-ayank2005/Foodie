'use client'

import Link from 'next/link'
import gif from '../../../public/err.gif'
import Image from 'next/image'
import { useDarkMode } from '../DarkModeContext'

export default function Page() {
  const { darkMode } = useDarkMode()
  console.log(darkMode)

  return (
    <div
      className={`h-screen w-full ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white-600 text-gray-900'
      }`}
    >
      <section className='home grid h-screen pt-32 pb-16'>
        <div className='home__container container grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center'>
          {/* Error Message Section */}
          <div className='home__data justify-self-center text-center lg:text-left'>
            <p className='pb-2 text-5xl font-semibold lg:text-6xl'>Error 404</p>
            <h1 className='pb-4 text-5xl font-bold'>Sorry, Customers</h1>
            <p className='pb-8 font-semibold'>
              We can&apos;t seem to find the page <br />
              you are looking for.
            </p>
            <Link legacyBehavior href='/' passHref>
              <a className='inline-flex items-center justify-center rounded-full bg-gray-900 py-4 px-8 font-bold text-white transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700'>
                Go Home
              </a>
            </Link>
          </div>

          {/* Error Image Section */}
          <div className='home__img justify-self-center p-4'>
            <Image
              src={gif}
              alt='Error 404'
              className='max-w-xs md:max-w-sm mx-auto'
            />
          </div>
        </div>

        {/* Footer Section */}
        <div className='home__footer flex items-center justify-center gap-4 self-end text-sm font-semibold text-gray-700 dark:text-gray-400 mt-12'>
          <p className='flex items-center gap-1'>
            <span role='img' aria-label='phone'>
              📞
            </span>{' '}
            +91-8493628282
          </p>
          <p>|</p>
          <p className='flex items-center gap-1'>
            <span role='img' aria-label='email'>
              ✉️
            </span>{' '}
            info@Foodie.com
          </p>
        </div>
      </section>
    </div>
  )
}
