"use client";

import { useState } from "react";
import { MdGridView, MdList } from "react-icons/md";
import CourseCard from "./CourseCard";

interface Course {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  lessons: number;
  duration: string;
  lastUpdated: string;
  sales: number;
  image: string;
}

const coursesData: Course[] = [
  { id: 1, title: "Chemistry", category: "Upgrade Skill", price: 110, oldPrice: 150, rating: 3, reviews: 10, lessons: 15, duration: "10", lastUpdated: "2024-01-10", sales: 3, image: "/courseimages/course1.jpg" },
  { id: 2, title: "Basic Science", category: "Upgrade Skill", price: 120, oldPrice: 160, rating: 4, reviews: 20, lessons: 12, duration: "8", lastUpdated: "2024-02-05", sales: 6, image: "/courseimages/course2.jpg" },
  { id: 3, title: "Modern Physics", category: "Upgrade Skill", price: 180, oldPrice: 145, rating: 4, reviews: 15, lessons: 10, duration: "6", lastUpdated: "2024-03-12", sales: 5, image: "/courseimages/course3.jpg" },
  { id: 4, title: "Chemistry", category: "Upgrade Skill", price: 500, oldPrice: 150, rating: 3, reviews: 10, lessons: 15, duration: "10", lastUpdated: "2024-01-10", sales: 3, image: "/courseimages/course1.jpg" },
  { id: 5, title: "Basic Science", category: "Upgrade Skill", price: 725, oldPrice: 160, rating: 4, reviews: 20, lessons: 12, duration: "8", lastUpdated: "2024-02-05", sales: 6, image: "/courseimages/course2.jpg" },
  { id: 6, title: "Modern Physics", category: "Upgrade Skill", price: 250, oldPrice: 145, rating: 4, reviews: 15, lessons: 10, duration: "6", lastUpdated: "2024-03-12", sales: 5, image: "/courseimages/course3.jpg" },
  { id: 7, title: "Chemistry", category: "Upgrade Skill", price: 135, oldPrice: 600, rating: 3, reviews: 10, lessons: 15, duration: "10", lastUpdated: "2024-01-10", sales: 3, image: "/courseimages/course1.jpg" },
  { id: 8, title: "Basic Science", category: "Upgrade Skill", price: 135, oldPrice: 160, rating: 4, reviews: 20, lessons: 12, duration: "8", lastUpdated: "2024-02-05", sales: 6, image: "/courseimages/course2.jpg" },
  { id: 9, title: "Modern Physics", category: "Upgrade Skill", price: 135, oldPrice: 900, rating: 4, reviews: 15, lessons: 10, duration: "6", lastUpdated: "2024-03-12", sales: 5, image: "/courseimages/course3.jpg" },
];

interface CourseDisplayProps {
  search: string;
  filter: string;
  sortOption: string;
  priceRange: { min: number; max: number }; // ✅ Added priceRange
}

export default function CourseDisplay({ search, filter, sortOption, priceRange }: CourseDisplayProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter & Sort Courses
  const filteredCourses = coursesData
    .filter(course => filter === "All" || course.category === filter)
    .filter(course => course.title.toLowerCase().includes(search.toLowerCase()))
    .filter(course => course.price >= priceRange.min && course.price <= priceRange.max) // ✅ Filter by price range
    .sort((a, b) => {
      if (sortOption === "price") return a.price - b.price;
      if (sortOption === "sales") return b.sales - a.sales;
      if (sortOption === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="flex-1 p-2">
      {/* View Mode Toggle */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button onClick={() => setViewMode("grid")} aria-label="Grid View">
            <MdGridView className={`w-6 h-6 ${viewMode === "grid" ? "text-red-500" : "text-gray-400"}`} />
          </button>
          <button onClick={() => setViewMode("list")} aria-label="List View">
            <MdList className={`w-6 h-6 ${viewMode === "list" ? "text-red-500" : "text-gray-400"}`} />
          </button>
        </div>
      </div>

      {/* Course List/Grid View */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-3 gap-2" : "space-y-4"}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => <CourseCard key={course.id} course={course} viewMode={viewMode} />)
        ) : (
          <p className="text-gray-500">No courses found in this price range.</p> // ✅ Show message if no courses match
        )}
      </div>
    </div>
  );
}
