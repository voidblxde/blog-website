"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { TagFilter } from "@/components/tag-filter"
import { ArticleCard } from "@/components/article-card"
import { tags, filterArticlesByTag } from "@/lib/blog-data"

const breadcrumbs = [
  { label: "Главная", href: "/" },
  { label: "Блог" },
]

const FEATURED_COUNT = 2
const INITIAL_LIST_COUNT = 6
const LOAD_MORE_COUNT = 3

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("all")
  const [visibleListCount, setVisibleListCount] = useState(INITIAL_LIST_COUNT)

  const filteredArticles = filterArticlesByTag(activeTag)
  const featuredArticles = filteredArticles.slice(0, FEATURED_COUNT)
  const listArticles = filteredArticles.slice(FEATURED_COUNT, FEATURED_COUNT + visibleListCount)
  const totalListAvailable = Math.max(0, filteredArticles.length - FEATURED_COUNT)
  const hasMoreArticles = visibleListCount < totalListAvailable

  const handleLoadMore = () => {
    setVisibleListCount((prev) => Math.min(prev + LOAD_MORE_COUNT, totalListAvailable))
  }

  const handleTagChange = (tagId: string) => {
    setActiveTag(tagId)
    setVisibleListCount(INITIAL_LIST_COUNT)
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main">
        <div className="page__container">
          <Breadcrumbs items={breadcrumbs} />

          <h1 className="blog__title">Блог</h1>

          <section aria-label="Фильтр статей">
            <TagFilter tags={tags} activeTag={activeTag} onTagChange={handleTagChange} />
          </section>

          <section aria-label="Список статей">
            {filteredArticles.length > 0 ? (
              <div className="blog-grid">
                {featuredArticles.length > 0 && (
                  <div className="blog-grid__featured">
                    {featuredArticles.map((article) => (
                      <ArticleCard key={article.id} article={article} featured />
                    ))}
                  </div>
                )}
                {listArticles.length > 0 && (
                  <div className="blog-grid__list">
                    {listArticles.map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <p className="blog__empty">Статьи по выбранной категории не найдены</p>
            )}
          </section>

          {hasMoreArticles && (
            <div className="blog__more">
              <button
                type="button"
                className="button button--primary button--load-more"
                onClick={handleLoadMore}
              >
                Ещё
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
