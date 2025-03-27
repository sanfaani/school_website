"use client";

import { useState } from "react";
import { FaList, FaTable } from "react-icons/fa";

const events = [
  {
    title: "Holiday",
    date: "03/14/2025 To 03/16/2025",
    description:
      "Celebrated nationwide, Holi marks the arrival of spring and brings people together in vibrant celebrations. Schools across the country remain closed, giving students a long weekend to enjoy the festival with friends and family.",
  },
  {
    title: "Activity",
    date: "03/05/2025 To 03/31/2025",
    description:
      "Mathematics competitions are events where students solve math problems and compete against each other. These competitions can help students build confidence, problem-solving skills, and academic achievement.",
  },
];

const AnnualCalendar = () => {
  const [viewMode, setViewMode] = useState<"list" | "table">("list");

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Annual Calendar</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 border px-3 py-1.5 rounded-md ${
              viewMode === "list" ? "bg-gray-100 font-semibold" : "bg-white"
            }`}
          >
            <FaList />
            List
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-2 border px-3 py-1.5 rounded-md ${
              viewMode === "table" ? "bg-gray-100 font-semibold" : "bg-white"
            }`}
          >
            <FaTable />
            Table
          </button>
        </div>
      </div>

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-bold">{event.title}</h3>
              <p className="text-sm font-semibold mt-1">{event.date}</p>
              <p className="mt-1 text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left border-b">Title</th>
                <th className="p-3 text-left border-b">Date</th>
                <th className="p-3 text-left border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{event.title}</td>
                  <td className="p-3">{event.date}</td>
                  <td className="p-3">{event.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AnnualCalendar;
