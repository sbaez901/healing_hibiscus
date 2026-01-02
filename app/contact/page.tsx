'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactPage() {
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
                fontWeight: 600
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '180px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
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
              Get in Touch
            </h1>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#D4B5B0', borderRadius: '2px', margin: '0 auto 32px auto' }}></div>
            <p style={{ fontSize: '1.375rem', color: '#4a4a4a', maxWidth: '600px', margin: '0 auto' }}>
              Ready to begin your healing journey? Reach out to schedule a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{ paddingBottom: '120px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Contact Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '80px' }}>
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
                Contact Information
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6a6a6a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone</p>
                  <a href="tel:7742932690" style={{ fontSize: '1.25rem', color: '#1a1a1a', textDecoration: 'none' }}>
                    (774) 293-2690
                  </a>
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6a6a6a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</p>
                  <a href="mailto:marienellylicsw@gmail.com" style={{ fontSize: '1.25rem', color: '#1a1a1a', textDecoration: 'none' }}>
                    marienellylicsw@gmail.com
                  </a>
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#6a6a6a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Address</p>
                  <p style={{ fontSize: '1.25rem', color: '#1a1a1a' }}>
                    204 Main Street<br />
                    Shrewsbury, MA 01545
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ backgroundColor: '#E8E4E0', padding: '40px', borderRadius: '16px' }}
            >
              <h2 style={{ 
                fontSize: '1.75rem', 
                fontFamily: "'Crimson Text', serif",
                fontWeight: 600,
                color: '#1a1a1a', 
                marginBottom: '24px'
              }}>
                Availability
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.7 }}>
                  Virtual appointments available in Spanish and English.
                </p>
                <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.7 }}>
                  In-person appointments in Shrewsbury, Massachusetts.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              backgroundColor: 'white', 
              padding: '48px', 
              borderRadius: '20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <h2 style={{ 
              fontSize: '2rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '16px'
            }}>
              Request Consultation
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#4a4a4a', marginBottom: '32px' }}>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    border: '1px solid #e5e5e5', 
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    border: '1px solid #e5e5e5', 
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about how we can help..."
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    border: '1px solid #e5e5e5', 
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{ 
                  backgroundColor: '#D4B5B0', 
                  color: '#1a1a1a', 
                  padding: '20px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                Send Message
              </button>
            </form>
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
