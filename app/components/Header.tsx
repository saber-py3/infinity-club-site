import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Infinity Club
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-accent">
              About
            </Link>
          </li>
          <li>
            <Link href="/articles" className="hover:text-accent">
              Articles
            </Link>
          </li>
          <li>
            <Link href="/members" className="hover:text-accent">
              Members
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-accent">
              Events
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

