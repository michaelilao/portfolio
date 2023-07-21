"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
	experience: Experience;
};

export default function Experience({ experience }: Props) {
	const { title, startDate, endDate, company, skills, items } = experience;
	const [isOpen, setIsOpen] = useState(false);

	const onClickHandler = () => {
		const textSelection: string | undefined = window?.getSelection()?.toString();
		if (!textSelection?.length) setIsOpen((open) => !open);
	};

	const skillsContent = skills.map((s, index) => {
		return (
			<div key={s} className={`${index === 0 ? "ml-0" : ""} m-2 p-2 border rounded-lg border-gray font-bold text-teal`}>
				{s}
			</div>
		);
	});

	const itemsContent = items.map((item) => {
		return (
			<li key={item} className="text-md py-1">
				{item}
			</li>
		);
	});

	return (
		<div className={"my-4 m-auto lg:w-5/12 md:w-8/12 bg-light-grey rounded-lg drop-shadow transition [-webkit-tap-highlight-color:transparent] dark:border-slate-800/75 dark:bg-slate-800/75	dark:hover:bg-slate-800 print:p-0 " + (isOpen ? "border-slate-400" : "border-slate-200")} onClick={onClickHandler}>
			<div className="p-6">
				<div className="flex justify-between">
					<h1 className="font-bold text-lg py-1">{title}</h1>{" "}
					<button aria-label="Expand card" className="print:hidden ">
						<FaChevronDown className={"h-6 w-6 stroke-slate-400 transition duration-300 " + (isOpen ? "scale-y-[-1]" : "")} />
					</button>
				</div>
				<h5 className="py-1 font-normal">
					{startDate} &#8212; {endDate}
				</h5>
				<h5 className="font-normal">{company}</h5>
				<div className="flex flex-wrap">{skillsContent}</div>
			</div>
			<div className={"grid transition-all duration-300 ease-in-out print:block print:opacity-100 " + (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
				<div className="row-[1_/_span_2] overflow-hidden">
					<div className="p-6 pt-0">
						<ul className="list-disc pl-3">{itemsContent}</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
