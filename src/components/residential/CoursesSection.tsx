"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import courseimg1 from "@/assets/couresimg1.png";
import courseimg2 from "@/assets/couresimg2.png";
import courseimg3 from "@/assets/couresimg3.png";
import courseimg4 from "@/assets/couresimg1.png";
import courseimg5 from "@/assets/couresimg2.png";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      image: courseimg1,
      category: "Science",
      title: "Mechanical Engineering",
      description: "Explore the world of machines and innovation.",
    },
    {
      id: 2,
      image: courseimg2,
      category: "Science",
      title: "Civil Engineering",
      description: "Learn how to design and build infrastructure.",
    },
    {
      id: 3,
      image: courseimg3,
      category: "Business",
      title: "Business Administration",
      description: "Master management and entrepreneurship.",
    },
    {
      id: 4,
      image: courseimg4,
      category: "Technology",
      title: "Computer Science",
      description: "Dive into software development and AI.",
    },
    {
      id: 5,
      image: courseimg5,
      category: "Health",
      title: "Nursing & Healthcare",
      description: "Become a skilled healthcare professional.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Determine number of items to show per screen size
  const itemsPerPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1;
  
  // Function to go to next set of items
  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  // Function to go to previous set of items
  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">OUR MAIN COURSES</h2>
          <p className="text-gray-600">Discover courses designed for your success.</p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Back Button */}
          <button
            className="absolute left-0 lg:-left-10 bg-gray-300 hover:bg-gray-400 p-2 rounded-full transition z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Course Grid - Only showing limited items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.slice(startIndex, startIndex + itemsPerPage).map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1"
              >
                {/* Course Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>

                {/* Course Content */}
                <div className="p-6 transition-colors duration-300 group-hover:bg-[#ff5f5f] group-hover:text-white">
                  <div className="text-[#ff5f5f] group-hover:text-white text-sm font-medium mb-2">
                    {course.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <p className="text-gray-600 group-hover:text-white text-sm mb-4">
                    {course.description}
                  </p>

                  {/* Button */}
                  <button
                    className="bg-[#ff5f5f] text-white px-6 py-2 rounded transition-colors
            group-hover:bg-white group-hover:text-[#ff4f4f]"
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="absolute right-0 lg:-right-10 bg-gray-300 hover:bg-gray-400 p-2 rounded-full transition"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
