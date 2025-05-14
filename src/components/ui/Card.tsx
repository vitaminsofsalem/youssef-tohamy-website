import Image from "next/image";
import React from "react";

interface TagProps {
  text: string;
}

interface CardProps {
  imgSrc?: string;
  title?: string;
  tags?: string[];
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center bg-grey text-black rounded-full w-fit px-8">
      <span className="text-[clamp(1.4rem,0.5vw,1.75rem)]">{text}</span>
    </div>
  );
};

// TODO: Add functionality, wrap with link to make entire thing clickable to take you to blog page
const Card: React.FC<CardProps> = ({
  imgSrc = "/images/beach.jpg",
  title = "A day on the beach",
  tags = ["Beach", "Nature", "Rocks"],
}) => {
  return (
    <div className="relative min-h-150 lg:min-h-0 w-full h-full p-4">
      <Image
        alt="Src Image"
        src={imgSrc}
        priority
        fill
        className="-z-50 object-cover 
        [mask-image:var(--mask-fade-bottom)] 
        [-webkit-mask-image:var(--mask-fade-bottom)]"
      />

      <div className="flex h-full flex-col gap-4 items-start justify-end">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[clamp(2.5rem,2vw,3.25rem)] font-bold">
            {title}
          </h1>
          <div className="flex items-end">
            <button className="flex items-center justify-center text-[clamp(2rem,4vw,3rem)] bg-white/10 rounded-full shrink-0 aspect-square font-light w-[clamp(3rem,10vw,5rem)]">
              -&gt;
            </button>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex gap-8">
            {tags.map((tag) => {
              return <Tag key={tag} text={tag} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
