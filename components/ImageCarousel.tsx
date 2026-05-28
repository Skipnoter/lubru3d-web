"use client";

import { type ReactNode, useEffect, useState } from "react";

type Slide = {
  src: string;
  alt?: string;
  position?: string;
  backgroundSize?: string;
};

interface ImageCarouselProps {
  slides: Slide[];
  intervalMs?: number;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
}

export default function ImageCarousel({
  slides,
  intervalMs = 5000,
  children,
  className = "",
  overlayClassName = "bg-slate-950/60",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs, slides.length]);

  return (
    <section className={`relative overflow-hidden rounded-3xl ${className}`}>
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundPosition: slide.position || "center",
              backgroundSize: slide.backgroundSize || "cover",
            }}
            aria-hidden="true"
          />
        </div>
      ))}

      <div className={`absolute inset-0 ${overlayClassName}`} />

      <button
        type="button"
        onClick={previousSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 text-slate-900 shadow-lg transition hover:bg-white"
        aria-label="Anterior"
      >
        ◀
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 text-slate-900 shadow-lg transition hover:bg-white"
        aria-label="Siguiente"
      >
        ▶
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-[70vh] px-6 py-24 text-center text-white">
        {children}
      </div>
    </section>
  );
}
