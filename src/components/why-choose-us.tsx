import Image from 'next/image';
import { SlidersHorizontal, ShieldCheck, LifeBuoy } from 'lucide-react';
import SectionWrapper from './section-wrapper';

const features = [
  {
    icon: <SlidersHorizontal className="h-8 w-8 text-primary" />,
    title: 'Easy to Setup',
    description: 'Get started in minutes with our easy-to-setup payment solution—no hassle, just simplicity!',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure Transactions',
    description: 'Enjoy peace of mind with secure transactions backed by advanced encryption and fraud protection.',
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    title: '24/7 Support',
    description: 'Our team is here to assist you if you need help.',
  },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-choose-us" className="bg-secondary/30 dark:bg-card">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <p className="text-primary font-semibold tracking-wide uppercase mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Flexibility, security and speed, all in one</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              In today's world, managing payments should be effortless. That's why we bring you a payment system designed to deliver everything you need: flexibility, security, and speed—all in one seamless experience.
            </p>
          </div>
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 w-fit">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1585832349343-a173d1323559?q=80&w=1920&auto=format&fit=crop"
            alt="Secure online payment on a smartphone"
            data-ai-hint="secure payment smartphone"
            width={800}
            height={800}
            className="rounded-lg shadow-lg object-cover aspect-square"
          />
          <div className="absolute -bottom-8 -right-8 bg-green-500 text-white p-6 rounded-lg shadow-xl text-center">
            <p className="text-4xl font-bold">200+</p>
            <p className="text-sm uppercase tracking-wider">Online Transaction</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
