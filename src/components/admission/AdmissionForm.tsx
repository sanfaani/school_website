"use client";

import { useForm, FormProvider } from "react-hook-form";
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

const admissionSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  guardianName: z.string().optional(),
  address: z.string().min(1, "Required"),
  previousSchool: z.string().optional(),
  documents: z.any().optional(),
});

const AdmissionForm = () => {
  const methods = useForm({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.post("/api/admission", data);
      alert("Application Submitted!");
    } catch (error) {
      alert("Submission Failed");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-md shadow-md">
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
