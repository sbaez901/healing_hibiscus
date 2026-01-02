'use client';

import { ServiceCard } from './ServiceCard';

export function ServiceCardsSection() {
  const cards = [
    {
      title: 'Individual Therapy',
      description:
        'As a mental health therapist, I believe my role is to support you in navigating life, relationships, and mental health in ways that are aligned with your needs and values.',
    },
    {
      title: 'Clinical Supervision',
      description:
        'As a clinical supervisor, I thrive in working collaboratively with my supervisees, acting as a thought partner, coach, mentor, and supervisor.',
    },
    {
      title: 'Training & Consultation',
      description:
        'In my trainings and consultations, I am committed to nurturing a learning environment that fosters critical thinking, self-reflection, and practical skill-building.',
    },
  ];

  return (
    <section className="py-32 md:py-48 bg-[#FBF4EC] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <ServiceCard
              key={index}
              title={card.title}
              description={card.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

