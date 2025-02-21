"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const AITelecom = () => {
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="ai-telecom" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          AI-Driven Solutions for IT and Telecom
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="order-2 md:order-1">
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Recommender Systems</h3>
              <p className="text-gray-600">
                Our AI-powered recommender systems analyze customer data to provide personalized product and service
                recommendations.
              </p>
            </motion.div>
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">IT Operations Optimization</h3>
              <p className="text-gray-600">
                Our AI-driven IT operations optimization solution analyzes IT infrastructure data to identify areas of
                inefficiency and provide recommendations for improvement.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Application of LLMs</h3>
              <p className="text-gray-600">
                Our AI-powered LLMs are applied to various IT and telecom use cases, including chatbots, virtual
                assistants, and automated customer support.
              </p>
            </motion.div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/aitelecom.jpg"
              alt="AI in IT and Telecom"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AITelecom

