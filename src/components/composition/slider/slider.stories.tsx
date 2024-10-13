import { CirclePlus, Minus, Volume, VolumeOff } from '@components/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Slider } from '.'
import { Flex, Text } from '@pillar-ui/core'

import type { SliderRootTest, SliderThumbProps } from './slider.type'

export default {
  default: 'Components/Core/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

const NormalSlider = (props: SliderRootTest & { label: string }) => {
  return (
    <Slider defaultValue={[30]} {...props}>
      <Slider.Track />
      <Slider.Thumb label="volume" />
    </Slider>
  )
}

const NormalSliderThumb = (props: SliderThumbProps) => {
  return (
    <Slider defaultValue={[55]}>
      <Slider.Track />
      <Slider.Thumb {...props} label="volume" />
    </Slider>
  )
}

export const SliderColor = () => {
  return (
    <Flex direction="col" gap="5">
      <NormalSlider label="volume" color="su" />
      <NormalSlider label="volume" color="d" />
      <NormalSlider label="volume" color="w" />
      <NormalSlider label="volume" color="i" />
      <NormalSlider label="volume" color="se" />
      <NormalSlider label="volume" />
    </Flex>
  )
}

export const SliderDirection = () => {
  return (
    <Flex direction="col" gap="5">
      <NormalSlider orientation="vertical" label="volume" />
      <NormalSlider label="volume" />
    </Flex>
  )
}

export const SliderSize = () => {
  return (
    <Flex items="start" gap="5">
      <Flex items="end" gap="4">
        <NormalSlider orientation="vertical" size="4" label="volume" />
        <NormalSlider orientation="vertical" size="5" label="volume" />
        <NormalSlider orientation="vertical" size="6" label="volume" />
      </Flex>
      <Flex style={{ flex: '1' }} direction="col" gap="3">
        <NormalSlider size="4" label="volume" />
        <NormalSlider size="5" label="volume" />
        <NormalSlider size="6" label="volume" />
      </Flex>
    </Flex>
  )
}

export const SliderPrefixAndSuffix = () => {
  return (
    <Flex direction="col" gap="5">
      <NormalSlider label="Increase/decrease Range Number" sliderPrefix="0" SliderSuffix="100" />
      <NormalSlider label="volume" sliderPrefix={<VolumeOff width="20" />} SliderSuffix={<Volume width="20" />} />
      <NormalSlider
        label="Font Weight"
        color="w"
        sliderPrefix={<Text size="3">A</Text>}
        SliderSuffix={<Text weight="7">A</Text>}
      />
      <NormalSlider
        sliderPrefix={
          <Flex
            items="center"
            justify="center"
            style={{
              width: '1.5rem',
              height: '1.5rem',
              background: 'var(--indigo-9)',
              color: 'white',
              borderRadius: '.25em',
            }}
          >
            <Minus width="16" />
          </Flex>
        }
        SliderSuffix={
          <Flex
            items="center"
            justify="center"
            style={{
              width: '1.5rem',
              height: '1.5rem',
              background: 'var(--indigo-9)',
              color: 'white',
              borderRadius: '.25em',
            }}
          >
            <CirclePlus width="16" />
          </Flex>
        }
        label="volume"
      />
    </Flex>
  )
}

export const SliderThumbSize = () => {
  return (
    <Flex direction="col" gap="5">
      <NormalSliderThumb label="volume" size="4" />
      <NormalSliderThumb label="volume" size="5" />
      <NormalSliderThumb label="volume" size="6" />
    </Flex>
  )
}

export const SliderThumbVariant = () => {
  return (
    <Flex direction="col" gap="5">
      <NormalSliderThumb label="volume" variant="outline" />
      <NormalSliderThumb label="volume" variant="solid" />
    </Flex>
  )
}

export const SliderThumbCorner = () => {
  return (
    <Flex direction="col" gap="5">
      <NormalSliderThumb label="volume" corner="0" />
      <NormalSliderThumb label="volume" corner="1" />
      <NormalSliderThumb label="volume" corner="2" />
      <NormalSliderThumb label="volume" corner="3" />
      <NormalSliderThumb label="volume" corner="4" />
      <NormalSliderThumb label="volume" />
    </Flex>
  )
}

export const Playground = Template.bind({})
