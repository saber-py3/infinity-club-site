"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AnimatedHeader } from "@/components/animated-header"

// This would typically come from an API or CMS
const articles = [
  { id: 1, title: "Introduction to Machine Learning", category: "AI", author: "Jane Doe", date: "2023-06-01" },
  {
    id: 2,
    title: "Web Development Best Practices",
    category: "Web Development",
    author: "John Smith",
    date: "2023-05-15",
  },
  {
    id: 3,
    title: "Understanding Data Structures",
    category: "Programming",
    author: "Alice Johnson",
    date: "2023-05-01",
  },
  // Add more articles...
]

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
        <AnimatedHeader>Articles</AnimatedHeader>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md mx-auto"
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredArticles.map((article) => (
          <motion.div key={article.id} variants={itemVariants}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="gradient-text">{article.title}</CardTitle>
                <CardDescription>
                  {article.category} | By {article.author}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4">Published on {article.date}</p>
                <Link href={`/articles/${article.id}`} className="text-primary hover:underline mt-auto">
                  Read more
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

