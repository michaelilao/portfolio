import Image from "next/image";
import ExperienceList from "./components/ExperienceList";
export default function Home() {
	return (
		<div className="p-4 w-full">
			<section id="profilepicture" className="w-full mx-auto">
				<Image unoptimized={true} className="border-4 border-black drop-shadow-xl shadow-black rounded-full mx-auto mt-8" src="/images/profilepic.jpg" width={250} height={250} alt="Michael Ilao" priority />
			</section>
			<section id="headings">
				<h1 className="pt-4 font-bold text-center text-3xl">Michael Ilao</h1>
				<h4 className="py-3 text-center font-thin text-2xl">Full Stack Developer</h4>
				<h4 className="text-center font-normal text-lg text-teal">React.js, Node.js, Python, SQL</h4>
			</section>
			<section id="experience">
				<ExperienceList />
			</section>
		</div>
	);
}
