import FormInstructions from "@/components/admission/FormInstructions";
import AdmissionForm from "@/components/admission/AdmissionForm";

export default function AdmissionPage() {
  return (
    <div className="max-w-6xl mx-auto pt-30 space-y-6 bg-white">
      
      <FormInstructions />
      <AdmissionForm />
    </div>
  );
}
