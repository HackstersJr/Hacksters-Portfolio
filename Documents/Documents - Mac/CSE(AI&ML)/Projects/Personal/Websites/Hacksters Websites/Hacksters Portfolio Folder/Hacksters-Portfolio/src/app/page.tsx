import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Scripts from '@/components/Scripts';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Timeline />
      <Gallery />
      <About />
      <Team />
      <Contact />
      <Scripts />
    </main>
  );
}
