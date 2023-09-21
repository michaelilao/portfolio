import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import Experience from "@/app/components/Experience";

import { getGoogleDriveData } from "@/lib/googleDrive";
import { htmlToExperiences } from "@/lib/convertDocx";
export default async function Home() {
	const buffer: Buffer = await getGoogleDriveData();
	let experiences: Experience[];
	experiences = await htmlToExperiences(buffer);

	return (
		<section>
			<div id="aboutme" className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:py-16 lg:px-8">
				<div className="lg:flex px-8 md:px-0 justify-center">
					<div className="order-first lg:order-last py-4 min-w-max  mx-4">
						<Image unoptimized={false} className="border-4 border-black drop-shadow-xl shadow-black rounded-full mx-auto mt-8" src="/images/profilepic.jpg" width={250} height={250} alt="Michael Ilao" priority />
					</div>
					<div className="my-auto py-4 lg:max-w-md mx-4">
						<h1 className="text-4xl font-bold h-full">
							hi, i'm <span className="text-teal">michael ilao</span>
						</h1>
						<p className="mt-4">
							Welcome to my site, I am a full stack developer based out of <span>Toronto, ON</span>. Currently am working freelance and contracts building web-based solutions using <span className="text-teal whitespace-pre ">React.js</span>, <span className="text-teal whitespace-pre ">Next.js</span>,{" "}
							<span className="text-teal whitespace-pre ">Express.js</span> and <span className="text-teal whitespace-pre ">MySQL</span>. If you're looking to build a project, message me on one of my socials below!
						</p>
						<div className="mt-4">
							<div className="flex h-full justify-start text-3xl">
								<h2 className="text-lg text-teal">let's connect</h2>
								<FaArrowRight className="ml-1 mr-4 text-xl my-auto" />
								<a target="_blank" className="text-white/90 hover:text-teal mr-2" href="https://github.com/michaelilao">
									<FaGithub />
								</a>
								<a target="_blank" className="text-white/90 hover:text-teal mr-2" href="https://www.linkedin.com/in/ilaom-mcmaster/">
									<FaLinkedin />
								</a>
								<a target="_blank" className="text-white/90 hover:text-teal mr-2" href="mailto:ilaohmichael@gmail.com">
									<FaEnvelope />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="experience" className="p-4">
				<h2 className="text-center text-teal font-bold text-2xl">Experience</h2>
				{experiences.map((e) => {
					return <Experience key={e.id} experience={e} />;
				})}
			</div>
		</section>
	);
}
