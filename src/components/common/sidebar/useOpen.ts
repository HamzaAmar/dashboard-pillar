import { useState } from 'react'

// TODO: Try to change the id of each items to support nested items more than 1
const DEFAULT = window.location.pathname.split('/')[1]

export const useOpen = () => {
  const [open, setOpen] = useState<string | null>(DEFAULT)

  const handleOpen = (id: string) => () => {
    setOpen((open) => (open === id ? null : id))
  }

  const isOpen = (id: string) => {
    console.log('id', id, 'open', open, 'DEFAULT', DEFAULT)
    const opened = open === id
    return opened
  }

  return { open, handleOpen, isOpen }
}
