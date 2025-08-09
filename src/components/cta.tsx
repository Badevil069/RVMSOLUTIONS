import Link from 'next/link';
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Cta() {
  return (
    <SectionWrapper id="enquire" className="bg-primary/5 dark:bg-card">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Contact us today to learn more about our digital payment solutions and how we can help your business grow.
        </p>
        <Link href="/contact">
          <Button size="lg">
            Enquire Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
