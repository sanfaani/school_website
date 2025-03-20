"use client";

import { useState } from "react";
import { MdGridView, MdList } from "react-icons/md";
import CourseCard from "./CourseCard";
// import course1 from "@/assets/courseimages/course1.jpg"
// import course2 from "@/assets/courseimages/course2.jpg"
// import course3 from "@/assets/courseimages/course3.jpg"


// Sample Course Data
const coursesData = [
  { id: 1, title: "Chemistry", category: "Upgrade Skill", price: 135, rating: 3, sales: 3, image: "/courseimages/course1.jpg" },
  { id: 2, title: "Basic Science", category: "Upgrade Skill", price: 135, rating: 4, sales: 6, image: "/courseimages/course2.jpg" },
  { id: 3, title: "Modern Physics", category: "Upgrade Skill", price: 135, rating: 4, sales: 5, image: "/courseimages/course3.jpg" },
];


export default function CourseDisplay({ search, filter, sortOption }: { search: string; filter: string; sortOption: string }) {
  const [viewMode, setViewMode] = useState("grid");

  // Filter & Sort Courses
  const filteredCourses = coursesData
    .filter(course => (filter === "All" ? true : course.category === filter))
    .filter(course => course.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "price") return a.price - b.price;
      if (sortOption === "sales") return b.sales - a.sales;
      if (sortOption === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="flex-1 p-2">
      {/* View Mode Toggle & Sorting */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button onClick={() => setViewMode("grid")}>
            <MdGridView className={`w-6 h-6 ${viewMode === "grid" ? "text-red-500" : "text-gray-400"}`} />
          </button>
          <button onClick={() => setViewMode("list")}>
            <MdList className={`w-6 h-6 ${viewMode === "list" ? "text-red-500" : "text-gray-400"}`} />
          </button>
        </div>
      </div>

      {/* Course List/Grid View */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-4 gap-2" : "space-y-4"}>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}
