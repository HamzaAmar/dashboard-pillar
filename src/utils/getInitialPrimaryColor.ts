import { PrimaryUnion } from '@hooks/useSettings/useSettings.type'

export function getInitialPrimaryColor(): PrimaryUnion {
  const localStorageDarkModeColor = window.localStorage.getItem('color-primary') as PrimaryUnion
  const hasLocalStorageDarkMode = typeof localStorageDarkModeColor === 'string'
  if (hasLocalStorageDarkMode) {
    return localStorageDarkModeColor
  }
  return 'indigo'
}
