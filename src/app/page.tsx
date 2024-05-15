import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import LaptopShowcase from "./components/LaptopShowcase";

export default async function Home() {
	const nova_images = [
		{
			source: "/images/nova/home.png",
			width: 3024,
			height: 1594,
			alt: "Nova Home Page",
		},
		{
			source: "/images/nova/category.png",
			width: 3024,
			height: 1594,
			alt: "Nova Category Page",
		},
		{
			source: "/images/nova/item.png",
			width: 3024,
			height: 1594,
			alt: "Nova Jewelleru Item Page",
		},
		{
			source: "/images/nova/memo.png",
			width: 3024,
			height: 1594,
			alt: "Nova Memo Page",
		},
	];

	const optimus_images = [
		{
			source: "/images/optimus/home.png",
			width: 3024,
			height: 1594,
			alt: "Optimus Home Page",
		},
		{
			source: "/images/optimus/staff.png",
			width: 3024,
			height: 1594,
			alt: "Optimus Staffing Page",
		},
		{
			source: "/images/optimus/faq.png",
			width: 3024,
			height: 1594,
			alt: "Optimus FAQ Page",
		},
	];

	return (
		<section>
			<div className="p-4 md:p-16 mx-auto">
				<h1 className="text-2xl md:text-5xl font-normal h-full">
					Hi, I'm <span className="text-teal">Michael Ilao</span>. I am a
					software engineer at Immigrate.AI.
					<div>I build web, native and cloud solutions.</div>
				</h1>
				<hr className="my-16" />
				<div>
					<div className="flex flex-wrap">
						<div className="w-full md:w-2/3">
							<LaptopShowcase images={nova_images} />
						</div>
						<div className="w-full md:w-1/3 text-justify order-last md:order-2">
							<h5 className="pb-4 text-xl w-full font-light">Nova Diamonds</h5>
							<p className="pb-2 font-light">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam enim culpa soluta similique, illum blanditiis mollitia,
								velit hic architecto placeat, corporis iure totam molestiae
								temporibus obcaecati sed corrupti nemo eius!
							</p>
							<p className="pb-2 font-light">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam enim culpa soluta similique, illum blanditiis mollitia,
								velit hic architecto placeat, corporis iure totam molestiae
								temporibus obcaecati sed corrupti nemo eius!
							</p>
							<p className="pb-2 font-light">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quisquam enim culpa soluta similique, illum blanditiis mollitia,
								velit hic architecto placeat, corporis iure totam molestiae
								temporibus obcaecati sed corrupti nemo eius!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
