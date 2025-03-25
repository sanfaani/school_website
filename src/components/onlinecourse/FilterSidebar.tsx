"use client";

import { useState } from "react";
import { MdArrowForward } from "react-icons/md";

export default function FilterSidebar({
  setSearch,
  setFilter,
  setSortOption,
  setPriceRangeFilter,
}: {
  setSearch: (value: string) => void;
  setFilter: (value: string) => void;
  setSortOption: (value: string) => void;
  setPriceRangeFilter: (value: { min: number; max: number }) => void;
}) {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  // Apply price filter when button is clicked
  const applyPriceFilter = () => {
    const min = minPrice.trim() ? parseFloat(minPrice) : 0;
    const max = maxPrice.trim() ? parseFloat(maxPrice) : Infinity;
    
    if (!isNaN(min) && !isNaN(max) && min <= max) {
      setPriceRangeFilter({ min, max });
    }
  };

  return (
    <div className="w-full md:w-1/4 p-4 border-r border-gray-300">
      <h2 className="text-lg font-semibold mb-4 text-black">Filter & Refine</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Enter Keyword..."
        className="w-full border border-gray-400 text-gray-400 px-3 py-2 rounded-md mb-4 "
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}
      <select
        className="w-full border px-3 py-2 rounded-md mb-4 border-gray-400 text-gray-400"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Upgrade Skill">Upgrade Skill</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Personal Development">Personal Development</option>
      </select>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="font-medium text-gray-500">Price Range </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="$ Min"
            className="w-1/2 border px-3 py-2 rounded-md border-gray-400 text-gray-400"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="$ Max"
            className="w-1/2 border px-3 py-2 rounded-md border-gray-400 text-gray-400"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button 
            onClick={applyPriceFilter} 
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            <MdArrowForward className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Sorting Options */}
      <select
        className="w-full border px-3 py-2 rounded-md border-gray-400 text-gray-400"
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
