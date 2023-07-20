import experince from "@/data/experience.json";
import Experience from "./Experience";

import { getGoogleDriveData } from "@/lib/googleDrive";
import { htmlToExperiences } from "@/lib/convertDocx";

export default async function ExperienceList() {
	const buffer: Buffer = await getGoogleDriveData();
	const experiences: Experience[] = await htmlToExperiences(buffer);

	const content = experiences.map((e) => {
		return <Experience key={e.id} experience={e} />;
	});

	return <div className="py-12 my-2">{content}</div>;
}
