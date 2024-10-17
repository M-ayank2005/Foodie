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
import { motion } from "framer-motion";


const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1,
    },
  },
};


export default function Home() {
  return (
    <main>
      <Navbar />

      <Section>
        <Carousel />
      </Section>

      <Section customStyle={'bg-amber-100'}>

        <motion.h1 
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
        className="text-4xl font-bold flex-initial w-full pb-5 text-center">
        Experience the perfect blend of spice and satisfaction
        </motion.h1>

        <motion.p 
       initial="hidden"
       animate="show"
       variants={fadeInUpAnimation}
        className="text-lg text-gray-600 text-center w-full"> A taste sensation that will linger long after the last bite</motion.p>


        <div className="mt-6 mx-auto w-full">
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
