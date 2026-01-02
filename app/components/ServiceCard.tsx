'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-50px',
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut',
      }}
      className="bg-white border border-neutral-light rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <h3 className="text-3xl font-serif font-bold text-primary mb-6">
        {title}
      </h3>
      <p className="text-secondary leading-relaxed mb-10 flex-grow text-lg">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex items-center text-accent-rose font-medium hover:text-primary transition-colors duration-300 group mt-auto text-lg"
      >
        Learn more
        <svg
          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  );
}

