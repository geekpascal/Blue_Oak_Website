// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
//       {/* Background GIF with overlay */}
//       <div className="absolute inset-0 w-full h-full">
//         <Image
//           src="/gif2.gif" 
//           alt="Technology Background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-gray-900"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           <motion.h1
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Pioneering Technology Solutions for Tomorrow
//           </motion.h1>
//           <motion.p
//             className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Empowering businesses with cutting-edge IT and telecom solutions that drive innovation and growth
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 w-full sm:w-auto">
//               Explore Solutions
//             </button>
//             <button className="bg-transparent border-2 border-blue-400 hover:border-blue-300 text-blue-100 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full sm:w-auto">
//               Contact Us
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 1 }}
//       >
//         <div className="w-6 h-10 border-2 border-blue-200 rounded-full flex justify-center p-2">
//           <motion.div
//             className="w-1 h-3 bg-blue-200 rounded-full"
//             animate={{
//               y: [0, 12, 0],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Number.POSITIVE_INFINITY,
//               repeatType: "reverse",
//             }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero

"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-base transition-colors duration-300 w-full sm:w-auto">
              Explore Solutions
            </button>
            <button className="bg-transparent border-2 border-blue-400 hover:border-blue-300 text-blue-100 hover:text-white font-bold py-3 px-6 rounded-full text-base transition-all duration-300 w-full sm:w-auto">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
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
      </motion.div>
    </section>
  );
};

export default Hero;
