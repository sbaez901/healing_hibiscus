import Link from 'next/link';

export default function ConsultingPage() {
  return (
    <div className="bg-[var(--color-grey-light)] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-[var(--color-black)] mb-8">
          Training & Consultation
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <p className="text-lg text-[var(--color-charcoal)] mb-6 leading-relaxed">
            In my trainings and consultations, I am committed to nurturing a learning environment 
            that fosters critical thinking, self-reflection, and practical skill-building. Whether 
            working with small groups or large organizations, my approach is grounded in the principles 
            of equity, justice, and empowerment.
          </p>
          
          <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
            Throughout my career, I have had the opportunity to work with a diverse range of organizations, 
            including community-based organizations, government agencies, educational institutions, and 
            healthcare providers. I am known for my humor, and ability to provide tailored and responsive 
            support that meets the unique needs of each organization and their staff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--color-pink-peach)]/30 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-[var(--color-black)] mb-6">
              Services Include:
            </h2>
            <ul className="space-y-3 text-[var(--color-charcoal)]">
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Professional Consulting</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Organizational Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Equity & Inclusion Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Trauma-Informed Practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Educational Workshops</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Strategic Planning</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--color-black)] mb-6">
              Who We Work With
            </h2>
            <ul className="space-y-3 text-[var(--color-charcoal)]">
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Community-based organizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Government agencies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Educational institutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Healthcare providers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--color-red)] mr-3">•</span>
                <span>Non-profit organizations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-semibold text-[var(--color-black)] mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] mb-4 leading-relaxed">
            Our consulting services are designed to challenge oppressive systems, center the needs of 
            marginalized communities, and create culturally affirming spaces where people and organizations 
            can thrive.
          </p>
          <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
            We work with organizations to move beyond performative DEI efforts, while our services center 
            the needs of those most impacted by marginalization. With deep roots in both clinical and 
            organizational expertise, we bring care and strategy together to support transformation on 
            every level.
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

