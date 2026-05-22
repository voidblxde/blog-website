import Link from "next/link"
import { getTag } from "@/lib/blog-data"

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  image: string
  tags: string[]
}

interface ArticleCardProps {
  article: Article
  featured?: boolean
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article className={`blog-card${featured ? " blog-card--featured" : ""}`}>
      <Link href={`/article/${article.slug}`} className="blog-card__media-link">
        <div className="blog-card__image-wrap">
          <img
            src={article.image}
            alt={article.title}
            className="blog-card__image"
            width={588}
            height={260}
          />
          <div className="blog-card__tags">
            {article.tags.slice(0, 2).map((tagId) => {
              const tag = getTag(tagId)

              return (
                <span key={tagId} className="blog-card__tag">
                  {tag?.emoji && (
                    <span className="blog-card__tag-emoji" aria-hidden="true">
                      {tag.emoji}
                    </span>
                  )}
                  {tag?.label ?? tagId}
                </span>
              )
            })}
          </div>
        </div>
      </Link>

      <div className="blog-card__body">
        <Link href={`/article/${article.slug}`} className="blog-card__title-link">
          <h2 className="blog-card__title">{article.title}</h2>
        </Link>

        <p className="blog-card__author">Автор: {article.author}</p>

        <p className="blog-card__excerpt">{article.excerpt}</p>

        <time className="blog-card__date" dateTime={article.date}>
          {formatDate(article.date)}
        </time>
      </div>
    </article>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}
