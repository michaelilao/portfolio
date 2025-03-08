import Link from "next/link";
export default function Nav() {
	return (
		<nav className="p-4 w-full flex justify-between border-light-grey font-light">
			<div className="m-y md:w-2/3">
				<Link className="text-lg hover:text-teal" href={"/"}>
					michaelilao
				</Link>
			</div>
			<div className="flex space-x-12 md:w-1/3 justify-end">
				<Link
					className="hover:text-teal"
					target="_blank"
					href="/docs/Michael_Ilao_Resume_2025.pdf"
					locale={false}
				>
					Resume
				</Link>
			</div>
		</nav>
	);
}
