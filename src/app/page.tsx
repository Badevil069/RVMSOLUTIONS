import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import WhyChooseUs from '@/components/why-choose-us';
import Cta from '@/components/cta';
import Footer from '@/components/footer';
import SectionWrapper from '@/components/section-wrapper';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <WhyChooseUs />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
