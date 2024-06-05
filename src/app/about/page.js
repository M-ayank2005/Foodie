import React from 'react';
import Footer from '../../Components/footer';
import Navbar from '../../Components/Navbar';
import Image from 'next/image';

function About() {
  return (
    <div>
      <Navbar />
      <div className="mt-12 mb-10 text-6xl text-center font-bold tracking-wide">About Us</div>
      <div className="text-center mb-10 text-lg">
        <p className="text-sm text-gray-800 animate-fade-in  bg-clip-text ">
          We are Foodie &lsquo; dedicated to providing you with delicious and fresh food delivered to your doorstep with exceptional quality and service.
        </p>
      </div>

      <div className="flex flex-col space-y-10 mb-12 mx-4 lg:mx-20">

        <div className="flex flex-col items-center w-full">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1594179047519-f347310d3322?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
              width={900}
              height={600}
              alt="Delicious food"
              className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-4/5 lg:w-4/5 mt-6 text-justify p-4">
            <p className="text-sm leading-relaxed">
              Welcome to Foodie &lsquo; where every meal is a celebration of taste&lsquo; quality&lsquo; and freshness. Our mission is to deliver the most delightful dining experience to your doorstep&lsquo; ensuring that every bite is a treat to your senses.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start border p-4 rounded-lg shadow-md">
          <div className="w-full lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1610614819513-58e34989848b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww"
              width={900}
              height={600}
              alt="Quality ingredients"
              className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 text-justify p-4 lg:p-0 border lg:border-none rounded-lg lg:rounded-none">
            <h1 className='text-4xl font-bold tracking-wide py-5 px-5'>Our Services</h1>
            <p className="text-lg leading-relaxed px-5 pb-5">
              At Foodie &lsquo; we offer a wide range of culinary delights crafted with the finest ingredients. Whether you are craving a gourmet meal&lsquo; a quick snack&lsquo; or a sumptuous dessert&lsquo; we have got you covered. Our chefs are passionate about creating dishes that not only satisfy your hunger but also bring joy to your heart.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse w-full items-center lg:items-start border p-4 rounded-lg shadow-md">
          <div className="w-full lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1613319300832-a105da5bd34e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww"
              width={900}
              height={600}
              alt="Fresh produce"
              className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:mr-10 text-justify p-4 lg:p-0 border lg:border-none rounded-lg lg:rounded-none">
            <h1 className='text-4xl font-bold tracking-wide py-5 px-5'>Freshness Guaranteed</h1>
            <p className="text-lg leading-relaxed px-5 pb-5">
              We believe that great food starts with great ingredients. That is why we source only the freshest produce&lsquo; finest meats&lsquo; and highest quality spices. Our commitment to freshness ensures that every dish we prepare is not only delicious but also nutritious and wholesome. From farm to fork&lsquo; we maintain the highest standards of quality and hygiene.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start border p-4 rounded-lg shadow-md">
          <div className="w-full lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1615996001375-c7ef13294436?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww"
              width={900}
              height={600}
              alt="Delicious flavors"
              className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-10 text-justify p-4 lg:p-0 border lg:border-none rounded-lg lg:rounded-none">
            <h1 className='text-4xl font-bold tracking-wide py-5 px-5'>Quality Taste</h1>
            <p className="text-lg leading-relaxed px-5 pb-5">
              Taste is at the heart of everything we do. Our menu features a diverse range of dishes inspired by flavors from around the world&lsquo; each meticulously crafted to tantalize your taste buds. Whether you are in the mood for something exotic or something familiar&lsquo; our culinary team is dedicated to delivering an exceptional dining experience with every order.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse w-full items-center lg:items-start border p-4 rounded-lg shadow-md">
          <div className="w-full lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1613319300832-a105da5bd34e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww"
              width={900}
              height={600}
              alt="Our journey"
              className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:mr-10 text-justify p-4 lg:p-0 border lg:border-none rounded-lg lg:rounded-none">
            <h1 className='text-4xl font-bold tracking-wide py-5 px-5'>Our Story</h1>
            <p className="text-lg leading-relaxed px-5 pb-5">
              Foodie  was founded with a simple idea: to make great food accessible to everyone. We started as a small kitchen with a big dream&lsquo; and over the years&lsquo; we have grown into a beloved name in the food delivery industry. Our journey has been fueled by a passion for culinary excellence and a commitment to our customers&apos; satisfaction.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start border p-4 rounded-lg shadow-md">
          <div className="w-full lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1545575950-59f935d6521c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww"
              width={900}
              height={600}
              alt="Our values"
              className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-10 text-justify p-4 lg:p-0 border lg:border-none rounded-lg lg:rounded-none">
            <h1 className='text-4xl font-bold tracking-wide py-5 px-5'>Our Values</h1>
            <p className="text-lg leading-relaxed px-5 pb-5">
              At Foodie &lsquo; we believe in integrity&lsquo; innovation&lsquo; and customer satisfaction. Our team is dedicated to upholding these values in everything we do. We are constantly exploring new ways to enhance our services and exceed your expectations. Our customers are at the heart of everything we do. Your happiness is our priority.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">Thank you for choosing Foodie. We look forward to serving you!</p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default About;
