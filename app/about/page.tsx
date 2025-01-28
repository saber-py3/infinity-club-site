"use client"

import { motion, useInView, useAnimate, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { SpotlightCard } from "@/components/spotlight-card"
import { AnimatedHeader } from "@/components/animated-header"
import TrueFocus from "@/components/ui/TrueFocus"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const CounterAnimation = ({ value }: { value: string }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const numericValue = Number.parseInt(value.replace("+", ""))
  const [scope, animate] = useAnimate()
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (inView) {
      animate(count, numericValue, { duration: 1, ease: "easeOut" })
    }
  }, [inView, animate, count, numericValue])

  return (
    <span ref={ref} className="text-4xl font-bold mb-2 gradient-text">
      <motion.span ref={scope}>{rounded}</motion.span>
      {value.includes("+") && "+"}
    </span>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 pt-28">
      <motion.div
        className="container mx-auto px-4 py-16 space-y-16"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.section variants={fadeInUp} className="text-center mb-16">
          <div className="mb-6 relative z-10">
            <TrueFocus 
              sentence="Infinity Club"
              borderColor="#6366f1" // Using a color that matches your theme
              glowColor="rgba(99, 102, 241, 0.6)"
              animationDuration={0.8}
              pauseBetweenAnimations={2}
              className="text-5xl md:text-6xl font-bold gradient-text"
            />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of tech innovators through collaboration, learning, and innovation.
          </p>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <AnimatedHeader>Our Mission</AnimatedHeader>
          <SpotlightCard className="p-8">
            <p className="text-lg leading-relaxed">
              Infinity Club is dedicated to fostering innovation, collaboration, and learning in the field of computer
              science. We aim to create a vibrant community where students can explore their passion for technology,
              develop cutting-edge skills, and prepare for successful careers in the ever-evolving tech industry.
            </p>
          </SpotlightCard>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <AnimatedHeader>Our Vision</AnimatedHeader>
          <SpotlightCard className="p-8">
            <p className="text-lg leading-relaxed">
              We envision a world where technology is accessible to all and used to solve global challenges. Infinity
              Club strives to be at the forefront of this vision by empowering the next generation of tech leaders and
              innovators, fostering a culture of creativity, and pushing the boundaries of what's possible in tech.
            </p>
          </SpotlightCard>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <AnimatedHeader>Our History</AnimatedHeader>
          <SpotlightCard className="p-8">
            <p className="text-lg leading-relaxed">
              Founded in 2015 by a group of passionate computer science students, Infinity Club has grown from a small
              study group to a thriving community of over 500 members. Over the years, we've organized numerous
              workshops, hackathons, and tech talks, fostering a culture of continuous learning and innovation that has
              shaped the tech landscape of our university and beyond.
            </p>
          </SpotlightCard>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <AnimatedHeader>Our Achievements</AnimatedHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Hackathons Hosted", value: "20+" },
              { title: "Workshops Organized", value: "100+" },
              { title: "Members Placed in Top Tech Companies", value: "200+" },
              { title: "Open-source Projects Contributed", value: "10+" },
            ].map((achievement, index) => (
              <motion.div key={index} variants={fadeInUp} className="col-span-1">
                <SpotlightCard className="p-6 text-center h-full flex flex-col justify-center items-center">
                  <CounterAnimation value={achievement.value} />
                  <p className="text-lg text-muted-foreground">{achievement.title}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <AnimatedHeader>Join Us</AnimatedHeader>
          <SpotlightCard className="p-8 text-center">
            <p className="text-lg mb-6">
              Are you passionate about technology and innovation? Join Infinity Club and be part of a community that's
              shaping the future of tech!
            </p>
            <motion.a
              href="/join"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/80 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Member
            </motion.a>
          </SpotlightCard>
        </motion.section>
      </motion.div>
    </div>
  )
}