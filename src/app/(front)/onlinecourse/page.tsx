"use client";

import CourseDisplay from "@/components/onlinecourse/CourseDisplay";
import FilterSidebar from "@/components/onlinecourse/FilterSidebar";
import { useState } from "react";

export default function OnlineCourses() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortOption, setSortOption] = useState("price");
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });

  return (
    <div className="container mx-auto px-6 lg:px-20 py-10">
      <h1 className="text-3xl font-bold text-[#ff5959]">Online Courses</h1>
      <div className="flex flex-col md:flex-row mt-6">
        {/* Sidebar */}
        <FilterSidebar
          setSearch={setSearch}
          setFilter={setFilter}
          setSortOption={setSortOption}
          setPriceRangeFilter={setPriceRange} // ✅ Passing correct function
        />
        {/* Course Display */}
        <CourseDisplay 
          search={search} 
          filter={filter} 
          sortOption={sortOption} 
          priceRange={priceRange} // ✅ Pass the price range
        />
      </div>
    </div>
  );
}
