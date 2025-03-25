const FormInstructions = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left mb-5">
        <div>
          <h1 className="text-2xl font-bold">Online Admission</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:mt-0">
          <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800">
            Check Your Form Status
          </button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800">
            Download Application Form
          </button>
        </div>
      </div>

      <div className=" border border-gray-300 rounded-md ">
        <h2 className="text-xl font-semibold mb-2 bg-gray-100 px-4 py-2">Instructions</h2>
        <p className="text-sm text-gray-700 p-4">
          General Instruction:- These instructions pertain to online application
          for admission to Mount Carmel School for the academic year 2024-2025.
          In the remainder of these instructions, Mount Carmel School refers to
          the institution.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1 p-4">
          <li>
            To fill the online admission form, <strong>Basic Details</strong>{" "}
            like (Class, First Name, Last Name, Gender, Date of Birth, Mobile
            Number, Email) etc.
          </li>
          <li>
            Complete the admission form, upload necessary documents, and click
            on the <strong>Submit</strong> button.
          </li>
          <li>
            After submission, you will be redirected to the{" "}
            <strong>Online Admission Review Details</strong> page, where you can
            verify your previously entered details.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FormInstructions;
