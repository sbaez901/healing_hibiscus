import Link from 'next/link';

export default function SupervisionPage() {
  return (
    <div className="bg-[var(--color-grey-light)] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-[var(--color-black)] mb-8">
          Clinical Supervision
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <p className="text-lg text-[var(--color-charcoal)] mb-6 leading-relaxed">
            As a clinical supervisor, I thrive in working collaboratively with my supervisees, 
            acting as a thought partner, coach, mentor, and supervisor. I believe that personal 
            and professional growth arises from a foundation of integrity, curiosity, courage, and humor.
          </p>
          
          <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
            Over the years, I have gained significant experience in providing clinical supervision 
            to diverse professionals such as clinical and macro social workers, counselors, advocates, 
            and clinicians, in various settings including community health, non-profit, and private practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--color-pink-peach)]/30 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-[var(--color-black)] mb-6">
              Supervision Services:
            </h2>
            <ul className="space-y-3 text-[var(--color-charcoal)]">
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Individual Supervision</span>
              </li>
              <li className="ml-6 text-[var(--color-grey-dark)] mb-2">
                - MSW Interns
              </li>
              <li className="ml-6 text-[var(--color-grey-dark)] mb-4">
                - LCSW&apos;s
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Peer Supervision</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Group Supervision for Non-Profits</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--color-black)] mb-6">
              Supervision Approach
            </h2>
            <ul className="space-y-4 text-[var(--color-charcoal)]">
              <li>
                <strong className="text-[var(--color-black)]">Collaborative:</strong> Working together as thought partners
              </li>
              <li>
                <strong className="text-[var(--color-black)]">Supportive:</strong> Creating a safe space for growth
              </li>
              <li>
                <strong className="text-[var(--color-black)]">Trauma-Informed:</strong> Grounded in liberation health principles
              </li>
              <li>
                <strong className="text-[var(--color-black)]">Experienced:</strong> Nearly two decades of clinical experience
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-semibold text-[var(--color-black)] mb-6">
            Who I Work With
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] mb-4 leading-relaxed">
            I provide supervision to a diverse range of professionals including:
          </p>
          <ul className="space-y-2 text-[var(--color-charcoal)] mb-4">
            <li>• Clinical and macro social workers</li>
            <li>• Counselors and therapists</li>
            <li>• Advocates and case managers</li>
            <li>• Clinicians in various settings</li>
          </ul>
          <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
            I work with professionals in community health, non-profit organizations, and private practice settings.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-red)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium text-lg"
          >
            Contact for Supervision
          </Link>
        </div>
      </div>
    </div>
  );
}

