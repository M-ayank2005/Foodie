'use client';
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
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full p-5  pt-0 mt-5">
        <Carousel />
      </div>

      <div className="text-bold  bg-gray-200 rounded-2xl p-3 pl-10 w-full">
        <p className="text-3xl font-bold text-left">Hot & Spicy ....</p>
      </div>

      <div className="p-5 m-5">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card
            imageSrc={image1}
            title="Delicious Pizza"
            description="A tasty pizza with fresh ingredients."
            link="/pizza"
          />
          <Card
            imageSrc={image2}
            title="Delicious Burger"
            description="A tasty burger with fresh ingredients."
            link="/burger"
          />
          <Card
            imageSrc={image3}
            title="Tasty French Fries"
            description="Tasty french fries with fresh ingredients."
            link="/fries"
          />
          <Card
            imageSrc={image4}
            title="Delicious Chowmein"
            description="A tasty chowmein made with fresh ingredients."
            link="/chowmein"
          />
          <Card
            imageSrc={image5}
            title="Delicious Burger"
            description="A tasty burger with fresh ingredients."
            link="/burger"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
