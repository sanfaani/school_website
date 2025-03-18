"use client";
import { useEffect, useState } from "react";

const newsItems = [
  {
    date: "12 March 2025",
    text: "Holi Celebration Holiday",
    color: "text-yellow-400",
  },
  {
    date: "01 February 2025",
    text: "Board Exams Preparation",
    color: "text-yellow-300",
  },
  {
    date: "03 January 2025",
    text: "Happy New Year Celebration...",
    color: "text-yellow-200",
  },
];

export default function NewsTicker() {
  const [position, setPosition] = useState(100); // Start off-screen

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) =>
        prev <= -100 * (newsItems.length - 1) ? 100 : prev - 0.5
      ); // Moves slowly left
    }, 30); // Smooth scrolling effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1A2B44] text-white flex items-center px-4 lg:px-20  text-sm w-full fixed top-0 z-[60] overflow-hidden">
      {/* "Latest News" stays fixed */}
      <span className="font-bold whitespace-nowrap mr-4 bg-[#ff5959] py-2 px-4">Latest News:</span>

      {/* Scrolling News Items */}
      <div className="relative w-full overflow-hidden">
        <div
          className="whitespace-nowrap transition-transform duration-75"
          style={{ transform: `translateX(${position}%)` }}
        >
          {newsItems.map((item, index) => (
            <span
              key={index}
              className={`inline-block mx-6 ${item.color} font-semibold`}
            >
              {item.date} <span className="text-gray-300">{item.text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
