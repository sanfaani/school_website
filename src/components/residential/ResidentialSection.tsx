import Image from "next/image";
import residentialImg from "@/assets/residentialImg.png";

export default function ResidentialSection() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-[#ff3b3b]">Fazcollege</span> Residential Academy
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Take the leap into your future! Join Fazcollege today and become part
          of a community that nurtures success, innovation, and lasting
          connections.
        </p>
      </div>

      <div className="relative w-full aspect-[16/9] max-w-2xl mx-auto">
        <Image
          src={residentialImg}
          alt="Students at Levenmouth Residential Academy"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
