import { ProjectCard, type ProjectType } from '@/components/projects-cards'
import { SectionHeader } from '@/components/section-header'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/work')({
  head: () => ({
    meta: [
      { title: 'Work - Lucas Silva' },
      { name: 'description', content: 'Software Engineer based in Curitiba, Brazil.' },
      { property: 'og:title', content: 'Work - Lucas Silva' },
      { property: 'og:url', content: 'https://lucassilvadev.com/work' },
    ],
    links: [
      { rel: 'canonical', href: 'https://lucassilvadev.com/work' }
    ]
  }),
  component: RouteComponent,
})

const projects: ProjectType[] = [
  {
    icon: '⚙️',
    withFeatureTag: true,
    title: 'Code&Go API',
    description: 'Backend for an educational platform that teaches programming through gamification. Built with Clean Architecture, DDD, CQRS, and RabbitMQ. Includes CI/CD with GitHub Actions and Docker.',
    githubUrl: 'https://github.com/LucasAuSilva/code-go-api',
    techs: [
      { label: 'C#', variant: 'outline' },
      { label: 'Clean Architecture', variant: 'outline' },
      { label: 'DDD', variant: 'outline' },
      { label: 'PostgreSQL', variant: 'secondary' },
      { label: 'Docker', variant: 'secondary' },
      { label: 'RabbitMQ', variant: 'secondary' },
    ]
  },
  {
    icon: '🧹',
    title: 'Clean Node API',
    description: 'Node.js API built with TDD, Clean Architecture, DDD, and a full suite of Design Patterns. Covers SOLID principles end-to-end with GraphQL, MongoDB, and Swagger docs.',
    githubUrl: 'https://github.com/LucasAuSilva/clean-code-udemy',
    techs: [
      { label: 'TypeScript', variant: 'outline' },
      { label: 'TDD', variant: 'outline' },
      { label: 'Clean Architecture', variant: 'outline' },
      { label: 'MongoDB', variant: 'secondary' },
      { label: 'GraphQL', variant: 'secondary' },
      { label: 'Docker', variant: 'secondary' },
    ]
  },
  {
    icon: '🌐',
    title: 'Static Site Generator',
    description: 'A Python tool that converts Markdown files into a full static HTML site using a template. Built from scratch to sharpen Python skills — the generated site is live on GitHub Pages.',
    githubUrl: 'https://github.com/LucasAuSilva/static-site-generator',
    liveUrl: 'https://lucasausilva.github.io/static-site-generator/',
    techs: [
      { label: 'Python', variant: 'outline' },
      { label: 'HTML', variant: 'secondary' },
      { label: 'CSS', variant: 'secondary' },
    ]
  },
  {
    icon: '🖥️',
    withFeatureTag: false,
    title: 'Personal Portfolio',
    description: 'This portfolio — designed from scratch and built with React, TanStack Router, and shadcn/ui. Features dark mode, semantic HTML, and full SEO meta tags.',
    githubUrl: 'https://github.com/LucasAuSilva/my-website',
    liveUrl: 'https://lucassilvadev.com',
    techs: [
      { label: 'React', variant: 'outline' },
      { label: 'TypeScript', variant: 'outline' },
      { label: 'TanStack Router', variant: 'outline' },
      { label: 'shadcn/ui', variant: 'secondary' },
      { label: 'Tailwind', variant: 'secondary' },
    ]
  },
  {
    icon: '📋',
    title: 'DM Notes Converter',
    description: 'A small web tool to convert and clean up DM notes from Markdown into Printable PDF format. Built to scratch a real itch — now available for others to use.',
    githubUrl: 'https://github.com/LucasAuSilva/dm-notes-converter',
    techs: [
      { label: 'Web app', variant: 'outline' },
      { label: 'Open source', variant: 'outline' },
      { label: 'Python', variant: 'secondary' },
      { label: 'React', variant: 'secondary' },
    ]
  },
]

function RouteComponent() {
  const { t } = useTranslation()

  return (
    <article className='p-10 pt-16 flex flex-col gap-8 w-full max-w-5xl'>
      <SectionHeader title={t('work.title')} withBar />
      <section className='grid grid-cols-2 gap-4'>
        {projects.map((props) => (
          <div
            key={props.title}
            className={props.withFeatureTag ? 'col-span-2' : 'col-span-1'}
          >
            <ProjectCard {...props} />
          </div>
        ))}
      </section>
    </article>
  )
}
