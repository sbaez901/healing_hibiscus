'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
            <Link href="/about" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>
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
              About
            </h1>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#D4B5B0', borderRadius: '2px', marginBottom: '32px' }}></div>
            <p style={{ fontSize: '1.75rem', color: '#4a4a4a', fontWeight: 300 }}>
              Marienelly Vazquez, LICSW
            </p>
            <p style={{ fontSize: '1.125rem', color: '#6a6a6a', marginTop: '8px' }}>
              Licensed Independent Clinical Social Worker
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: '120px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '24px'
            }}>
              My Philosophy
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                As a politicized healer, I believe therapy can be a transformational and liberating process. 
                I welcome you to bring your whole self, by creating a space where you will be met with 
                authenticity and non-judgement.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                I am passionate about bearing witness to a multitude of human stories and experiences. 
                In my practice, as in my life, I am committed to increasing access to healing, justice, 
                and care for those who are most marginalized.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                I focus on working with BIPOC and Latinx clients, transgender and gender diverse individuals, 
                folks from queer, bisexual, asexual, lesbian, and gay communities, folks who practice BDSM 
                and/or non-monogamy, activists, neurodivergent people, and survivors of trauma and oppression.
              </p>
            </div>
          </motion.div>

          {/* Approach */}
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
              fontSize: '2.25rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '24px'
            }}>
              My Approach
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                My therapeutic approach integrates influences from a range of theoretical frameworks including 
                social justice, trauma-focused, liberation health, disability justice, mindfulness, psychodynamic, 
                and CBT (cognitive-behavioral therapy).
              </p>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                I work from a liberation health, trauma-informed, and transformative justice perspective that 
                seeks to integrate the impacts of systems of oppression, cultural influences, and personal 
                experiences into the liberatory and healing journeys of my clients.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '24px'
            }}>
              Experience
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
              I have nearly two decades of experience working with survivors of trauma, people of color, 
              and LGBTQA+ communities through advocacy, clinical supervision, individual and group therapy, 
              mentorship, and organizational planning.
            </p>
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
              Get in Touch
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
