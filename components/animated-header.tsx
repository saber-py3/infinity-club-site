"use client"

import { motion } from "framer-motion"

interface AnimatedHeaderProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedHeader({ children, className = "" }: AnimatedHeaderProps) {
  return (
    <motion.h2
      className={`text-3xl font-bold mb-6 gradient-text ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  )
}

