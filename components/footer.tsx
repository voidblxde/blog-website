"use client"

import { useState } from "react"
import Link from "next/link"
import { footerIcons } from "@/lib/blog-data"

const footerNavLinks = [
  { label: "О нас", href: "#" },
  { label: "Тарифы", href: "#" },
  { label: "Для бизнеса", href: "#" },
  { label: "Психологам", href: "#" },
  { label: "FAQ", href: "#" },
]

const footerSecondLinks = [
  { label: "Блог", href: "/" },
  { label: "Вебинары", href: "#" },
  { label: "Подкаст", href: "#" },
  { label: "Сертификат", href: "#" },
  { label: "Контакты", href: "#" },
]

const socialLinks = [
  { label: "VK", href: "#", icon: footerIcons.vk },
  { label: "Telegram", href: "#", icon: footerIcons.telegram },
  { label: "Twitter", href: "#", icon: footerIcons.twitter },
  { label: "Дзен", href: "#", icon: footerIcons.dzen },
]

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <footer className="footer">
      <div className="page__container footer__inner">
        <div className="footer__grid">
          <div className="footer__nav-group">
            <nav className="footer__nav" aria-label="Навигация по сайту">
              <ul className="footer__list">
                {footerNavLinks.map((link) => (
                  <li key={link.label} className="footer__list-item">
                    <Link href={link.href} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="footer__nav" aria-label="Блог и материалы">
              <ul className="footer__list">
                {footerSecondLinks.map((link) => (
                  <li key={link.label} className="footer__list-item">
                    <Link href={link.href} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <section className="footer__subscribe" aria-labelledby="footer-subscribe-title">
            <h2 id="footer-subscribe-title" className="footer__subscribe-title">
              Одно письмо в неделю со свежими новостями и акциями
            </h2>
            <form className="footer__form" onSubmit={handleSubmit}>
              <label className="visually-hidden" htmlFor="footer-email">
                Email для подписки
              </label>
              <input
                id="footer-email"
                type="email"
                className="footer__input"
                placeholder="Ваш e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="footer__submit"
                aria-label="Подписаться на рассылку"
              >
                <img
                  src={footerIcons.send}
                  alt=""
                  className="footer__submit-icon"
                  aria-hidden="true"
                />
              </button>
            </form>
            <p className="footer__disclaimer">
              Подписываясь, вы принимаете условия{" "}
              <Link href="#" className="footer__disclaimer-link">
                обработки персональных данных
              </Link>{" "}
              и соглашаетесь с политикой конфиденциальности в соответствии с ФЗ РФ № 152-ФЗ
            </p>
          </section>

          <div className="footer__aside">
            <img
              src={footerIcons.skBadge}
              alt="Участник Сколково"
              className="footer__badge-image"
              width={221}
              height={50}
            />
            <div className="footer__socials">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="footer__social-icon"
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="page__container footer__bottom-inner">
          <p className="footer__copyright">©Youtalk, 2018 – 2022</p>
          <Link href="#" className="footer__bottom-link footer__bottom-link--center">
            Юридические документы
          </Link>
          <Link href="#" className="footer__bottom-link footer__bottom-link--end">
            Способы оплаты
          </Link>
        </div>
      </div>
    </footer>
  )
}
