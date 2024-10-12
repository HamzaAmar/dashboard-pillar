import { ModeType } from '@hooks/useSettings/useSettings.type'

export function getInitialColorMode() {
  const localStorageDarkModeColor = window.localStorage.getItem('color-mode') as ModeType | null
  const hasLocalStorageDarkMode = typeof localStorageDarkModeColor === 'string'
  if (hasLocalStorageDarkMode) {
    return localStorageDarkModeColor
  }
  const mq_pcs = window.matchMedia('(prefers-color-scheme: dark)')
  const hasMediaPreference = typeof mq_pcs.matches === 'boolean'
  if (hasMediaPreference) {
    return mq_pcs.matches ? 'dark' : 'light'
  }
  return 'light'
}
