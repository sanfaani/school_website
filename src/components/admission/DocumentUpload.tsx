import { useFormContext, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

const DocumentUpload = () => {
  const { control, setValue, watch } = useFormContext();
  const files = watch("documents");

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue("documents", acceptedFiles);
    },
    [setValue]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/zip": [".zip"],
      "application/msword": [".doc", ".docx"],
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    multiple: false,
  });

  return (
    <div className="border border-gray-300 rounded-md p-4">
      {/* Section Title */}
      <h2 className="text-lg font-semibold bg-gray-100 px-4 py-2">Upload Documents</h2>

      {/* File Upload */}
      <div className="p-4">
        <label className="block text-gray-700 font-medium">
          Documents{" "}
          <span className="text-sm text-gray-500">
            (To Upload Multiple Documents, Compress Them Into A Single File Then Upload It)
          </span>
        </label>

        <Controller
          name="documents"
          control={control}
          render={() => (
            <div
              {...getRootProps()}
              className="border border-gray-300 rounded-md p-3 mt-2 flex items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <input {...getInputProps()} />
              <p className="text-gray-600 text-sm">📁 Drag and drop a file here or click</p>
            </div>
          )}
        />

        {/* Show uploaded file name */}
        {files && files.length > 0 && (
          <p className="mt-2 text-sm text-gray-700">Uploaded: {files[0].name}</p>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;
