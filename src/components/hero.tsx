import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1920&auto=format&fit=crop"
        alt="A modern office showing digital payment technology"
        data-ai-hint="digital payment technology"
        fill
        className="object-cover z-0 animated-bg"
        priority
      />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg font-headline">
          Welcome to RVM Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Your trusted partner in digital payment solutions.
        </p>
        <div className="max-w-3xl mx-auto text-base md:text-lg text-gray-200 space-y-4">
            <p>No cash? No problem—pay online in seconds. With online payments, managing your finances has never been easier. Say goodbye to complicated processes and hello to a simpler, smarter way to handle your money.</p>
            <p>Start simplifying your life today—one payment at a time. Experience the future of payments with us!</p>
        </div>
      </div>
    </section>
  );
}
