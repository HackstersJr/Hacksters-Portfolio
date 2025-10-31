'use client';

import ProfileCard from './ProfileCard';

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      bio: "Full-stack developer with 8+ years of experience in AI and machine learning. Passionate about creating innovative solutions that push technological boundaries.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["React", "Node.js", "Python", "AI/ML"]
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      bio: "Creative designer specializing in futuristic interfaces and user experiences. Expert in creating immersive digital environments that captivate users.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      skills: ["Figma", "Adobe XD", "3D Design", "Motion Graphics"]
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Engineer",
      bio: "PhD in Computer Science with focus on neural networks and quantum computing. Leads our research initiatives in next-generation AI technologies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      skills: ["TensorFlow", "PyTorch", "Quantum Computing", "Research"]
    },
    {
      name: "Emily Zhang",
      role: "Product Manager",
      bio: "Strategic thinker with expertise in tech product development. Bridges the gap between innovation and market needs, ensuring our solutions make real impact.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      skills: ["Product Strategy", "Agile", "Data Analysis", "Leadership"]
    },
    {
      name: "David Kim",
      role: "Cybersecurity Expert",
      bio: "Former NSA analyst turned entrepreneur. Protects our digital assets and ensures the security of our cutting-edge technologies.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      skills: ["Cybersecurity", "Cryptography", "Risk Assessment", "Compliance"]
    },
    {
      name: "Lisa Thompson",
      role: "Data Scientist",
      bio: "Data wizard who turns complex datasets into actionable insights. Specializes in predictive analytics and machine learning model optimization.",
      image: "https://via.placeholder.com/300x300/6366f1/ffffff?text=Avatar",
      skills: ["Python", "R", "Big Data", "Statistics"]
    },
    {
      name: "Jordan Lee",
      role: "DevOps Engineer",
      bio: "Infrastructure maestro ensuring seamless deployment and scaling. Expert in cloud architecture and automation for high-performance systems.",
      image: "https://via.placeholder.com/300x300/6366f1/ffffff?text=Avatar",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      name: "Taylor Morgan",
      role: "UX Researcher",
      bio: "Human-centered design advocate who bridges user needs with technical possibilities. Conducts insightful research to create meaningful digital experiences.",
      image: "https://via.placeholder.com/300x300/6366f1/ffffff?text=Avatar",
      skills: ["User Research", "Usability Testing", "Analytics", "Psychology"]
    }
  ];

  const placeholderAvatar = "https://via.placeholder.com/300x300/6366f1/ffffff?text=Avatar";

  const handleContactClick = (memberName: string) => {
    console.log(`Contact clicked for ${memberName}`);
    // You can add contact logic here, like opening an email client or modal
  };

  return (
    <section id="team" className="relative py-20 bg-gradient-to-b from-transparent via-gray-900/8 to-transparent overflow-hidden">
      {/* Minimal Clean Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Very subtle single gradient orb */}
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-radial from-cyan-400/2 via-cyan-400/1 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up" style={{ fontFamily: 'Grafier, sans-serif' }}>
            <span className="text-white">Meet Our</span> <span className="neon-text">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed fade-in-up font-chillax">
            The brilliant minds behind our innovations. A diverse team of experts
            united by passion for technology and commitment to excellence.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="fade-in-up">
              <ProfileCard
                name={member.name}
                title={member.role}
                handle={member.name.toLowerCase().replace(/\s+/g, '')}
                status="Online"
                contactText="Contact"
                avatarUrl={placeholderAvatar}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => handleContactClick(member.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}