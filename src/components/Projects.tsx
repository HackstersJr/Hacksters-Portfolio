"use client";

import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  href: string;
  gradient: string;
  techStack: string[];
  status?: "live" | "github";
}

export interface ProjectsProps {
  title?: string;
  description?: string;
  items: ProjectItem[];
}

const Projects = ({
  title = "Projects",
  description = "Discover our innovative solutions and open-source contributions. Explore the projects we've built to push the boundaries of technology.",
  items,
}: ProjectsProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
      setScrollSnaps(carouselApi.scrollSnapList());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    carouselApi.on("reInit", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
      carouselApi.off("reInit", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="projects" className="relative py-32 md:py-40 bg-black/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-end justify-between md:mb-16">
          <div className="flex flex-col gap-4">
            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white"
              style={{ fontFamily: '"Dala Floda", serif', letterSpacing: '-0.02em' }}
            >
              {title}
            </h2>
            <p className="max-w-lg text-gray-400 font-chillax text-lg">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: 'center',
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-[calc(50vw-500px)] mr-[calc(50vw-200px)]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl block"
                >
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 bg-neutral-950">
                    {/* Animated gradient background */}
                    <div
                      className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      style={{ background: item.gradient }}
                    />

                    {/* Animated mesh overlay */}
                    <div className="absolute inset-0 opacity-30">
                      <div
                        className="absolute inset-0 animate-pulse"
                        style={{
                          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%),
                                           radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 30%)`,
                        }}
                      />
                    </div>

                    {/* Grid pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                      }}
                    />

                    {/* Large title as main visual - positioned at top */}
                    <div className="absolute top-12 left-0 right-0 pointer-events-none overflow-hidden px-6">
                      <h4
                        className="text-4xl md:text-5xl font-bold text-white/15 group-hover:text-white/20 transition-all duration-500 leading-tight select-none"
                        style={{ fontFamily: '"Dala Floda", serif' }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* Bottom gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Status badge */}
                    {item.status && (
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-chillax">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.status === "live" ? "bg-green-400 animate-pulse" : "bg-white/60"}`} />
                        {item.status === "live" ? "Live" : "GitHub"}
                      </div>
                    )}

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.techStack.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[10px] font-medium bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-gray-300 font-chillax uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3 className="mb-2 text-xl font-semibold font-chillax leading-tight">
                        {item.title}
                      </h3>
                      <p className="mb-5 line-clamp-2 text-gray-400 text-sm font-chillax leading-relaxed">
                        {item.description}
                      </p>
                      <span className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white font-chillax transition-colors">
                        <ExternalLink className="size-4" />
                        View Project
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white w-6" : "bg-white/20 w-1.5"
                }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
