import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaRegThumbsUp } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  console.log(photo);

  return (
    <Card className="border">
      <div>
        <Image
          className="relative w-full aspect-square overflow-hidden rounded-md object-cover"
          src={photo.imageUrl}
          height={400}
          width={200}
          alt="photo.title"
          unoptimized
        />
        <Chip size="sm" className="absolute top-2 right-2">{photo.category}</Chip>
      </div>
      <div className="flex justify-between">
        <div className="text-purple-300 font-bold">{photo.title}</div>
        <div className="flex items-center gap-2">
          <FaRegThumbsUp />
          {photo.likes}
        </div>
        <div className="flex items-center gap-2">
          <FaDownload />
          {photo.downloads}
        </div>
      </div>
      <Link href={`/all-photos/${photo.id}`} >
        <Button variant="outline" className={'w-full'}>View</Button>
      </Link>
    </Card>
  );
};

export default PhotoCard;
