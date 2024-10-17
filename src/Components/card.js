'use client';

import Image from 'next/image';

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <a href={link} className="group relative block w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={250}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
