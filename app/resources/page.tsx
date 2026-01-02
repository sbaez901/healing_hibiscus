import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="bg-[var(--color-grey-light)] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-[var(--color-black)] mb-8">
          Resources
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-semibold text-[var(--color-black)] mb-6">
            Helpful Resources
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] mb-6 leading-relaxed">
            Here are some resources that may be helpful on your healing journey. This list is 
            continuously updated with new resources and information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--color-pink-peach)]/30 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-[var(--color-black)] mb-4">
              Crisis Resources
            </h3>
            <ul className="space-y-3 text-[var(--color-charcoal)]">
              <li>
                <strong className="text-[var(--color-black)]">National Suicide Prevention Lifeline:</strong><br />
                <a href="tel:988" className="text-[var(--color-red)] hover:underline">988</a>
              </li>
              <li>
                <strong className="text-[var(--color-black)]">Crisis Text Line:</strong><br />
                Text HOME to <a href="sms:741741" className="text-[var(--color-red)] hover:underline">741741</a>
              </li>
              <li>
                <strong className="text-[var(--color-black)]">National Domestic Violence Hotline:</strong><br />
                <a href="tel:8007997233" className="text-[var(--color-red)] hover:underline">1-800-799-7233</a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--color-black)] mb-4">
              Mental Health Resources
            </h3>
            <ul className="space-y-3 text-[var(--color-charcoal)]">
              <li>
                <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" className="text-[var(--color-red)] hover:underline">
                  NAMI - National Alliance on Mental Illness
                </a>
              </li>
              <li>
                <a href="https://www.samhsa.gov" target="_blank" rel="noopener noreferrer" className="text-[var(--color-red)] hover:underline">
                  SAMHSA - Substance Abuse and Mental Health Services Administration
                </a>
              </li>
              <li>
                <a href="https://www.psychologytoday.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-red)] hover:underline">
                  Psychology Today - Therapist Directory
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-semibold text-[var(--color-black)] mb-6">
            Community Resources
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] mb-4 leading-relaxed">
            We are committed to connecting you with resources that support your healing journey. 
            If you need assistance finding specific resources, please don&apos;t hesitate to reach out.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-red)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

