import { SectionHeader } from '@/components/section-header'
import { Badge } from '@/components/ui/badge'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  head: () => ({
    meta: [
      { title: 'Blog - Lucas Silva' },
      { name: 'description', content: 'Software Engineer based in Curitiba, Brazil.' },
      { property: 'og:title', content: 'Blog - Lucas Silva' },
      { property: 'og:url', content: 'https://lucassilvadev.com/blog' },
    ],
    links: [
      { rel: 'canonical', href: 'https://lucassilvadev.com/blog' }
    ]
  }),
  component: RouteComponent,
})

interface Post {}

function RouteComponent() {
  const posts: Post[] = []

  if (posts.length === 0) {
    return (
      <article className='p-10 pt-16 flex flex-col max-w-2xl'>
        <SectionHeader title='Blog' withBar />

        <Badge variant='outline' className='w-fit mb-6'>
          <span className='size-1.5 rounded-full bg-amber-500' />
          Coming soon
        </Badge>

        <div className='flex flex-col gap-5 p-8 bg-secondary rounded-2xl border border-border'>
          <div className='w-12 h-12 rounded-xl bg-accent border border-accent-foreground/20 flex items-center justify-center text-xl'>
            ✍️
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-medium tracking-tight'>Posts on the way</h2>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              I'm working on writing about things I've learned building software — 
              architecture decisions, tools I use, and lessons from real projects.
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            {['DDD', 'C#', 'Clean Architecture', 'TDD', 'Go', 'Dev tools'].map(t => (
              <Badge key={t} variant={['DDD','C#'].includes(t) ? 'outline' : 'secondary'}>
                {t}
              </Badge>
            ))}
          </div>
          <hr className='border-border' />
          <div className='flex items-center gap-2'>
            <span className='size-2 rounded-full bg-amber-500 shrink-0' />
            <p className='text-sm text-muted-foreground'>
              In the meantime, find me on <strong className='text-foreground font-medium'>GitHub</strong> or reach out via <strong className='text-foreground font-medium'>email</strong>.
            </p>
          </div>
        </div>

        <div className='flex flex-col mt-8 opacity-35 pointer-events-none'>
          {[260, 200, 230].map((w, i) => (
            <div key={i} className='flex items-center justify-between py-4 border-b border-border first:border-t'>
              <div className='flex flex-col gap-2'>
                <div className='h-3 rounded-full bg-muted-foreground' style={{ width: w }} />
                <div className='h-2.5 rounded-full bg-muted-foreground' style={{ width: w * 0.65 }} />
              </div>
              <div className='flex flex-col items-end gap-1.5'>
                <div className='h-2.5 w-12 rounded-full bg-muted-foreground' />
                <div className='h-4 w-10 rounded-full bg-muted-foreground' />
              </div>
            </div>
          ))}
        </div>
      </article>
    )
  }

  return (
    <article className='p-10 pt-16 flex flex-col max-w-2xl'>
      <SectionHeader title='Blog' withBar />
      {/* post list */}
    </article>
  )
}
