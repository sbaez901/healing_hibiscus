'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-[#FBF4EC] px-4 relative overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center z-10"
      >
        {/* Logo */}
        <div className="mb-8 md:mb-12 w-48 md:w-64">
          <Image
            src="/logo-transparent.png"
            alt="The Healing Hibiscus logo"
            width={256}
            height={256}
            className="w-full h-auto object-contain mix-blend-darken"
            priority
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight tracking-tight">
          Healing Begins Here.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-secondary mb-4 max-w-2xl font-light leading-relaxed">
          Therapy available in-person in Shrewsbury, Massachusetts or via
          telehealth.
        </p>

        {/* Spanish Note */}
        <p className="text-base md:text-lg text-neutral italic mb-10 font-serif">
          Terapia disponible en español!
        </p>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-accent-rose text-primary rounded-xl text-xl font-medium hover:shadow-lg transition-all hover:bg-[#c49e98]"
            style={{ padding: '20px 52px' }}
          >
            Request Therapy
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-neutral hover:text-primary transition-colors"
          >
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

