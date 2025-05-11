import React from "react";
import Image from "next/image";
import Link from "next/link";
import fakeJoeHero from "@/assets/images/profile/fake-joe-hero.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const DesktopHeroText = () => {
  return (
    <div className="absolute hidden md:flex items-center justify-between bottom-[60%] w-[100%] text-center">
      <div>
        <h1 className="hero-name">YOUSSEF</h1>
        <span className="hero-subtext">Electrical Engineer</span>
      </div>
      <div>
        <h1 className="hero-name">TOHAMY</h1>
        <span className="hero-subtext">Passionate Dreamer</span>
      </div>
    </div>
  );
};

const MobileHeroText = () => {
  return (
    <div className="md:hidden flex flex-col items-center justify-between bottom-[60%] text-center">
      <h1 className="hero-name">YOUSSEF</h1>
      <h1 className="hero-name">TOHAMY</h1>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="relative hero-section flex flex-1 flex-col md:flex-row items-center gap-16 justify-center w-full h-auto overflow-hidden">
      {/* Mobile: Hero Text */}
      <MobileHeroText />

      {/* Hero Image */}
      <div className="relative flex justify-center items-center w-[85%] 2xl:w-[clamp(10rem,calc(60vw+10rem),150rem)] h-[clamp(10rem,calc(60vw+8rem),110rem)] bg-hero-gradient-dynamic">
        <Image
          src={fakeJoeHero}
          alt="logo"
          priority
          fill
          className="object-cover
        [mask-image:var(--mask-fade-bottom)] 
        [-webkit-mask-image:var(--mask-fade-bottom)]"
        />

        {/* Desktop: Hero Text */}
        <DesktopHeroText />
      </div>

      {/* Social Media Icons and Email */}
      <div className="absolute bottom-[40%] flex w-[100%] items-center justify-between">
        {/* Social Media Icons */}
        <div className="flex flex-col gap-12">
          <Link
            href="https://instagram.com/youssefe.tohamy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="hero-social-icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/youssef-e-tohamy-a918b91a2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="hero-social-icon" />
          </Link>
        </div>

        {/* Email */}
        <div className="relative h-fit flex items-center justify-center transform -rotate-90 mr-5">
          <Link
            href="mailto:youssefehab274@outlook.com"
            className="absolute font-light hero-subtext"
          >
            youssefehab274@outlook.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
