import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import Enquiry from '@/components/enquiry';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Testimonials />
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
}
