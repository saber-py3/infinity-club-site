"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const springConfig = { damping: 25, stiffness: 200 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const gradientTransform = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(
      600px circle at ${x}px ${y}px,
      rgba(255,255,255,.1),
      transparent 40%
    )`
  )

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Articles", href: "/articles" },
    { name: "Members", href: "/members" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300",
        "rounded-full backdrop-blur-md border border-white/10",
        isScrolled ? "bg-background/80 shadow-lg" : "bg-background/40",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      style={{ backgroundImage: gradientTransform }}
    >
      <div className="container flex items-center justify-between py-3 px-6">
        <Link href="/" className="relative z-10">
          <motion.span
            className="text-2xl font-bold gradient-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHoveredItem("logo")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Infinity Club
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="relative z-10 text-sm font-medium transition-colors duration-300 group-hover:text-primary">
                {item.name}
              </span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button
            asChild
            className="gradient-bg text-white hidden md:flex"
            onMouseEnter={() => setHoveredItem("join")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/join">Join Us</Link>
            </motion.div>
          </Button>
          <button
            className="md:hidden text-foreground p-2 hover:bg-accent rounded-full"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 mt-4 mx-4 overflow-hidden rounded-2xl",
          "backdrop-blur-md border border-white/10",
          isScrolled ? "bg-background/80" : "bg-background/40",
        )}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="p-4 flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="gradient-bg text-white w-full">
            <Link href="/join" onClick={() => setIsMenuOpen(false)}>
              Join Us
            </Link>
          </Button>
        </nav>
      </motion.div>
    </motion.header>
  )
}

export default ModernHeader

