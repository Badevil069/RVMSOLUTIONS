'use client';

import Link from 'next/link';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="h-8 w-8"
    fill="white"
  >
    <path d="M16.1,0A16,16,0,0,0,5.6,26.7L3,32l5.6-2.9A16,16,0,1,0,16.1,0Zm7.2,22.5A2.3,2.3,0,0,1,22,23.9a5.1,5.1,0,0,1-3-1.1,10.7,10.7,0,0,1-5.9-5.9,5.1,5.1,0,0,1-1.1-3A2.3,2.3,0,0,1,13.4,12a1.3,1.3,0,0,1,1-.1l.1.1a15.8,15.8,0,0,0,1.2.6,1,1,0,0,1,.6.9,3.6,3.6,0,0,1-.3,1.1,1.5,1.5,0,0,0,.3,1.3,7.4,7.4,0,0,0,4.1,4.1,1.5,1.5,0,0,0,1.3.3,3.6,3.6,0,0,1,1.1-.3.9.9,0,0,1,1,.6,16.3,16.3,0,0,0,.6,1.2l.1.1A1.3,1.3,0,0,1,23.3,22.5Z" />
  </svg>
);

export default function WhatsAppFAB() {
  return (
    <Link
      href="https://wa.me/919492537251"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </Link>
  );
}
