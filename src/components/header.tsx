'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Enquiry', href: '#enquiry' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex flex-col">
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#0056b3] to-[#003d80] text-transparent bg-clip-text">
            RVM Solutions
          </h1>
          <p className="text-xs text-muted-foreground hidden sm:block">Smart. Secure. Seamless Payments.</p>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex flex-col self-start" onClick={() => setMobileMenuOpen(false)}>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-[#0056b3] to-[#003d80] text-transparent bg-clip-text">
                        RVM Solutions
                    </h1>
                </Link>
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
