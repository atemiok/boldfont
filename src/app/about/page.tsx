import Navigation from '@/components/Navigation'

const values = [
  {
    title: 'Efficiency',
    description: 'Streamlined processes and timely delivery of services.',
    icon: '⚡',
  },
  {
    title: 'Quality',
    description: 'Commitment to excellence in every aspect of our work.',
    icon: '✨',
  },
  {
    title: 'Customer Focus',
    description: 'Understanding and exceeding client expectations.',
    icon: '🤝',
  },
  {
    title: 'Compliance',
    description: 'Adherence to industry standards and regulations.',
    icon: '📋',
  },
  {
    title: 'Integrity',
    description: 'Honest and ethical business practices.',
    icon: '🔒',
  },
]

const strengths = [
  {
    title: 'Multi-category Vendor',
    description: 'Registered with multiple government agencies for comprehensive service delivery.',
    icon: '🏢',
  },
  {
    title: 'Rapid Logistics',
    description: 'Efficient delivery and installation services across Kenya.',
    icon: '🚚',
  },
  {
    title: 'Certified Partners',
    description: 'Strategic partnerships with leading brands and manufacturers.',
    icon: '🤝',
  },
  {
    title: 'Tendering Expertise',
    description: 'Specialized in government and corporate tendering processes.',
    icon: '📋',
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-primary">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl font-bold text-white mb-4">About Us</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Your trusted partner in comprehensive business solutions across Kenya.
            </p>
          </div>

          {/* Company Overview */}
          <div className="mb-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/20">
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Company Overview</h2>
              <div className="prose prose-lg text-gray-200">
                <p>
                  Bold Font Limited is a registered Kenyan company specializing in a wide range of services including ICT solutions, consultancy, and comprehensive business services. Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses across Kenya.
                </p>
                <p>
                  With our extensive experience and dedicated team, we provide end-to-end solutions that help organizations achieve their goals and drive growth. Our multi-category vendor status and strategic partnerships enable us to deliver high-quality services across various sectors.
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/20">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-200">
                To be the leading provider of comprehensive business solutions in Kenya, known for our innovation, reliability, and commitment to excellence.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/20">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-200">
                To deliver exceptional value to our clients through innovative solutions, professional expertise, and unwavering commitment to quality and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/20">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-200">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Strengths */}
          <div className="mb-20">
            <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">Our Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strengths.map((strength) => (
                <div key={strength.title} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/20">
                  <div className="text-4xl mb-4">{strength.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{strength.title}</h3>
                  <p className="text-gray-200">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Let's discuss how we can help transform your business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 