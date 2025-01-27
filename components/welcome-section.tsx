"use client"

import { useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { motion, useScroll, useTransform } from "framer-motion"

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#B13FEA" attach="material" distort={0.6} speed={1.5} roughness={0.5} />
    </Sphere>
  )
}

export default function WelcomeSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <motion.div ref={containerRef} className="h-screen w-full relative overflow-hidden" style={{ y: yOffset }}>
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      <motion.div className="absolute inset-0 flex items-center justify-center text-center" style={{ opacity, scale }}>
        <div>
          <h1 className="text-5xl font-bold mb-4 gradient-text">Welcome to Infinity Club</h1>
          <p className="text-xl text-white mb-8">Empowering the next generation of tech innovators</p>
          <motion.button
            className="px-6 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-secondary transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

