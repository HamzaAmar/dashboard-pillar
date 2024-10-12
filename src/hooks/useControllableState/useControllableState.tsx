import { useState, useRef, useCallback } from 'react'
import type * as React from 'react'

export function useControllableState<T = any>({
  controlledValue,
  defaultValue,
}: {
  controlledValue?: T
  defaultValue: T | (() => T)
}): [T, React.Dispatch<React.SetStateAction<T>>] {
  const isControlled = controlledValue !== undefined
  const isControlledRef = useRef(isControlled)

  const [state, setState] = useState(isControlledRef.current ? controlledValue! : defaultValue)
  const set: React.Dispatch<React.SetStateAction<T>> = useCallback((n) => {
    if (!isControlledRef.current) {
      setState(n)
    }
  }, [])
  return [isControlledRef.current ? (controlledValue as T) : state, set]
}
