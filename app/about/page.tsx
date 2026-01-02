import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-grey-light)] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-[var(--color-black)] mb-8">
          About Us
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-semibold text-[var(--color-black)] mb-6" id="team">
            Meet Our Team
          </h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-[var(--color-black)] mb-4">
              Marienelly Vazquez, LICSW
            </h3>
            <p className="text-lg text-[var(--color-charcoal)] mb-4 leading-relaxed">
              Licensed Independent Clinical Social Worker
            </p>
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
        </div>

        <div className="bg-[var(--color-pink-peach)]/30 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-[var(--color-black)] mb-6">
            My Approach
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] mb-4 leading-relaxed">
            My therapeutic approach integrates influences from a range of theoretical frameworks including 
            social justice, trauma-focused, liberation health, disability justice, mindfulness, psychodynamic, 
            and CBT (cognitive-behavioral therapy).
          </p>
          <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
            I work from a liberation health, trauma-informed, and transformative justice perspective that 
            seeks to integrate the impacts of systems of oppression, cultural influences, and personal 
            experiences into the liberatory and healing journeys of my clients.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-semibold text-[var(--color-black)] mb-6">
            Experience
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
            I have nearly two decades of experience working with survivors of trauma, people of color, 
            and LGBTQA+ communities through advocacy, clinical supervision, individual and group therapy, 
            mentorship, and organizational planning.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-red)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

