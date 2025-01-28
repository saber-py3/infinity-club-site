"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { SpotlightCard } from "@/components/spotlight-card"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AnimatedHeader } from "@/components/animated-header"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

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
      linkedin: "https://linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
      twitter: "https://twitter.com/janedoe",
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
      linkedin: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
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
      linkedin: "https://linkedin.com/in/alicejohnson",
      github: "https://github.com/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
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
      linkedin: "https://linkedin.com/in/bobwilliams",
      github: "https://github.com/bobwilliams",
      twitter: "https://twitter.com/bobwilliams",
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
      linkedin: "https://linkedin.com/in/evabrown",
      github: "https://github.com/evabrown",
      twitter: "https://twitter.com/evabrown",
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
      linkedin: "https://linkedin.com/in/mikedavis",
      github: "https://github.com/mikedavis",
      twitter: "https://twitter.com/mikedavis",
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
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())),
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
          placeholder="Search members by name, role, or skill..."
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightCard className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-grow">{member.bio}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </CardContent>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

