"use client";

import React from "react";
import GalleryCarousel from "./ui/Carousel/GalleryCarousel";

const Gallery: React.FC = () => {
  return (
    <div className="relative flex flex-1 flex-col gap-32 items-center justify-center w-full h-auto overflow-hidden">
      {/* HEADER SECTION */}
      <div className="relative flex flex-1 flex-col justify-center items-start w-full 2xl:p-48 2xl:pb-0">
        <div className="flex flex-col justify-start items-center h-full w-full">
          <span className="bg-number">03</span>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-32 w-full pt-[clamp(4rem,6vw,6rem)]">
            <span className="hidden md:flex flex-1 text opacity-50 font-extralight items-center justify-center text-center w-fit">
              Each piece tells a story. <br /> Some I&apos;ve lived, others
              I&apos;ve imagined.
            </span>
            <h1 className="title text-center z-10">
              CANVAS OF <br /> THOUGHTS
            </h1>

            <span className="hidden md:flex flex-1 text opacity-50 font-extralight items-center justify-center text-center">
              Some hold pieces of me. <br /> Others hold pieces I&apos;ve let
              go.
            </span>
          </div>
        </div>
        <span className="flex w-full justify-center items-start text text-center">
          This is where my thoughts go when they need color.
        </span>
      </div>

      {/* GALLERY PREVIEW SECTION */}
      <GalleryCarousel />
    </div>
  );
};

export default Gallery;
