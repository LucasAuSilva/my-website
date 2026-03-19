import { ContactCard } from '@/components/contact-card'
import { SectionHeader } from '@/components/section-header'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact - Lucas Silva' },
      { name: 'description', content: 'Software Engineer based in Curitiba, Brazil.' },
      { property: 'og:title', content: 'Contact - Lucas Silva' },
      { property: 'og:url', content: 'https://lucassilvadev.com/contact' },
    ],
    links: [
      { rel: 'canonical', href: 'https://lucassilvadev.com/contact' }
    ]
  }),
  component: RouteComponent,
})

const contacts = [
  { icon: '✉️', title: 'contact.email', description: 'silvaaugustolucas@gmail.com', link: 'mailto:silvaaugustolucas@gmail.com' },
  { icon: '💼', title: 'contact.linkedin', description: 'https://www.linkedin.com/in/lucas-augusto-silva-6a12aa135', link: 'https://www.linkedin.com/in/lucas-augusto-silva-6a12aa135' },
  { icon: '🐙', title: 'contact.github', description: 'github.com/LucasAuSilva', link: 'https://github.com/LucasAuSilva' },
]

function RouteComponent() {
  const { t } = useTranslation()

  return (
   <article className='p-10 pt-16 flex flex-col gap-2 w-full max-w-4xl'>
      <SectionHeader title={t('contact.title')} withBar />
      <section className="flex flex-col gap-4 text-base text-muted-foreground leading-relaxed">
        <p>
          {t('contact.intro')}
        </p>
      </section>
      <section className='flex flex-col flex-1 gap-2 mt-4'>
        {contacts.map((props) => 
          <ContactCard
            key={props.title}
            {...props}
            title={t(props.title as any)}
          />
        )}
      </section>
    </article>
  )
}
