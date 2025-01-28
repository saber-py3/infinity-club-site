"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text3D, Float, PresentationControls } from "@react-three/drei"
import { AnimatedHeader } from "@/components/animated-header"

// 3D Components
function Title3D() {
  return (
    <Float floatIntensity={2} rotationIntensity={0.5} speed={2}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
      >
        Infinity Club
        <meshStandardMaterial color="#E81DB8" />
      </Text3D>
    </Float>
  )
}

function AnimatedCube() {
  return (
    <Float floatIntensity={2}>
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </Float>
  )
}

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
      {/* 3D Hero Section */}
      <div className="h-[50vh] w-full relative">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <PresentationControls
            global
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 300 }}
          >
            <Title3D />
          </PresentationControls>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section className="space-y-4 relative" variants={itemVariants}>
          <AnimatedHeader>Our Mission</AnimatedHeader>
          <div className="h-[200px] mb-4">
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.5} />
              <AnimatedCube />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
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
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              variants={itemVariants} 
              whileHover={{ scale: 1.05, rotateY: 180 }}
              whileTap={{ scale: 0.95 }}
              className="relative transform-gpu transition-all duration-500"
            >
              <Image 
                src="/placeholder.svg" 
                alt={`Event ${i}`} 
                width={300} 
                height={200} 
                className="rounded-lg shadow-lg backface-hidden"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}

