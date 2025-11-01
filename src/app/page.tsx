import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import WhereWeveBeenSection from '@/components/WhereWeveBeenSection';
import BehindTheScenesSection from '@/components/BehindTheScenesSection';
import About from '@/components/About';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Scripts from '@/components/Scripts';
import PageWrapper from '@/components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Nav />
        <Hero />
        <Timeline />
        <WhereWeveBeenSection />
        <BehindTheScenesSection />
        <About />
        <Team />
        <Contact />
        <Footer />
        <Scripts />
      </main>
    </PageWrapper>
  );
}
