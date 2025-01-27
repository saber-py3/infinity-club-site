"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedHeader } from "@/components/animated-header"
import WelcomeSection from "@/components/welcome-section"
import SocialFooter from "@/components/social-footer"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])
  const yOffset = useTransform(scrollYProgress, [0, 1], ["20%", "0%"])

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
    <div className="relative">
      <WelcomeSection />
      <motion.div
        ref={containerRef}
        className="relative z-10 bg-background min-h-screen"
        style={{ opacity, scale, y: yOffset }}
      >
        <div className="container space-y-12 py-12">
          <section>
            <AnimatedHeader>Upcoming Events</AnimatedHeader>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>AI Workshop</CardTitle>
                    <CardDescription>July 15, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Join us for an exciting workshop on Artificial Intelligence!</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Hackathon</CardTitle>
                    <CardDescription>August 1, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>24-hour coding challenge with amazing prizes!</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Tech Talk: Future of Web Development</CardTitle>
                    <CardDescription>August 15, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Learn about the latest trends in web development.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          <section>
            <AnimatedHeader>Latest Articles</AnimatedHeader>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Introduction to Machine Learning</CardTitle>
                    <CardDescription>By Jane Doe | June 1, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Learn the basics of machine learning and its applications.</p>
                    <Link href="/articles/intro-to-ml" className="text-primary hover:underline mt-2 inline-block">
                      Read more
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>Web Development Best Practices</CardTitle>
                    <CardDescription>By John Smith | May 15, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Discover the latest best practices in web development.</p>
                    <Link
                      href="/articles/web-dev-best-practices"
                      className="text-primary hover:underline mt-2 inline-block"
                    >
                      Read more
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>The Future of Artificial Intelligence</CardTitle>
                    <CardDescription>By Alice Johnson | May 1, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Explore the potential future developments in AI technology.</p>
                    <Link href="/articles/future-of-ai" className="text-primary hover:underline mt-2 inline-block">
                      Read more
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>
        </div>
        <SocialFooter />
      </motion.div>
    </div>
  )
}

