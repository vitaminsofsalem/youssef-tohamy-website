import Image from "next/image";
import React from "react";
import fakeJoeAbout from "@/assets/images/profile/fake-joe-side-view.png";
import Button from "./ui/Button";

const About: React.FC = () => {
  return (
    <div className="relative hero-section flex flex-1 flex-col md:flex-row items-center justify-center w-full h-auto overflow-hidden">
      {/* Hero Image */}
      <div className="hidden md:flex relative flex-1 justify-start items-start w-[clamp(20rem,50vw,110rem)] h-[clamp(25rem,60vw,110rem)] bg-about-gradient-dynamic">
        <Image
          src={fakeJoeAbout}
          alt="logo"
          priority
          fill
          className="object-cover
        [mask-image:var(--mask-fade-bottom)] 
        [-webkit-mask-image:var(--mask-fade-bottom)]"
        />
      </div>

      <div className="relative flex flex-1 flex-col justify-start items-start gap-4 h-full w-full min-h-[clamp(25rem,60vw,110rem)]">
        <span className="bg-number">01</span>
        <div className="flex pt-[clamp(6rem,6vw,9rem)] pl-[clamp(4rem,3vw,9rem)] flex-col gap-8 w-full">
          <h1 className="title">A BIT ABOUT ME</h1>
          <div className="relative flex flex-col gap-8">
            <div className="hidden md:block absolute top-[10%] left-[-13%] h-[85%] w-px bg-white"></div>
            <p className="text w-[calc(60%+3.5rem)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              placerat sem at felis interdum, nec consectetur dui luctus. Duis
              at dui sed ex dapibus semper at eget mi. Vestibulum at neque vel
              ipsum dignissim interdum nec et ante. Morbi non turpis ut metus
              mattis vehicula quis sed neque. Vestibulum vel sagittis odio.
              Donec sed accumsan ligula. Nunc at suscipit purus, eget malesuada
              purus.
            </p>
            <Button>Read More -&gt;</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
