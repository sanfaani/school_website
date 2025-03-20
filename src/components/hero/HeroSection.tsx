"use client";

import { useState, useEffect } from "react";
import { Book, GraduationCap, Users } from "lucide-react";

const heroImages = [
  "/heroimages/fazhero.jpg",
  "/heroimages/fazhero2.jpg",
  "/heroimages/fazhero3.jpg",
  "/heroimages/fazhero4.jpg",
  "/heroimages/fazhero5.jpg",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsSliding(false);
      }, 1000); // Wait for transition to complete before updating index
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "translate-x-0 opacity-100"
                : isSliding
                ? "translate-x-full opacity-0"
                : "-translate-x-full opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative h-full container mx-auto px-4">
        <div className="pt-20 md:pt-30 text-white">
          <p className="text-lg mb-2">DO YOU NEED ANY HELP?</p>
          <h1 className="text-4xl md:text-[60px] font-bold mb-6">
            WELCOME TO OUR
            <br />
            ACADEMY
          </h1>
          <button className="py-2 px-4 rounded-full bg-[#ff5959] hover:bg-red-700 mb-12 sm:mb-6">
            Learn More
          </button>
        </div>

        {/* Feature Boxes */}
        <div className="absolute bottom-2 left-0 right-0 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <FeatureBox
            icon={<GraduationCap className="w-6 h-6" />}
            title="Scholarship Facility"
            description="Something text getting happy long"
          />
          <FeatureBox
            icon={<Book className="w-6 h-6" />}
            title="Books Library"
            description="Something text getting happy long"
          />
          <FeatureBox
            icon={<Users className="w-6 h-6" />}
            title="Experienced Teachers"
            description="Something text getting happy long"
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureBox({ icon, title, description }: FeatureBoxProps) {
  return (
    <div className="bg-black bg-opacity-70 text-white p-6 rounded-lg transition-transform hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="text-red-600">{icon}</div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
