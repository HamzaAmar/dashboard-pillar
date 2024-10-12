import type { Action, State } from './useSettings.type'

export function settingsReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'mode': {
      return { ...state, mode: action.mode }
    }
    case 'primary': {
      return { ...state, primary: action.primary }
    }
    case 'language': {
      return { ...state, language: action.language }
    }
    default:
      return state
  }
}
