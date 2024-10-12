import { useEffect } from 'react'
import { usePrevious } from '@hooks/usePrevious'
import useSettings from '@hooks/useSettings/useSettings'

export const usePrimary = () => {
  const { state } = useSettings()
  const { primary } = state
  const prevPrimary = usePrevious(primary)

  useEffect(() => {
    if (prevPrimary) {
      const isPrevExist = document.body.classList.contains(prevPrimary)
      isPrevExist && document.body.classList.remove(prevPrimary)
    }
    document.body.classList.add(primary)
    localStorage.setItem('color-primary', primary)
    document.body.classList.add(primary)
  }, [primary, prevPrimary])
}
