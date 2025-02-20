import Link from "next/link";
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-bold text-white">Blue Oak Tech</span>
            </Link>
            <p className="text-sm">Pioneering IT and telecom solutions for businesses in the digital age.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#it-solutions" className="hover:text-blue-500 transition-colors">IT Solutions</Link></li>
              <li><Link href="#telecom-services" className="hover:text-blue-500 transition-colors">Telecom Services</Link></li>
              <li><Link href="#ai-integration" className="hover:text-blue-500 transition-colors">AI Integration</Link></li>
              <li><Link href="#consulting" className="hover:text-blue-500 transition-colors">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="#team" className="hover:text-blue-500 transition-colors">Our Team</Link></li>
              <li><Link href="#careers" className="hover:text-blue-500 transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><LinkedIn className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Instagram className="w-6 h-6" /></a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2 text-white">Subscribe to our newsletter</h4>
              <form className="flex flex-col sm:flex-row">
                <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 sm:mt-0 sm:rounded-r-md sm:rounded-l-none hover:bg-blue-600 transition-colors">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; 2025 Blue Oak Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
