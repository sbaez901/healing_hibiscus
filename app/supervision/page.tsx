'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SupervisionPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9EFE3' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(249, 239, 227, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '16px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/">
            <Image
              src="/logo-transparent.png"
              alt="The Healing Hibiscus"
              width={70}
              height={70}
              style={{ width: '70px', height: 'auto', mixBlendMode: 'darken' }}
            />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <Link href="/about" style={{ color: '#4a4a4a', textDecoration: 'none', fontSize: '1rem' }}>
              About
            </Link>
            <Link href="/therapy" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>
              Services
            </Link>
            <Link 
              href="/contact"
              style={{ 
                backgroundColor: '#D4B5B0', 
                color: '#1a1a1a', 
                padding: '12px 28px', 
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

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

      {/* Footer */}
      <footer style={{ 
        padding: '48px 40px', 
        backgroundColor: '#F9EFE3', 
        borderTop: '1px solid #e5e5e5',
        textAlign: 'center'
      }}>
        <p style={{ color: '#6a6a6a', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} The Healing Hibiscus. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
