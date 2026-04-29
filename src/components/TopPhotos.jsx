import React from "react";
import PhotoCard from "./PhotoCard";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

const TopPhotos = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 9);
  console.log(topPhotos);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mt-5 text-center text-purple-400">
        Top image Generation
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link href={"/all-photos"}>
          <Button>
            View All <FaLongArrowAltRight />
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default TopPhotos;
