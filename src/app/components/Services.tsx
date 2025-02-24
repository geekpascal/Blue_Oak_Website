"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Systems Design, Implementation, and Integration",
    description: "Our team of experts designs and implements tailored IT and telecom solutions that meet your business needs, ensuring seamless integration with existing systems.",
    svg: (
      <div className="relative w-full h-48 flex items-center justify-center group">
        <motion.div
          className="absolute w-52 h-32 bg-blue-500/10 rounded-full blur-[64px]"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-48 h-24 bg-blue-400/20 rounded-full blur-2xl"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-36 h-36 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full backdrop-blur-sm border border-blue-500/20"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <svg
          viewBox="0 0 24 24"
          className="w-16 h-16 relative z-10 text-blue-400 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M3 9v6m0 0v4a2 2 0 0 0 2 2h4m-6-6h6m4 6h10a2 2 0 0 0 2-2v-4m-6 6v-6m0 0V3"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Consultancy and Training",
    description: "Our expert consultants and trainers provide guidance on the latest technologies, including AI, to enhance your team's skills and knowledge.",
    svg: (
      <div className="relative w-full h-48 flex items-center justify-center group">
        <motion.div
          className="absolute w-52 h-32 bg-emerald-500/10 rounded-full blur-[64px]"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-48 h-24 bg-emerald-400/20 rounded-full blur-2xl"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-36 h-36 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-full backdrop-blur-sm border border-emerald-500/20"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <svg
          viewBox="0 0 24 24"
          className="w-16 h-16 relative z-10 text-emerald-400 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "AI-Driven Solutions",
    description: "We develop innovative AI-powered solutions for various industries, including healthcare, IT, and telecom.",
    svg: (
      <div className="relative w-full h-48 flex items-center justify-center group">
        <motion.div
          className="absolute w-52 h-32 bg-violet-500/10 rounded-full blur-[64px]"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-48 h-24 bg-violet-400/20 rounded-full blur-2xl"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-36 h-36 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-full backdrop-blur-sm border border-violet-500/20"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <svg
          viewBox="0 0 24 24"
          className="w-16 h-16 relative z-10 text-violet-400 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            d="M12 2V4M12 20V22M4 12H2M22 12H20M19.8 19.8L17.9 17.9M19.8 4.2L17.9 6.1M4.2 19.8L6.1 17.9M4.2 4.2L6.1 6.1"
          />
        </svg>
      </div>
    ),
  },
]

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Key Services
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800/50 shadow-[0_8px_16px_rgb(0_0_0/0.5)] hover:shadow-[0_16px_32px_rgb(0_0_0/0.5)] hover:border-gray-700/50 transition-all duration-500"
              variants={itemVariants}
            >
              {service.svg}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-gray-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
