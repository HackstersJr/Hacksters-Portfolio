import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import GallerySection from '@/components/GallerySection';
import About from '@/components/About';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Scripts from '@/components/Scripts';
import PageWrapper from '@/components/PageWrapper';

// Project data - replace with your actual GitHub projects
const projectsData = [
  {
    id: "project-1",
    title: "Project Name 1",
    description: "Description of your first project. Add your GitHub repository details here.",
    href: "https://github.com/yourusername/project1",
    image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "github" as const,
  },
  {
    id: "project-2",
    title: "Project Name 2",
    description: "Description of your second project. Add your GitHub repository details here.",
    href: "https://github.com/yourusername/project2",
    image: "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "github" as const,
  },
  {
    id: "project-3",
    title: "Project Name 3",
    description: "Description of your third project. Add your GitHub repository details here.",
    href: "https://github.com/yourusername/project3",
    image: "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "github" as const,
  },
  {
    id: "project-4",
    title: "Project Name 4",
    description: "Description of your fourth project. Add your GitHub repository details here.",
    href: "https://github.com/yourusername/project4",
    image: "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "github" as const,
  },
  {
    id: "project-5",
    title: "Project Name 5",
    description: "Description of your fifth project. Add your GitHub repository details here.",
    href: "https://github.com/yourusername/project5",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "github" as const,
  },
  {
    id: "project-6",
    title: "Project Name 6",
    description: "Description of your sixth project. Add your GitHub repository details here.",
    href: "https://github.com/yourusername/project6",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
