"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type NoticeCoverSliderProps = {
  imageUrls: string[];
  title: string;
};

export default function NoticeCoverSlider({ imageUrls, title }: NoticeCoverSliderProps) {
  const images = useMemo(() => imageUrls.filter(Boolean), [imageUrls]);
  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const isMulti = images.length > 1;

  return (
    <div className="relative overflow-hidden rounded-xl border bg-white">
      <Carousel setApi={setApi} opts={{ loop: isMulti }} className="w-full">
        <CarouselContent className="ml-0">
          {images.map((url, currentIndex) => (
            <CarouselItem key={`${url}-${currentIndex}`} className="pl-0">
              <img
                src={url}
                alt={`${title} 표지 ${currentIndex + 1}`}
                className="h-[320px] w-full object-cover md:h-[420px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {isMulti ? (
        <>
          <button
            type="button"
            className="absolute left-0 top-0 h-full w-1/3"
            aria-label="이전 이미지"
            onClick={() => api?.scrollPrev()}
          />
          <button
            type="button"
            className="absolute right-0 top-0 h-full w-1/3"
            aria-label="다음 이미지"
            onClick={() => api?.scrollNext()}
          />

          <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/55 px-2 py-1 text-xs text-white">
            {index + 1}/{images.length}
          </div>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, dotIndex) => (
              <button
                key={`dot-${dotIndex}`}
                type="button"
                aria-label={`${dotIndex + 1}번 이미지로 이동`}
                onClick={() => api?.scrollTo(dotIndex)}
                className={`h-1.5 w-1.5 rounded-full transition ${index === dotIndex ? "bg-white" : "bg-white/45"}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
