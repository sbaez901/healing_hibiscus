'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/therapy', label: 'Therapy' },
    { href: '/supervision', label: 'Supervision' },
    { href: '/consulting', label: 'Consulting' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled || !isHome
            ? 'rgba(249, 239, 227, 0.97)'
            : 'transparent',
          backdropFilter: scrolled || !isHome ? 'blur(12px)' : 'none',
          borderBottom: scrolled || !isHome ? '1px solid rgba(212, 181, 176, 0.3)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '14px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image
              src="/logo-transparent.png"
              alt="The Healing Hibiscus"
              width={60}
              height={60}
              style={{
                width: '60px',
                height: 'auto',
                mixBlendMode: 'darken',
                opacity: scrolled || !isHome ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive(link.href) ? '#1a1a1a' : '#5a5a5a',
                  textDecoration: 'none',
                  fontSize: '0.925rem',
                  fontWeight: isActive(link.href) ? 600 : 400,
                  padding: '8px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive(link.href) ? 'rgba(212, 181, 176, 0.2)' : 'transparent',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.href)) {
                    e.currentTarget.style.color = '#1a1a1a';
                    e.currentTarget.style.backgroundColor = 'rgba(212, 181, 176, 0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.href)) {
                    e.currentTarget.style.color = '#5a5a5a';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                backgroundColor: '#D4B5B0',
                color: '#1a1a1a',
                padding: '10px 24px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.925rem',
                marginLeft: '8px',
                transition: 'all 0.2s ease',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c9a9a3';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 181, 176, 0.4)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4B5B0';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 110,
            }}
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '2px',
                  position: 'absolute',
                  transition: 'all 0.3s ease',
                  top: mobileMenuOpen ? '8px' : '0',
                  transform: mobileMenuOpen ? 'rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '2px',
                  position: 'absolute',
                  top: '8px',
                  transition: 'all 0.3s ease',
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '2px',
                  position: 'absolute',
                  transition: 'all 0.3s ease',
                  top: mobileMenuOpen ? '8px' : '16px',
                  transform: mobileMenuOpen ? 'rotate(-45deg)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 90,
              backgroundColor: 'rgba(249, 239, 227, 0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '16px 32px',
                    fontSize: '1.5rem',
                    fontFamily: "'Crimson Text', serif",
                    fontWeight: isActive(link.href) ? 700 : 400,
                    color: isActive(link.href) ? '#1a1a1a' : '#4a4a4a',
                    textDecoration: 'none',
                    textAlign: 'center',
                    borderBottom: isActive(link.href) ? '2px solid #D4B5B0' : '2px solid transparent',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              style={{ marginTop: '16px' }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#D4B5B0',
                  color: '#1a1a1a',
                  padding: '16px 48px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                }}
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
