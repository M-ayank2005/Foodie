'use client';

import Link from 'next/link';
import Image from 'next/image';

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <Link href={link} legacyBehavior>
      <a className="block w-full max-w-sm mx-auto overflow-hidden bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 border border-white border-opacity-20">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
