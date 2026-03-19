import { AboutMeCard } from '@/components/about-me-card'
import { SectionHeader } from '@/components/section-header'
import { Badge } from '@/components/ui/badge'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <article className='p-10 pt-16 flex flex-col max-w-2xl'>
      <SectionHeader title={t('about.title')} headingLevel='h1' withBar />
      <section className="flex flex-col gap-4 text-base text-muted-foreground leading-relaxed">
        <p>
          {t('about.bio1')}
        </p>
        <p>
          {t('about.bio2')}
        </p>
        <p>
          {t('about.bio3')}
        </p>
      </section>
      <section className='mt-6'>
        <SectionHeader title={t('about.skills')} headingLevel='h2' />
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
          title={t('about.workingOn')}
          description={t('about.workingOnDesc')}
          withBorder
        />
        <AboutMeCard
          title={t('about.basedIn')}
          description={t('about.basedInDesc')}
        />
        <AboutMeCard
          title={t('about.studying')}
          description={t('about.studyingDesc')}
        />
      </section>
    </article>
  )
}
