import mammoth from "mammoth";
const html = `<h1><strong>Michael Ilao</strong></h1><p><a href="https://www.linkedin.com/in/ilaom-mcmaster/">LinkedIn</a> | <a href="https://github.com/michaelilao">GitHub</a> | +1-647-927-3012 | <a href="mailto:ilaom@mcmaster.ca">ilao</a>hmichael@gmail.com </p><p><strong>EDUCATION</strong></p><p><strong>McMaster University   Hamilton, ON</strong></p><p><em>B.Eng. in Software Engineering  2017- 2023</em></p><ul><li>Dean’s List 2018-2023, Top 10 in Impact Engineering Showcase 2018.</li></ul><p><strong>WORK EXPERIENCE</strong></p><p><strong>Independent Software Contractor</strong> <strong>Toronto, ON </strong></p><p><em>Full Stack Developer       2021 - Present</em></p><ul><li>Developed a <strong>React</strong> Web App to manage a retail company’s internal inventory and sales system, with configuration to support multiple users and companies. </li><li>Collaborated with backend developers to create an API for integration of frontend and backend</li><li>Developed <strong>Express.js</strong> backend with <strong>SQL DB</strong> and  hosted on IIS Servers.</li><li>Integrated 3rd party API’s for an RFID system to keep track of physical inventory and live pricing API to update prices daily.</li><li>Delivered updates and features on schedule, and debugged production issues to maintain 24 hour uptime.</li></ul><p><strong>MHIRJ (Co-op)         Toronto, ON </strong></p><p><em>Application Developer         2021 – 2022</em></p><ul><li>Managed <strong>Azure</strong> Services and DevOps Repos, created and deployed app services using <strong>Docker</strong> and Azure Pipelines.</li><li>Architected, designed, and developed internal SPA <strong>React-Redux</strong> and <strong>Python Flask</strong> web tools within a team of 4 developers.</li><li>Overhauled existing tools to optimize <strong>SQL </strong>queries by 80% on tables with 2M+ records.</li><li>Lead migration of on-premises services to <strong>Azure</strong> environment with network specialists.</li><li>Integrated <strong>Okta</strong> and SSO into<strong> .NET</strong> and<strong> React/Flask</strong> apps.</li></ul><p><strong>Todotoronto (Internship)   Toronto, ON </strong></p><p><em>Full Stack Developer       2020</em></p><ul><li>Developed an E-commerce web app using <strong>React-Redux</strong>, using an <strong>Express.js </strong>RESTful API backend and <strong>MySQL </strong>database.</li><li>Collaborated with a team of 5 developers using <strong>GitLab </strong>agile boards for managing sprints and software development.</li><li>Implemented CI/CD pipelines for production and testing environments.</li><li>Implemented payment solution using <strong>Stripe.</strong>js </li><li>Collaborated with design and marketing teams to create new features and UI’s using <strong>Figma</strong>.</li><li>Successfully launched <a href="https://www.whatstudu.com/">whatstudu.com</a> beta to over 1000 users.</li></ul><p><strong>CGI (Co-op)     Toronto, ON</strong></p><p><em>Project Control Officer     2019 – 2020</em></p><ul><li>Utilized <strong>Jira</strong> for progress tracking of on-going projects and simplified IT ticket submission by 50% by creating an automated process using <strong>Python</strong> and <strong>Selenium</strong>.</li></ul><p><strong>PROJECTS</strong></p><p><strong>AI Board Game - </strong><a href="https://github.com/michaelilao/aiboardgame"><strong>GitHub</strong></a><strong>        McMaster University</strong></p><p><em>Software Engineering Capstone  2022 – 2023</em></p><ul><li>Lead a team of 4 engineering students using software development practices to design, develop, and test a multi-agent reinforcement learning system capable of simulating board games to find unfair strategies and bugs in the game rules, in order to expedite the testing process of the board game.</li><li>Developed a system using <strong>Python </strong>to simulate 100K+ simulations of a board game to analyze winning strategies and common patterns and trained on  <strong>Digital Research Alliance of Canada </strong>computer cluster.</li><li>Used <strong>Tianshou, gymnasium, </strong>and <strong>pettingzoo </strong>to implement multi-agent reinforcement learning to simulate multiple AI players per game.</li><li>Created a visualizer to analyze 100+ simulations simultaneously using <strong>React.</strong></li></ul><p><strong>SKILLS</strong></p><p><strong>Languages:</strong> JavaScript, Python, SQL, Java</p><p><strong>Tools and Frameworks: </strong>React, Redux, Node.js, Express, Selenium, Flask, MySQL, MSSQL, GitHub<strong>, </strong>GitLab, Azure DevOps, Azure Services, Docker, </p>`;

const locations = ["Toronto, ON", "Hamilton, ON"];
export const htmlToExperiences = async (buffer: Buffer) => {
	const { value } = await mammoth.convertToHtml({ buffer: buffer });
	let experienceRaw = value.split("<p><strong>WORK EXPERIENCE</strong></p>")[1];
	experienceRaw = experienceRaw.split("<p><strong>PROJECTS</strong></p>")[0];

	const experience = experienceRaw.split("<p><strong>");
	const experienceList: Experience[] = experience.map((entry) => {
		const company = entry.split("</strong></p>")[0].split("\t")[0].split("</")[0];

		// Length of <p><em> is 7
		const secondHeadingRaw = entry.substring(entry.indexOf("<p><em>") + 7, entry.lastIndexOf("</em></p>"));

		const title = secondHeadingRaw.substring(0, secondHeadingRaw.indexOf("20"));
		const dateRaw = secondHeadingRaw.substring(secondHeadingRaw.indexOf("20"));
		const dates = dateRaw.split(/[-\u2013]/);
		let startDate;
		let endDate;
		if (dates.length !== 2) {
			startDate = dates[0];
			endDate = dates[0];
		} else {
			startDate = dates[0];
			endDate = dates[1];
		}

		const itemsRaw = entry.split("<li>");
		const items: string[] = [];
		const skills: string[] = [];

		var regex = /<strong>(.+?)<\/strong>/g;

		itemsRaw.forEach((value, index) => {
			if (index !== 0) {
				console.log(value);
				value.match(regex)?.forEach((skillRaw) => {
					const skill = skillRaw.replace(/(<([^>]+)>)/gi, "").trim();
					skills.push(skill);
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
			skills: skills,
			items: items,
		};
		experienceEntry.id = experienceEntry.title + " " + experienceEntry.company;

		return experienceEntry;
	});

	return experienceList.filter((experience) => experience.title);
};
