import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AboutMeCardProps {
  title: string
  description: string
  withBorder?: boolean
}

export function AboutMeCard({ title, description, withBorder = false }: AboutMeCardProps) {
  return (
    <Card className={cn(
      'flex-1',
      withBorder && 'border-l-4 border-l-amber-500'
    )}>
      <CardHeader>
        <CardTitle className="text-xl font-medium tracking-tight">
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
