"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./GalleryCarouselArrowButtons";
import { DotButton, useDotButton } from "./GalleryCarouselDotButton";

import styles from "./styles/Carousel.module.css";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIdx, setSelectedIdx] = React.useState(1);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIdx(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    emblaApi.scrollTo(1);
    onSelect();
  }, [emblaApi]);

  const images = [
    { src: "/images/art.jpg", label: "art" },
    { src: "/images/boho-art.jpg", label: "boho art" },
    { src: "/images/woman.jpg", label: "woman" },
  ];

  return (
    <div className={styles.embla}>
      <div className="absolute hidden lg:flex justify-between w-[90%]">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`${styles.embla__slide} ${
                idx === selectedIdx ? styles["is-selected"] : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                priority
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`${styles.embla__dot} ${
              index === selectedIndex ? styles["embla__dot--selected"] : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryCarousel;
