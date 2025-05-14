import React from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";

const Blog: React.FC = () => {
  return (
    <div className="relative flex flex-1 flex-col gap-16 items-center justify-center w-full h-auto overflow-hidden">
      {/* HEADER SECTION */}
      <div className="relative flex flex-1 justify-start items-start gap-4  w-full  2xl:p-48">
        <span className="bg-number">02</span>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-32 w-full pt-[clamp(4rem,6vw,6rem)] pl-[clamp(4rem,3vw,9rem)]">
          <h1 className="title">BLOGS ABOUT EVERYTHING</h1>
          <div className="relative flex flex-col gap-8">
            <p className="text max-w-[calc(85%+3.5rem)]">
              I write about what inspires me, confuses me, or just makes me feel
              something. From late-night thoughts to deep dives into the things
              I love — it&apos;s all here. This blog is my space to think out
              loud, and you&apos;re welcome to listen in.
            </p>
            <Button>Read all articles -&gt;</Button>
          </div>
        </div>
      </div>

      {/* BLOG PREVIEW SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8 w-full lg:aspect-[2/1]">
        {/* Large left card */}
        <div className="row-span-2 h-full w-full">
          <Card
            imgSrc="/images/beach.jpg"
            title="A day on the beach"
            tags={["Beach", "Nature", "Rocks"]}
          />
        </div>
        {/* Top right card */}
        <div className="row-span-1 h-full w-full">
          <Card
            imgSrc="/images/forest.jpg"
            title="Exploring the forest"
            tags={["Forest", "Nature", "Trips"]}
          />
        </div>
        {/* Bottom right card */}
        <div className="row-span-1 h-full w-full">
          <Card
            imgSrc="/images/mountain.jpg"
            title="Hiking in the mountains"
            tags={["Hiking", "Mountains", "Nature"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
