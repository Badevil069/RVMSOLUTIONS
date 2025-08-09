import Image from 'next/image';
import SectionWrapper from '@/components/section-wrapper';
import { Progress } from '@/components/ui/progress';

const skills = [
    { name: 'Trust', value: 94 },
    { name: 'Security', value: 90 },
];

export default function About() {
    return (
        <SectionWrapper id="about">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <Image
                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1920&auto=format&fit=crop"
                        alt="Online payment illustration"
                        data-ai-hint="online payment"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg object-cover aspect-[4/3]"
                    />
                    <div className="absolute bottom-4 -right-4 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl text-center">
                        <p className="text-4xl font-bold">20+</p>
                        <p className="text-sm">Years Experience</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <p className="text-primary font-semibold tracking-wide">ABOUT RVM Solutions</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Simplify Your Life, One Payment at a Time
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        In today's fast-paced world, convenience is king. Whether you're shopping, paying bills, or managing your finances, online payments have revolutionized the way we handle transactions. Gone are the days of long lines, paper checks, and unnecessary stress—now, everything you need is just a click away.
                    </p>
                    <div className="space-y-4">
                        {skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-semibold text-foreground/80">{skill.name}</span>
                                    <span className="text-sm font-bold text-primary">{skill.value}%</span>
                                </div>
                                <Progress value={skill.value} aria-label={`${skill.name} progress`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
