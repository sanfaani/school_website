"use client";
import {
  FaFacebookF,
  FaTwitter,
  // FaGoogle,
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
        <span>contact@domain.com</span>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-3">
        <span className="hidden md:block">Follow Us</span>
        
        <a href="https://wa.me/+2348108842769" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="cursor-pointer hover:text-gray-300" />
        </a>
        
        <a href="https://web.facebook.com/fazcollege/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="cursor-pointer hover:text-gray-300" />
        </a>
        
        <a href="https://x.com/fazcollege001" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="cursor-pointer hover:text-gray-300" />
        </a>
        
        {/* <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <FaGoogle className="cursor-pointer hover:text-gray-300" />
        </a> */}
        
        <a href="https://in.linkedin.com/sitepad?_l=en_US" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
        </a>
        
        <a href="https://www.instagram.com/fazinternationalcollege/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="cursor-pointer hover:text-gray-300" />
        </a>
        
        <a href="https://www.youtube.com/@fazcollege" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="cursor-pointer hover:text-gray-300" />
        </a>
      </div>
    </div>
  );
}
