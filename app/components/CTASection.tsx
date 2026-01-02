'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-40 md:py-56 bg-[#FBF4EC] w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-10">
            Ready to Begin Your Healing Journey?
          </h2>

          <p className="text-2xl text-neutral mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Contact us today to schedule a consultation or learn more about our
            services.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block bg-accent-rose text-primary rounded-xl text-xl font-medium hover:shadow-lg transition-all hover:bg-[#c49e98]"
                style={{ padding: '20px 52px' }}
              >
                Request Therapy
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block border-2 border-accent-rose text-primary rounded-xl text-xl font-medium hover:bg-accent-rose/20 transition-all"
                style={{ padding: '20px 52px' }}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

