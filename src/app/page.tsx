import dynamic from 'next/dynamic';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import PageWrapper from '@/components/PageWrapper';

const Timeline = dynamic(() => import('@/components/Timeline'));
const Projects = dynamic(() => import('@/components/Projects'));
const GallerySection = dynamic(() => import('@/components/GallerySection'));
const About = dynamic(() => import('@/components/About'));
const Team = dynamic(() => import('@/components/Team'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));
const Scripts = dynamic(() => import('@/components/Scripts'));

// Project data - Hacksters GitHub projects
const projectsData = [
  {
    id: "cloudcare-mobile",
    title: "CloudCare Mobile",
    description: "Healthcare management Android app with Aadhar-based universal ID, wearable integration from Apple Health/HealthKit, and real-time patient monitoring.",
    href: "https://github.com/Priyo13o4/MAD_CloudCare",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    techStack: ["Kotlin", "Jetpack Compose", "MVVM", "FastAPI"],
    status: "github" as const,
  },
  {
    id: "cloudcare-microservices",
    title: "CloudCare Backend",
    description: "5 FastAPI microservices architecture with PostgreSQL, real-time emergency alerts via SSE, and wearable data integration from HCGateway.",
    href: "https://github.com/HackstersJr/cloudcare_IIST_innocooks",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #00d9ff 100%)",
    techStack: ["FastAPI", "PostgreSQL", "SSE", "Docker"],
    status: "github" as const,
  },
  {
    id: "srujana-frontend",
    title: "Srujana Frontend",
    description: "Modern healthcare interface with AI-powered chatbots, real-time analytics dashboard, and seamless patient-doctor communication portal.",
    href: "https://github.com/HackstersJr/Srujana-frontend",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #ff9ff3 100%)",
    techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
    status: "github" as const,
  },
  {
    id: "carecloud-ai",
    title: "CareCloud AI Agents",
    description: "Multi-agent AI system with LangChain, NanoPQ vector search, and EmbedChain RAG. Features medicine, patient monitoring, and appointment agents.",
    href: "https://github.com/HackstersJr/Srujana-backend",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 50%, #8fd3f4 100%)",
    techStack: ["LangChain", "FastAPI", "PostgreSQL", "Docker"],
    status: "github" as const,
  },
  {
    id: "cloudcare-iotopia",
    title: "CloudCare IoTopia",
    description: "IoT-enabled healthcare platform for Iotopia hackathon featuring wearable device integration, emergency alerts, and cross-facility medical records.",
    href: "https://github.com/HackstersJr/Team-Hacksters-Iotopia-CloudCare",
    gradient: "linear-gradient(135deg, #0093E9 0%, #80D0C7 50%, #4facfe 100%)",
    techStack: ["IoT", "Python", "MongoDB", "Cloudflare"],
    status: "github" as const,
  },
];

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Nav />
        <Hero />
        <Timeline />
        <Projects items={projectsData} />
        <GallerySection />
        <About />
        <Team />
        <Contact />
        <Footer />
        <Scripts />
      </main>
    </PageWrapper>
  );
}
