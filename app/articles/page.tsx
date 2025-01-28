"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AnimatedHeader } from "@/components/animated-header"
import { SpotlightCard } from "@/components/spotlight-card"

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
    description: "Discover the latest best practices in web development to create efficient and scalable applications.",
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
  {
    id: 4,
    title: "Cybersecurity Essentials for Developers",
    category: "Security",
    author: "Bob Williams",
    date: "2023-04-20",
    description: "Learn essential cybersecurity practices to protect your applications from common threats.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Responsive Design Techniques",
    category: "Web Development",
    author: "Emma Davis",
    date: "2023-04-10",
    description: "Master the art of creating responsive designs that work seamlessly across all devices.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Introduction to Blockchain Technology",
    category: "Blockchain",
    author: "Michael Brown",
    date: "2023-03-25",
    description: "Understand the fundamentals of blockchain technology and its potential applications.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container space-y-8 py-12">
      <AnimatedHeader>Latest Articles</AnimatedHeader>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <Input
          type="text"
          placeholder="Search articles..."
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
        {filteredArticles.map((article) => (
          <motion.div
            key={article.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
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
    </div>
  )
}

