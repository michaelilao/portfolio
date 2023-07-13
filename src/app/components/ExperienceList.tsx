import experince from "@/data/experience.json";
import Experience from "./Experience";
export default function ExperienceList() {
	const experiences: Experience[] = experince.experiences;

	const content = experiences.map((e) => {
		return <Experience key={e.id} experience={e} />;
	});

	return <div className="py-12 my-2">{content}</div>;
}
