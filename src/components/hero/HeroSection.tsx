import type React from "react";
import { Book, GraduationCap, Users } from "lucide-react";
import herobackground from "@/assets/heroimage.jpg";

export default function HeroSection() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${herobackground.src})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Content Overlay */}
      <div className="relative h-full container mx-auto px-4">
        <div className="pt-20 text-white">
          <p className="text-lg mb-2">DO YOU NEED ANY HELP?</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WELCOME TO OUR
            <br />
            ACADEMY
          </h1>
          {/* Adjusted margin-bottom for mobile */}
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
