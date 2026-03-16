import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FolderRoot } from "lucide-react"
import { cn } from "@/lib/utils"

type TechType = {
  label: string
  variant: 'outline' | 'secondary'
}

export type ProjectType = {
  icon: string
  title: string
  description: string
  techs: TechType[]
  withFeatureTag?: boolean
  githubUrl?: string
  liveUrl?: string
}

interface ProjectCardProps extends ProjectType {}

export function ProjectCard({
  icon,
  title,
  description,
  techs,
  withFeatureTag = false,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className={cn(
      "p-4 transition-colors hover:border-amber-500",
      withFeatureTag
        ? "flex-row gap-4 border-amber-500 border-[1.5px]"
        : "flex-col"
    )}>

      <div className="w-10 h-10 rounded-xl bg-accent border border-accent-foreground/20 flex items-center justify-center text-base shrink-0">
        {icon}
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <CardHeader className="p-0">
          {withFeatureTag && (
            <Badge variant='outline' className="w-fit mb-1">
              Featured tool
            </Badge>
          )}
          <CardTitle className="text-base font-medium tracking-tight">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="p-0 flex flex-col gap-2 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {techs.map(tech => (
              <Badge key={tech.label} variant={tech.variant}>
                {tech.label}
              </Badge>
            ))}
          </div>

          <div className="flex mt-1 gap-2 shrink-0">
            {githubUrl && (
              <Button asChild variant="secondary" size="sm" className="gap-1 text-xs">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                >
                <FolderRoot className="h-3 w-3" />
                  Code
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button asChild variant="outline" size="sm" className="gap-1 text-xs">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLink className="h-3 w-3" />
                  Live
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

