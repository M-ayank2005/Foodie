'use client';
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Carousel from "@/Components/Corousel";
import Card from "@/Components/card";
import image1 from "../lib/pizza.jpg";
import image2 from "../lib/pizza2.jpg";
import image3 from "../lib/fries.jpg";
import image4 from "../lib/chow.jpg";
import image5 from "../lib/berger.jpg";
import Section from "@/Components/Section";
import { useDarkMode } from "./DarkModeContext";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <main>
      <Navbar />

      <Section>
        <Carousel />
      </Section>

      
        <div className={`flex flex-col items-center text-center ${darkMode?" bg-gray-700":"bg-slate-200"} p-3 mb-5 w-full rounded-xl justify-center`}>
        <h2 className={`text-3xl font-bold font-mono flex-initial w-full`}>
          Hot & Spicy ....
        </h2>
        </div>
        
        <Section customStyle={`${ darkMode?" bg-black":"bg-white"}`}>
        <div className={`mt-6 mx-auto w-full`}>
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
      </Section>
      <Footer />
    </main>
  );
}
