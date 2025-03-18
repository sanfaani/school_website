// "use client";

// import { useEffect, useRef } from "react";

// const newsItems = [
//   { date: "20 March 2025", text: "Date sheet Final Exam Nursery to Sr.Kg" },
//   { date: "12 March 2025", text: "Holi Celebration Holiday" },
// ];

// export default function NewsTicker() {
//   const tickerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (tickerRef.current) {
//       const ticker = tickerRef.current;
//       let startPosition = ticker.scrollWidth;

//       const animate = () => {
//         startPosition -= 1; // Controls speed
//         if (startPosition < -ticker.scrollWidth / 2) {
//           startPosition = ticker.scrollWidth;
//         }
//         ticker.style.transform = `translateX(${startPosition}px)`;
//         requestAnimationFrame(animate);
//       };

//       animate();
//     }
//   }, []);

//   return (
//     <div className="w-full bg-[#1a253a] text-white text-sm overflow-hidden">
//       <div className="flex items-center pl-10 md:pl-40">
//         <div className="bg-[#ff5959] px-3 py-1 text-white font-semibold inline-block whitespace-nowrap">
//           Latest News
//         </div>
//         <div className="flex overflow-hidden w-full">
//           <div ref={tickerRef} className="flex whitespace-nowrap">
//             {newsItems.map((item, index) => (
//               <span key={index} className="ml-6">
//                 <span className="text-yellow-400 font-bold">{item.date}</span>{" "}
//                 {item.text}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
