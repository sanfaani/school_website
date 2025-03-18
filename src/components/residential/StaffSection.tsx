"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import staff1 from "@/assets/staff1.png";
import staff2 from "@/assets/staff2.png";
import staff3 from "@/assets/staff3.png";
import staff4 from "@/assets/staff4.png";
import staff5 from "@/assets/staff1.png";
import staff6 from "@/assets/staff2.png";
import staff7 from "@/assets/staff3.png";

const staffMembers = [
  { name: "YUSSUF BASHIRU", role: "English Teacher", image: staff1 },
  { name: "JOHN DOE", role: "Mathematics Teacher", image: staff2 },
  { name: "JANE SMITH", role: "Science Teacher", image: staff3 },
  { name: "MICHAEL LEE", role: "History Teacher", image: staff4 },
  { name: "SARAH WILLIAMS", role: "Physics Teacher", image: staff5 },
  { name: "MARK ANDERSON", role: "Chemistry Teacher", image: staff6 },
  { name: "LINDA JOHNSON", role: "Biology Teacher", image: staff7 },
];

export default function StaffSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default to mobile

  // Adjust items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 4 : 1);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Function to go to the next set of items
  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % staffMembers.length);
  };

  // Function to go to the previous set of items
  const prevSlide = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + staffMembers.length) % staffMembers.length
    );
  };

  return (
    <section className="container mx-auto px-6 lg:px-20 py-12 relative">
      {/* Header */}
      <h2 className="text-center text-3xl font-bold mb-4">
        OUR EXPERIENCED STAFFS
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Simply dummy text of the printing industry. Lorem Ipsum has been the
        industry’s standard.
      </p>

      {/* Carousel Wrapper */}
      <div className="relative flex items-center justify-between">
        {/* Back Button */}
        <button
          className="absolute left-0 lg:-left-14 bg-gray-300 hover:bg-gray-400 p-3 rounded-full transition"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-8 h-8 text-gray-700" />
        </button>

        {/* Staff Grid - Only showing limited items */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-full max-w-full mx-auto">
          {staffMembers
            .slice(startIndex, startIndex + itemsPerPage)
            .concat(
              staffMembers.slice(
                0,
                Math.max(0, startIndex + itemsPerPage - staffMembers.length)
              )
            ) // Handle looping
            .map((staff, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden w-full"
              >
                <div className="relative group">
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
                  />
                </div>
                <div className="bg-red-500 text-white text-center py-4 px-6">
                  <h3 className="text-xl font-bold">{staff.name}</h3>
                  <p className="text-md">{staff.role}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Next Button */}
        <button
          className="absolute right-0 lg:-right-14 bg-gray-300 hover:bg-gray-400 p-3 rounded-full transition"
          onClick={nextSlide}
        >
          <ChevronRight className="w-8 h-8 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
