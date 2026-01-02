import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="bg-[var(--color-grey-light)] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-[var(--color-black)] mb-8">
          Blog
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <p className="text-lg text-[var(--color-charcoal)] mb-6 leading-relaxed">
            Welcome to our blog. Here you&apos;ll find articles, resources, and insights about 
            mental health, healing, and wellness.
          </p>
          <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
            Check back soon for new content!
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block bg-[var(--color-red)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-red)]/90 transition-colors font-medium text-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

