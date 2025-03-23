"use client";

import Image from "next/image";
import footerimg from "@/assets/fazhero.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdOutlineEmail,
  MdLocationOn,
  MdPhone,
  MdFeedback,
} from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative text-white pt-10 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={footerimg}
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          className="opacity-9"
        />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">➤ Home</li>
            <li className="hover:underline cursor-pointer">➤ Course</li>
            <li className="hover:underline cursor-pointer">➤ Events</li>
            <li className="hover:underline cursor-pointer">➤ Contact Us</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-3">
            <FaWhatsapp className="w-8 h-8 p-2 bg-gray-700 rounded hover:bg-gray-500 cursor-pointer" />
            <FaFacebookF className="w-8 h-8 p-2 bg-gray-700 rounded hover:bg-gray-500 cursor-pointer" />
            <FaTwitter className="w-8 h-8 p-2 bg-gray-700 rounded hover:bg-gray-500 cursor-pointer" />
            <FaGoogle className="w-8 h-8 p-2 bg-gray-700 rounded hover:bg-gray-500 cursor-pointer" />
            <FaLinkedinIn className="w-8 h-8 p-2 bg-gray-700 rounded hover:bg-gray-500 cursor-pointer" />
            <FaInstagram className="w-8 h-8 p-2 bg-gray-700 rounded hover:bg-gray-500 cursor-pointer" />
            <FaYoutube className="w-8 h-8 p-2 bg-gray-700 rounded hover:bg-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Feedback Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Feedback</h3>
          <div className="flex items-center space-x-2 text-lg cursor-pointer hover:text-gray-300">
            <MdFeedback className="w-6 h-6" />
            <span>Complain</span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="relative mt-8 border-t border-gray-500 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-left px-6 lg:px-20 gap-8">
        <div className="flex items-center space-x-3">
          <MdPhone className="w-6 h-6" />
          <div className="border-l-2 pl-6">
            <h4 className="font-semibold">Contact</h4>
            <p>+2348108842769</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <MdOutlineEmail className="w-6 h-6" />
          <div className="border-l-2 pl-6">
            <h4 className="font-semibold">Email Us</h4>
            <p>contact@domain.com</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <MdLocationOn className="w-6 h-6" />
          <div className="border-l-2 pl-6">
            <h4 className="font-semibold">Address</h4>
            <p>16, Bafon Street, Bankai</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative text-center bg-[#ff5959] py-3 mt-6">
        © Fazcollege 2025 All rights reserved
      </div>
    </footer>
  );
}
