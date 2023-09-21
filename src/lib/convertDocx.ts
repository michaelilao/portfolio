import mammoth from "mammoth";

export const htmlToExperiences = async (buffer: Buffer) => {
	const { value } = await mammoth.convertToHtml({ buffer: buffer });
	let experienceRaw = value.split("<p><strong>WORK EXPERIENCE</strong></p>")[1];
	experienceRaw = experienceRaw.split("<p><strong>PROJECTS</strong></p>")[0];

	const experience = experienceRaw.split("<p><strong>");
	const experienceList: Experience[] = experience.map((entry) => {
		const company = entry.split("</strong></p>")[0].split("\t")[0].split("</")[0];
		// Length of <p><em> is 7
		const secondHeadingRaw = entry.substring(entry.indexOf("<p><em>") + 7, entry.lastIndexOf("</em></p>"));

		const title = secondHeadingRaw.substring(0, secondHeadingRaw.indexOf("\t"));

		const dateRaw = secondHeadingRaw.substring(secondHeadingRaw.indexOf("\t"));

		const dates = dateRaw.split(/[-\u2013]/);
		let startDate;
		let endDate;
		if (dates.length !== 2) {
			startDate = dates[0];
			endDate = "";
		} else {
			startDate = dates[0];
			endDate = dates[1];
		}

		const itemsRaw = entry.split("<li>");
		const items: string[] = [];
		const skills = new Set<string>();

		var regex = /<strong>(.+?)<\/strong>/g;

		itemsRaw.forEach((value, index) => {
			if (index !== 0) {
				value.match(regex)?.forEach((skillRaw) => {
					const skill = skillRaw.replace(/(<([^>]+)>)/gi, "").trim();
					if (skill.length > 0) skills.add(skill);
				});
				items.push(value.replace(/(<([^>]+)>)/gi, ""));
			}
		});
		const experienceEntry: Experience = {
			id: "",
			title: title.trim(),
			company: company.trim(),
			startDate: startDate.trim(),
			endDate: endDate.trim(),
			skills: Array.from(skills),
			items: items,
		};
		experienceEntry.id = experienceEntry.title + " " + experienceEntry.company;

		return experienceEntry;
	});

	return experienceList.filter((experience) => experience.title);
};
