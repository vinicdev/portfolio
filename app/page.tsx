import AboutMe from "./components/section/AboutMe";
import Header from "./components/section/Header";
import Service from "./components/section/Service";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <AboutMe />
      <Service />
      <div className="h-screen"></div>
    </div>
  );
}
