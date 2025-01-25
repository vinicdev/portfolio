import AboutMe from "./components/section/AboutMe";
import Companies from "./components/section/Companies";
import Header from "./components/section/Header";
import Service from "./components/section/Service";
import Tech from "./components/section/Tech";
import CustomMarquee from "./components/Marquee";

export default function Home() {
  const items = [
    "React",
    "Fluter",
    "NextJS",
    "Typescript",
    ".NET",
    "AngularJS",
    "NodeJS",
  ];
  return (
    <div className="flex flex-col ">
      <Header />
      <AboutMe />
      <Service />
      <Tech />
      <Companies />
      <CustomMarquee
        items={items}
        direction="right"
        speed={60}
        className="my-8"
      />
    </div>
  );
}
