import { HomeCard } from '@/components/home-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Lucas Silva | Software Engineer' },
      { name: 'description', content: 'Software engineer focused on clean interfaces, solid backends, and tools that actually solve problems.' },
      { property: 'og:title', content: 'Lucas Silva | Software Engineer' },
      { property: 'og:url', content: 'https://lucassilvadev.com' },
    ],
    links: [
      { rel: 'canonical', href: 'https://lucassilvadev.com' }
    ]
  }),
  component: Index,
})

const techBadges = [
  { label: 'React', variant: 'outline' },
  { label: 'C#', variant: 'outline' },
  { label: 'Go', variant: 'outline' },
  { label: 'Python', variant: 'outline' },
  { label: 'TypeScript', variant: 'secondary' },
  { label: 'SQL Server', variant: 'secondary' },
  { label: 'PostgresSQL', variant: 'secondary' },
  { label: 'Docker', variant: 'secondary' },
]

function Index() {
  const navigate = useNavigate()

  return (
    <article className='p-10 pt-16 flex flex-col gap-8 max-w-2xl'>
      <Badge className='w-fit p-2' variant='outline'>
        <span className='size-2 rounded-full bg-green-500' />
        Open to new projects
      </Badge>

      <div className='flex flex-col gap-4'>
        <h1 className='text-6xl font-medium tracking-tight leading-tight'>
          Building things for the{' '}
          <em className='not-italic text-amber-500'>web.</em>
        </h1>
        <p className='text-muted-foreground text-base leading-relaxed'>
          Software engineer focused on clean interfaces, solid backends, and tools that actually solve problems.
        </p>
      </div>

      <div className='flex gap-2'>
        <Button onClick={() => navigate({ to: '/work' })}>
          See my work
        </Button>
        <Button variant='outline' onClick={() => navigate({ to: '/contact' })}>
          Get in touch
        </Button>
      </div>

      <div className='flex flex-wrap gap-2'>
        {techBadges.map(({ label, variant }) => (
          <Badge key={label} className='px-3 py-1' variant={variant as any}>
            {label}
          </Badge>
        ))}
      </div>

      <div className='grid grid-cols-4 gap-3 mt-4'>
        <HomeCard title='6+' description='Projects shipped' />
        <HomeCard title='4+' description='Years building' />
        <HomeCard title='5+' description='Years playing RPG' />
        <HomeCard title='∞' description='Cups of coffee' />
      </div>
    </article>
  )
}
