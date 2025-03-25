import { useFormContext } from "react-hook-form";
import { useState } from "react";

const StudentDetails = () => {
  const { register, setValue } = useFormContext();
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      setValue("studentPhoto", file);
    }
  };

  return (
    <div className="border border-gray-300 rounded-md m-6">
      <h2 className="text-lg font-semibold bg-gray-100 px-4 py-2">Basic Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Class Selection */}
        <select
          {...register("class", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
        >
          <option value="">Select Class *</option>
          <option value="Nursery">Nursery</option>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
        </select>

        {/* First Name */}
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name *"
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Last Name */}
        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Gender Selection */}
        <select
          {...register("gender", { required: true })}
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
        >
          <option value="">Select Gender *</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Date of Birth */}
        <input
          {...register("dob", { required: true })}
          type="date"
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Mobile Number */}
        <input
          {...register("phone")}
          type="tel"
          placeholder="Mobile Number"
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Email */}
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email *"
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Student Photo Upload (Same Size as Inputs, Beside Email) */}
        <div
          className="w-full h-12 border border-gray-300 rounded-md flex items-center justify-center text-center text-gray-600 
          text-sm cursor-pointer hover:bg-gray-100"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById("studentPhotoInput")?.click()}
        >
          <label className="text-gray-600 text-sm">
            {fileName ? fileName : "Drag and drop a file here or click to upload"}
          </label>
          <input
            id="studentPhotoInput"
            type="file"
            {...register("studentPhoto", { required: true })}
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setFileName(e.target.files[0].name);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
