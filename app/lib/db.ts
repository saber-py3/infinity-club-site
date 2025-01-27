interface Article {
  id: number
  title: string
  content: string
  author: string
  date: string
  category: string
}

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
}

interface Member {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

class Database {
  private articles: Article[] = []
  private events: Event[] = []
  private members: Member[] = []

  constructor() {
    // Initialize with some sample data
    this.articles = [
      {
        id: 1,
        title: "Introduction to Machine Learning",
        content: "Lorem ipsum...",
        author: "Jane Doe",
        date: "2023-06-01",
        category: "AI",
      },
      {
        id: 2,
        title: "Web Development Best Practices",
        content: "Lorem ipsum...",
        author: "John Smith",
        date: "2023-05-15",
        category: "Web Development",
      },
    ]

    this.events = [
      {
        id: 1,
        title: "AI Workshop",
        date: "2023-07-15",
        time: "14:00",
        location: "Room 101",
        description: "Join us for an exciting workshop on Artificial Intelligence!",
      },
      {
        id: 2,
        title: "Hackathon",
        date: "2023-08-01",
        time: "09:00",
        location: "Main Hall",
        description: "24-hour coding challenge with amazing prizes!",
      },
    ]

    this.members = [
      {
        id: 1,
        name: "Jane Doe",
        role: "President",
        bio: "Computer Science enthusiast with a passion for AI.",
        image: "/placeholder.svg",
      },
      {
        id: 2,
        name: "John Smith",
        role: "Developer",
        bio: "Full-stack developer specializing in React and Node.js.",
        image: "/placeholder.svg",
      },
    ]
  }

  getArticles(): Article[] {
    return this.articles
  }

  getArticle(id: number): Article | undefined {
    return this.articles.find((article) => article.id === id)
  }

  getEvents(): Event[] {
    return this.events
  }

  getEvent(id: number): Event | undefined {
    return this.events.find((event) => event.id === id)
  }

  getMembers(): Member[] {
    return this.members
  }

  getMember(id: number): Member | undefined {
    return this.members.find((member) => member.id === id)
  }
}

export const db = new Database()

