import { useEffect } from 'react'
import useSettings from '@hooks/useSettings/useSettings'

export const useLanguage = () => {
  const { state } = useSettings()
  const { language } = state

  useEffect(() => {
    localStorage.setItem('current_language', language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])
}
