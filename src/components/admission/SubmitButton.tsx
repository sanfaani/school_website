import { useFormContext } from "react-hook-form";

const SubmitButton = () => {
  const { formState } = useFormContext();

  return (
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded-md ml-6 mb-10"
      disabled={formState.isSubmitting}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
