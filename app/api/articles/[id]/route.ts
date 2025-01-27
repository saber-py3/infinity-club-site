import { NextResponse } from "next/server"
import { db } from "../../../lib/db"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const article = db.getArticle(id)

  if (article) {
    return NextResponse.json(article)
  } else {
    return NextResponse.json({ error: "Article not found" }, { status: 404 })
  }
}

