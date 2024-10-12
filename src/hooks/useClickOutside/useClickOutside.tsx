import { useCallback, useEffect, useRef } from 'react'

export function useClickOutside<T extends HTMLElement = HTMLDivElement>(callback: (e: MouseEvent) => void) {
  const ref = useRef<T | null>(null)

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event)
      }
    },
    [callback]
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  return ref
}
