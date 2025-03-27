"use client";

import { FaGraduationCap, FaChalkboardTeacher, FaBook } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Institution?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Tmple dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s, when an unknown printer took.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Scholarship Facility */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white shadow-lg rounded-full w-24 h-24 flex items-center justify-center mb-4">
              <FaGraduationCap className="text-4xl text-black" />
            </div>
            <h3 className="text-lg font-semibold">Scholarship Facility</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Dorem Ipsum has been the industrys standard dummy text ever since the en an unknown
              printer galley dear.
            </p>
          </div>

          {/* Skilled Lecturers */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white shadow-lg rounded-full w-24 h-24 flex items-center justify-center mb-4">
              <FaChalkboardTeacher className="text-4xl text-black" />
            </div>
            <h3 className="text-lg font-semibold">Skilled Lecturers</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Dorem Ipsum has been the industrys standard dummy text ever since the en an unknown
              printer galley dear.
            </p>
          </div>

          {/* Book Library & Store */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white shadow-lg rounded-full w-24 h-24 flex items-center justify-center mb-4">
              <FaBook className="text-4xl text-black" />
            </div>
            <h3 className="text-lg font-semibold">Book Library & Store</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Dorem Ipsum has been the industrys standard dummy text ever since the en an unknown
              printer galley dear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
