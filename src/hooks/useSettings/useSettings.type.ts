import type { ReactNode } from 'react'

export type ModeType = 'dark' | 'light'

export interface SettingsProviderProps {
  children: ReactNode
}

export type PrimaryUnion = 'mint' | 'red' | 'orange' | 'green' | 'purple' | 'indigo'
export type ModeUnion = 'light' | 'dark'
export type LanguageUnion = 'en' | 'fr' | 'ar'

export interface State {
  mode: ModeUnion
  language: LanguageUnion
  primary: PrimaryUnion
}

interface Mode {
  type: 'mode'
  mode: ModeUnion
}

interface Primary {
  type: 'primary'
  primary: PrimaryUnion
}

interface Language {
  type: 'language'
  language: LanguageUnion
}

export type Action = Mode | Primary | Language

export type ContextType = {
  state: State
  changeLanguage: (language: LanguageUnion) => () => void
  changeMode: (mode: ModeUnion) => () => void
  changePrimary: (primary: PrimaryUnion) => () => void
}
