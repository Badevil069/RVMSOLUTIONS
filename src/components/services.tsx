import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Globe, Landmark, Receipt, Shield } from 'lucide-react';
import SectionWrapper from './section-wrapper';

const services = [
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: 'POS Machines',
    description: 'Fast and secure card payment terminals.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Online Payments',
    description: 'Accept payments from anywhere, anytime.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Secure Transactions',
    description: 'Advanced encryption to protect your business.',
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: 'Domestic Money Transfer (DMT)',
    description: 'Fast and secure fund transfers within the country.',
  },
  {
    icon: <Receipt className="h-8 w-8 text-primary" />,
    title: 'Bharat Bill Payments (BBPS)',
    description: 'Pay bills for electricity, water, DTH, and more.',
  },
    {
    icon: <Receipt className="h-8 w-8 text-primary" />,
    title: 'Utility Bill Payments',
    description: 'NSDL Pan card, Post-paid recharge, Credit card Bill Payments.',
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-secondary/30 dark:bg-card">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We provide a comprehensive suite of digital payment solutions tailored to your business needs.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
           <Card key={service.title} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col bg-card/60 dark:bg-card/80 backdrop-blur-sm p-6">
            <CardHeader className="flex-row items-center gap-4 p-0">
               <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 w-fit">
                {service.icon}
              </div>
              <CardTitle className='text-xl'>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-4 p-0">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
