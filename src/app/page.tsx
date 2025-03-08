import ProjectPreview from "./components/ProjectPreview";
import Projects from "../data/projects.json";
export default function Home() {
	const projects = Projects.projects;

	return (
		<section>
			<div className="p-4 md:p-16 xl:p-24 mx-auto">
				<h1 className="text-2xl md:text-5xl font-normal h-full text-center">
					I Build Apps
				</h1>
				<h3 className="mt-4 text-center">
					For small businesses accross industries
				</h3>
				<h2 className="my-4 md:mb-8 text-lg">
					Past client and personal projects
				</h2>
				<div className="flex flex-col gap-y-12 md:gap-y-24">
					{projects.map((p) => {
						return (
							<ProjectPreview
								mobile={p.mobile}
								background={p.background}
								images={p.images}
								techs={p.skills}
								title={p.title}
								description={p.description}
								logo={p?.logo}
								link={p.link}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
