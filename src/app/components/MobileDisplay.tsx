"use client";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
type Props = {
  images: { source: string; width: number; height: number; alt: string }[];
};

export default function MobileDisplay({ images }: Props) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };
  return (
    <div className="md:w-1/4 max-h-screen aspect-mobile rounded-xl mx-6 border flex relative border-black z-10 bg-beige">
      <div className="m-1 border border-black rounded-xl overflow-hidden">
        {/* <div className="h-1/40 w-1/4 bg-black rounded-full absolute z-10 top-3 m-auto translate-x-1/2 right-1/2" /> */}

        <div className="h-1/10 w-1/20  border-black  border-r-2 rounded-sm absolute top-1/3 m-auto -right-0.5" />
        <div className="h-1/12 w-1/20  border-black  border-l-2 rounded-sm absolute top-1/4 m-auto -left-0.5" />
        <div className="h-1/12 w-1/20 border-black  border-l-2 rounded-sm absolute top-1/3 m-auto -left-0.5" />

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => {
            return (
              <div className="flex-none w-full" key={image.source}>
                <Image
                  className="m-ai rounded-xl "
                  src={image.source}
                  alt={image.alt}
                  width={image.width} // original width of the image
                  height={image.height} // original height of the image
                />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="absolute left-3 top-1/2 p-3 bg-black bg-opacity-25 rounded-full hover:bg-opacity-50"
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-3 top-1/2 p-3 bg-black bg-opacity-25 rounded-full hover:bg-opacity-50"
        onClick={handleNext}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
