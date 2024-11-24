import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
  
export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Education/>
        <TechStack/>
        <Footer />
      </div>
    </main>
  );
}
