import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const Header = () => {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          Infinity Club
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/articles" className="hover:text-primary transition-colors">
            Articles
          </Link>
          <Link href="/members" className="hover:text-primary transition-colors">
            Members
          </Link>
          <Link href="/events" className="hover:text-primary transition-colors">
            Events
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button asChild>
            <Link href="/join">Join Us</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header

