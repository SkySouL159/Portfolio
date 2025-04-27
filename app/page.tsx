import Hero from "@/components/Hero";
import { Project } from "@/components/Project";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Experience from "./../components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-[#000319] relative flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <TechStack />
        <RecentProjects />
        <Project />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
