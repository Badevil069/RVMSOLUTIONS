import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A modern office showing digital payment technology"
        data-ai-hint="digital payment technology"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20 text-white px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg font-headline">
          Welcome to RVM Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Your trusted partner in digital payment solutions.
        </p>
        <a href="#enquiry">
          <Button size="lg" className="font-semibold text-lg">
            Enquire Now
          </Button>
        </a>
      </div>
    </section>
  );
}
