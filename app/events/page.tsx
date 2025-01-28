"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AnimatedHeader } from "@/components/animated-header"
import { SpotlightCard } from "@/components/spotlight-card"

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
  {
    id: 4,
    title: "Data Science Symposium",
    date: "2023-09-05",
    time: "10:00",
    location: "Data Analytics Building, Auditorium",
    description: "Explore the latest advancements in data science and machine learning.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Cybersecurity Workshop",
    date: "2023-09-20",
    time: "13:00",
    location: "Security Center, Lab 3",
    description: "Learn essential cybersecurity skills and best practices.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "IoT Innovation Summit",
    date: "2023-10-10",
    time: "09:00",
    location: "Smart City Convention Center",
    description: "Discover the latest in Internet of Things technologies and applications.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container space-y-8 py-12">
      <AnimatedHeader>Upcoming Events</AnimatedHeader>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <Input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md"
        />
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
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
    </div>
  )
}

