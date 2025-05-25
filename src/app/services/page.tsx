import Navigation from '@/components/Navigation'

const services = [
  {
    title: 'Signage Installations',
    description: 'Professional signage solutions for businesses and organizations.',
    features: [
      'Custom signboards',
      'Billboard design and installation',
      'Digital signage solutions',
      'Wayfinding systems',
      'Brand signage packages',
    ],
    icon: '🎨',
  },
  {
    title: 'Fire Safety Systems',
    description: 'Comprehensive fire safety solutions to protect your business and employees.',
    features: [
      'Fire detection systems',
      'Fire suppression equipment',
      'Safety training',
      'Compliance assessment',
      'Emergency planning',
    ],
    icon: '🚒',
  },
  {
    title: 'ICT Solutions',
    description: 'End-to-end information and communication technology solutions for modern businesses.',
    features: [
      'Network infrastructure setup',
      'Software implementation',
      'IT consulting',
      'System maintenance',
      'Technical support',
    ],
    icon: '💻',
  },
  {
    title: 'Supply of Goods',
    description: 'Comprehensive procurement and supply of office equipment, furniture, and general supplies.',
    features: [
      'Office furniture and equipment',
      'IT hardware and accessories',
      'General office supplies',
      'Procurement management',
      'Inventory control',
    ],
    icon: '📦',
  },
  {
    title: 'Office Infrastructure',
    description: 'Complete office setup and infrastructure solutions for optimal workspace functionality.',
    features: [
      'Office space planning',
      'Infrastructure installation',
      'Workstation setup',
      'Ergonomic solutions',
      'Maintenance services',
    ],
    icon: '🏢',
  },
  {
    title: 'General Consultancy',
    description: 'Expert business consulting services to drive organizational growth and efficiency.',
    features: [
      'Business process optimization',
      'Strategic planning',
      'Project management',
      'Change management',
      'Performance improvement',
    ],
    icon: '📊',
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-primary">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your business needs, delivered with expertise and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-gray-200 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-accent flex-shrink-0 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-accent/10 px-8 py-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-accent text-base font-medium rounded-md text-accent hover:bg-accent hover:text-white transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-200 mb-8">
              Ready to transform your business with our services?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 