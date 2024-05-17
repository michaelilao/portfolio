import { FaGlobe } from "react-icons/fa";
import Pill from "./Pill";
import LaptopDisplay from "./LaptopDisplay";
import MobileDisplay from "./MobileDisplay";
type Props = {
  images: { source: string; width: number; height: number; alt: string }[];
  technologies: string[];
  description: string;
  alternate: boolean;
  title: string;
  device: "web" | "mobile";
  link?: string;
};

export default function ProjectShowCase({
  images,
  technologies,
  description,
  alternate,
  title,
  device,
  link,
}: Props) {
  const generateDescriptionClassNames = () => {
    let classes = "";
    if (alternate) {
      classes = classes + "md:order-2 ";
    }
    if (device === "web") {
      classes = classes + "md:w-1/3 ";
    }
    if (device === "mobile") {
      classes = classes + "md:w-2/3 ";
    }
    return classes;
  };

  return (
    <div className="flex flex-wrap">
      {device === "web" ? <LaptopDisplay images={images} /> : null}
      {device === "mobile" ? <MobileDisplay images={images} /> : null}

      <div
        className={`w-full text-justify order-first pb-4 ${generateDescriptionClassNames()}`}
      >
        <div className="flex pb-4">
          <h5 className="text-xl font-normal">{title}</h5>
          {link ? (
            <a
              target="_blank"
              className="text-black hover:text-teal px-2 self-center"
              href={link}
            >
              <FaGlobe size={20} />
            </a>
          ) : null}
        </div>
        <div id="project-description" className="pb-2">
          <p className="font-light">{description}</p>
        </div>
        <div id="tech-list" className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Pill title={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
