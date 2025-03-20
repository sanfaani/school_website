"use client";

import { useState } from "react";

export default function FilterSidebar({
  setSearch,
  setFilter,
  setSortOption,
}: {
  setSearch: (value: string) => void;
  setFilter: (value: string) => void;
  setSortOption: (value: string) => void;
}) {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  return (
    <div className="w-full md:w-1/4 p-4 border-r border-gray-300">
      <h2 className="text-lg font-semibold mb-4">Filter & Refine</h2>

      {/* Search By Course */}
      <input
        type="text"
        placeholder="Enter Keyword..."
        className="w-full border px-3 py-2 rounded-md mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}
      <select
        className="w-full border px-3 py-2 rounded-md mb-4"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Upgrade Skill">Upgrade Skill</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Personal Development">Personal Development</option>
      </select>

      {/* Price Range */}
      <div className="flex space-x-2 mb-4">
        <input
          type="number"
          placeholder="$ Min"
          className="w-1/2 border px-3 py-2 rounded-md"
          onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
        />
        <input
          type="number"
          placeholder="$ Max"
          className="w-1/2 border px-3 py-2 rounded-md"
          onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
        />
      </div>

      {/* Sorting Options */}
      <select
        className="w-full border px-3 py-2 rounded-md"
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="price">Price</option>
        <option value="sales">Best Seller</option>
        <option value="rating">Best Rated</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}
