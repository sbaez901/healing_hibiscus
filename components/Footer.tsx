import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Healing Hibiscus, PLLC</h3>
            <p className="text-sm text-gray-300">
              Mental Health Therapy and Consulting Services
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/therapy" className="text-gray-300 hover:text-[var(--color-pink-peach)] transition-colors">
                  Therapy
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-gray-300 hover:text-[var(--color-pink-peach)] transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[var(--color-pink-peach)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[var(--color-pink-peach)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>(774) 293-2690</li>
              <li>
                <a href="mailto:marienellylicsw@gmail.com" className="hover:text-[var(--color-pink-peach)] transition-colors">
                  marienellylicsw@gmail.com
                </a>
              </li>
              <li>204 Main Street<br />Shrewsbury, MA 01545</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Healing Hibiscus, PLLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

