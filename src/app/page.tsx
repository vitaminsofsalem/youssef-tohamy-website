import Image from "next/image";
import fakeJoeHero from "@/assets/images/profile/fake-joe-hero.png";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center w-full h-full overflow-hidden bg-gradient-dynamic">
      <div className="max-w-screen-2xl w-full h-auto">
        <Image
          src="/images/profile/fake-joe-hero.png"
          alt="logo"
          priority
          width={fakeJoeHero.width}
          height={fakeJoeHero.height}
          className="w-full h-auto object-contain object-center 
          scale-180 
          md:scale-120 
          lg:scale-100 
          translate-x-4 
          md:translate-x-6 
          [mask-image:var(--mask-fade-bottom)] 
          [-webkit-mask-image:var(--mask-fade-bottom)]"
        />
      </div>
    </div>
  );
}
