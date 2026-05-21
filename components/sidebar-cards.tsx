import Link from "next/link"
import { sidebarImages } from "@/lib/blog-data"

export function ConsultationCard() {
  return (
    <section
      className="sidebar-card sidebar-card--accent sidebar-card--consultation"
      aria-labelledby="sidebar-consultation-title"
    >
      <div className="sidebar-card__image-wrap">
        <img
          src={sidebarImages.consultation}
          alt=""
          className="sidebar-card__image sidebar-card__image--top"
          width={218}
          height={160}
        />
      </div>
      <h2 id="sidebar-consultation-title" className="sidebar-card__title">
        Загружаем свободные окошки
      </h2>
      <p className="sidebar-card__text">
        Все в порядке, сейчас мы перенаправим вас в сервис записи Qlick, через который
        удобно выбрать дату, время встречи и оплатить её
      </p>
      <Link href="#" className="button button--primary button--full sidebar-card__button">
        Подробнее
      </Link>
    </section>
  )
}

interface AuthorCardProps {
  name: string
  role: string
  meta: string
  specializations: string[]
}

export function AuthorCard({ name, role, meta, specializations }: AuthorCardProps) {
  return (
    <section className="sidebar-card sidebar-card--author" aria-labelledby="sidebar-author-title">
      <div className="sidebar-card__hero">
        <div className="sidebar-card__badges">
          <span className="sidebar-card__badge">
            <span className="sidebar-card__badge-emoji" aria-hidden="true">📝</span>
            Переписка
          </span>
          <span className="sidebar-card__badge">
            <span className="sidebar-card__badge-emoji" aria-hidden="true">📹</span>
            Видео
          </span>
        </div>

        <div className="sidebar-card__avatar-wrap sidebar-card__avatar-wrap--large">
          <img
            src={sidebarImages.author}
            alt={name}
            className="sidebar-card__avatar"
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className="sidebar-card__profile">
        <h2 id="sidebar-author-title" className="sidebar-card__title">
          {name}
        </h2>
        <p className="sidebar-card__role">{role}</p>
        <p className="sidebar-card__meta">{meta}</p>
      </div>

      <hr className="sidebar-card__divider" />

      <h3 className="sidebar-card__subtitle">С чем работает психолог</h3>
      <ul className="sidebar-card__list">
        {specializations.map((item) => (
          <li key={item} className="sidebar-card__list-item">
            {item}
          </li>
        ))}
      </ul>

      <Link href="#" className="button button--primary button--full sidebar-card__button">
        Подробнее
      </Link>
    </section>
  )
}

interface ProductCardProps {
  sessions: number
  description: string
  price: string
}

export function GiftCard() {
  return (
    <Link href="#" className="sidebar-card sidebar-card--gift">
      <div
        className="sidebar-card__gift-confetti"
        style={{ backgroundImage: `url(${sidebarImages.giftConfetti})` }}
        aria-hidden="true"
      />
      <h2 className="sidebar-card__gift-title">Дарите заботу</h2>
      <img
        src={sidebarImages.gift}
        alt=""
        className="sidebar-card__gift-image"
        width={218}
        height={120}
      />
    </Link>
  )
}

export function ProductCard({ sessions, description, price }: ProductCardProps) {
  return (
    <section className="sidebar-card sidebar-card--product" aria-labelledby="sidebar-product-title">
      <h2 id="sidebar-product-title" className="sidebar-card__title sidebar-card__title--product">
        {sessions} Видео сессий
      </h2>
      <p className="sidebar-card__text sidebar-card__text--product">{description}</p>
      <p className="sidebar-card__price sidebar-card__price--product">{price}</p>
      <Link href="#" className="button button--primary sidebar-card__button sidebar-card__button--product">
        Купить
      </Link>
      <img
        src={sidebarImages.product}
        alt=""
        className="sidebar-card__product-deco"
        width={144}
        height={144}
      />
    </section>
  )
}
