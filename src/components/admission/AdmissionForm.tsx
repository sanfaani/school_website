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

// Define the schema
const admissionSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  guardianName: z.string().optional(),
  address: z.string().min(1, "Required"),
  previousSchool: z.string().optional(),
  documents: z.any().optional(), // Or use: z.instanceof(FileList).optional()
});

// Type for form data based on schema
type AdmissionFormData = z.infer<typeof admissionSchema>;

const AdmissionForm = () => {
  const methods = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit: SubmitHandler<AdmissionFormData> = async (data) => {
    try {
      await axios.post("/api/admission", data);
      alert("Application Submitted!");
    } catch (_error) {
      alert("Submission Failed");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-md shadow-md p-6">
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
