'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const specializations = [
    "Women's Issues",
    'Healing from Abuse',
    'Cultural/Racial Issues',
    'Family Conflict',
    'Life Transitions',
    'Trauma/PTSD',
    'Anxiety',
    'Depression'
  ];

  const services = [
    '1:1 Therapy for Adults',
    'Professional Consulting',
    'Peer Supervision',
    'Individual Supervision',
    'Group Supervision',
    'Educational Workshops'
  ];

  const serviceCards = [
    {
      title: 'Individual Therapy',
      description: 'As a mental health therapist, I believe my role is to support you in navigating life, relationships, and mental health in ways that are aligned with your needs and values.'
    },
    {
      title: 'Clinical Supervision',
      description: 'As a clinical supervisor, I thrive in working collaboratively with my supervisees, acting as a thought partner, coach, mentor, and supervisor.'
    },
    {
      title: 'Training & Consultation',
      description: 'In my trainings and consultations, I am committed to nurturing a learning environment that fosters critical thinking, self-reflection, and practical skill-building.'
    }
  ];

  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col justify-center bg-[#FFF9F5] px-6 md:px-12 relative overflow-hidden">
        {/* Navigation / Logo Area */}
        <div className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-20">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="The Healing Hibiscus logo"
              width={128}
              height={128}
              className="w-24 md:w-32 h-auto object-contain mix-blend-multiply"
              priority
            />
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block border border-primary text-primary px-6 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Link href="/contact">Contact Us</Link>
          </motion.button>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 pt-20">
          {/* Text Content - Asymmetric Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary mb-8 leading-[0.9] tracking-tight font-serif">
              Healing <br />
              <span className="text-accent-rose italic font-light">
                Begins Here.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-secondary mb-6 max-w-xl font-light leading-relaxed">
              Therapy available in-person in Shrewsbury, Massachusetts or via
              telehealth.
            </p>

            <p className="text-lg text-neutral italic mb-12 font-serif">
              Terapia disponible en español!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent-rose text-primary px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-accent-rose/20 hover:shadow-xl hover:shadow-accent-rose/30 transition-all duration-300"
              >
                <Link href="/contact#request">Request Therapy</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border border-neutral-light text-secondary px-10 py-4 rounded-full text-lg font-medium hover:border-primary transition-all duration-300"
              >
                <Link href="/about">Learn More</Link>
              </motion.button>
            </div>
          </motion.div>

          {/* Visual Element - Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 hidden lg:block relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-rose/20 to-transparent rounded-2xl"></div>
              <Image
                src="/logo.png"
                alt="Decorative Hibiscus"
                width={400}
                height={500}
                className="absolute -bottom-20 -right-20 w-full h-full object-contain opacity-50 mix-blend-multiply blur-sm scale-150"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 md:py-40 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Section Header - Sticky on Desktop */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-32"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-serif leading-tight">
                  Our <br /> Services
                </h2>
                <p className="text-lg text-secondary leading-relaxed mb-8 max-w-sm">
                  Comprehensive mental health support tailored to your unique
                  journey and needs.
                </p>
                <div className="h-px w-24 bg-accent-rose"></div>
              </motion.div>
            </div>

            {/* Content Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Specializations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-2xl font-serif font-semibold text-primary mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-rose"></span>
                  Specializing in
                </h3>
                <ul className="space-y-4">
                  {specializations.map((item, index) => (
                    <li key={index} className="text-lg text-secondary py-2 border-b border-neutral-light/50 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services Include */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-serif font-semibold text-primary mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-neutral"></span>
                  Services Include
                </h3>
                <ul className="space-y-4">
                  {services.map((item, index) => (
                    <li key={index} className="text-lg text-secondary py-2 border-b border-neutral-light/50 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-32 md:py-40 bg-[#FFF9F5] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="group relative bg-white p-8 md:p-10 rounded-3xl h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-light/50 border border-transparent hover:border-neutral-light/50"
              >
                <h3 className="text-3xl font-serif font-bold text-primary mb-6 group-hover:text-accent-rose transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-lg text-secondary leading-relaxed mb-8 flex-grow font-light">
                  {card.description}
                </p>
                <div className="mt-auto pt-8 border-t border-neutral-light/30">
                  <span className="text-sm font-medium text-primary uppercase tracking-wider group-hover:text-accent-rose transition-colors duration-300">
                    Learn More
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 md:py-40 bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Heading & Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 font-serif leading-none">
                About <br />
                <span className="text-accent-rose italic">
                  The Healing Hibiscus
                </span>
              </h2>
              <div className="w-full h-px bg-neutral-light mb-8"></div>
              <p className="text-sm font-medium text-neutral uppercase tracking-widest">
                Authenticity • Non-Judgement • Transformation
              </p>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="lg:pl-12"
            >
              <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light mb-12">
                &quot;As a politicized healer, I believe therapy can be a
                transformational and liberating process. I welcome you to bring
                your whole self, by creating a space where you will be met with
                authenticity and non-judgement.&quot;
              </p>

              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 text-primary font-semibold text-lg"
              >
                <Link href="/about" className="flex items-center gap-4">
                  <span className="border-b-2 border-accent-rose pb-1 group-hover:border-primary transition-colors duration-300">
                    Learn More About Me
                  </span>
                  <span className="text-accent-rose group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40 bg-[#FFF9F5] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] rounded-full bg-accent-rose blur-[100px]"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif">
                Ready to Begin?
              </h2>

              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
                Contact us today to schedule a consultation or learn more about
                our services.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-rose text-primary px-12 py-5 rounded-full text-xl font-semibold hover:bg-white transition-colors duration-300"
                >
                  <Link href="/contact#request">Request Therapy</Link>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border border-white/30 text-white px-12 py-5 rounded-full text-xl font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  <Link href="/contact">Contact Us</Link>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-white border-t border-neutral-light text-center">
        <p className="text-neutral text-sm">
          © {new Date().getFullYear()} The Healing Hibiscus. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
