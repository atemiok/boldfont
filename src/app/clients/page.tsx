import Navigation from '@/components/Navigation'

const clientGroups = [
  {
    title: 'Government Agencies',
    description: 'Comprehensive solutions for public sector institutions.',
    icon: '🏛️',
  },
  {
    title: 'Private Companies',
    description: 'Tailored services for businesses of all sizes.',
    icon: '🏢',
  },
  {
    title: 'Educational Institutions',
    description: 'Specialized solutions for schools and universities.',
    icon: '🎓',
  },
  {
    title: 'Healthcare Facilities',
    description: 'Essential services for medical institutions.',
    icon: '🏥',
  },
]

export default function Clients() {
  return (
    <main className="min-h-screen bg-primary">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl font-bold text-white mb-4">Our Clients</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              We serve a diverse range of clients across Kenya, delivering tailored solutions to meet their unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {clientGroups.map((group) => (
              <div key={group.title} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/20">
                <div className="text-4xl mb-4">{group.icon}</div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">{group.title}</h2>
                <p className="text-gray-200">{group.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/20 mb-16">
            <h2 className="font-heading text-3xl font-bold text-white mb-6 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Quality Service</h3>
                <p className="text-gray-200">Consistently delivering excellence in every project</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Fast Delivery</h3>
                <p className="text-gray-200">Quick turnaround times without compromising quality</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Expert Support</h3>
                <p className="text-gray-200">Dedicated team of professionals at your service</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Join our growing list of satisfied clients across Kenya.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 