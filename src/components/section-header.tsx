import { createElement } from "react"

interface SectionHeaderProps {
  title: string
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  withBar?: boolean
}

export function SectionHeader({ title, headingLevel = 'h2', withBar = false }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      {withBar && <div className="h-0.75 w-9 rounded-full bg-amber-500" />}
      {createElement(
        headingLevel,
        { className: 'text-xs font-medium tracking-widest text-muted-foreground uppercase' },
        title
      )}
    </div>
  )
}
