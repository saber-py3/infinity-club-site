import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 Infinity Club. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <Link href="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-accent">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

