import { useFormContext } from "react-hook-form";

const SchoolHistory = () => {
  const { register } = useFormContext();

  return (
    <div className="border border-gray-300 rounded-md m-6">
      {/* Section Title */}
      <h2 className="text-lg font-semibold bg-gray-100 px-4 py-2">Miscellaneous Details</h2>

      {/* Identification Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">National Identification Number</label>
          <input
            {...register("nationalID")}
            type="text"
            className="w-full h-10 px-2 border border-gray-300 rounded-md text-gray-700"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Local Identification Number</label>
          <input
            {...register("localID")}
            type="text"
            className="w-full h-10 px-2 border border-gray-300 rounded-md text-gray-700"
          />
        </div>
      </div>

      {/* Previous School Details */}
      <div className="p-4">
        <label className="block text-gray-700 font-medium mb-1">Previous School Details</label>
        <textarea
          {...register("previousSchool")}
          rows={2}
          className="w-full h-20 px-2 border border-gray-300 rounded-md text-gray-700 resize-none"
        />
      </div>
    </div>
  );
};

export default SchoolHistory;
