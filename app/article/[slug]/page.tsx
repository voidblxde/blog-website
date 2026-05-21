import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  ConsultationCard,
  AuthorCard,
  GiftCard,
  ProductCard,
} from "@/components/sidebar-cards"
import {
  ArticleCta,
  ArticleExercise,
  ArticleTags,
} from "@/components/article-end"
import { getArticleBySlug, articles, sidebarImages } from "@/lib/blog-data"

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return { title: "Статья не найдена" }
  }

  return {
    title: `${article.title} | YouTalk Блог`,
    description: article.excerpt,
  }
}

const tableOfContents = [
  { id: "intro", label: "Введение" },
  { id: "causes", label: "Причины возникновения" },
  { id: "symptoms", label: "Симптомы и признаки" },
  { id: "treatment", label: "Методы работы" },
  { id: "tips", label: "Практические советы" },
  { id: "conclusion", label: "Заключение" },
]

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Блог", href: "/" },
    { label: article.title },
  ]

  return (
    <div className="page">
      <Header />

      <main className="page__main">
        <div className="page__container">
          <Breadcrumbs items={breadcrumbs} />

          <div className="article-page__layout">
            <article>
              <h1 className="article-page__title">{article.title}</h1>

              <div className="article-page__meta">
                <span>Автор: {article.author}</span>
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>

              <figure className="article-page__hero">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-page__hero-image"
                  width={1200}
                  height={675}
                />
              </figure>

              <nav className="article-page__toc" aria-label="Содержание статьи">
                <h2 className="article-page__toc-title">Содержание</h2>
                <ul className="article-page__toc-list">
                  {tableOfContents.map((item) => (
                    <li key={item.id} className="article-page__toc-item">
                      <Link href={`#${item.id}`} className="article-page__toc-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <section id="intro" className="article-page__section">
                <h2 className="article-page__section-title">Введение</h2>
                <p className="article-page__text">{article.excerpt}</p>
                <p className="article-page__text">
                  В современном мире всё больше людей сталкиваются с различными психологическими
                  трудностями. Важно понимать, что обращение за помощью к специалисту — это не
                  признак слабости, а осознанный шаг к улучшению качества своей жизни.
                </p>
              </section>

              <section id="causes" className="article-page__section">
                <h2 className="article-page__section-title">Причины возникновения</h2>
                <p className="article-page__text">
                  Существует множество факторов, которые могут привести к развитию психологических
                  проблем:
                </p>
                <ul className="article-page__list">
                  <li>Генетическая предрасположенность</li>
                  <li>Травматический опыт в детстве</li>
                  <li>Хронический стресс на работе или в личной жизни</li>
                  <li>Социальная изоляция и одиночество</li>
                  <li>Нарушения сна и режима дня</li>
                </ul>
              </section>

              <blockquote className="article-page__quote">
                <p className="article-page__quote-text">
                  Самое важное — это не то, что с нами происходит, а то, как мы на это реагируем.
                  У каждого из нас есть возможность изменить свой способ реагирования на жизненные
                  трудности.
                </p>
                <footer className="article-page__quote-author">
                  — Виктор Франкл, психолог и психотерапевт
                </footer>
              </blockquote>

              <figure className="article-page__inline-image">
                <img
                  src={sidebarImages.articleInline}
                  alt="Иллюстрация к статье"
                  width={800}
                  height={450}
                />
              </figure>

              <section id="symptoms" className="article-page__section">
                <h2 className="article-page__section-title">Симптомы и признаки</h2>
                <p className="article-page__text">
                  Распознать проблему — это первый шаг к её решению. Обратите внимание на следующие
                  признаки:
                </p>
                <ul className="article-page__list">
                  <li>Постоянное чувство тревоги или беспокойства</li>
                  <li>Нарушения сна</li>
                  <li>Потеря интереса к деятельности</li>
                  <li>Сложности с концентрацией внимания</li>
                  <li>Изменения в аппетите и весе</li>
                </ul>
              </section>

              <section id="treatment" className="article-page__section">
                <h2 className="article-page__section-title">Методы работы</h2>
                <p className="article-page__text">
                  Современная психология предлагает множество эффективных методов работы с
                  различными проблемами:
                </p>
                <h3 className="article-page__subsection-title">
                  Когнитивно-поведенческая терапия (КПТ)
                </h3>
                <p className="article-page__text">
                  Один из наиболее изученных и эффективных методов. КПТ помогает выявить и изменить
                  негативные паттерны мышления.
                </p>
                <h3 className="article-page__subsection-title">Психоанализ</h3>
                <p className="article-page__text">
                  Глубинный метод работы, направленный на исследование бессознательных процессов.
                </p>
              </section>

              <section id="tips" className="article-page__section">
                <h2 className="article-page__section-title">Практические советы</h2>
                <ol className="article-page__list">
                  <li>Ведите дневник мыслей и чувств.</li>
                  <li>Практикуйте осознанность 5–10 минут в день.</li>
                  <li>Поддерживайте режим сна.</li>
                  <li>Двигайтесь и гуляйте на свежем воздухе.</li>
                  <li>Обращайтесь за поддержкой к близким и специалистам.</li>
                </ol>
              </section>

              <section id="conclusion" className="article-page__section">
                <h2 className="article-page__section-title">Заключение</h2>
                <p className="article-page__text">
                  Работа над собой — это процесс, который требует времени и терпения. Если вам
                  нужна профессиональная помощь — не откладывайте обращение к психологу.
                </p>
              </section>

              <ArticleExercise />
              <ArticleTags tagIds={article.tags} />
            </article>

            <aside className="article-page__sidebar">
              <ConsultationCard />
              <AuthorCard
                name="Лилия"
                role="Психолог"
                meta="Опыт 6 лет • 43 года"
                specializations={[
                  "Тревога, тревожности",
                  "Подавленность",
                  "Тревога и панические атаки",
                ]}
              />
              <GiftCard />
              <ProductCard
                sessions={8}
                description="Проработать небольшие проблемы и продвинуться в решении сложных запросов"
                price="18 500 ₽"
              />
            </aside>
          </div>

          <ArticleCta />
        </div>
      </main>

      <Footer />
    </div>
  )
}
