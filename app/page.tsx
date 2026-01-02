'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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

  const serviceCards = [
    {
      title: 'Individual Therapy',
      description: 'As a mental health therapist, I believe my role is to support you in navigating life, relationships, and mental health in ways that are aligned with your needs and values.',
      link: '/therapy',
    },
    {
      title: 'Clinical Supervision',
      description: 'As a clinical supervisor, I thrive in working collaboratively with my supervisees, acting as a thought partner, coach, mentor, and supervisor.',
      link: '/supervision',
    },
    {
      title: 'Training & Consultation',
      description: 'In my trainings and consultations, I am committed to nurturing a learning environment that fosters critical thinking, self-reflection, and practical skill-building.',
      link: '/consulting',
    },
  ];

  // Animation variants for staggered lists
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8 }
    },
  };

  const lineGrow = {
    hidden: { width: 0 },
    visible: { 
      width: '80px',
      transition: { duration: 0.8, delay: 0.3 }
    },
  };

  return (
    <main style={{ width: '100%', backgroundColor: '#F9EFE3', overflowX: 'hidden' }}>
      
      {/* ============ HERO SECTION ============ */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '80px 40px',
        backgroundColor: '#F9EFE3',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          {/* Logo - no animation to avoid background flash */}
          <Image
            src="/logo-transparent.png"
            alt="The Healing Hibiscus"
            width={400}
            height={400}
            style={{ 
              margin: '0 auto 40px auto', 
              width: '400px', 
              height: 'auto',
              mixBlendMode: 'darken'
            }}
            priority
          />

          {/* Heading with slide up */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 700,
              color: '#1a1a1a', 
              marginBottom: '40px',
              lineHeight: 1.1
            }}
          >
            Healing Begins Here.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            style={{ 
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', 
              color: '#4a4a4a', 
              marginBottom: '20px',
              fontWeight: 300,
              maxWidth: '700px',
              margin: '0 auto 20px auto'
            }}
          >
            Therapy available in-person in Shrewsbury, Massachusetts or via telehealth.
          </motion.p>

          {/* Spanish note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ 
              fontSize: '1.25rem', 
              color: '#6a6a6a', 
              fontStyle: 'italic',
              fontFamily: "'Crimson Text', serif",
              marginBottom: '60px'
            }}
          >
            Terapia disponible en español!
          </motion.p>

          {/* CTA Button with hover scale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              style={{ 
                display: 'inline-block',
                backgroundColor: '#D4B5B0', 
                color: '#1a1a1a', 
                fontSize: '1.25rem',
                fontWeight: 500,
                padding: '24px 72px',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'box-shadow 0.3s ease'
              }}
            >
              Request Therapy
            </Link>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <motion.svg
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6a6a6a"
            strokeWidth="1.5"
            style={{ cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.div>
      </section>



      {/* ============ SERVICES OVERVIEW ============ */}
      <section style={{ 
        padding: '160px 40px', 
        backgroundColor: '#E8E4E0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Section Header with animated underline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{ textAlign: 'center', marginBottom: '120px' }}
          >
            <motion.h2 
              variants={fadeInUp}
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                fontFamily: "'Crimson Text', serif",
                fontWeight: 700,
                color: '#1a1a1a', 
                marginBottom: '24px'
              }}
            >
              Our Services
            </motion.h2>
            <motion.div 
              variants={lineGrow}
              style={{ height: '4px', backgroundColor: '#D4B5B0', margin: '0 auto', borderRadius: '2px' }}
            />
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '80px'
          }}>
            
            {/* Specializations with staggered list */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.h3 
                variants={fadeInUp}
                style={{ 
                  fontSize: '2rem', 
                  fontFamily: "'Crimson Text', serif",
                  fontWeight: 600,
                  color: '#1a1a1a', 
                  marginBottom: '40px',
                  paddingBottom: '20px',
                  borderBottom: '3px solid #D4B5B0'
                }}
              >
                Specializing in:
              </motion.h3>
              <motion.ul 
                variants={containerVariants}
                style={{ listStyle: 'none', padding: 0, margin: 0 }}
              >
                {specializations.map((item, i) => (
                  <motion.li 
                    key={i} 
                    variants={itemVariants}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      fontSize: '1.125rem', 
                      color: '#4a4a4a',
                      marginBottom: '20px',
                      cursor: 'default'
                    }}
                  >
                    <motion.span 
                      whileHover={{ scale: 1.5 }}
                      style={{ 
                        width: '12px', 
                        height: '12px', 
                        backgroundColor: '#D4B5B0', 
                        borderRadius: '50%', 
                        marginRight: '20px',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Services Include with staggered list */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.h3 
                variants={fadeInUp}
                style={{ 
                  fontSize: '2rem', 
                  fontFamily: "'Crimson Text', serif",
                  fontWeight: 600,
                  color: '#1a1a1a', 
                  marginBottom: '40px',
                  paddingBottom: '20px',
                  borderBottom: '3px solid #D4B5B0'
                }}
              >
                Services Include:
              </motion.h3>
              <motion.ul 
                variants={containerVariants}
                style={{ listStyle: 'none', padding: 0, margin: 0 }}
              >
                {services.map((item, i) => (
                  <motion.li 
                    key={i} 
                    variants={itemVariants}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      fontSize: '1.125rem', 
                      color: '#4a4a4a',
                      marginBottom: '20px',
                      cursor: 'default'
                    }}
                  >
                    <motion.span 
                      whileHover={{ scale: 1.5, backgroundColor: '#D4B5B0' }}
                      style={{ 
                        width: '12px', 
                        height: '12px', 
                        backgroundColor: '#6a6a6a', 
                        borderRadius: '50%', 
                        marginRight: '20px',
                        flexShrink: 0,
                        transition: 'all 0.3s ease'
                      }}
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ============ SERVICE CARDS ============ */}
      <section style={{ 
        padding: '160px 40px', 
        backgroundColor: '#F9EFE3'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '40px'
          }}>
            {serviceCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: 'easeOut' }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '20px', 
                  padding: '48px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transformStyle: 'preserve-3d'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontFamily: "'Crimson Text', serif",
                  fontWeight: 700,
                  color: '#1a1a1a', 
                  marginBottom: '24px'
                }}>
                  {card.title}
                </h3>
                <p style={{ 
                  color: '#4a4a4a', 
                  lineHeight: 1.7, 
                  marginBottom: '32px',
                  flexGrow: 1,
                  fontSize: '1.0625rem'
                }}>
                  {card.description}
                </p>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href={card.link}
                    style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '#D4B5B0', 
                      fontWeight: 500,
                      textDecoration: 'none',
                      fontSize: '1.0625rem'
                    }}
                  >
                    Learn more
                    <svg style={{ marginLeft: '8px', width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ============ ABOUT SECTION ============ */}
      <section style={{ 
        padding: '160px 40px', 
        backgroundColor: '#E8E4E0'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2 
              variants={fadeInUp}
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                fontFamily: "'Crimson Text', serif",
                fontWeight: 700,
                color: '#1a1a1a', 
                marginBottom: '32px'
              }}
            >
              About The Healing Hibiscus
            </motion.h2>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ height: '4px', backgroundColor: '#D4B5B0', margin: '0 auto 60px auto', borderRadius: '2px' }}
            />

            <motion.p 
              variants={fadeInScale}
              style={{ 
                fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', 
                color: '#4a4a4a', 
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: '60px'
              }}
            >
              "As a politicized healer, I believe therapy can be a transformational and liberating process. 
              I welcome you to bring your whole self, by creating a space where you will be met with 
              authenticity and non-judgement."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/about"
                style={{ 
                  display: 'inline-block',
                  backgroundColor: '#D4B5B0', 
                  color: '#1a1a1a', 
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  padding: '24px 72px',
                  borderRadius: '12px',
                  textDecoration: 'none'
                }}
              >
                Learn More About Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* ============ CTA SECTION ============ */}
      <section style={{ 
        padding: '200px 40px', 
        backgroundColor: '#F9EFE3'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
                fontFamily: "'Crimson Text', serif",
                fontWeight: 700,
                color: '#1a1a1a', 
                marginBottom: '40px',
                lineHeight: 1.15
              }}
            >
              Ready to Begin Your Healing Journey?
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', 
                color: '#6a6a6a', 
                marginBottom: '60px',
                maxWidth: '700px',
                margin: '0 auto 60px auto',
                fontWeight: 300
              }}
            >
              Contact us today to schedule a consultation or learn more about our services.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  style={{ 
                    display: 'inline-block',
                    backgroundColor: '#D4B5B0', 
                    color: '#1a1a1a', 
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    padding: '24px 72px',
                    borderRadius: '12px',
                    textDecoration: 'none'
                  }}
                >
                  Request Therapy
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  style={{ 
                    display: 'inline-block',
                    border: '2px solid #D4B5B0',
                    backgroundColor: 'transparent',
                    color: '#1a1a1a', 
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    padding: '22px 70px',
                    borderRadius: '12px',
                    textDecoration: 'none'
                  }}
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* ============ FOOTER ============ */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ 
          padding: '48px 40px', 
          backgroundColor: '#F9EFE3', 
          borderTop: '1px solid #e5e5e5',
          textAlign: 'center'
        }}
      >
        <p style={{ color: '#6a6a6a', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} The Healing Hibiscus. All rights reserved.
        </p>
      </motion.footer>
    </main>
  );
}
