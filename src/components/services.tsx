import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Globe, Shield } from 'lucide-react';
import SectionWrapper from './section-wrapper';

const services = [
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: 'POS Machines',
    description: 'Fast and secure card payment terminals.',
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Online Payments',
    description: 'Accept payments from anywhere, anytime.',
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Secure Transactions',
    description: 'Advanced encryption to protect your business.',
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We provide a comprehensive suite of digital payment solutions tailored to your business needs.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
            <CardHeader className="items-center">
              <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                {service.icon}
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
