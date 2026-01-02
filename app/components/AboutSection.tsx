'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="py-32 md:py-48 bg-[#E8E4E0] w-full">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-100px',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
            About The Healing Hibiscus
          </h2>

          <div className="w-16 h-1 bg-accent-rose mx-auto rounded-full mb-16 opacity-60"></div>

          <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-16 font-light">
            "As a politicized healer, I believe therapy can be a
            transformational and liberating process. I welcome you to bring your
            whole self, by creating a space where you will be met with
            authenticity and non-judgement."
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/about"
              className="inline-block bg-accent-rose text-primary rounded-xl text-xl font-medium hover:shadow-lg transition-all hover:bg-[#c49e98]"
              style={{ padding: '20px 52px' }}
            >
              Learn More About Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

