"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { scrollToSection } from "@/utils/scroll";

const Hero = () => {
  // Simple fade-in animation with reduced duration
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background with enhanced overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/gif2.gif"
          alt="Technology Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-gray-900/80 to-gray-900"></div>
        
        {/* Tech geometric overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative element */}
          <div className="mb-6 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200">
              Pioneering Technology
            </span>
            <br className="hidden sm:block" /> 
            <span className="relative">
              Solutions for Tomorrow
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full transform scale-x-0 sm:scale-x-100 origin-left"></span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Empowering businesses with cutting-edge IT and telecom solutions 
            that drive innovation and growth in today's digital landscape
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={() => scrollToSection("services")}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-10 rounded-full text-lg transition-all duration-200 w-full sm:w-auto shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-1"
            >
              Explore Solutions
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative overflow-hidden group bg-gray-900/40 border-2 border-blue-400/50 hover:border-blue-300 text-blue-100 hover:text-white font-semibold py-3 px-10 rounded-full text-lg transition-all duration-200 w-full sm:w-auto backdrop-blur-sm"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-blue-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
          
          {/* Tech tag line */}
          <div className="mt-12 text-blue-300/70 text-sm font-medium tracking-wider uppercase">
            AI • Cloud • Telecom • IT Solutions
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;