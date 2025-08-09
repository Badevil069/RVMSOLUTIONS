import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionWrapper from './section-wrapper';

export default function Cta() {
  return (
    <SectionWrapper className="bg-primary/5 dark:bg-card">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Contact us today to find out how our digital payment solutions can help your business grow.
        </p>
        <Link href="/contact">
          <Button size="lg" className="font-semibold text-lg">
            Enquire Now
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
