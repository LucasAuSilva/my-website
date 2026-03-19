import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const isBR = i18n.language === 'pt-BR'

  function toggle() {
    const next = isBR ? 'en' : 'pt-BR'
    i18n.changeLanguage(next)
    localStorage.setItem('language', next)
  }

  return (
    <Button variant='outline' size='sm' onClick={toggle} className='w-full'>
      {isBR ? '🇧🇷 PT' : '🇺🇸 EN'}
    </Button>
  )
}
