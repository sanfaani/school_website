import { z } from "zod";

export const admissionSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  gender: z.enum(["Male", "Female"]),
  dateOfBirth: z.string(),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  guardianName: z.string().min(2, "Guardian name is required"),
  guardianPhone: z.string().min(10, "Guardian phone is required"),
  address: z.string().min(5, "Address is required"),
  previousSchool: z.string().optional(),
  uploadedDocuments: z.array(z.any()).optional(),
});

export type AdmissionFormData = z.infer<typeof admissionSchema>;
