"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { scrollToSection } from "@/utils/scroll"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background GIF with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/gif2.gif"
          alt="Technology Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-gray-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering Technology Solutions for Tomorrow
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering businesses with cutting-edge IT and telecom solutions that drive innovation and growth
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("services")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 w-full sm:w-auto"
            >
              Explore Solutions
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-2 border-blue-400 hover:border-blue-300 text-blue-100 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-blue-200 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-blue-200 rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;

// "use client"

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { scrollToSection } from "@/utils/scroll"

// const Hero = () => {
//   // Enhanced animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       },
//     },
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
//       {/* Enhanced Background with subtle particle effect */}
//       <div className="absolute inset-0 w-full h-full">
//         <Image
//           src="/gif2.gif"
//           alt="Technology Background"
//           fill
//           className="object-cover opacity-70"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-gray-900/95"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
//       </div>

//       {/* Content with improved layout and effects */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-5xl mx-auto"
//         >
//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight"
//           >
//             <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//               Pioneering
//             </span>{" "}
//             Technology Solutions
//           </motion.h1>
//           <motion.p
//             variants={itemVariants}
//             className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto font-light"
//           >
//             Transforming businesses with innovative IT and telecom solutions for a connected future
//           </motion.p>
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row gap-6 justify-center items-center"
//           >
//             <button
//               onClick={() => scrollToSection("services")}
//               className="relative bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-10 rounded-full text-lg transition-all duration-300 group overflow-hidden w-full sm:w-auto shadow-lg shadow-blue-600/20"
//             >
//               <span className="relative z-10">Explore Solutions</span>
//               <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="relative bg-transparent border-2 border-blue-400 hover:border-blue-300 text-blue-100 hover:text-white font-semibold py-3.5 px-10 rounded-full text-lg transition-all duration-300 group w-full sm:w-auto"
//             >
//               <span className="relative z-10">Contact Us</span>
//               <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Enhanced Scroll Indicator */}
//       {/* <motion.div
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 1.2 }}
//       >
//         <div className="w-8 h-12 border-2 border-blue-200/80 rounded-full flex justify-center p-2 relative overflow-hidden">
//           <motion.div
//             className="w-1.5 h-3 bg-blue-300 rounded-full"
//             animate={{
//               y: [0, 15, 0],
//               opacity: [1, 0.5, 1],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "easeInOut",
//             }}
//           />
//           <div className="absolute inset-0 bg-blue-200/10 animate-pulse"></div>
//         </div>
//       </motion.div> */}
//     </section>
//   );
// };

// export default Hero;