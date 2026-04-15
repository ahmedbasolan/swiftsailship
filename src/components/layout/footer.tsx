import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-light dark:bg-background-dark pt-12 pb-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex items-center space-x-3">
            <img src="/assets/img/Untitled design.png" alt="Swift Sail Logo" className="h-14 w-auto" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-secondary dark:text-white tracking-wider uppercase leading-none">Swift Sail</span>
              <span className="text-[0.6rem] text-primary uppercase tracking-[0.2em]">Shipping L.L.C.</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-secondary dark:text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/get-quote" className="hover:text-primary transition-colors">Get Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-secondary dark:text-white mb-4 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-secondary dark:text-white mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-primary"></i>
                <a href="tel:+971553424700" className="hover:text-primary transition-colors">+971 55 342 4700</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-primary"></i>
                <a href="mailto:info@swiftsailship.com" className="hover:text-primary transition-colors">info@swiftsailship.com</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>Dubai, Abu Hail, Tanvi Business Centre, M - 101</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Swift Sail Shipping L.L.C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
