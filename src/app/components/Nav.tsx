import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Nav() {
	return (
		<nav className="p-4 w-full flex justify-around border-b border-slate-600">
			<div className="flex-col m-y">
				<h1 className="text-lg m-y">michaelilao</h1>
			</div>
			<div className="flex-col">
				<div className="flex h-full justify-between text-3xl">
					<a target="_blank" className="text-white/90 hover:text-teal mx-1" href="https://github.com/michaelilao">
						<FaGithub className="" />
					</a>
					<a target="_blank" className="text-white/90 hover:text-teal mx-1" href="https://www.linkedin.com/in/ilaom-mcmaster/">
						<FaLinkedin />
					</a>
				</div>
			</div>
		</nav>
	);
}
