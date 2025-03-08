"use client";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
type Props = {
	images: { source: string; width: number; height: number; alt: string }[];
};

export default function LaptopDisplay({ images }: Props) {
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
		<>
			<div className="flex gap-1 bg-[#f6f6f7] p-4 rounded-t-lg">
				<div
					className="h-3 w-3 rounded-full"
					style={{ backgroundColor: "#e85d4f" }}
				/>
				<div
					className="h-3 w-3 rounded-full"
					style={{ backgroundColor: "#fdbe3f" }}
				/>
				<div
					className="h-3 w-3 rounded-full"
					style={{ backgroundColor: "#30c948" }}
				/>
			</div>
			<div className="relative overflow-hidden">
				<button
					className="absolute left-3 top-1/2 p-3 bg-black bg-opacity-25 rounded-full hover:bg-opacity-50 z-30"
					onClick={handlePrev}
				>
					<FaChevronLeft />
				</button>
				<button
					className="absolute right-3 top-1/2 p-3 bg-black bg-opacity-25 rounded-full hover:bg-opacity-50 z-30"
					onClick={handleNext}
				>
					<FaChevronRight />
				</button>
				<div
					className="flex transition-transform duration-700 ease-in-out "
					style={{ transform: `translateX(-${currentImage * 100}%)` }}
				>
					{images.map((image) => {
						return (
							<Image
								key={image.source}
								src={image.source}
								alt={image.alt}
								width={image.width} // original width of the image
								height={image.height} // original height of the image
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
