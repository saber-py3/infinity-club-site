"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SpotlightCard } from "@/components/spotlight-card"
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
  const yOffset = useTransform(scrollYProgress, [0, 1], ["30%", "0%"])

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

  const events = [
    {
      id: 1,
      title: "AI Workshop",
      description: "Join us for an exciting workshop on Artificial Intelligence!",
      date: "July 15, 2023",
      author: "Dr. Jane Smith",
    },
    {
      id: 2,
      title: "Hackathon 2023",
      description: "24-hour coding challenge with amazing prizes!",
      date: "August 1, 2023",
      author: "Infinity Club Team",
    },
    {
      id: 3,
      title: "Tech Talk: Future of Web Development",
      description: "Learn about the latest trends in web development.",
      date: "August 15, 2023",
      author: "John Doe",
    },
  ]

  const articles = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      description: "Learn the basics of machine learning and its applications.",
      date: "June 1, 2023",
      author: "Jane Doe",
    },
    {
      id: 2,
      title: "Web Development Best Practices",
      description: "Discover the latest best practices in web development.",
      date: "May 15, 2023",
      author: "John Smith",
    },
    {
      id: 3,
      title: "The Future of Artificial Intelligence",
      description: "Explore the potential future developments in AI technology.",
      date: "May 1, 2023",
      author: "Alice Johnson",
    },
  ]

  return (
    <div className="relative">
      <WelcomeSection />
      <motion.div
        ref={containerRef}
        className="relative z-10 bg-background min-h-screen pt-20"
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
              {events.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <SpotlightCard className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="gradient-text">{event.title}</CardTitle>
                      <CardDescription>
                        {event.date} | By {event.author}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <Link href={`/events/${event.id}`} className="text-primary hover:underline mt-auto">
                        Learn more
                      </Link>
                    </CardContent>
                  </SpotlightCard>
                </motion.div>
              ))}
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
              {articles.map((article) => (
                <motion.div key={article.id} variants={itemVariants}>
                  <SpotlightCard className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="gradient-text">{article.title}</CardTitle>
                      <CardDescription>
                        {article.date} | By {article.author}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <p className="text-muted-foreground mb-4">{article.description}</p>
                      <Link href={`/articles/${article.id}`} className="text-primary hover:underline mt-auto">
                        Read more
                      </Link>
                    </CardContent>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
        <SocialFooter />
      </motion.div>
    </div>
  )
}

