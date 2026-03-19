import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const [value, set ] = useLocalStorage<string>('language', 'en')
  const isBR = value === 'pt-BR'

  function toggle() {
    const next = isBR ? 'en' : 'pt-BR'
    i18n.changeLanguage(next)
    set(next)
  }

  return (
    <Button variant='outline' size='sm' onClick={toggle} className='w-full'>
      {isBR ? '🇧🇷 PT' : '🇺🇸 EN'}
    </Button>
  )
}
