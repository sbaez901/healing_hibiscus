'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        padding: '80px 40px 48px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '12px',
                lineHeight: 1.3,
              }}
            >
              The Healing Hibiscus
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
              Mental Health Therapy &amp; Consulting Services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: '#D4B5B0',
                marginBottom: '24px',
              }}
            >
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/therapy', label: 'Individual Therapy' },
                { href: '/supervision', label: 'Clinical Supervision' },
                { href: '/consulting', label: 'Training & Consultation' },
                { href: '/about', label: 'About' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#D4B5B0'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: '#D4B5B0',
                marginBottom: '24px',
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem' }}>
              <a
                href="tel:7742932690"
                style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#D4B5B0'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                (774) 293-2690
              </a>
              <a
                href="mailto:marienellylicsw@gmail.com"
                style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#D4B5B0'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                marienellylicsw@gmail.com
              </a>
              <p style={{ lineHeight: 1.6 }}>
                204 Main Street<br />
                Shrewsbury, MA 01545
              </p>
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: '#D4B5B0',
                marginBottom: '24px',
              }}
            >
              Availability
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem' }}>
              <p>In-person &amp; telehealth</p>
              <p>English &amp; Spanish</p>
              <p style={{ fontStyle: 'italic', fontFamily: "'Crimson Text', serif", fontSize: '1rem' }}>
                Terapia disponible en español
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8125rem' }}>
            © {new Date().getFullYear()} The Healing Hibiscus, PLLC. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8125rem' }}>
            Shrewsbury, Massachusetts
          </p>
        </div>
      </div>
    </footer>
  );
}
