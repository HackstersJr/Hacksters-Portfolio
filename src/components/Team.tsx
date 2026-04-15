'use client';

import { useState } from 'react';
import ProfileCard from './ProfileCard';
import ContactModal from './ContactModal';
import './ContactModal.css';
import { TEAM_IMAGES } from '@/lib/teamImages.constants';

interface TeamMember {
  name: string;
  displayName: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  contact: {
    email?: string;
    officialEmail?: string;
    linkedin?: string;
    github?: string;
    portfolioLinks?: { label: string; url: string }[];
  };
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const teamMembers: TeamMember[] = [
    {
      name: "Meghnath S",
      displayName: "Meghnath",
      role: "Lead Developer & Technical Architect",
      bio: "Full-stack developer passionate about AI and machine learning. Creates innovative solutions that push technological boundaries.",
      image: TEAM_IMAGES.meghnath,
      skills: ["React", "Node.js", "Python", "AI/ML"],
      contact: {
        email: "meghnath.s.official@gmail.com",
        officialEmail: "meghnath.20231CAI0074@presidencyuniversity.in",
        linkedin: "https://www.linkedin.com/in/meghnath-s/",
        github: "Blunistark"
      }
    },
    {
      name: "Priyodip Mukhopadhyay",
      displayName: "Priyodip",
      role: "Backend Engineer",
      bio: "Backend specialist with expertise in building scalable server architectures and robust APIs.",
      image: TEAM_IMAGES.priyodip,
      skills: ["Node.js", "Python", "APIs", "Databases"],
      contact: {
        email: "priyodip1304@gmail.com",
        officialEmail: "priyodip.20231CAI0149@presidencyuniversity.in",
        linkedin: "https://www.linkedin.com/in/priyodip-mukhopadhyay-13o4/",
        github: "Priyo13o4"
      }
    },
    {
      name: "Vivek Rajendra Patel",
      displayName: "Vivek",
      role: "Full-Stack Developer",
      bio: "Full-stack developer building end-to-end solutions with expertise across the entire tech stack.",
      image: TEAM_IMAGES.vivek,
      skills: ["React", "Node.js", "MongoDB", "Full-Stack"],
      contact: {
        email: "vivekpatel1735@gmail.com",
        officialEmail: "vivek.20231CAI0057@presidencyuniversity.in",
        linkedin: "https://www.linkedin.com/in/vivek-patel-bangalore/",
        github: "WeWake1"
      }
    },
    {
      name: "Devanandana S",
      displayName: "Devanandana",
      role: "Product Strategist & Pitch Lead",
      bio: "Strategic product visionary who transforms ideas into compelling pitches and market-ready solutions.",
      image: TEAM_IMAGES.devanandana,
      skills: ["Product Strategy", "Pitching", "Market Analysis", "Leadership"],
      contact: {
        email: "sdevanandana1@gmail.com",
        officialEmail: "devanandana.20231CAI0126@presidencyuniversity.in",
        linkedin: "https://www.linkedin.com/in/devanandana-s-401677294/",
        github: "DevanandanaS"
      }
    },
    {
      name: "Vishnu Vardhan Panchumarthi",
      displayName: "Vishnu",
      role: "Frontend Engineer & UI/UX Designer",
      bio: "Frontend developer and UI/UX designer crafting beautiful, intuitive interfaces and seamless user experiences.",
      image: TEAM_IMAGES.vishnu,
      skills: ["React", "TypeScript", "Figma", "UI/UX"],
      contact: {
        email: "vishnuuu24@gmail.com",
        officialEmail: "vishnu.20231CAI0141@presidencyuniversity.in",
        linkedin: "https://www.linkedin.com/in/vishnuuu24",
        github: "Vishnuuuu24",
        portfolioLinks: [
          { label: "The Edits Club", url: "https://www.theeditsclub.in" },
          { label: "Personal Portfolio", url: "https://vishnu-cse-portfolio.vercel.app" }
        ]
      }
    },
    {
      name: "Sai Tharun V",
      displayName: "Tharun",
      role: "Software Developer",
      bio: "Versatile software developer bridging innovation and practical solutions with clean, efficient code.",
      image: TEAM_IMAGES.tharun,
      skills: ["Python", "Java", "Problem Solving", "Algorithms"],
      contact: {
        email: "st308762@gmail.com",
        officialEmail: "sai.20231CAI0118@presidencyuniversity.in",
        github: "tharun-guy"
      }
    },
    {
      name: "V Vedha",
      displayName: "Vedha",
      role: "Research & Presentation Associate",
      bio: "Research specialist crafting compelling presentations that communicate complex ideas with clarity.",
      image: TEAM_IMAGES.vedha,
      skills: ["Research", "Presentations", "Documentation", "Communication"],
      contact: {
        email: "vedhav275@gmail.com",
        officialEmail: "vedha.20231CAI0131@presidencyuniversity.in",
        linkedin: "https://www.linkedin.com/in/v-vedha-0976v/",
        github: "ved-24-2006"
      }
    }
  ];

  // Placeholder avatar now managed in teamImages.constants.ts

  const handleContactClick = (member: TeamMember) => {
    setSelectedMember(member);
    // Prevent body scroll when modal opens
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    // Restore body scroll when modal closes
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <section id="team" className="relative py-20 bg-transparent overflow-hidden">
        {/* Minimal Clean Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Very subtle single gradient orb */}
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-radial from-cyan-400/2 via-cyan-400/1 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 fade-in-up"
              style={{ fontFamily: '"Dala Floda", serif', letterSpacing: '-0.02em' }}
            >
              The Team
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-chillax fade-in-up">
              8 people. Infinite caffeine & Mountain Dew.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="fade-in-up">
                <ProfileCard
                  name={member.displayName}
                  title={member.role}
                  handle={member.name.toLowerCase().replace(/\s+/g, '')}
                  status="Online"
                  contactText="Contact"
                  avatarUrl={member.image}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => handleContactClick(member)}
                  className={
                    member.displayName === 'Devanandana' ? 'deva-avatar-card' :
                      member.displayName === 'Priyodip' ? 'priyo-avatar-card' :
                        member.displayName === 'Meghnath' ? 'meghnath-avatar-card' :
                          member.displayName === 'Tharun' ? 'tharun-avatar-card' :
                            member.displayName === 'Vivek' ? 'vivek-avatar-card' :
                              member.displayName === 'Vedha' ? 'vedha-avatar-card' : ''
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={selectedMember !== null}
        onClose={handleCloseModal}
        name={selectedMember?.name || ''}
        role={selectedMember?.role || ''}
        contactInfo={selectedMember?.contact || {}}
      />
    </>
  );
}