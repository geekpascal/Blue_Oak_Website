"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const AIHealthcare = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="ai-healthcare" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          AI-Driven Solutions for Healthcare
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <Image
              src="/aihealth.webp"
              alt="AI in Healthcare"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">AI-Driven Diagnosis</h3>
              <p className="text-gray-600">
                Our AI-powered algorithms analyze medical images, lab results, and clinical data to provide accurate
                diagnosis and recommendations.
              </p>
            </motion.div>
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Severity Estimation</h3>
              <p className="text-gray-600">
                Our AI-driven severity estimation solution analyzes patient data to predict disease severity and provide
                personalized treatment recommendations.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Clinical Decision Support</h3>
              <p className="text-gray-600">
                Our AI-powered clinical decision support system provides healthcare professionals with real-time,
                data-driven insights to inform treatment decisions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIHealthcare

