"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/lib/galleryItems";

const GallerySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Link key={index} href={`/gallery/${item.slug}`} passHref>
              <div className="relative cursor-pointer hover:opacity-80 transition duration-300">
                <div className="h-56 w-full relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="bg-[#B0003A] text-white p-4 rounded-b-lg">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
