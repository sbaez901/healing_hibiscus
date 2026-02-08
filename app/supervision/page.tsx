'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SupervisionPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9EFE3' }}>

      {/* Hero */}
      <section style={{ paddingTop: '180px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ 
              fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 700,
              color: '#1a1a1a', 
              marginBottom: '24px',
              lineHeight: 1.1
            }}>
              Clinical Supervision
            </h1>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#D4B5B0', borderRadius: '2px', marginBottom: '32px' }}></div>
            <p style={{ fontSize: '1.375rem', color: '#4a4a4a', lineHeight: 1.7, fontWeight: 300 }}>
              Collaborative supervision for professional growth and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: '120px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <p style={{ fontSize: '1.25rem', color: '#4a4a4a', lineHeight: 1.8 }}>
              As a clinical supervisor, I thrive in working collaboratively with my supervisees, 
              acting as a thought partner, coach, mentor, and supervisor. I believe in creating 
              a supportive environment that fosters professional growth while honoring individual 
              learning styles and experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              backgroundColor: '#E8E4E0', 
              padding: '48px', 
              borderRadius: '20px',
              marginBottom: '80px'
            }}
          >
            <h2 style={{ 
              fontSize: '2rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '24px'
            }}>
              Supervision Services
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Individual Supervision for MSW Interns',
                "Individual Supervision for LCSW's",
                'Peer Supervision',
                'Group Supervision for Non-Profits'
              ].map((item, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: '#4a4a4a',
                  marginBottom: '20px',
                  fontSize: '1.125rem'
                }}>
                  <span style={{ 
                    width: '10px', 
                    height: '10px', 
                    backgroundColor: '#D4B5B0', 
                    borderRadius: '50%', 
                    marginRight: '20px',
                    flexShrink: 0
                  }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', paddingTop: '40px' }}
          >
            <Link
              href="/contact"
              className="cta-button"
              style={{ 
                display: 'inline-block',
                backgroundColor: '#D4B5B0', 
                color: '#1a1a1a', 
                padding: '24px 64px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1.25rem',
                fontWeight: 500
              }}
            >
              Request Consultation
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
