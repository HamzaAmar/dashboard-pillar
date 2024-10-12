import { getInitialLanguage } from '@utils/getInitialLanguage'
import { getInitialColorMode } from '@utils/getInitialMode'
import { getInitialPrimaryColor } from '@utils/getInitialPrimaryColor'
import { createContext, useContext, useReducer } from 'react'
import { settingsReducer } from './settingsReducer'
import type {
  ContextType,
  LanguageUnion,
  ModeUnion,
  PrimaryUnion,
  SettingsProviderProps,
  State,
} from './useSettings.type'

export const initialState: State = {
  mode: getInitialColorMode(),

  // TODO: Make it the default user default language
  language: getInitialLanguage(),
  primary: getInitialPrimaryColor(),
}

export const SettingContext = createContext({} as ContextType)

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState)

  const changeLanguage = (language: LanguageUnion) => () => {
    dispatch({ type: 'language', language })
  }

  const changeMode = (mode: ModeUnion) => () => {
    dispatch({ type: 'mode', mode })
  }

  const changePrimary = (primary: PrimaryUnion) => () => {
    dispatch({ type: 'primary', primary })
  }

  return (
    <SettingContext.Provider value={{ state, changeLanguage, changeMode, changePrimary }}>
      {children}
    </SettingContext.Provider>
  )
}

const useSettings = () => {
  const context = useContext<ContextType>(SettingContext)
  if (!context) {
    throw Error('You need to wrap the Tree With Setting Provider')
  }
  return context
}

export default useSettings
