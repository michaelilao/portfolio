import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="p-4 w-full flex justify-between border-light-grey font-light">
      <div className="m-y md:w-2/3">
        <Link className="text-lg hover:text-teal" href={"/"}>
          michaelilao
        </Link>
      </div>
      <div className="flex space-x-12 md:w-1/3 justify-center">
        <Link href="/experience" className="hover:text-teal">
          Experience
        </Link>
        <a className="hover:text-teal" href="/">
          Resume
        </a>
      </div>
    </nav>
  );
}
