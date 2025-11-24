'use client';

import { Timeline } from "@/components/ui/timeline";
import { getImagesByFolder } from "@/lib/cloudinaryImages.constants";
import Image from "next/image";

export default function TimelineSection() {
  const journeyEvents = [
    {
      year: "2019",
      title: "Foundation & Vision",
      subtitle: "The Beginning",
      description: "Hacksters was established with a bold vision to revolutionize technology through innovative solutions and cutting-edge research.",
      imageFolder: "IIST-Trivandrum"
    },
    {
      year: "2020",
      title: "First Major Breakthrough",
      subtitle: "Innovation Milestone",
      description: "Achieved our first significant technological breakthrough, setting the foundation for future advancements in AI and machine learning.",
      imageFolder: "Srujana"
    },
    {
      year: "2020.5",
      title: "NMAM Achievement",
      subtitle: "Academic Excellence",
      description: "Remarkable achievements and milestones at NMAM, showcasing our commitment to innovation and academic excellence.",
      imageFolder: "NMAM"
    },
    {
      year: "2021",
      title: "Expansion & Growth",
      subtitle: "Scaling Operations",
      description: "Expanded our team and operations, establishing partnerships with leading tech companies and securing initial funding.",
      imageFolder: "NEXOVATE Official"
    },
    {
      year: "2022",
      title: "Global Recognition",
      subtitle: "Industry Leadership",
      description: "Gained international recognition for our innovative solutions, winning prestigious awards and expanding our global presence.",
      imageFolder: "Dizzy"
    },
    {
      year: "2023",
      title: "Future Innovation",
      subtitle: "Next Chapter",
      description: "Continuing to push boundaries with advanced technologies, preparing for the next era of technological transformation.",
      imageFolder: "SheLeads"
    },
    {
      year: "2024",
      title: "Placeholder Title",
      subtitle: "Placeholder Subtitle",
      description: "Placeholder description for this achievement. Details to be added later.",
      imageFolder: "IEEE"
    },
  ];

  // Transform journey events into Timeline format
  const timelineData = journeyEvents.map((event) => ({
    title: event.year,
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <span className="font-bold text-lg">{event.title}</span> - {event.subtitle}
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          {event.description}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {getImagesByFolder('Official', event.imageFolder).slice(0, 4).map((imageUrl, imgIndex) => (
            <Image
              key={imgIndex}
              src={imageUrl}
              alt={`${event.imageFolder} - Photo ${imgIndex + 1}`}
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="timeline" className="relative min-h-screen bg-transparent">
      {/* Top transition line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/80"></div>
      
      <Timeline data={timelineData} />
      
      {/* Bottom transition line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/80"></div>
    </section>
  );
}
