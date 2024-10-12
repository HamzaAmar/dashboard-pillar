import { useState } from 'react'

export const useStepper = (total: number) => {
  const [active, setActive] = useState(1)

  function handleNext() {
    setActive((current) => {
      if (current > total) {
        return current
      }
      return current + 1
    })
  }

  function handlePrev() {
    setActive((current) => {
      if (current > 1) {
        return current - 1
      }
      return current
    })
  }
  return { active, setActive, handleNext, handlePrev }
}
