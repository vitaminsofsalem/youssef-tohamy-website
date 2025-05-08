import Image from "next/image";
import fakeJoeHero from "@/assets/images/profile/fake-joe-hero.png";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-row items-center justify-center w-full h-auto overflow-hidden bg-gradient-dynamic">
      {/* Hero Image */}
      <div className="xl:w-[80%] h-auto">
        <Image
          src={fakeJoeHero}
          alt="logo"
          priority
          width={fakeJoeHero.width}
          height={fakeJoeHero.height}
          className="w-full h-auto object-contain object-center 
          scale-180
          md:scale-100
          [mask-image:var(--mask-fade-bottom)] 
          [-webkit-mask-image:var(--mask-fade-bottom)]"
        />
      </div>

      {/* Hero Text */}
      <div className="absolute flex items-start top-40 justify-between w-[60%] text-center">
        <div>
          <h1 className="text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-white to-[#656565]">
            YOUSSEF
          </h1>
          <span className="text-base font-light">Electrical Engineer</span>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">TOHAMY</h1>
          <span className="text-base font-light">Passionate Dreamer</span>
        </div>
      </div>
    </div>
  );
}
