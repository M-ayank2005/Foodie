

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black border-spacing-0 text-gray-500  pt-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Foodie </h2>
          <p className="text-gray-400">Delicious food delivered to your door</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12C22 5.373 17.627 1 12 1S2 5.373 2 12c0 5.991 4.388 10.931 10 11.874V15.26h-3v-3h3v-2.22c0-3.019 1.792-4.688 4.536-4.688 1.312 0 2.688.235 2.688.235v3h-1.513c-1.49 0-1.951.926-1.951 1.873V12.26h3.292l-.53 3H15.76v8.614c5.612-.943 10-5.883 10-11.874z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 2.999c-.813.36-1.687.602-2.607.711A4.487 4.487 0 0022.337 1.6c-.886.525-1.86.906-2.897 1.109A4.476 4.476 0 0016.41.999c-2.481 0-4.488 2.015-4.488 4.49 0 .35.038.693.115 1.023A12.706 12.706 0 012 3.472a4.505 4.505 0 001.39 6.01A4.414 4.414 0 012 8.875v.057a4.49 4.49 0 003.601 4.411c-.489.135-.989.207-1.495.207-.363 0-.723-.035-1.072-.102a4.483 4.483 0 004.197 3.122A9.005 9.005 0 010 18.058a12.679 12.679 0 006.843 2.002c8.21 0 12.696-6.8 12.696-12.699 0-.194-.003-.387-.012-.579A9.096 9.096 0 0023 2.999z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.343-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.015 7.053.072 5.775.129 4.558.42 3.548 1.431c-1.01 1.01-1.302 2.227-1.359 3.505C2.015 6.269 2 6.679 2 9.938s.015 3.669.072 4.947c.057 1.278.348 2.495 1.359 3.505 1.01 1.01 2.227 1.302 3.505 1.359 1.278.057 1.688.072 4.947.072s3.669-.015 4.947-.072c1.278-.057 2.495-.348 3.505-1.359 1.01-1.01 1.302-2.227 1.359-3.505.057-1.278.072-1.688.072-4.947s-.015-3.669-.072-4.947c-.057-1.278-.348-2.495-1.359-3.505-1.01-1.01-2.227-1.302-3.505-1.359C15.669.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.164a4.002 4.002 0 110-8.004 4.002 4.002 0 010 8.004zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </div>
      </div>
      <div className=" flex flex-row space-x-5 justify-center m-4 md:mb-0">
          <Link href="/about" className="hover:text-gray-300">About Us</Link>
          <Link href="/Error404" className="hover:text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/Error404" className="hover:text-gray-300">FAQ</Link>
        </div>
      <div className="text-center text-gray-400 mt-5">
        &copy; {new Date().getFullYear()} Foodie . All rights reserved.
      </div>
      <div className="flex flex-row justify-center mt-4 mb-0">Made with love by Mayank❤️</div>
    </footer>
  );
};

export default Footer;
