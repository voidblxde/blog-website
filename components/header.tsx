"use client"

import { useState } from "react"
import Link from "next/link"

const navItems = [
  { label: "О нас", href: "#" },
  { label: "Тарифы", href: "#" },
  { label: "Для бизнеса", href: "#" },
  { label: "Психологи", href: "#" },
  { label: "Сертификат", href: "#" },
  { label: "Материалы", href: "#", hasDropdown: true },
  { label: "FAQ", href: "#" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="page__container">
        <div className="header__inner">
          <Link href="/" className="header__logo" aria-label="На главную">
            <img
              src="/logo.svg"
              alt="YouTalk"
              className="header__logo-image"
              width={120}
              height={32}
            />
          </Link>

          <nav className="header__nav" aria-label="Главная навигация">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="header__nav-link">
                {item.label}
                {item.hasDropdown && (
                  <img
                    src="/icons/chevron-down.svg"
                    alt=""
                    className="header__nav-icon"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <button type="button" className="button button--outline">
              Подобрать психолога
            </button>
          </div>

          <button
            type="button"
            className="header__burger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <img
              src={isMobileMenuOpen ? "/icons/close.svg" : "/icons/burger.svg"}
              alt=""
              className="header__burger-icon"
              aria-hidden="true"
            />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="header__mobile-menu" id="mobile-menu">
            <nav className="header__mobile-nav" aria-label="Мобильная навигация">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="header__nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button type="button" className="button button--outline button--full">
                Подобрать психолога
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
