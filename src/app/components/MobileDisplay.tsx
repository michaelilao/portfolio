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
		<div>
			<div
				className="overflow-hidden relative"
				style={{ width: images[0].width, height: images[0].height }}
			>
				<div
					className="flex transition-transform duration-700 ease-in-out"
					style={{ transform: `translateX(-${currentImage * 100}%)` }}
				>
					{images.map((image) => {
						return (
							<Image
								className="m-ai rounded-xl "
								src={image.source}
								alt={image.alt}
								width={image.width} // original width of the image
								height={image.height} // original height of the image
							/>
						);
					})}
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
		</div>
	);
}
