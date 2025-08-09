import { Phone, Mail, Clock, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionWrapper from '@/components/section-wrapper';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';

const contactDetails = [
    {
        icon: <MapPin className="h-8 w-8 text-primary" />,
        title: 'Head Office',
        info: '7-31, Venkatapuram village, Sirivella Mandal Nandyal, Kurnool Andhrapradesh: 518510',
    },
    {
        icon: <Phone className="h-8 w-8 text-primary" />,
        title: 'Call Us',
        info: '9492537251',
    },
    {
        icon: <Mail className="h-8 w-8 text-primary" />,
        title: 'Email Us',
        info: 'help@mahipaytechsolutions.com',
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: 'Office Hour',
        info: 'Mon - Sat (10:00 AM - 6:00 PM)',
    },
];

const socialLinks = [
    { icon: <Facebook />, href: '#' },
    { icon: <Twitter />, href: '#' },
    { icon: <Instagram />, href: '#' },
    { icon: <Youtube />, href: '#' },
]

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <SectionWrapper id="contact" className="bg-secondary/30 dark:bg-card">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Get in touch</h1>
                                <p className="text-muted-foreground text-lg">We're here to help! Whether you have a question, need assistance, or want to provide feedback, reaching out to us is quick and easy.</p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {contactDetails.map((detail) => (
                                    <div key={detail.title} className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 w-fit">
                                            {detail.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">{detail.title}</h3>
                                            <p className="text-muted-foreground">{detail.info}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                             <div>
                                <h3 className="text-2xl font-bold mb-4">Follow our social media</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                           <ContactForm />
                        </div>
                    </div>
                </SectionWrapper>
            </main>
            <Footer />
        </div>
    );
}
