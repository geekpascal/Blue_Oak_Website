"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Systems Design, Implementation, and Integration",
    description: "Our team of experts designs and implements tailored IT and telecom solutions that meet your business needs, ensuring seamless integration with existing systems.",
    svg: (
      <div className="relative w-full h-48 flex items-center justify-center group">
        <motion.div
          className="absolute w-32 h-32 bg-blue-100 rounded-full"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-32 h-32 relative z-10 text-blue-600 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
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
          className="absolute w-32 h-32 bg-green-100 rounded-2xl rotate-45"
          initial={{ rotate: 0, scale: 0.8 }}
          whileInView={{ rotate: 45, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-32 h-32 relative z-10 text-green-600 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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
          className="absolute w-32 h-32 bg-red-100 rounded-full"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-32 h-32 relative z-10 text-red-600 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800"
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
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              {service.svg}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services




