"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function TopBar() {
  return (
    <div className="bg-[#ff5959] text-white flex justify-between items-center px-4 lg:px-20 py-2 text-sm w-full fixed top-[35px] z-[55]">
      {/* Email Section */}
      <div className="flex items-center space-x-2">
        <MdEmail />
        <span>mountcarmelmailtest@gmail.com</span>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-3">
        <span className="hidden md:block">Follow Us</span>
        <FaWhatsapp className="cursor-pointer hover:text-gray-300" />
        <FaFacebookF className="cursor-pointer hover:text-gray-300" />
        <FaTwitter className="cursor-pointer hover:text-gray-300" />
        <FaGoogle className="cursor-pointer hover:text-gray-300" />
        <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
        <FaInstagram className="cursor-pointer hover:text-gray-300" />
        <FaYoutube className="cursor-pointer hover:text-gray-300" />
      </div>
    </div>
  );
}
