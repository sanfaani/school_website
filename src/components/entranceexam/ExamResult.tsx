"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

// Validation Schema
const examResultSchema = z.object({
  admissionNo: z.string().min(1, "The Admission No field is required."),
  examType: z.string().min(1, "The Exam field is required."),
});

// Type for form data
type ExamResultFormData = z.infer<typeof examResultSchema>;

const ExamResult = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExamResultFormData>({
    resolver: zodResolver(examResultSchema),
  });

  const onSubmit = async (data: ExamResultFormData) => {
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await axios.post("/api/exam-result", data);
      setResult(response.data.result);
    } catch (err) {
      // ✅ Fix: Now using `err`
      console.error("Error fetching exam result:", err);
      setError("Invalid exam details. Please check your inputs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Exam Result</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:flex md:items-end md:space-x-4 space-y-4 md:space-y-0"
      >
        {/* Admission No Input */}
        <div className="w-full">
          <label className="block font-medium text-gray-700">
            Admission No <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("admissionNo")}
            className="w-full border rounded-full p-2"
            placeholder="Enter your admission number"
          />
          {errors.admissionNo && (
            <p className="text-red-500 text-sm">{errors.admissionNo.message}</p>
          )}
        </div>

        {/* Exam Type Select */}
        <div className="w-full">
          <label className="block font-medium text-gray-700">
            Exam <span className="text-red-500">*</span>
          </label>
          <select
            {...register("examType")}
            className="w-full border rounded-full p-2"
          >
            <option value="">Select</option>
            <option value="midterm">Midterm</option>
            <option value="final">Final Exam</option>
            <option value="entrance">Entrance Exam</option>
          </select>
          {errors.examType && (
            <p className="text-red-500 text-sm">{errors.examType.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition md:w-auto shadow-lg"
          disabled={loading}
        >
          {loading ? "Checking..." : "Search"}
        </button>
      </form>

      {/* Display Result */}
      {result && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-500 rounded-md">
          <strong>Result:</strong> {result}
        </div>
      )}

      {/* Display Error */}
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-500 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default ExamResult;
