"use client"

import { motion } from "framer-motion"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, url: "https://facebook.com" },
  { name: "Twitter", icon: FaTwitter, url: "https://twitter.com" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com" },
]

const SocialFooter = () => {
  return (
    <footer className="bg-background border-t border-border mt-12">
      <div className="container py-8">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold gradient-text">Connect with Us</h2>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Infinity Club. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default SocialFooter

