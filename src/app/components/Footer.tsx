import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  let d = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Toronto" })
  );

  let hour = d.getHours();
  let minute = d.getMinutes();

  return (
    <div>
      <hr className="my-2" />
      <div className="flex flex-wrap justify-around my-8">
        <div>ilaohmichael@gmail.com</div>

        <div>Toronto, CAN </div>
        <div>Local Time: {d.toLocaleTimeString()}</div>
        <div className="flex gap-4">
          <a
            target="_blank"
            className="hover:text-teal"
            href="https://github.com/michaelilao"
          >
            <FaGithub size={24} />
          </a>
          <a
            target="_blank"
            className="hover:text-teal"
            href="https://www.linkedin.com/in/ilaom-mcmaster/"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
