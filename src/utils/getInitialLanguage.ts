import { LanguageUnion } from '@hooks/useSettings/useSettings.type'

export function getInitialLanguage(): LanguageUnion {
  const localStorageDarkModeColor = window.localStorage.getItem('current_language') as LanguageUnion
  const hasLocalStorageDarkMode = typeof localStorageDarkModeColor === 'string'
  if (hasLocalStorageDarkMode) {
    return localStorageDarkModeColor
  }
  return 'en'
}
