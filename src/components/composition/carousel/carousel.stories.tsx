import { Carousel } from '..'

import type { ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Composition/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

export const Default = () => {
  return <Carousel />
}

export const Loop = () => {
  return <Carousel options={{ loop: true }} />
}

export const WithControls = () => {
  return <Carousel withControls />
}

export const WithControlsAndIndicators = () => {
  return <Carousel withControls withIndicators />
}

export const VerticalCarousel = () => {
  return <Carousel orientation="vertical" />
}

export const PerViewCarousel = () => {
  return <Carousel perView={2.7} gap="4" />
}
