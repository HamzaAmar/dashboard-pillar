import * as SliderRadix from '@radix-ui/react-slider'
import Flex from '../flex'

import type { SliderRootProps, SliderThumbProps, SliderTrackProps } from './slider.type'

/*
   ======================================================================================================   
    Slider Thumb Section
   ======================================================================================================  
*/
const Thumb = ({ size = 'md', variant = 'solid', corner = 'full', label }: SliderThumbProps) => {
  return (
    <SliderRadix.Thumb
      className={`slider--thumb slider--thumb__${size} slider--thumb__${variant} u_corner--${corner}`}
      aria-label={label}
    />
  )
}

const Track = ({ ...rest }: SliderTrackProps) => {
  return (
    <SliderRadix.Track className="slider--track">
      <SliderRadix.Range className="slider--range" />
    </SliderRadix.Track>
  )
}

const Slider = ({ color = 'primary', size = 'md', sliderPrefix, SliderSuffix, children, ...rest }: SliderRootProps) => {
  const prefixContent = sliderPrefix && <span>{sliderPrefix}</span>
  const suffixContent = SliderSuffix && <span>{SliderSuffix}</span>

  return (
    <Flex gap="sm" items="center">
      {prefixContent}

      <SliderRadix.Root className={`slider slider__${size} u_${color} `} {...rest}>
        {children}
      </SliderRadix.Root>
      {suffixContent}
    </Flex>
  )
}

Slider.Thumb = Thumb
Slider.Track = Track

export default Slider
