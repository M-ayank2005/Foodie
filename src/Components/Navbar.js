import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 pr-6 h-15 flex flex-row items-center justify-between sticky top-0 z-50 shadow-lg">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-row space-x-5">
          <div className="h-15 w-35">
            <Image 
              src="https://ih0.redbubble.net/image.465217072.5837/sticker,375x360-bg,ffffff.u3.png" 
              height={30} 
              width={60} 
              className="rounded-3xl bg-white" 
              alt="Logo"
            />
          </div>
          <div className="text-gray-200 font-mono ml-0 mt-4 font-bold text-2xl">
            <Link href="/">Foodie</Link>
          </div>
        </div>
        <div className="text-gray-300 text-lg md:flex md:space-x-6">
          <Link href="/" className="block mt-4 md:inline-block md:mt-0 hover:text-white transition duration-300">Home</Link>
          <Link href="/about" className="block mt-4 md:inline-block md:mt-0 hover:text-white transition duration-300">About</Link>
          <Link href="/menu" className="block mt-4 md:inline-block md:mt-0 hover:text-white transition duration-300">Menu</Link>
          <Link href="/contact" className="block mt-4 md:inline-block md:mt-0 hover:text-white transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
