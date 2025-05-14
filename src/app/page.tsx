import About from "@/components/About";
import Blog from "@/components/Blog";
import Career from "@/components/Career";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <About />
      <Blog />
      <Gallery />
      <Career />
    </div>
  );
}
