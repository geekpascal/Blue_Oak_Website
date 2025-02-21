"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

const navItems = [
  { name: "Home", href: "home" },
  {
    name: "Services",
    href: "services",
    subItems: [
      { name: "AI Healthcare", href: "ai-healthcare" },
      { name: "AI Telecom", href: "ai-telecom" },
      { name: "Benefits", href: "benefits" },
    ],
  },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    // Close mobile menu and reset dropdown
    setMobileMenuOpen(false)
    setActiveDropdown(null)

    // Add a small delay to ensure the menu is closed before scrolling
    setTimeout(() => {
      const element = document.getElementById(href)
      if (element) {
        const navHeight = 80 // Height of your fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => handleNavigation("home")} className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold text-white">Blue Oak Tech</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-300 hover:text-blue-500 transition-colors py-2 flex items-center"
                >
                  {item.name}
                  {item.subItems && <ChevronDown className="ml-1 w-4 h-4" />}
                </button>

                {item.subItems && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2"
                  >
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => handleNavigation(subItem.href)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden"
            >
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-700 last:border-none">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:bg-gray-700"
                      >
                        <span>{item.name}</span>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-900"
                          >
                            {item.subItems.map((subItem) => (
                              <button
                                key={subItem.name}
                                onClick={() => handleNavigation(subItem.href)}
                                className="block w-full text-left px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar

