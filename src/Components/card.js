'use client';

import Link from 'next/link';
import Image from 'next/image';
import  {LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <Link href={link} legacyBehavior>
      <a className="block w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <LazyLoadImage src={imageSrc.src}
                width={400} height={250}
                alt={title}
                className="w-full h-48 object-cover"
              />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
