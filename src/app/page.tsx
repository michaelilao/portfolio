import ProjectShowCase from "./components/ProjectShowCase";
export default async function Home() {
  const novaImages = [
    {
      source: "/images/nova/home.png",
      width: 3024,
      height: 1594,
      alt: "Nova Home Page",
    },
    {
      source: "/images/nova/category.png",
      width: 3024,
      height: 1594,
      alt: "Nova Category Page",
    },
    {
      source: "/images/nova/item.png",
      width: 3024,
      height: 1594,
      alt: "Nova Jewelleru Item Page",
    },
    {
      source: "/images/nova/memo.png",
      width: 3024,
      height: 1594,
      alt: "Nova Memo Page",
    },
  ];

  const optimusImages = [
    {
      source: "/images/optimus/home.png",
      width: 3024,
      height: 1594,
      alt: "Optimus Home Page",
    },
    {
      source: "/images/optimus/staff.png",
      width: 3024,
      height: 1594,
      alt: "Optimus Staffing Page",
    },
    {
      source: "/images/optimus/faq.png",
      width: 3024,
      height: 1594,
      alt: "Optimus FAQ Page",
    },
  ];

  const iaiImages = [
    {
      source: "/images/iai/home.png",
      width: 1290,
      height: 2796,
      alt: "IAI Mobile Home Page",
    },
    {
      source: "/images/iai/list.png",
      width: 1290,
      height: 2796,
      alt: "IAI List View",
    },
    {
      source: "/images/iai/people.png",
      width: 1290,
      height: 2796,
      alt: "IAI People View",
    },
    {
      source: "/images/iai/modal.png",
      width: 1290,
      height: 2796,
      alt: "IAI People Modal View",
    },
  ];

  return (
    <section>
      <div className="p-4 md:p-16 mx-auto">
        <h1 className="text-2xl md:text-5xl font-normal h-full">
          Hi, I'm <span className="text-teal">Michael Ilao</span>. I am a
          software engineer at Immigrate.AI, building web, native and cloud
          solutions.
        </h1>
        <hr className="my-4 md:my-16" />
        <h2 className="my-4 md:mb-8 text-lg">Here is some of work</h2>
        <div className="flex flex-col gap-y-12 md:gap-y-24">
          <ProjectShowCase
            title={"Nova Diamonds"}
            images={novaImages}
            alternate={true}
            device="web"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam libero explicabo impedit, ad excepturi numquam qui repudiandae ratione perspiciatis est voluptate iste aliquam molestias? Vero illum non eveniet! Odio, quaerat?"
            }
            technologies={[
              "React",
              "Bootstrap",
              "Express",
              "MSSQL",
              "Swagger",
              "IIS",
            ]}
          />
          <ProjectShowCase
            title={"Optimus Services"}
            device="web"
            images={optimusImages}
            alternate={false}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam libero explicabo impedit, ad excepturi numquam qui repudiandae ratione perspiciatis est voluptate iste aliquam molestias? Vero illum non eveniet! Odio, quaerat?"
            }
            technologies={[
              "Next.js",
              "Typescript",
              "Tailwind",
              "Tina.io",
              "Vercel",
            ]}
            link="https://www.optimusservices.net"
          />
          <ProjectShowCase
            title={"Immigrate.AI Mobile App"}
            device="mobile"
            images={iaiImages}
            alternate={false}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam libero explicabo impedit, ad excepturi numquam qui repudiandae ratione perspiciatis est voluptate iste aliquam molestias? Vero illum non eveniet! Odio, quaerat?"
            }
            technologies={["React Native", "Typescript", "Expo", "Tamagui"]}
          />
        </div>
      </div>
    </section>
  );
}
