import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface ContactCardProp{
  icon: string
  title: string
  description: string
  link: string
}

export function ContactCard({ icon, title, description, link }: ContactCardProp) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => e.stopPropagation()}
    >
      <Card className="p-4 flex-row gap-4 border-[1.5px] cursor-pointer transition-colors hover:border-amber-500 hover:bg-accent items-center">
        <div className="w-10 h-10 rounded-xl bg-accent border border-accent-foreground/20 flex items-center justify-center text-base shrink-0">
          {icon}
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <CardHeader className="p-0">
            <CardTitle className="text-base font-medium tracking-tight">
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </div>
        <ExternalLink className="text-amber-500" />
      </Card>
    </a>
  )
}
