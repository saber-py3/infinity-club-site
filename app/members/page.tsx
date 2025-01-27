"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AnimatedHeader } from "@/components/animated-header"

// This would typically come from an API or CMS
const members = [
  {
    id: 1,
    name: "Jane Doe",
    role: "President",
    bio: "Computer Science enthusiast with a passion for AI. Jane leads our club with vision and dedication.",
    image: "/placeholder.svg",
    skills: ["AI", "Machine Learning", "Python"],
    social: {
      twitter: "https://twitter.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
    },
  },
  {
    id: 2,
    name: "John Smith",
    role: "Developer",
    bio: "Full-stack developer specializing in React and Node.js. John brings innovative ideas to every project.",
    image: "/placeholder.svg",
    skills: ["React", "Node.js", "TypeScript"],
    social: {
      twitter: "https://twitter.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith",
    },
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Designer",
    bio: "UI/UX designer with a keen eye for detail. Alice ensures our projects look and feel amazing.",
    image: "/placeholder.svg",
    skills: ["UI/UX", "Figma", "Adobe Creative Suite"],
    social: {
      twitter: "https://twitter.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
      github: "https://github.com/alicejohnson",
    },
  },
  {
    id: 4,
    name: "Bob Williams",
    role: "Data Scientist",
    bio: "Data scientist with expertise in big data and analytics. Bob turns data into actionable insights.",
    image: "/placeholder.svg",
    skills: ["Data Analysis", "R", "Tableau"],
    social: {
      twitter: "https://twitter.com/bobwilliams",
      linkedin: "https://linkedin.com/in/bobwilliams",
      github: "https://github.com/bobwilliams",
    },
  },
  {
    id: 5,
    name: "Eva Brown",
    role: "Cybersecurity Specialist",
    bio: "Cybersecurity expert passionate about keeping our digital world safe. Eva leads our security initiatives.",
    image: "/placeholder.svg",
    skills: ["Network Security", "Ethical Hacking", "Cryptography"],
    social: {
      twitter: "https://twitter.com/evabrown",
      linkedin: "https://linkedin.com/in/evabrown",
      github: "https://github.com/evabrown",
    },
  },
  {
    id: 6,
    name: "Mike Davis",
    role: "AR/VR Developer",
    bio: "Augmented and Virtual Reality developer pushing the boundaries of immersive experiences.",
    image: "/placeholder.svg",
    skills: ["Unity", "ARKit", "VR Development"],
    social: {
      twitter: "https://twitter.com/mikdavis",
      linkedin: "https://linkedin.com/in/mikdavis",
      github: "https://github.com/mikdavis",
    },
  },
]

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredMembers, setFilteredMembers] = useState(members)

  useEffect(() => {
    const results = members.filter(
      (member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredMembers(results)
  }, [searchTerm])

  return (
    <div className="container space-y-12 py-12">
      <AnimatedHeader>Our Talented Members</AnimatedHeader>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center"
      >
        <Input
          type="text"
          placeholder="Search members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md"
        />
      </motion.div>

      <AnimatePresence>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg transition-transform duration-300 transform hover:scale-110"
                  />
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between p-6">
                  <div>
                    <CardTitle className="text-2xl font-bold mb-2 gradient-text">{member.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold mb-4">{member.role}</CardDescription>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center space-x-4">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary transition-colors duration-300"
                        >
                          {/* Assuming you have Font Awesome icons available */}
                          <i className={`fab fa-${platform} text-2xl`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

