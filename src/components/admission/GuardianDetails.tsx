import { useFormContext } from "react-hook-form";
import { useState } from "react";

const GuardianDetails = () => {
  const { register, setValue } = useFormContext();
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      setValue("guardianPhoto", file);
    }
  };

  return (
    <div className="border border-gray-300 rounded-md m-6">
      {/* Section Title */}
      <h2 className="text-lg font-semibold bg-gray-100 px-4 py-2">Guardian Details</h2>

      {/* Guardian Relationship Selection */}
      <div className="p-4">
        <label className="block text-gray-700 font-medium mb-2">If Guardian Is *</label>
        <div className="flex gap-4 text-gray-700">
          <label className="flex items-center gap-2">
            <input type="radio" {...register("guardianIs")} value="Father" className="accent-blue-500" />
            Father
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" {...register("guardianIs")} value="Mother" className="accent-blue-500" />
            Mother
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" {...register("guardianIs")} value="Other" className="accent-blue-500" />
            Other
          </label>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {/* Guardian Name */}
        <input
          {...register("guardianName", { required: true })}
          placeholder="Guardian Name *"
          className="w-full h-10 px-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Guardian Relation */}
        <input
          {...register("guardianRelation", { required: true })}
          placeholder="Guardian Relation *"
          className="w-full h-10 px-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Guardian Email */}
        <input
          {...register("guardianEmail")}
          type="email"
          placeholder="Guardian Email"
          className="w-full h-10 px-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Guardian Photo Upload */}
        <div
          className="w-full h-10 border border-gray-300 px-2 flex items-center justify-center rounded-md text-gray-600 
          text-sm cursor-pointer hover:bg-gray-100"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById("guardianPhotoInput")?.click()}
        >
          <label className="text-gray-600 text-sm">
            {fileName ? fileName : "Drag & drop a file or click to upload"}
          </label>
          <input
            id="guardianPhotoInput"
            type="file"
            {...register("guardianPhoto")}
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setFileName(e.target.files[0].name);
              }
            }}
          />
        </div>

        {/* Guardian Phone */}
        <input
          {...register("guardianPhone")}
          placeholder="Guardian Phone"
          className="w-full h-10 px-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Guardian Occupation */}
        <input
          {...register("guardianOccupation")}
          placeholder="Guardian Occupation"
          className="w-full h-10 px-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Guardian Address (Same Height as Other Fields) */}
        <textarea
          {...register("guardianAddress")}
          placeholder="Guardian Address"
          rows={1}
          className="w-full h-10 px-2 border border-gray-300 rounded-md text-gray-700 resize-none"
        />
      </div>
    </div>
  );
};

export default GuardianDetails;
