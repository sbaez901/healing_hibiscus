'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ResourcesPage() {
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
            <Link href="/therapy" style={{ color: '#4a4a4a', textDecoration: 'none', fontSize: '1rem' }}>
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
              Resources
            </h1>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#D4B5B0', borderRadius: '2px', marginBottom: '32px' }}></div>
            <p style={{ fontSize: '1.375rem', color: '#4a4a4a', lineHeight: 1.7, fontWeight: 300 }}>
              Helpful resources for your healing journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: '120px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Crisis Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              backgroundColor: '#E8E4E0', 
              padding: '48px', 
              borderRadius: '20px',
              marginBottom: '48px'
            }}
          >
            <h2 style={{ 
              fontSize: '2rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '24px'
            }}>
              Crisis Resources
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <p style={{ fontWeight: 500, color: '#1a1a1a', marginBottom: '4px' }}>National Suicide Prevention Lifeline</p>
                <a href="tel:988" style={{ fontSize: '1.25rem', color: '#D4B5B0', textDecoration: 'none' }}>
                  988
                </a>
              </div>
              <div>
                <p style={{ fontWeight: 500, color: '#1a1a1a', marginBottom: '4px' }}>Crisis Text Line</p>
                <p style={{ color: '#4a4a4a' }}>Text HOME to <a href="sms:741741" style={{ color: '#D4B5B0', textDecoration: 'none' }}>741741</a></p>
              </div>
              <div>
                <p style={{ fontWeight: 500, color: '#1a1a1a', marginBottom: '4px' }}>National Domestic Violence Hotline</p>
                <a href="tel:8007997233" style={{ fontSize: '1.25rem', color: '#D4B5B0', textDecoration: 'none' }}>
                  1-800-799-7233
                </a>
              </div>
            </div>
          </motion.div>

          {/* Mental Health Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ marginBottom: '48px' }}
          >
            <h2 style={{ 
              fontSize: '2rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '24px'
            }}>
              Mental Health Resources
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" 
                style={{ color: '#D4B5B0', textDecoration: 'none', fontSize: '1.0625rem' }}>
                NAMI - National Alliance on Mental Illness →
              </a>
              <a href="https://www.samhsa.gov" target="_blank" rel="noopener noreferrer" 
                style={{ color: '#D4B5B0', textDecoration: 'none', fontSize: '1.0625rem' }}>
                SAMHSA - Substance Abuse and Mental Health Services Administration →
              </a>
              <a href="https://www.psychologytoday.com" target="_blank" rel="noopener noreferrer" 
                style={{ color: '#D4B5B0', textDecoration: 'none', fontSize: '1.0625rem' }}>
                Psychology Today - Therapist Directory →
              </a>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 style={{ 
              fontSize: '2rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '16px'
            }}>
              Need More Support?
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8, marginBottom: '32px' }}>
              We are committed to connecting you with resources that support your healing journey. 
              If you need assistance finding specific resources, please don&apos;t hesitate to reach out.
            </p>
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
              Contact Us
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
