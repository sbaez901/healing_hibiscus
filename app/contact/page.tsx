'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xlgwddpv', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9EFE3' }}>

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
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>

            {/* Success Message */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  backgroundColor: '#e8f5e9',
                  border: '1px solid #a5d6a7',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  marginBottom: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p style={{ fontWeight: 600, color: '#2e7d32', marginBottom: '4px' }}>Message sent successfully!</p>
                  <p style={{ color: '#388e3c', fontSize: '0.9375rem' }}>Thank you for reaching out. We&apos;ll get back to you soon.</p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  backgroundColor: '#fbe9e7',
                  border: '1px solid #ef9a9a',
                  borderRadius: '12px',
                  padding: '20px 24px',
                  marginBottom: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c62828" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <div>
                  <p style={{ fontWeight: 600, color: '#c62828', marginBottom: '4px' }}>Something went wrong</p>
                  <p style={{ color: '#d32f2f', fontSize: '0.9375rem' }}>Please try again, or email us directly at marienellylicsw@gmail.com</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    style={{ 
                      width: '100%', 
                      padding: '16px', 
                      border: '1px solid #e5e5e5', 
                      borderRadius: '10px',
                      fontSize: '1rem',
                      backgroundColor: '#fafafa',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 000-0000"
                    style={{ 
                      width: '100%', 
                      padding: '16px', 
                      border: '1px solid #e5e5e5', 
                      borderRadius: '10px',
                      fontSize: '1rem',
                      backgroundColor: '#fafafa',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                    }}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    border: '1px solid #e5e5e5', 
                    borderRadius: '10px',
                    fontSize: '1rem',
                    backgroundColor: '#fafafa',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                  What are you looking for? *
                </label>
                <select
                  name="service"
                  required
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    border: '1px solid #e5e5e5', 
                    borderRadius: '10px',
                    fontSize: '1rem',
                    backgroundColor: '#fafafa',
                    color: '#4a4a4a',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236a6a6a' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                  }}
                >
                  <option value="">Select a service...</option>
                  <option value="Individual Therapy">Individual Therapy</option>
                  <option value="Clinical Supervision">Clinical Supervision</option>
                  <option value="Training & Consultation">Training &amp; Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about how we can help..."
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    border: '1px solid #e5e5e5', 
                    borderRadius: '10px',
                    fontSize: '1rem',
                    backgroundColor: '#fafafa',
                    resize: 'vertical',
                    minHeight: '120px',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="cta-button"
                style={{ 
                  backgroundColor: status === 'submitting' ? '#c9b3ae' : '#D4B5B0', 
                  color: '#1a1a1a', 
                  padding: '20px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                  marginTop: '8px',
                  opacity: status === 'submitting' ? 0.7 : 1,
                  transition: 'all 0.2s ease',
                }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
