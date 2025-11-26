'use client';

import { Timeline } from "@/components/ui/timeline";
import { getImagesByFolder } from "@/lib/cloudinaryImages.constants";
import Image from "next/image";

export default function TimelineSection() {
  const journeyEvents = [
    {
      year: "18th December 2024",
      title: "IEEE",
      subtitle: "The Beginning",
      description: "Hacksters was established with a bold vision to revolutionize technology through innovative solutions and cutting-edge research.",
      imageFolder: "IEEE"
    },
    {
      year: "28th Feb 2025",
      title: "Dizzy Hackers",
      subtitle: "Presidency University",
      description: "What started as pure chaos turned into a game-changer. our first hackathon, our first win, and the birth of Team Hacksters",
      imageFolder: "Dizzy"
    },
    {
      year: "7th March 2025",
      title: "SheLeads",
      subtitle: "Presidency University",
      description: "Remarkable achievements and milestones at NMAM, showcasing our commitment to innovation and academic excellence.",
      imageFolder: "SheLeads"
    },
    {
      year: "18th April 2025",
      title: "Innovatex",
      subtitle: "Presidency University",
      description: "Our first 24-hour hackathon tested everything — no win, but major glow-up. We learned, levelled up, and came back stronger.",
      imageFolder: ""
    },
    {
      year: "20th April 2025",
      title: "Hackfest",
      subtitle: "NMAM Institute of Technology, Udupi",
      description: "This hackathon was a total glow-up — we levelled up, wowed the judges, and bagged a win that marked a new milestone for Team Hacksters.",
      imageFolder: "NMAM"
    },
    {
      year: "30th Aug 2025",
      title: "Nexovate",
      subtitle: "Presidency University",
      description: "New faces, fresh vibes, and a wildcard entry — we turned our underdog story into a win. Every setback just made the comeback stronger.",
      imageFolder: "NEXOVATE Official"
    },
    {
      year: "3rd Sep 2025",
      title: "Eureka",
      subtitle: "Presidency University",
      description: "A last-minute entry turned into an unforgettable win — zero prep, pure vibe, and a moment we’ll never forget.",
      imageFolder: ""
    },
    {
      year: "12th Sept 2025",
      title: "Iotopia",
      subtitle: "Reva University, Bengaluru",
      description: "We gave it our all, but the win slipped away. It stung, but that loss lit a fire — turning setback into comeback.",
      imageFolder: ""
    },
    {
      year: "15th Sep 2025",
      title: "Srujana",
      subtitle: "Chanakya University, Bengaluru",
      description: "After countless near-wins, we finally did it — first place, pure adrenaline, and an award from the former ISRO Chairman. Absolute peak moment.",
      imageFolder: "Srujana"
    },
    {
      year: "4th Oct 2025",
      title: "NASA Space Apps Challenge",
      subtitle: "Jain University, Bengaluru",
      description: "Placeholder description for this achievement. Details to be added later.",
      imageFolder: ""
    },
    {
      year: "15th Oct 2025",
      title: "Pravrutti",
      subtitle: "Ramaiah University, Bengaluru",
      description: "All eight of us teamed up for the first time — just vibes, no pressure. But we ended up bagging two prizes in one event. Proof that when passion meets teamwork, it just clicks.",
      imageFolder: ""
    },
    {
      year: "19th Oct 2025",
      title: "Hackorbital",
      subtitle: "Indian Institute of Space Science and Technology, Thiruvananthapuram, Kerala",
      description: "Running on no sleep and pure hustle, we pushed through every round and built something we were proud of. Taking first place on that stage? An unreal high.",
      imageFolder: "IIST-Trivandrum"
    },
    {
      year: "21st Nov 2025",
      title: "MAD Expo",
      subtitle: "Presidency University, Bengaluru",
      description: "Placeholder Text",
      imageFolder: ""
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
