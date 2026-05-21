"use client"

export interface Tag {
  id: string
  label: string
  emoji?: string
}

interface TagFilterProps {
  tags: Tag[]
  activeTag: string
  onTagChange: (tagId: string) => void
}

export function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  return (
    <div className="blog__tags" role="tablist" aria-label="Фильтр по категориям">
      {tags.map((tag) => (
        <button
          key={tag.id}
          type="button"
          role="tab"
          aria-selected={activeTag === tag.id}
          className={`blog__tag${activeTag === tag.id ? " blog__tag--active" : ""}`}
          onClick={() => onTagChange(tag.id)}
        >
          {tag.emoji && (
            <span className="blog__tag-emoji" aria-hidden="true">
              {tag.emoji}
            </span>
          )}
          {tag.label}
        </button>
      ))}
    </div>
  )
}
