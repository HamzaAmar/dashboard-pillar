import { usePrevious } from '@hooks/usePrevious'
import useSettings from '@hooks/useSettings/useSettings'
import { useEffect } from 'react'

export const useMode = () => {
  const { state } = useSettings()
  const { mode } = state
  const prevMode = usePrevious(mode)

  useEffect(() => {
    if (prevMode) {
      const isPrevExist = document.documentElement.classList.contains(prevMode)
      isPrevExist && document.documentElement.classList.remove(prevMode)
    }
    document.documentElement.classList.add(mode)
    localStorage.setItem('color-mode', mode)
  }, [mode, prevMode])
}
