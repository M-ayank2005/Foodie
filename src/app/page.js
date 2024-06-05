'use client'
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";
import Carousel from "@/Components/Corousel";
import Card from "@/Components/card";
import image1 from "../lib/pizza.jpg";
import image2 from "../lib/pizza2.jpg";
import image3 from "../lib/fries.jpg";
import image4 from "../lib/chow.jpg";
import image5 from "../lib/berger.jpg";
import Error from "./Error404/page.js";
import { useRouter } from "next/navigation";



export default function Home() {
  return (
    <main>
     <Navbar />
       <div className="mt-5 flex flex-col items-center space-x-5 ">
         <Carousel />
      
        <div className="flex flex-col mt-5">
        <div className="text-bold p-3 pl-10 w-screen ">
         <p className="text-3xl  font-bold text-left ">Hot & Spicy ....</p>
        </div>
        <div className="p-5 m-5">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            imageSrc={image1}
            title="Delicious Pizza"
            description="A tasty pizza with fresh ingredients."
            link="/pizza"
          />
          {/* Add more Card components as needed */}
          <Card
            imageSrc={image2}
            title="Delicious Berger"
            description="A tasty Berger with fresh ingredients."
            link="/pizza"
          />
          <Card
            imageSrc={image3}
            title="Tasty French fries ."
            description="A tasty french fries with fresh ingredients."
            link="/pizza"
          />
          <Card
            imageSrc={image4}
            title="Delicious Chowmein"
            description="A tasty choumein made with fresh ingredients."
            link="/pizza"
          />
          <Card
            imageSrc={image5}
            title="Delicious Berger"
            description="A tasty Berger with fresh ingredients."
            link="/pizza"
          />
        </div>
       </div>
      
      </div>
         
         
        
       </div>


     <Footer />
     </main>
   
  );
}
