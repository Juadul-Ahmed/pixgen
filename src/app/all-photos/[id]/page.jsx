import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("http://localhost:3000/data.json");
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link
        href="/all-photos"
        className="text-blue-500 hover:underline mb-6 inline-block"
      >
        <Button variant="outline" className={"m-4"}>
          ← Back to Gallery
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Side: Image Container */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
          <Image
                    className=" mx-auto aspect-ratio overflow-hidden rounded-md object-cover"
                    src={photo.imageUrl}
                    height={400}
                    width={200}
                    alt="photo.title"
                    unoptimized
                  />
        </div>

        {/* Right Side: Details */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {photo.title}
          </h1>

          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              {photo.prompt ||
                "No description provided for this AI generation."}
            </p>

            <div className="border-t pt-4">
              <span className="text-sm font-semibold text-gray-500 uppercase">
                Tags
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {photo.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                  >
                    #{tag}
                  </span>
                )) || <span className="text-gray-400">No tags</span>}
              </div>
            </div>

            <button className="mt-8 w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition">
              Download Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
