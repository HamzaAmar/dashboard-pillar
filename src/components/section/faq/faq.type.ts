import type { ReactElement } from 'react'

export interface CardBaseProps {
  title: string
  description: string
  icon: ReactElement
}

export interface CardProps extends CardBaseProps {}

export interface Card extends CardBaseProps {
  id: string
}

export type Cards = Card[]

export interface QuestionProps extends Omit<Card, 'icon'> {}
export type Questions = QuestionProps[]
