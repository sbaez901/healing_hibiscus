export default function ContactPage() {
  return (
    <div className="bg-[var(--color-grey-light)] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-[var(--color-black)] mb-8">
          Contact Us
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-[var(--color-black)] mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4 text-[var(--color-charcoal)]">
              <div>
                <strong className="text-[var(--color-black)] block mb-2">Phone:</strong>
                <a href="tel:7742932690" className="text-[var(--color-red)] hover:underline">
                  (774) 293-2690
                </a>
              </div>
              <div>
                <strong className="text-[var(--color-black)] block mb-2">Email:</strong>
                <a href="mailto:marienellylicsw@gmail.com" className="text-[var(--color-red)] hover:underline">
                  marienellylicsw@gmail.com
                </a>
              </div>
              <div>
                <strong className="text-[var(--color-black)] block mb-2">Address:</strong>
                <p>
                  204 Main Street<br />
                  Shrewsbury, MA 01545
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-pink-peach)]/30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[var(--color-black)] mb-6">
              Office Hours
            </h2>
            <p className="text-[var(--color-charcoal)] mb-4">
              Currently offering virtual appointments in Spanish and English.
            </p>
            <p className="text-[var(--color-charcoal)]">
              In-person appointments available in Shrewsbury, Massachusetts.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8" id="request">
          <h2 className="text-3xl font-semibold text-[var(--color-black)] mb-6">
            Request Therapy
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] mb-6 leading-relaxed">
            Ready to begin your healing journey? Please contact us to schedule a consultation 
            or learn more about our services.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-[var(--color-black)] font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-[var(--color-grey-dark)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-[var(--color-black)] font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-[var(--color-grey-dark)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-[var(--color-black)] font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-[var(--color-grey-dark)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]"
                placeholder="(774) 293-2690"
              />
            </div>
            <div>
              <label className="block text-[var(--color-black)] font-medium mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-[var(--color-grey-dark)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]"
                placeholder="Tell us about how we can help..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-red)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium"
            >
              Send Message
            </button>
          </div>
          <p className="text-sm text-[var(--color-grey-dark)] mt-4">
            Note: This is a demo form. Please contact us directly via phone or email for appointments.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-[var(--color-black)] mb-4">
            Insurance & Payment
          </h2>
          <p className="text-[var(--color-charcoal)] mb-4">
            Please contact us to discuss insurance coverage and payment options. 
            We work with various insurance providers and offer sliding fee scale options.
          </p>
        </div>
      </div>
    </div>
  );
}

