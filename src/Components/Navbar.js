import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-400 pt-2 pb-2 sticky top-0 w-full  shadow-lg z-50">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-row space-x-5">
          <div className="ml-6 h-15 w-35">
            <Image 
              src="https://ih0.redbubble.net/image.465217072.5837/sticker,375x360-bg,ffffff.u3.png" 
              height={30} 
              width={60} 
              className="rounded-3xl bg-white" 
              alt="Logo"
            />
          </div>
          <div className="text-gray-200 font-mono font-bold text-2xl">
            <Link href="/">Foodie</Link>
          </div>
        </div>
        <div className="text-gray-300 mr-7 text-lg flex space-x-6">
          <Link href="/" className="hover:text-white transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-white transition duration-300">About</Link>
          <Link href="/menu" className="hover:text-white transition duration-300">Menu</Link>
          <Link href="/contact" className="hover:text-white transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
