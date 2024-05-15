"use client";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
type Props = {
	images: { source: string; width: number; height: number; alt: string }[];
};

export default function LaptopShowcase({ images }: Props) {
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
			<div className="aspect-video rounded-t-xl mx-6 border border-b-0 flex relative border-black">
				<div className="mx-4 my-auto border border-black rounded-xl overflow-hidden">
					<div
						className="flex transition-transform duration-700 ease-in-out"
						style={{ transform: `translateX(-${currentImage * 100}%)` }}
					>
						{images.map((image, index) => {
							return (
								<div className="flex-none w-full" key={image.source}>
									<Image
										className="m-ai rounded-xl object-cover"
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
			<div className="border h-5 rounded-b-xl flex border-black">
				<div className="h-2 w-1/12 mx-auto rounded-b-xl bg-grey "></div>
			</div>
		</div>
	);
}
