"use client";

import Image from "next/image";
import whatwedo from "@/assets/whatwedo.jpg";

const AboutIntro = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What We Do</h2>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-700 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src= {whatwedo}
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
