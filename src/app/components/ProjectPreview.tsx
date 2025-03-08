import Pill from "./Pill";
import MobileDisplay from "./MobileDisplay";
import LaptopDisplay from "./LaptopDisplay";
import Image from "next/image";

type Props = {
	images: { source: string; width: number; height: number; alt: string }[];
	mobile?: boolean;
	background: string;
	techs: string[];
	description: string;
	title: string;
	link?: string;
	logo?: string;
};

export default function ProjectPreview({
	images,
	techs,
	description,
	title,
	background,
	mobile = false,
	link,
	logo,
}: Props) {
	if (mobile) {
		return (
			<div
				style={{
					background: background,
				}}
				className="overflow-hidden rounded-lg"
			>
				<div className="w-11/12 md:w-5/6 mx-auto md:flex md:flex-row-reverse justify-end gap-8 mt-16">
					<div className="my-auto">
						<div>
							<div className="flex justify-start gap-8">
								<div>
									<div className="font-extrabold text-5xl text-white">
										{title}
									</div>
									<div className="font-light  text-white mt-1">
										{description}
									</div>
								</div>
								<div className="">
									<a href={link} target="_blank">
										<Image
											className="rounded-xl "
											src={logo as string}
											alt="logo"
											width={75}
											height={75}
										/>
									</a>
								</div>
							</div>
							<div id="tech-list" className="flex flex-wrap gap-2 mt-2">
								{techs.map((tech) => {
									return <Pill title={tech} key={tech} />;
								})}
							</div>
						</div>
					</div>
					<div className="md:translate-y-24 mx-auto">
						<div className="flex justify-center">
							<MobileDisplay images={images} />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			style={{
				background: background,
			}}
			className="overflow-hidden rounded-lg"
		>
			<div className="mt-16 w-11/12 md:w-5/6 mx-auto">
				<div className="font-extrabold text-5xl text-white">{title}</div>
				<div className="font-light  text-white">{description}</div>
				<div id="tech-list" className="flex flex-wrap gap-2 mt-2">
					{techs.map((tech) => {
						return <Pill title={tech} key={tech} />;
					})}
				</div>
			</div>

			<div className="w-11/12 md:w-5/6 mx-auto translate-y-4 md:translate-y-10">
				<LaptopDisplay images={images} />
			</div>
		</div>
	);
}
