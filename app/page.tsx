"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SpotlightCard } from "@/components/spotlight-card"
import { CardContent } from "@/components/ui/card"
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
      date: "2023-07-15",
      time: "14:00",
      location: "Tech Hub, Room 101",
      description: "Join us for an exciting workshop on Artificial Intelligence!",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Hackathon 2023",
      date: "2023-08-01",
      time: "09:00",
      location: "Innovation Center",
      description: "24-hour coding challenge with amazing prizes!",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Tech Talk: Future of Web Development",
      date: "2023-08-15",
      time: "18:00",
      location: "Virtual Event",
      description: "Learn about the latest trends in web development.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const articles = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      category: "AI",
      author: "Jane Doe",
      date: "2023-06-01",
      description: "Learn the basics of machine learning and its applications in various industries.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Web Development Best Practices",
      category: "Web Development",
      author: "John Smith",
      date: "2023-05-15",
      description:
        "Discover the latest best practices in web development to create efficient and scalable applications.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "The Future of Artificial Intelligence",
      category: "AI",
      author: "Alice Johnson",
      date: "2023-05-01",
      description: "Explore the potential future developments in AI technology and their impact on society.",
      image: "/placeholder.svg?height=400&width=600",
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
                  <SpotlightCard className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 transform hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-semibold">
                          {event.date} at {event.time}
                        </p>
                        <p className="text-xs">{event.location}</p>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2 gradient-text">{event.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{event.description}</p>
                      <div className="flex justify-end">
                        <Link
                          href={`/events/${event.id}`}
                          className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/80 transition-colors duration-300 hover:shadow-md"
                        >
                          Learn More
                        </Link>
                      </div>
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
                  <SpotlightCard className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 transform hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-semibold">{article.category}</p>
                        <p className="text-xs">{article.date}</p>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2 gradient-text">{article.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">By {article.author}</p>
                      <p className="text-muted-foreground mb-4 flex-grow">{article.description}</p>
                      <div className="flex justify-end">
                        <Link
                          href={`/articles/${article.id}`}
                          className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/80 transition-colors duration-300 hover:shadow-md"
                        >
                          Read More
                        </Link>
                      </div>
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

