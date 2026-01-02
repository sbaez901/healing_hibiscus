'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[var(--color-grey-dark)]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-transparent.png"
              alt="The Healing Hibiscus"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors font-medium">
                About
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-[var(--color-grey-dark)]/20 shadow-lg rounded-md py-2">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-pink-peach)]/30 hover:text-[var(--color-red)] transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about#team"
                    className="block px-4 py-2 text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-pink-peach)]/30 hover:text-[var(--color-red)] transition-colors"
                  >
                    Meet Our Team
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-pink-peach)]/30 hover:text-[var(--color-red)] transition-colors"
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors font-medium">
                Our Services
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[var(--color-grey-dark)]/20 shadow-lg rounded-md py-2">
                  <Link
                    href="/therapy"
                    className="block px-4 py-2 text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-pink-peach)]/30 hover:text-[var(--color-red)] transition-colors"
                  >
                    Therapy
                  </Link>
                  <Link
                    href="/consulting"
                    className="block px-4 py-2 text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-pink-peach)]/30 hover:text-[var(--color-red)] transition-colors"
                  >
                    Organizational Consulting
                  </Link>
                  <Link
                    href="/supervision"
                    className="block px-4 py-2 text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-pink-peach)]/30 hover:text-[var(--color-red)] transition-colors"
                  >
                    Clinical Supervision
                  </Link>
                  <Link
                    href="/resources"
                    className="block px-4 py-2 text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-pink-peach)]/30 hover:text-[var(--color-red)] transition-colors"
                  >
                    Resources
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors font-medium"
            >
              Contact
            </Link>

            <Link
              href="/contact#request"
              className="bg-[var(--color-red)] text-white px-6 py-2 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium"
            >
              Request Therapy
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--color-charcoal)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--color-grey-dark)]/20 py-4">
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="w-full text-left text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors font-medium flex items-center justify-between"
                >
                  About
                  <svg className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aboutOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/about"
                      className="block text-sm text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/about#team"
                      className="block text-sm text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Meet Our Team
                    </Link>
                    <Link
                      href="/blog"
                      className="block text-sm text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors font-medium flex items-center justify-between"
                >
                  Our Services
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/therapy"
                      className="block text-sm text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Therapy
                    </Link>
                    <Link
                      href="/consulting"
                      className="block text-sm text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Organizational Consulting
                    </Link>
                    <Link
                      href="/supervision"
                      className="block text-sm text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Clinical Supervision
                    </Link>
                    <Link
                      href="/resources"
                      className="block text-sm text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Resources
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block text-[var(--color-charcoal)] hover:text-[var(--color-red)] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/contact#request"
                className="block bg-[var(--color-red)] text-white px-6 py-2 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Therapy
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

