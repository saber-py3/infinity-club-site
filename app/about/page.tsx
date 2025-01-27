"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedHeader } from "@/components/animated-header"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="container space-y-12 py-12">
      <motion.h1
        className="text-4xl font-bold text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Infinity Club
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section className="space-y-4" variants={itemVariants}>
          <AnimatedHeader>Our Mission</AnimatedHeader>
          <p className="text-lg">
            Infinity Club is dedicated to fostering innovation, collaboration, and learning in the field of computer
            science. We aim to create a community where students can explore their passion for technology, develop new
            skills, and prepare for successful careers in the ever-evolving tech industry.
          </p>
        </motion.section>

        <motion.section className="space-y-4" variants={itemVariants}>
          <AnimatedHeader>Our Vision</AnimatedHeader>
          <p className="text-lg">
            We envision a world where technology is accessible to all and used to solve global challenges. Infinity Club
            strives to be at the forefront of this vision by empowering the next generation of tech leaders and
            innovators.
          </p>
        </motion.section>
      </motion.div>

      <motion.section className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
        <AnimatedHeader>Our History</AnimatedHeader>
        <motion.p className="text-lg" variants={itemVariants}>
          Founded in 2015 by a group of passionate computer science students, Infinity Club has grown from a small study
          group to a thriving community of over 500 members. Over the years, we've organized numerous workshops,
          hackathons, and tech talks, fostering a culture of continuous learning and innovation.
        </motion.p>
      </motion.section>

      <motion.section className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
        <AnimatedHeader>Our Achievements</AnimatedHeader>
        <motion.ul className="list-disc list-inside space-y-2 text-lg" variants={itemVariants}>
          <li>Hosted 20+ successful hackathons</li>
          <li>Organized 100+ workshops on various tech topics</li>
          <li>Helped 200+ students secure internships and jobs in top tech companies</li>
          <li>Contributed to 10+ open-source projects</li>
        </motion.ul>
      </motion.section>

      <motion.section className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
        <AnimatedHeader>Gallery</AnimatedHeader>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" variants={containerVariants}>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image src="/placeholder.svg" alt="Event 1" width={300} height={200} className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image src="/placeholder.svg" alt="Event 2" width={300} height={200} className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image src="/placeholder.svg" alt="Event 3" width={300} height={200} className="rounded-lg shadow-lg" />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

