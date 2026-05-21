import Link from "next/link"
import { articleImages, getTagLabel } from "@/lib/blog-data"

export function ArticleExercise() {
  return (
    <aside className="article-page__exercise" aria-labelledby="article-exercise-title">
      <h2 id="article-exercise-title" className="article-page__exercise-title">
        Упражнение #1
      </h2>
      <p className="article-page__exercise-text">
        Примите удобное положение сидя. Напрягите мышцы по очереди — от пальцев ног до лица — на
        5–7 секунд, затем расслабьте. Обратите внимание на контраст между напряжением и
        расслаблением.
      </p>
    </aside>
  )
}

interface ArticleTagsProps {
  tagIds: string[]
}

export function ArticleTags({ tagIds }: ArticleTagsProps) {
  return (
    <ul className="article-page__tags">
      {tagIds.map((tagId) => (
        <li key={tagId} className="article-page__tags-item">
          <Link href="/" className="article-page__tag-link">
            {getTagLabel(tagId)}
          </Link>
        </li>
      ))}
      <li className="article-page__tags-item">
        <Link href="/" className="article-page__tag-link">
          Упражнения
        </Link>
      </li>
    </ul>
  )
}

export function ArticleCta() {
  return (
    <section className="article-page__cta" aria-labelledby="article-cta-title">
      <div className="article-page__cta-content">
        <h2 id="article-cta-title" className="article-page__cta-title">
          Откликается проблема?
        </h2>
        <p className="article-page__cta-text">
          Поможем подобрать специалиста по работе с подобным запросом
        </p>
        <Link href="#" className="button button--primary article-page__cta-button">
          Подобрать психолога
        </Link>
      </div>
      <img
        src={articleImages.ctaIllustration}
        alt=""
        className="article-page__cta-image"
        width={320}
        height={240}
      />
    </section>
  )
}
