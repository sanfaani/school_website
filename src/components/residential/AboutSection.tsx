"use client";

import { useState } from "react";
import Image from "next/image";
import aboutimg from "@/assets/aboutimage.png";
import { ChevronDown } from "lucide-react";

export default function AboutSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="containe mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">ABOUT US</h2>
        <p className="text-gray-600 mt-2">
          Tuse sem dolor, scelerem ipsurem eciust ven fuca nec orem scoi nodev
          inviti onchina bret tzim.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] group overflow-hidden rounded-lg">
          <Image
            src={aboutimg}
            alt="Students working on laptops"
            fill
            className="object-cover transition-opacity duration-300"
          />

          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-2xl font-bold mb-4">WELCOME TO LEVENMOUTH</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>

          <div className="space-y-3">
            {/* Collapsible Item #1 */}
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <button
                onClick={() => toggleItem(0)}
                className="w-full bg-[#ff5f5f] text-white px-4 py-2 flex justify-between items-center hover:bg-[#ff4f4f] transition-colors"
              >
                <span>Collapsible Item #1</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openItem === 0 ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === 0 ? "max-h-96 py-3" : "max-h-0"
                }`}
              >
                <div className="px-4 text-gray-600">
                  Empty dummy text of this type use getting industry. Lorem
                  Ipsum has been the industrys standard dummy text ever since
                  the 1500s when an unknown printer took a galley of type and
                  scrambled.
                </div>
              </div>
            </div>

            {/* Collapsible Item #2 */}
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <button
                onClick={() => toggleItem(1)}
                className="w-full bg-[#ff5f5f] text-white px-4 py-2 flex justify-between items-center hover:bg-[#ff4f4f] transition-colors"
              >
                <span>Collapsible Item #2</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openItem === 1 ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === 1 ? "max-h-96 py-3" : "max-h-0"
                }`}
              >
                <div className="px-4 text-gray-600">
                  Empty dummy text of this type use getting industry. Lorem
                  Ipsum has been the industrys standard dummy text ever since
                  the 1500s when an unknown printer took a galley of type and
                  scrambled.
                </div>
              </div>
            </div>

            {/* Collapsible Item #3 */}
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <button
                onClick={() => toggleItem(2)}
                className="w-full bg-[#ff5f5f] text-white px-4 py-2 flex justify-between items-center hover:bg-[#ff4f4f] transition-colors"
              >
                <span>Collapsible Item #3</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openItem === 2 ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === 2 ? "max-h-96 py-3" : "max-h-0"
                }`}
              >
                <div className="px-4 text-gray-600">
                  Empty dummy text of this type use getting industry. Lorem
                  Ipsum has been the industrys standard dummy text ever since
                  the 1500s when an unknown printer took a galley of type and
                  scrambled.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
