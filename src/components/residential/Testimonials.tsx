"use client";

import { useState } from "react";
import Image from "next/image";
import profilePic from "@/assets/testim-img1.jpg"; // Replace with actual image

const testimonials = [
  {
    name: "LOUREM ADAMS",
    text: "Simply dummy text of the type setting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.",
    image: profilePic, // Use different images for different testimonials
  },
  {
    name: "JANE DOE",
    text: "Another dummy testimonial text. Lorem Ipsum has been used as filler text for centuries, making it the industry's choice.",
    image: profilePic,
  },
  {
    name: "JOHN SMITH",
    text: "More example text from an unknown source. Used in printing and typesetting since the early days.",
    image: profilePic,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="bg-[#9086C4] py-16 px-4">
      <h2 className="text-white text-3xl font-bold text-center mb-8">
        What people say
      </h2>

      {/* Testimonial Content */}
      <div className="flex justify-center">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`text-center flex flex-col items-center ${
              index === currentIndex ? "block" : "hidden"
            } md:block md:w-1/2`}
          >
            {/* Profile Image */}
            <div className="w-24 h-24 border-4 border-blue-600 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            {/* Testimonial Box */}
            <div className="bg-transparent border border-white p-6 mt-4 w-80 rounded-lg text-white">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Indicators */}
      <div className="mt-8 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Next Button */}
      <div className="mt-6 flex justify-center">
        <button
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition"
          onClick={nextTestimonial}
        >
          Next Testimonial →
        </button>
      </div>
    </section>
  );
}
