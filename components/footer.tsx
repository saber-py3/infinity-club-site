import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 Infinity Club. All rights reserved.</p>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

