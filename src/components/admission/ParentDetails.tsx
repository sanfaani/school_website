import { useFormContext } from "react-hook-form";

const ParentDetails = () => {
  const { register } = useFormContext();

  return (
    <div className="border border-gray-300 rounded-md m-6">
      <h2 className="text-lg font-semibold bg-gray-100 px-4 py-2">Parent Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Father's Name */}
        <input
          {...register("fatherName")}
          placeholder="Father's Name"
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
        />

        {/* Mother's Name */}
        <input
          {...register("motherName")}
          placeholder="Mother's Name"
          className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
        />
      </div>
    </div>
  );
};

export default ParentDetails;
