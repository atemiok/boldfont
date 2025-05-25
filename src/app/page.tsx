import Navigation from '@/components/Navigation'
import BackgroundVideo from '@/components/BackgroundVideo'
import PreloadImages from '@/components/PreloadImages'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <PreloadImages />
      <BackgroundVideo />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Driving Innovation,<br />
            Delivering Excellence<br />
            Across Kenya
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your trusted partner in ICT Solutions, Signage & Fire Safety, Branding, Office Supplies, and Consultancy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF8C00] hover:bg-[#FFA500] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#FF8C00] text-base font-medium rounded-md text-white bg-transparent hover:bg-[#FF8C00] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Our Services
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">Our Work in Action</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Watch how we bring our expertise to life through our installations and projects
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#FF8C00] text-base font-medium rounded-md text-white bg-transparent hover:bg-[#FF8C00] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}
