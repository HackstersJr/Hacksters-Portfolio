'use client';

import { Timeline } from "@/components/ui/timeline";
import { getEventWin, getEventBTS } from "@/lib/cloudinaryImages.constants";
import Image from "next/image";
import { Trophy } from "lucide-react";

export default function TimelineSection() {
  const journeyEvents = [
    {
      year: "18th Dec 2024",
      title: "IEEE",
      subtitle: "Presidency University, Bangalore",
      description: "Hacksters was established with a bold vision to revolutionize technology through innovative solutions and cutting-edge research.",
      eventKey: "1. IEEE",
      placement: "2nd" as const
    },
    {
      year: "28th Feb 2025",
      title: "Dizzy Hackers",
      subtitle: "Presidency University",
      description: "What started as pure chaos turned into a game-changer. our first hackathon, our first win, and the birth of Team Hacksters",
      eventKey: "2. Dizzy Hackers",
      placement: "1st" as const
    },
    {
      year: "7th March 2025",
      title: "SheLeads",
      subtitle: "Presidency University",
      description: "Remarkable achievements and milestones at NMAM, showcasing our commitment to innovation and academic excellence.",
      eventKey: "3. SheLeads",
      placement: "2nd" as const
    },
    {
      year: "18th April 2025",
      title: "Innovatex",
      subtitle: "Presidency University",
      description: "Our first 24-hour hackathon tested everything — no win, but major glow-up. We learned, levelled up, and came back stronger.",
      eventKey: "4. Innovatex",
      placement: "participated" as const
    },
    {
      year: "20th April 2025",
      title: "Hackfest",
      subtitle: "NMAM Institute of Technology, Udupi",
      description: "This hackathon was a total glow-up — we levelled up, wowed the judges, and bagged a win that marked a new milestone for Team Hacksters.",
      eventKey: "5. Hackfest NMAM",
      placement: "1st" as const
    },
    {
      year: "30th Aug 2025",
      title: "Nexovate",
      subtitle: "Presidency University",
      description: "New faces, fresh vibes, and a wildcard entry — we turned our underdog story into a win. Every setback just made the comeback stronger.",
      eventKey: "6. Nexovate",
      placement: "2nd" as const
    },
    {
      year: "3rd Sep 2025",
      title: "Eureka",
      subtitle: "Presidency University",
      description: "A last-minute entry turned into an unforgettable win — zero prep, pure vibe, and a moment we’ll never forget.",
      eventKey: "7. Eureka",
      placement: "2nd" as const
    },
    {
      year: "12th Sept 2025",
      title: "Iotopia",
      subtitle: "Reva University, Bengaluru",
      description: "We gave it our all, but the win slipped away. It stung, but that loss lit a fire — turning setback into comeback.",
      eventKey: "8. Iotopia",
      placement: "participated" as const
    },
    {
      year: "15th Sep 2025",
      title: "Srujana Chanakya",
      subtitle: "Chanakya University, Bengaluru",
      description: "After countless near-wins, we finally did it — first place, pure adrenaline, and an award from the former ISRO Chairman. Absolute peak moment.",
      eventKey: "9. Srujana Chanakya",
      placement: "1st" as const
    },
    {
      year: "4th Oct 2025",
      title: "NASA Space Apps Challenge",
      subtitle: "Jain University, Bengaluru",
      description: "We took part in this global hackathon, working on space-focused problem statements and applying problem-solving skills under tight time constraints. The experience broadened our perspective on real-world space and Earth challenges.",
      eventKey: "10. Nasa Space Apps",
      placement: "participated" as const
    },
    {
      year: "15th Oct 2025",
      title: "Pravruthi Ramiah",
      subtitle: "Ramaiah University, Bengaluru",
      description: "All eight of us teamed up for the first time — just vibes, no pressure. But we ended up bagging two prizes in one event. Proof that when passion meets teamwork, it just clicks.",
      eventKey: "11. Pravruthi Ramiah",
      placement: "1st-3rd" as const
    },
    {
      year: "19th Oct 2025",
      title: "Hackorbital",
      subtitle: "Indian Institute of Space Science and Technology, Thiruvananthapuram, Kerala",
      description: "Running on no sleep and pure hustle, we pushed through every round and built something we were proud of. Taking first place on that stage? An unreal high.",
      eventKey: "12. Hackorbital IIST-Trivandrum",
      placement: "1st" as const
    },
    {
      year: "21st Nov 2025",
      title: "MAD Expo",
      subtitle: "Presidency University, Bengaluru",
      description: "We showcased a fully working Android version of CareCloud, complete with a functional backend. The project stood out for its execution and real-world usability, making it one of our most technically solid builds till date.",
      eventKey: "13. MAD Expo",
      placement: "1st" as const
    },
    {
      year: "5th March 2026",
      title: "SheLeads 2.0",
      subtitle: "Presidency University, Bengaluru",
      description: "SheLeads 2.0 was a 24-hour national-level women-centric hackathon, and we secured 1st place.",
      eventKey: "3. SheLeads 2.0",
      placement: "1st" as const
    },
  ];

  const getPlacementDisplay = (placement: '1st' | '2nd' | '3rd' | 'participated' | '1st-3rd') => {
    switch (placement) {
      case '1st':
        return {
          label: '1st Place',
          iconClass: 'text-yellow-300',
          textClass: 'bg-gradient-to-b from-yellow-100 via-yellow-300 to-amber-500 bg-clip-text text-transparent',
          effectClass: '[text-shadow:0_0_18px_rgba(253,224,71,0.45)]',
        };
      case '2nd':
        return {
          label: '2nd Place',
          iconClass: 'text-zinc-300',
          textClass: 'bg-gradient-to-b from-zinc-50 via-zinc-300 to-zinc-500 bg-clip-text text-transparent',
          effectClass: '[text-shadow:0_0_18px_rgba(212,212,216,0.45)]',
        };
      case '3rd':
        return {
          label: '3rd Place',
          iconClass: 'text-amber-600',
          textClass: 'bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 bg-clip-text text-transparent',
          effectClass: '[text-shadow:0_0_16px_rgba(217,119,6,0.45)]',
        };
      case 'participated':
        return {
          label: 'Participated',
          iconClass: 'text-purple-400',
          textClass: 'bg-gradient-to-b from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent',
          effectClass: '[text-shadow:0_0_14px_rgba(216,180,254,0.35)]',
        };
      case '1st-3rd':
        return {
          label: '1st + 3rd',
          iconClass: 'text-yellow-300',
          textClass: 'text-yellow-200',
          effectClass: '[text-shadow:0_0_18px_rgba(253,224,71,0.45)]',
        };
    }
  };

  // Transform journey events into Timeline format
  const timelineData = journeyEvents.map((event) => {
    const placementDisplay = getPlacementDisplay(event.placement);
    // Get both BTS and Win images for each event, prioritize Win images
    const winImages = getEventWin(event.eventKey);
    const btsImages = getEventBTS(event.eventKey);
    const allImages = [...winImages, ...btsImages];

    return {
      title: event.year,
      content: (
        <div>
          <div className="flex items-start md:items-center gap-3 mb-2">
            <div className="flex items-center gap-1.5">
              <Trophy className={`h-6 w-6 md:h-7 md:w-7 ${placementDisplay.iconClass} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
              {event.placement === '1st-3rd' && (
                <Trophy className="h-6 w-6 md:h-7 md:w-7 text-amber-600 drop-shadow-[0_0_10px_rgba(217,119,6,0.35)]" />
              )}
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-baseline gap-x-3 gap-y-1 min-w-0">
              <span className={`min-w-0 break-words [overflow-wrap:anywhere] md:[overflow-wrap:normal] font-extrabold text-xl md:text-3xl lg:text-4xl leading-tight tracking-tight font-chillax ${placementDisplay.textClass} ${placementDisplay.effectClass}`}>
                {placementDisplay.label}
              </span>
              <span
                aria-hidden="true"
                className="hidden md:inline-block h-6 md:h-8 lg:h-10 w-px bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.35)]"
              />
              <span className="min-w-0 break-words [overflow-wrap:anywhere] md:[overflow-wrap:normal] font-extrabold text-xl md:text-3xl lg:text-4xl leading-tight tracking-tight font-chillax text-neutral-100 [text-shadow:0_0_14px_rgba(255,255,255,0.2)]">
                {event.title}
              </span>
            </div>
          </div>
          <p className="text-neutral-100 text-lg md:text-xl font-normal mb-4 font-chillax">
            {event.subtitle}
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8 font-chillax">
            {event.description}
          </p>
          {allImages.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {allImages.slice(0, 4).map((imageUrl, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={imageUrl}
                  alt={`${event.title} - Photo ${imgIndex + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              ))}
            </div>
          )}
        </div>
      ),
    };
  });

  return (
    <section id="timeline" className="relative min-h-screen bg-transparent">
      <Timeline data={timelineData} />
    </section>
  );
}
