import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import fakeJoeFacingRoad from "@/assets/images/profile/fake-joe-facing-road.webp";

const Career: React.FC = () => {
  return (
    <div className="relative flex flex-1 flex-col gap-16 items-center justify-center w-full h-auto overflow-hidden">
      {/* HEADER SECTION */}
      <div className="relative flex flex-1 justify-start items-start gap-4  w-full  2xl:p-48">
        <span className="bg-number">04</span>
        <div className="flex flex-col w-full md:w-[50%] justify-center gap-8 md:gap-16 pt-[clamp(4rem,6vw,6rem)] pl-[clamp(4rem,3vw,9rem)]">
          <h1 className="title">THE JOURNEY</h1>

          <div className="relative flex flex-1 flex-col gap-8">
            <p className="text max-w-[calc(85%+3.5rem)]">
              Every chapter in my journey has taught me something different —
              patience, precision, perspective. From academic deep dives to
              hands-on industry challenges, I&apos;ve shaped ideas into systems
              and curiosity into skill. This isn&apos;t just a list of roles —
              it&apos;s the path that&apos;s brought me closer to the kind of
              engineer and creator I aim to be.
            </p>
            <Button>Check my resume</Button>
          </div>
        </div>

        <div className="hidden md:flex relative flex-1 justify-start items-start w-[clamp(20rem,50vw,110rem)] h-[clamp(25rem,60vw,110rem)] bg-about-gradient-dynamic">
          <Image
            src={fakeJoeFacingRoad}
            alt="logo"
            priority
            fill
            className="object-cover
        [mask-image:var(--mask-fade-bottom)] 
        [-webkit-mask-image:var(--mask-fade-bottom)]"
          />
        </div>
      </div>

      {/* BLOG PREVIEW SECTION */}
    </div>
  );
};

export default Career;
