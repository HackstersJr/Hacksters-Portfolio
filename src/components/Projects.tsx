"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
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
  image: string;
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

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
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
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
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
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-2xl md:aspect-[5/4] lg:aspect-[16/9] border border-white/5 hover:border-white/10 transition-all duration-300 bg-neutral-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    
                    {/* Status badge */}
                    {item.status && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-gray-300 font-chillax">
                        {item.status === "live" ? "Live" : "GitHub"}
                      </div>
                    )}
                    
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <h3 className="mb-2 text-xl font-semibold font-chillax">
                        {item.title}
                      </h3>
                      <p className="mb-6 line-clamp-2 text-gray-400 text-sm font-chillax">
                        {item.description}
                      </p>
                      <span className="flex items-center text-sm text-gray-400 group-hover:text-white font-chillax transition-colors">
                        View Project
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-6" : "bg-white/20 w-1.5"
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
