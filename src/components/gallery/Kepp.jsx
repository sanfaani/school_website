// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { galleryItems } from "@/lib/galleryItems";

// export default function GalleryDetails({ params }: { params: { slug: string } }) {
//   const galleryItem = galleryItems.find((item) => item.slug === params.slug);

//   if (!galleryItem) {
//     return notFound();
//   }

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-6">
//         <h1 className="text-3xl font-bold mb-4">{galleryItem.title}</h1>
//         <div className="relative h-96 w-full mb-6">
//           <Image
//             src={galleryItem.image}
//             alt={galleryItem.title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>
//         <p className="text-lg">{galleryItem.description}</p>
//       </div>
//     </section>
//   );
// }
