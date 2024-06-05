
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
    return (
    <nav className="bg-yellow-500 p-4 pr-6 flex flex-row items-center justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex flex-row space-x-5'>
        <Image src='https://ih0.redbubble.net/image.465217072.5837/sticker,375x360-bg,ffffff.u3.png' height={10} width={25}/>
        <div className="text-white font-mono font-bold text-2xl">
          <Link href="/">Foodie</Link>
        </div>
        </div>
            <div className="text-white md:flex md:space-x-6">
            <Link href="/" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-300">Home</Link>
            <Link href="/about" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-300">About</Link>
            <Link href="/menu" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-300">Menu</Link>
            <Link href="/contact" className="block mt-4 md:inline-block md:mt-0 hover:text-gray-300">Contact</Link>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
