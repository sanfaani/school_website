import { useFormContext } from "react-hook-form";

const AddressDetails = () => {
  const { register } = useFormContext();

  return (
    <div className="border border-gray-300 rounded-md m-6">
      {/* Section Title */}
      <h2 className="text-lg font-semibold bg-gray-100 px-4 py-2">Student Address Details</h2>

      {/* Address Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Current Address Section */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">If Guardian Address Is Current Address</label>
          <label className="block text-gray-600 text-sm mb-1">Current Address</label>
          <textarea
            {...register("currentAddress")}
            rows={2}
            className="w-full h-20 px-2 border border-gray-300 rounded-md text-gray-700 resize-none"
          />
        </div>

        {/* Permanent Address Section */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">If Permanent Address Is Current Address</label>
          <label className="block text-gray-600 text-sm mb-1">Permanent Address</label>
          <textarea
            {...register("permanentAddress")}
            rows={2}
            className="w-full h-20 px-2 border border-gray-300 rounded-md text-gray-700 resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
