"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedHeader } from "@/components/animated-header"

// This would typically come from an API or CMS
const events = [
  {
    id: 1,
    title: "AI Workshop",
    date: "2023-07-15",
    time: "14:00",
    location: "Room 101",
    description: "Join us for an exciting workshop on Artificial Intelligence!",
  },
  {
    id: 2,
    title: "Hackathon",
    date: "2023-08-01",
    time: "09:00",
    location: "Main Hall",
    description: "24-hour coding challenge with amazing prizes!",
  },
  {
    id: 3,
    title: "Tech Talk: Future of Web Development",
    date: "2023-08-15",
    time: "18:00",
    location: "Auditorium",
    description: "Learn about the latest trends in web development.",
  },
  // Add more events...
]

export default function Events() {
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
    <div className="container space-y-8 py-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <AnimatedHeader>Upcoming Events</AnimatedHeader>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {events.map((event) => (
          <motion.div key={event.id} variants={itemVariants}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="gradient-text">{event.title}</CardTitle>
                <CardDescription>
                  {event.date} at {event.time}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="mb-2">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="mb-4">{event.description}</p>
                </div>
                <Button asChild className="w-full mt-4 gradient-bg text-white">
                  <Link href={`/events/${event.id}`}>RSVP</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

