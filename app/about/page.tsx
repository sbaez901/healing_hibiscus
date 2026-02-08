'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9EFE3' }}>

      {/* Hero */}
      <section style={{ paddingTop: '180px', paddingBottom: '80px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '48px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 300px' }}
          >
            <h1 style={{ 
              fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 700,
              color: '#1a1a1a', 
              marginBottom: '24px',
              lineHeight: 1.1
            }}>
              About
            </h1>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#D4B5B0', borderRadius: '2px', marginBottom: '32px' }}></div>
            <p style={{ fontSize: '1.75rem', color: '#4a4a4a', fontWeight: 300 }}>
              Marienelly Vazquez, LICSW
            </p>
            <p style={{ fontSize: '1.125rem', color: '#6a6a6a', marginTop: '8px' }}>
              Licensed Independent Clinical Social Worker
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: '0 0 auto' }}
          >
            <Image
              src="/headshot-2.jpg"
              alt="Marienelly Vazquez, LICSW"
              width={320}
              height={400}
              style={{
                width: '320px',
                height: 'auto',
                borderRadius: '20px',
                objectFit: 'cover',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              }}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: '120px', paddingLeft: '40px', paddingRight: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '24px'
            }}>
              About Me
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                I&apos;m Marienelly Vazquez (she/her/ella), a bicultural (puertorriqueña) and bilingual (English and Spanish) therapist residing and practicing in the state of Massachusetts. I specialize in working with women, BIPOC, and non-binary individuals who are seeking to heal from trauma, navigate life transitions, or explore issues related to culture or racial identity. I&apos;m especially passionate about working with survivors of domestic and sexual violence who are looking for long-term support as they reclaim their power.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                As an Indigenous (Taíno), first-generation Latina, it is important to me to incorporate a decolonization lens that seeks to challenge and dismantle traditional power structures present in the therapeutic relationship and subsequent treatment. Traditional therapy can often devalue or dismiss the experiences of people of color. In my practice, I aim to honor each individual&apos;s values, traditions, and beliefs as they relate to their culture and to utilize them as sources of wisdom and strength throughout our sessions.
              </p>
            </div>
          </motion.div>

          {/* My Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              backgroundColor: '#E8E4E0', 
              padding: '48px', 
              borderRadius: '20px',
              marginBottom: '80px'
            }}
          >
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '24px'
            }}>
              My Approach
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                I believe that therapy should be a collaborative process that creates a safe space to identify areas of change, growth, and healing. When working with individuals, I strive to see the whole person through a systems framework. This allows me to view people within the context of their lived experiences rather than focusing solely on their &ldquo;presenting problem&rdquo; or symptoms related to seeking therapy.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                I would describe my approach as eclectic, as it incorporates many theories and modalities, including psychodynamic therapy, cognitive behavioral therapy, narrative therapy, dialectical behavior therapy, the liberation health model, intersectionality and feminist theories, trauma-informed therapy, social justice, and decolonization.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                Whether you are just beginning your journey in therapy or looking to continue the work you have already done, my hope for all my clients is to assist them in their transformation from survivor to thriver. Throughout my years in this field, I have consistently found that when the therapeutic relationship is grounded in compassionate care, respect, and dignity for the person, healing is possible.
              </p>
            </div>
          </motion.div>

          {/* Professional Background and Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '80px' }}
          >
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '24px'
            }}>
              Professional Background &amp; Work Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                In 2014, I earned my Bachelor&apos;s degree in Psychology and Sociology, with a minor in Criminal Justice, from the University of Massachusetts Amherst. During my time there, I interned at a local sexuality shop in Northampton, MA, the Regional Women&apos;s Correctional Center in Chicopee, and worked as a teacher&apos;s assistant and a laboratory assistant in the Cognitive Psychology laboratories. I also volunteered as a counselor/advocate at the Center for Women and Community in Amherst, MA. In this role, I accompanied survivors of sexual assault and violence to local emergency rooms for evidence collection and answered the organization&apos;s 24/7 hotline, providing information and crisis support.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                In 2015, I began my career as a rape crisis advocate, with a focus on responding to campus sexual assault. For seven years, I assisted in growing the initiative from a single position into a team of campus-based advocates across Central Massachusetts. I conducted programming for school judicial boards, Title IX officers, new student orientations, and residential life staff, while also providing ongoing counseling and advocacy services to survivors of sexual violence. During this time, I earned my Master of Social Work (MSW) from Boston University in 2019 and worked per diem providing therapy to children, adults, and families at a local non-profit organization.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                In 2022, I transitioned to a local domestic violence organization as the Clinical Director of its counseling program. I was responsible for overseeing Domestic Violence 101 classes, the MSW internship program, and providing direct therapy to clients experiencing PTSD, anxiety, or depression related to domestic violence or coercive control.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                In 2025, I made the decision to begin private practice and established The Healing Hibiscus, PLLC. The official flower of Puerto Rico is the Flor de Maga, which is informally referred to as the &ldquo;Puerto Rican hibiscus.&rdquo;
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                <Image
                  src="/hibiscus-flower.png"
                  alt="Flor de Maga — the Puerto Rican hibiscus"
                  width={500}
                  height={375}
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Land Acknowledgment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              backgroundColor: '#E8E4E0', 
              padding: '48px', 
              borderRadius: '20px',
              marginBottom: '80px'
            }}
          >
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontFamily: "'Crimson Text', serif",
              fontWeight: 600,
              color: '#1a1a1a', 
              marginBottom: '24px'
            }}>
              Land Acknowledgment
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                Marienelly respectfully acknowledges the fact that this work is being conducted on the ancestral and unceded lands of the Agawam and Nipmuc People of Massachusetts. She also acknowledges her debt to enslaved Africans, whose labor and suffering built and grew the economy and infrastructure of a nation that does not recognize their humanity.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#4a4a4a', lineHeight: 1.8 }}>
                For more information regarding the land you reside on, and these tribes, visit:{' '}
                <a 
                  href="https://native-land.ca/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#8B6F5E', textDecoration: 'underline' }}
                >
                  native-land.ca
                </a>
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', paddingTop: '40px' }}
          >
            <Link
              href="/contact"
              className="cta-button"
              style={{ 
                display: 'inline-block',
                backgroundColor: '#D4B5B0', 
                color: '#1a1a1a', 
                padding: '24px 64px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1.25rem',
                fontWeight: 500
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
