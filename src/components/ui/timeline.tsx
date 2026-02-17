"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0] && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="relative w-full font-sans"
      ref={containerRef}
    >
      <div className="relative w-full py-20 px-4 md:px-8 lg:px-10 border-y border-white/15 bg-black/45 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(rgba(255,255,255,0.85)_0.6px,transparent_0.6px)] [background-size:3px_3px]" />
        <div className="relative z-10">
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            style={{ fontFamily: '"Dala Floda", serif', letterSpacing: '-0.02em' }}
          >
            Timeline
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-md font-chillax">
            Experiments, failures, wins, and everything in between.
          </p>

          <div ref={ref} className="relative pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-950 border border-white/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-white font-chillax">{index + 1}</span>
                </div>
                <h3 className="hidden md:block text-lg md:pl-20 md:text-3xl font-bold text-gray-300 font-chillax">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-lg mb-4 text-left font-bold text-gray-300 font-chillax">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-500 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-300 via-blue-300 to-cyan-200 from-[0%] via-[12%] rounded-full shadow-[0_0_10px_rgba(147,197,253,0.45)]"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
