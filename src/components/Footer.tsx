/* eslint-disable prefer-rest-params */
import { useEffect, useState, useCallback } from "react"
import { Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // eslint-disable-next-line @typescript-eslint/ban-types
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean
    return function (this: never) {
      const args = arguments
      
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  const handleScroll = useCallback(
    throttle(() => {
      setShowScrollTop(window.scrollY > 400)
    }, 100),
    [],
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-blue-50 text-gray-700 py-12 relative">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Academy School</h3>
            <p className="text-gray-700">Nurturing tomorrow's Leaders through Quality Education and Values.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-600" />
                <span>+254 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-600" />
                <span>info@academyschool.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-blue-600" />
                <span>123 School Road, Nairobi</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Admissions",  "News & Events", "Parent Portal"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-full p-2"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-700">© {new Date().getFullYear()} Academy School. All rights reserved.</p>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-sm hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}

export default Footer

