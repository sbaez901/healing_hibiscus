import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[var(--color-grey-light)]">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-black)] mb-6">
          Healing Begins Here.
        </h1>
        <p className="text-xl text-[var(--color-charcoal)] mb-4">
          Therapy available in-person in Shrewsbury, Massachusetts or via telehealth.
        </p>
        <p className="text-lg text-[var(--color-charcoal)] mb-8">
          Terapia disponible en <strong>español</strong>!
        </p>
        <Link
          href="/contact#request"
          className="inline-block bg-[var(--color-red)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium text-lg"
        >
          Request Therapy
        </Link>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[var(--color-black)] text-center mb-16">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Specializing in */}
            <div className="bg-[var(--color-pink-peach)]/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[var(--color-black)] mb-6">
                Specializing in:
              </h3>
              <ul className="space-y-3 text-[var(--color-charcoal)]">
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Women&apos;s Issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Healing from Abuse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Cultural/Racial Issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Family Conflict or Estrangement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Life Transitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Trauma/PTSD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Depression</span>
                </li>
              </ul>
            </div>

            {/* Right Column - Services Include */}
            <div className="bg-[var(--color-pink-peach)]/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[var(--color-black)] mb-6">
                Services Include:
              </h3>
              <ul className="space-y-3 text-[var(--color-charcoal)]">
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>1:1 Therapy for Adults</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Professional Consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Peer Supervision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Individual Supervision for:</span>
                </li>
                <li className="ml-6 text-[var(--color-grey-dark)]">
                  - MSW Interns
                </li>
                <li className="ml-6 text-[var(--color-grey-dark)]">
                  - LCSW&apos;s
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Group Supervision for Non-Profits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-red)] mr-3">•</span>
                  <span>Educational Workshops</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white border border-[var(--color-grey-dark)]/20 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">
                Individual Therapy
              </h3>
              <p className="text-[var(--color-charcoal)] mb-4">
                As a mental health therapist, I believe my role is to support you in navigating life, relationships, and mental health in ways that are aligned with your needs and values.
              </p>
              <Link
                href="/therapy"
                className="text-[var(--color-red)] hover:underline font-medium"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-white border border-[var(--color-grey-dark)]/20 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">
                Clinical Supervision
              </h3>
              <p className="text-[var(--color-charcoal)] mb-4">
                As a clinical supervisor, I thrive in working collaboratively with my supervisees, acting as a thought partner, coach, mentor, and supervisor.
              </p>
              <Link
                href="/supervision"
                className="text-[var(--color-red)] hover:underline font-medium"
              >
                Learn more →
              </Link>
            </div>

            <div className="bg-white border border-[var(--color-grey-dark)]/20 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">
                Training & Consultation
              </h3>
              <p className="text-[var(--color-charcoal)] mb-4">
                In my trainings and consultations, I am committed to nurturing a learning environment that fosters critical thinking, self-reflection, and practical skill-building.
              </p>
              <Link
                href="/consulting"
                className="text-[var(--color-red)] hover:underline font-medium"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-[var(--color-pink-peach)]/20 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[var(--color-black)] text-center mb-8">
            About The Healing Hibiscus
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] text-center mb-8 leading-relaxed">
            As a politicized healer, I believe therapy can be a transformational and liberating process. 
            I welcome you to bring your whole self, by creating a space where you will be met with authenticity and non-judgement.
          </p>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-block bg-[var(--color-red)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[var(--color-black)] mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-[var(--color-charcoal)] mb-8">
            Contact us today to schedule a consultation or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#request"
              className="inline-block bg-[var(--color-red)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium"
            >
              Request Therapy
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-[var(--color-red)] text-[var(--color-red)] px-8 py-3 rounded-full hover:bg-[var(--color-red)]/10 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
