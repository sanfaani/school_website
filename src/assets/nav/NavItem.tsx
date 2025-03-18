// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import logo from "@/assets/logo.png";
// import { usePathname } from "next/navigation";

// export default function NavItem() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (isOpen && !(event.target as HTMLElement).closest(".menu-container")) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, [isOpen]);

//   // Close menu on link click
//   const handleLinkClick = () => setIsOpen(false);

//   return (
//     <nav className="w-full bg-[#ff5959] py- px-6 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image src={logo} alt="Logo" width={40} height={40} />
//           <span className="text-white font-bold text-lg">LEVENMOUTH ACADEMY</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6">
//           <Link
//             href="/"
//             className={`px-4 py-2  transition ${
//               pathname === "/" ? "bg-white text-[#FF0A0AAB]" : "text-white hover:bg-white hover:text-[#FF0A0AAB]"
//             }`}
//           >
//             Home
//           </Link>
//           {["About", "Admission", "Login", "Courses"].map((item) => (
//             <Link
//               key={item}
//               href={`/${item.toLowerCase().replace(" ", "-")}`}
//               className={`px-4 py-2 transition ${
//                 pathname === `/${item.toLowerCase().replace(" ", "-")}`
//                   ? "bg-white text-[#FF0A0AAB]"
//                   : "text-white hover:bg-white hover:text-[#FF0A0AAB]"
//               }`}
//             >
//               {item}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white focus:outline-none"
//         >
//           <Menu size={28} />
//         </button>

//         {/* Mobile Menu */}
//         <div
//           className={`menu-container fixed top-0 h-screen right-0 w-64 bg-[#ff5959] shadow-lg transform ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300 ease-in-out md:hidden`}
//         >
//           {/* Close Button */}
//           <div className="flex justify-end p-4">
//             <button onClick={() => setIsOpen(false)} className="text-white">
//               <X size={28} />
//             </button>
//           </div>

//           {/* Links */}
//           <div className="flex flex-col items-center gap-6 mt-2">
//             <Link
//               href="/"
//               onClick={handleLinkClick}
//               className={`text-lg w-full text-center py-1 transition ${
//                 pathname === "/" ? "bg-white text-[#FF0A0AAB]" : "text-white hover:bg-white hover:text-[#FF0A0AAB]"
//               }`}
//             >
//               Home
//             </Link>
//             {["About", "Admission", "Login", "Courses"].map((item) => (
//               <Link
//                 key={item}
//                 href={`/${item.toLowerCase().replace(" ", "-")}`}
//                 onClick={handleLinkClick}
//                 className={`text-lg w-full text-center py-1 transition ${
//                   pathname === `/${item.toLowerCase().replace(" ", "-")}`
//                     ? "bg-white text-[#FF0A0AAB]"
//                     : "text-white hover:bg-white hover:text-[#FF0A0AAB]"
//                 }`}
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
