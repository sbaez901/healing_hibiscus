'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TherapyPage() {
  const specializations = [
    "Women's Issues",
    'Healing from Abuse',
    'Cultural/Racial Issues',
    'Family Conflict or Estrangement',
    'Life Transitions',
    'Trauma/PTSD',
    'Anxiety',
    'Depression'
  ];

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
              Individual Therapy
            </h1>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#D4B5B0', borderRadius: '2px', marginBottom: '32px' }}></div>
            <p style={{ fontSize: '1.375rem', color: '#4a4a4a', lineHeight: 1.7, fontWeight: 300 }}>
              Supporting you in navigating life, relationships, and mental health in ways 
              that are aligned with your needs and values.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: '120px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <p style={{ fontSize: '1.25rem', color: '#4a4a4a', lineHeight: 1.8 }}>
              My therapeutic approach integrates influences from a range of theoretical frameworks 
              including social justice, trauma-focused, liberation health, disability justice, 
              mindfulness, psychodynamic, and CBT (cognitive-behavioral therapy).
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
            
            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ backgroundColor: '#E8E4E0', padding: '40px', borderRadius: '16px' }}
            >
              <h2 style={{ 
                fontSize: '1.75rem', 
                fontFamily: "'Crimson Text', serif",
                fontWeight: 600,
                color: '#1a1a1a', 
                marginBottom: '24px'
              }}>
                Specializing in
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {specializations.map((item, index) => (
                  <li key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: '#4a4a4a',
                    marginBottom: '16px',
                    fontSize: '1.0625rem'
                  }}>
                    <span style={{ 
                      width: '8px', 
                      height: '8px', 
                      backgroundColor: '#D4B5B0', 
                      borderRadius: '50%', 
                      marginRight: '16px',
                      flexShrink: 0
                    }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6a6a6a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Format</p>
                <p style={{ fontSize: '1.25rem', color: '#1a1a1a' }}>1:1 Therapy for Adults</p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6a6a6a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Location</p>
                <p style={{ fontSize: '1.25rem', color: '#1a1a1a' }}>In-person in Shrewsbury, MA or via telehealth</p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6a6a6a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Languages</p>
                <p style={{ fontSize: '1.25rem', color: '#1a1a1a' }}>English and Spanish (Español)</p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6a6a6a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Approach</p>
                <p style={{ fontSize: '1.25rem', color: '#1a1a1a' }}>Trauma-informed, liberation health, intersectional</p>
              </div>
            </motion.div>
          </div>

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
