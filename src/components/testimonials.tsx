import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import SectionWrapper from './section-wrapper';

const testimonials = [
  {
    name: 'John D.',
    quote: "RVM Solutions helped us grow our business with reliable payment solutions.",
    image: 'https://placehold.co/100x100.png',
    aiHint: "business man"
  },
  {
    name: 'Priya K.',
    quote: "The service is excellent and the support team is always ready to help.",
    image: 'https://placehold.co/100x100.png',
    aiHint: "business woman"
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
        <p className="text-muted-foreground mt-2">Real stories from satisfied partners.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="flex flex-col items-center text-center p-8 shadow-sm hover:shadow-lg transition-shadow">
            <Avatar className="w-20 h-20 mb-4 border-2 border-primary/20">
              <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardContent className="p-0">
              <blockquote className="text-lg italic text-foreground/90 mb-4">
                <span className='text-3xl text-primary/50 font-serif leading-none'>"</span>{testimonial.quote}<span className='text-3xl text-primary/50 font-serif leading-none'>"</span>
              </blockquote>
              <p className="font-semibold text-primary">{testimonial.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
