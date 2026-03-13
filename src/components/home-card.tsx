import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface HomeCardProps {
  title: string
  description: string
}

export function HomeCard({ title, description }: HomeCardProps) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-amber-500 text-2xl font-medium tracking-tight">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
