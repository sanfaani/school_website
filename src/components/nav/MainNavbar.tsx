"use client";
import { useState } from "react";
import Link from "next/link";
import { MdPhone, MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Add padding to prevent content from hiding under navbar */}
      <div className="h-[160px] lg:h-[120px]"></div>

      {/* Navbar Container (Pushed below NewsTicker) */}
      <nav className="bg-white shadow-md fixed top-[65px] w-full z-[50]">
        {/* Top Section - Logo & Contact */}
        <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="School Logo" width={35} height={35} />
            <h1 className="font-bold text-lg text-[#ff5959]">
              LEVENMOUTH ACADEMY
            </h1>
          </div>

          {/* Contact & Login (Visible on all screens now) */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MdPhone className="text-[#ff5959] w-4 h-4" />
              <span className="font-semibold text-xs">89562423934</span>
            </div>
            <Link href="/login">
              <button className="bg-[#ff5959] text-white px-5 py-1.5 rounded-full text-xs font-semibold">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            {menuOpen ? (
              <MdClose
                className="text-[#ff5959] w-7 h-7 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <MdMenu
                className="text-[#ff5959] w-7 h-7 cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Bottom Section - Navigation Links */}
        <div className="border-t border-gray-200">
          <div className="container mx-auto px-6 lg:px-20">
            {/* Desktop Navigation - Items now fit the screen */}
            <div className="hidden lg:flex justify-center space-x-4 py-2 text-xs font-medium">
              <NavLinks />
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
              {/* Mobile Navigation Links */}
              <NavLinks mobile />
            </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

/* Navigation Links Component */
function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkStyles = "block py-1 px-2 text-black hover:bg-gray-100 text-[13px]";

  return (
    <div className={mobile ? "flex flex-col text-center" : "flex space-x-1"}>
      <Link href="/" className={linkStyles}>
        Home
      </Link>
      <Link href="/online-course" className={linkStyles}>
        Online Course
      </Link>
      <Link href="/online-admission" className={linkStyles}>
        Online Admission
      </Link>
      <Link href="/cbse-exam-result" className={linkStyles}>
        Cbse Exam Result
      </Link>
      <Link href="/exam-result" className={linkStyles}>
        Exam Result
      </Link>
      <Link href="/annual-calendar" className={linkStyles}>
        Annual Calendar
      </Link>
      <Link href="/about" className={linkStyles}>
        About Us
      </Link>
      <Link href="/academics" className={linkStyles}>
        Academics
      </Link>
      <Link href="/gallery" className={linkStyles}>
        Gallery
      </Link>
      <Link href="/events" className={linkStyles}>
        Events
      </Link>
      <Link href="/news" className={linkStyles}>
        News
      </Link>
      <Link href="/contact" className={linkStyles}>
        Contact
      </Link>
    </div>
  );
}
