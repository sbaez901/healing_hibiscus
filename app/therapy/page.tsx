import Link from 'next/link';

export default function TherapyPage() {
  return (
    <div className="bg-[var(--color-grey-light)] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-[var(--color-black)] mb-8">
          Individual Therapy
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <p className="text-lg text-[var(--color-charcoal)] mb-6 leading-relaxed">
            As a mental health therapist, I believe my role is to support you in navigating life, 
            relationships, and mental health in ways that are aligned with your needs and values. 
            I do this through an intersectional and strengths-based lens that is grounded in the 
            unique experiences of each individual.
          </p>
          
          <p className="text-lg text-[var(--color-charcoal)] mb-6 leading-relaxed">
            My therapeutic approach integrates influences from a range of theoretical frameworks 
            including social justice, trauma-focused, liberation health, disability justice, 
            mindfulness, psychodynamic, and CBT (cognitive-behavioral therapy).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--color-pink-peach)]/30 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-[var(--color-black)] mb-6">
              Specializing in:
            </h2>
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

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--color-black)] mb-6">
              Therapy Details
            </h2>
            <ul className="space-y-4 text-[var(--color-charcoal)]">
              <li>
                <strong className="text-[var(--color-black)]">Format:</strong> 1:1 Therapy for Adults
              </li>
              <li>
                <strong className="text-[var(--color-black)]">Location:</strong> In-person in Shrewsbury, MA or via telehealth
              </li>
              <li>
                <strong className="text-[var(--color-black)]">Languages:</strong> English and Spanish (Español)
              </li>
              <li>
                <strong className="text-[var(--color-black)]">Approach:</strong> Trauma-informed, liberation health, intersectional, strengths-based
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-semibold text-[var(--color-black)] mb-6">
            My Approach
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] mb-4 leading-relaxed">
            As a politicized healer, I believe therapy can be a transformational and liberating process. 
            I welcome you to bring your whole self, by creating a space where you will be met with 
            authenticity and non-judgement.
          </p>
          <p className="text-lg text-[var(--color-charcoal)] mb-4 leading-relaxed">
            I am passionate about bearing witness to a multitude of human stories and experiences. 
            In my practice, as in my life, I am committed to increasing access to healing, justice, 
            and care for those who are most marginalized.
          </p>
          <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
            I focus on working with BIPOC and Latinx clients, transgender and gender diverse individuals, 
            folks from queer, bisexual, asexual, lesbian, and gay communities, folks who practice BDSM 
            and/or non-monogamy, activists, neurodivergent people, and survivors of trauma and oppression.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact#request"
            className="inline-block bg-[var(--color-red)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium text-lg"
          >
            Request Therapy
          </Link>
        </div>
      </div>
    </div>
  );
}

