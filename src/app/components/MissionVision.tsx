"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const MissionVision = () => {
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
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              To empower businesses to thrive in the digital age by delivering tailored technology solutions that drive
              efficiency, enhance decision-making, and foster growth.
            </p>
            <Image
              src="/mission.jpeg"
              alt="Team collaborating on a project"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Vision</h2>
            <p className="text-xl text-gray-600 mb-8">
              To become a leading provider of innovative IT and telecom solutions, recognized for our expertise,
              customer-centric approach, and commitment to excellence.
            </p>
            <Image
              src="/vision.webp"
              alt="Futuristic cityscape representing our vision"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVision

