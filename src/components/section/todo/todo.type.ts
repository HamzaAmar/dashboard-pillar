import { TaskProps } from '@api/todo/todo.type'
import { Color } from '@pillar-ui/core'
import type { ReactNode } from 'react'

export type BadgeColor = Record<string, Color>

export interface AddNoteParams {
  id: string
  text: string
}

export interface TodoItemProps {
  title: string
  length: number
  children: ReactNode
  isDragOver: boolean
  addNote(args: AddNoteParams): void
  id: string
}

export interface TodoCardProps extends TaskProps {
  index: number
  isDragOver: boolean
}
