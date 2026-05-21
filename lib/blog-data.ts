import type { Article } from "@/components/article-card"
import type { Tag } from "@/components/tag-filter"

export const tags: Tag[] = [
  { id: "all", label: "Все", emoji: "📋" },
  { id: "self-esteem", label: "Самооценка и самопринятие", emoji: "🌟" },
  { id: "self", label: "Self", emoji: "🧘" },
  { id: "feelings", label: "Чувства и эмоции", emoji: "💭" },
  { id: "anxiety", label: "Тревога", emoji: "😰" },
  { id: "relationships", label: "Отношения", emoji: "💑" },
  { id: "depression", label: "Депрессия", emoji: "🌧️" },
  { id: "family", label: "Семья", emoji: "👨‍👩‍👧" },
  { id: "work", label: "Карьера", emoji: "💼" },
  { id: "children", label: "Дети", emoji: "👶" },
  { id: "trauma", label: "Травмы", emoji: "🩹" },
]

export const articles: Article[] = [
  {
    id: "1",
    slug: "kak-perestat-trevozitsya",
    title: "Как перестать тревожиться и начать жить: практические советы от психолога",
    excerpt:
      "Тревожность — это нормальная эмоция, которая помогает нам быть начеку в опасных ситуациях. Но когда она становится чрезмерной, это может мешать повседневной жизни.",
    author: "Лилия Карташова",
    date: "2024-01-15",
    image: "/images/articles/01.png",
    tags: ["anxiety", "self"],
  },
  {
    id: "2",
    slug: "granitsy-v-otnosheniyakh",
    title: "Границы в отношениях: как научиться говорить «нет» без чувства вины",
    excerpt:
      "Умение устанавливать здоровые границы — один из ключевых навыков для построения гармоничных отношений с окружающими и самим собой.",
    author: "Мария Петрова",
    date: "2024-01-10",
    image: "/images/articles/02.png",
    tags: ["relationships", "self"],
  },
  {
    id: "3",
    slug: "sindrom-samozvantsa",
    title: "Синдром самозванца: почему мы не верим в свои успехи",
    excerpt:
      "Синдром самозванца заставляет людей сомневаться в своих достижениях и бояться быть разоблачёнными как «обманщики».",
    author: "Анна Сидорова",
    date: "2024-01-05",
    image: "/images/articles/03.png",
    tags: ["work", "self-esteem"],
  },
  {
    id: "4",
    slug: "depressiya-ili-handra",
    title: "Депрессия или просто хандра: как отличить и когда обращаться за помощью",
    excerpt:
      "Плохое настроение бывает у всех, но как понять, когда это просто «плохой день», а когда — симптом депрессии?",
    author: "Лилия Карташова",
    date: "2023-12-28",
    image: "/images/articles/04.png",
    tags: ["depression", "feelings"],
  },
  {
    id: "5",
    slug: "konflikt-s-roditelyami",
    title: "Конфликты с родителями во взрослом возрасте: как наладить отношения",
    excerpt:
      "Даже будучи взрослыми, мы часто попадаем в детские паттерны поведения при общении с родителями.",
    author: "Мария Петрова",
    date: "2023-12-20",
    image: "/images/articles/05.png",
    tags: ["family", "relationships"],
  },
  {
    id: "6",
    slug: "vygoranie-na-rabote",
    title: "Профессиональное выгорание: как распознать и что делать",
    excerpt:
      "Выгорание — это не просто усталость. Это состояние эмоционального, физического и умственного истощения.",
    author: "Анна Сидорова",
    date: "2023-12-15",
    image: "/images/articles/06.png",
    tags: ["work", "anxiety"],
  },
  {
    id: "7",
    slug: "emotsionalnoe-vygoranie-roditeley",
    title: "Эмоциональное выгорание родителей: как не потерять себя в заботе о детях",
    excerpt:
      "Родительство приносит радость, но постоянная ответственность часто приводит к истощению.",
    author: "Лилия Карташова",
    date: "2023-12-08",
    image: "/images/articles/07.png",
    tags: ["children", "self"],
  },
  {
    id: "8",
    slug: "kak-perezhit-rasstavanie",
    title: "Как пережить расставание: этапы горевания и путь к восстановлению",
    excerpt:
      "Разрыв отношений — одна из самых болезненных жизненных ситуаций.",
    author: "Мария Петрова",
    date: "2023-12-01",
    image: "/images/articles/08.png",
    tags: ["relationships", "trauma"],
  },
  {
    id: "9",
    slug: "panicheskie-ataki",
    title: "Панические атаки: что происходит с телом и как себе помочь",
    excerpt:
      "Паническая атака может пугать своей интенсивностью, но она не опасна для жизни.",
    author: "Анна Сидорова",
    date: "2023-11-22",
    image: "/images/articles/09.png",
    tags: ["anxiety", "self"],
  },
  {
    id: "10",
    slug: "prokrastinatsiya-i-samokontrol",
    title: "Прокрастинация и самоконтроль: как перестать откладывать важные дела",
    excerpt:
      "Откладывание задач часто связано не с ленью, а с тревогой, перфекционизмом и усталостью. Разбираем, как вернуть ощущение контроля.",
    author: "Лилия Карташова",
    date: "2023-11-15",
    image: "/images/articles/10.png",
    tags: ["self", "work"],
  },
  {
    id: "11",
    slug: "kak-podderzhat-blizkogo",
    title: "Как поддержать близкого в трудный период, не выгорая самому",
    excerpt:
      "Забота о других может истощать, если игнорировать собственные границы. Простые шаги, которые помогают быть рядом бережно.",
    author: "Мария Петрова",
    date: "2023-11-08",
    image: "/images/articles/11.png",
    tags: ["family", "feelings"],
  },
]

export const articleImages = {
  ctaIllustration: "/images/article/cta-illustration.png",
}

export const sidebarImages = {
  consultation: "/images/sidebar/consultation.png",
  author: "/images/sidebar/author.png",
  gift: "/images/sidebar/gift.png",
  giftConfetti: "/images/sidebar/gift-confetti.png",
  product: "/images/sidebar/product.png",
  articleInline: "/images/sidebar/article-inline.png",
}

export const footerIcons = {
  send: "/icons/footer/send.svg",
  vk: "/icons/footer/vk.svg",
  telegram: "/icons/footer/telegram.svg",
  twitter: "/icons/footer/twitter.svg",
  dzen: "/icons/footer/dzen.svg",
  skBadge: "/icons/footer/sk-badge.svg",
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getTagLabel(tagId: string): string {
  return tags.find((tag) => tag.id === tagId)?.label ?? tagId
}

export function filterArticlesByTag(tagId: string): Article[] {
  if (tagId === "all") return articles

  return articles.filter((article) => article.tags.includes(tagId))
}
