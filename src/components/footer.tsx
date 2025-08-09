import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className='md:col-span-1'>
                <h3 className="text-xl font-bold text-primary mb-2 w-fit mx-auto md:mx-0">RVM Solutions</h3>
                <p className="text-sm text-muted-foreground">Smart. Secure. Seamless Payments.</p>
            </div>
            <div className='md:col-span-2 flex flex-col sm:flex-row justify-center md:justify-end items-center gap-4 sm:gap-8 text-sm'>
                <a href="tel:9492537251" className="flex items-center gap-2 hover:text-primary transition-colors group">
                <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className='text-muted-foreground group-hover:text-primary'>9492537251</span>
                </a>
                <a href="mailto:rvmsolutions2025@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors group">
                <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
                <span className='text-muted-foreground group-hover:text-primary'>rvmsolutions2025@gmail.com</span>
                </a>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} RVM Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
