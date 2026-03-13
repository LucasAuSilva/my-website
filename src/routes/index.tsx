import { HomeCard } from '@/components/home-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { BadgeCheckIcon } from 'lucide-react'

export const Route = createFileRoute('/')({
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
  return (
    <section className='p-8 pt-12 flex flex-col gap-6'>
      <Badge className='p-2' variant='outline'>
        <BadgeCheckIcon className='text-green-500' data-icon="inline-start" />
        Open new projects
      </Badge>
      <h1 className='text-5xl'>
        Building things for the <strong className='text-amber-500'>web.</strong>
      </h1>
      <p className='text-muted-foreground text-sm'>
        Software engineer focused on clean interfaces, solid backends, and tools that actually solve problems.
      </p>
      <div className='flex gap-2'>
        <Button variant='default'>
          See my work
        </Button>
        <Button variant='outline'>
          Get in touch
        </Button>
      </div>
      <div className='flex gap-2'>
        {techBadges.map(({ label, variant }) => 
          <Badge className='p-3' variant={variant as any}>
          {label}
          </Badge>
        )}
      </div>
      <div className='flex gap-2'>
        <HomeCard title='12+' description='Projects shipped' />
        <HomeCard title='4+' description='Years building' />
        <HomeCard title='5+' description='Years playing RPG' />
        <HomeCard title='∞' description='Cups of coffee' />
      </div>
    </section>
  )
}
