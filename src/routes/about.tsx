import { AboutMeCard } from '@/components/about-me-card'
import { SectionHeader } from '@/components/section-header'
import { Badge } from '@/components/ui/badge'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About - Lucas Silva' },
      { name: 'description', content: 'Software Engineer based in Curitiba, Brazil.' },
      { property: 'og:title', content: 'About - Lucas Silva' },
      { property: 'og:url', content: 'https://lucassilvadev.com/about' },
    ],
    links: [
      { rel: 'canonical', href: 'https://lucassilvadev.com/about' }
    ]
  }),
  component: RouteComponent,
})

const skills = [
  { name: 'React', variant: 'outline' },
  { name: 'Csharp', variant: 'outline' },
  { name: 'Python', variant: 'outline' },
  { name: 'Node.js', variant: 'outline' },
  { name: 'Typescript', variant: 'outline' },
  { name: 'Go', variant: 'secondary' },
  { name: 'PostgresSQL', variant: 'secondary' },
  { name: 'OracleDB', variant: 'secondary' },
  { name: 'SQL Server', variant: 'secondary' },
  { name: 'REST APIs', variant: 'secondary' },
  { name: 'Docker', variant: 'secondary' },
  { name: 'Git', variant: 'secondary' },
]

function RouteComponent() {
  return (
    <article className='p-10 pt-16 flex flex-col max-w-2xl'>
      <SectionHeader title='About me' headingLevel='h1' withBar />
      <section className="flex flex-col gap-4 text-base text-muted-foreground leading-relaxed">
        <p>
          I'm Lucas Augusto da Silva, a Software Engineer based in Curitiba, Brazil.
          I completed my degree in Software Engineering at PUC PR, where I built
          a strong foundation in software design and architecture.
        </p>
        <p>
          I care deeply about writing code that is clean, intentional, and built to last.
          My studies in Domain-Driven Design, Clean Code, and TDD aren't just academic —
          they shape how I approach every project.
        </p>
        <p>
          I'm genuinely passionate about software and the craft behind it. I believe the
          best engineers never stop learning — whether that's diving into a new architecture
          pattern, exploring a different language, or taking on a problem that pushes me
          outside my comfort zone. Challenge is where growth happens, and I've never
          shied away from it.
        </p>
      </section>
      <section className='mt-6'>
        <SectionHeader title='Skills' headingLevel='h2' />
        <div className='flex gap-2 w-5/6 flex-wrap'>
          {skills.map(({ name, variant }) => (
            <Badge key={name} className='px-3 py-1' variant={variant as any}>
              {name}
            </Badge>
          ))}
        </div>
      </section>
      <section className='flex gap-4 mt-5 flex-wrap'>
        <AboutMeCard
          title='Currently working on'
          description='Personal tools that make everyday dev workflows faster and less annoying'
          withBorder
        />
        <AboutMeCard
          title='Based in'
          description='Curitiba, Brazil — available for remote work worldwide.'
        />
        <AboutMeCard
          title='Currently studying'
          description='Taking the AZ-900 to formally certify my Azure knowledge.'
        />
      </section>
    </article>
  )
}
