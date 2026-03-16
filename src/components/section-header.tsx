import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  withBar?: boolean
}


export function SectionHeader({ title, withBar = false }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className={cn(
        "h-0.75 w-9 rounded-full",
        withBar && "bg-amber-500"
      )} />
      <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
        {title}
      </p>
    </div>
  )
}
