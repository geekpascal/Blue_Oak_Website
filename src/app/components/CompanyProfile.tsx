"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const CompanyProfile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6">Company Profile</h2>
            <p className="text-gray-300 mb-4">
              Blue Oak Technologies is a pioneering IT and telecom services company that specializes in designing,
              implementing, and integrating cutting-edge technology solutions.
            </p>
            <p className="text-gray-300 mb-4">
              With a strong focus on innovation and excellence, we provide expert consultancy and training services in
              telecommunications, IT, and emerging technologies like Artificial Intelligence (AI).
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              To empower businesses to thrive in the digital age by delivering tailored technology solutions that drive
              efficiency, enhance decision-making, and foster growth.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To become a leading provider of innovative IT and telecom solutions, recognized for our expertise,
              customer-centric approach, and commitment to excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyProfile

