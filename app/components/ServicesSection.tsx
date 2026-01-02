'use client';

import { motion } from 'framer-motion';

export function ServicesSection() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const specializations = [
    "Women's Issues",
    'Healing from Abuse',
    'Cultural/Racial Issues',
    'Family Conflict or Estrangement',
    'Life Transitions',
    'Trauma/PTSD',
    'Anxiety',
    'Depression',
  ];

  const services = [
    '1:1 Therapy for Adults',
    'Professional Consulting',
    'Peer Supervision',
    "Individual Supervision for: MSW Interns, LCSW's",
    'Group Supervision for Non-Profits',
    'Educational Workshops',
  ];

  return (
    <section className="py-32 md:py-48 bg-[#E8E4E0] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
          className="text-center mb-32 md:mb-40"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent-rose mx-auto rounded-full opacity-60"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          {/* Left Column: Specializations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-50px',
            }}
          >
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-12 pb-6 border-b-2 border-accent-rose">
              Specializing in:
            </h3>
            <ul className="space-y-6">
              {specializations.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-lg text-secondary group"
                >
                  <span className="w-3 h-3 bg-accent-rose rounded-full mr-5 group-hover:scale-150 transition-transform duration-300 flex-shrink-0"></span>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Services Include */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-50px',
            }}
          >
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-primary mb-12 pb-6 border-b-2 border-accent-rose">
              Services Include:
            </h3>
            <ul className="space-y-6">
              {services.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-lg text-secondary group"
                >
                  <span className="w-3 h-3 bg-neutral rounded-full mr-5 group-hover:bg-accent-rose transition-colors duration-300 flex-shrink-0"></span>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

