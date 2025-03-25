"use client";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import * as z from "zod";
import StudentDetails from "./StudentDetails";
import ParentDetails from "./ParentDetails";
import GuardianDetails from "./GuardianDetails";
import AddressDetails from "./AddressDetails";
import SchoolHistory from "./SchoolHistory";
import DocumentUpload from "./DocumentUpload";
import SubmitButton from "./SubmitButton";

// Define the validation schema
const admissionSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  guardianName: z.string().optional(),
  address: z.string().min(1, "Required"),
  previousSchool: z.string().optional(),
  documents: z.any().optional(), // You can change this to `z.instanceof(FileList).optional()` for stricter validation
});

// TypeScript type for the form data
type AdmissionFormData = z.infer<typeof admissionSchema>;

const AdmissionForm = () => {
  // Initialize react-hook-form with Zod validation
  const methods = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  });

  // Submit function
  const onSubmit: SubmitHandler<AdmissionFormData> = async (data) => {
    try {
      await axios.post("/api/admission", data);
      alert("Application Submitted!");
    } catch {
      alert("Submission Failed");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-6 bg-white rounded-md shadow-md p-6"
      >
        <StudentDetails />
        <ParentDetails />
        <GuardianDetails />
        <AddressDetails />
        <SchoolHistory />
        <DocumentUpload />
        <SubmitButton />
      </form>
    </FormProvider>
  );
};

export default AdmissionForm;
