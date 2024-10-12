import { Flex } from '@components/core'
import type { ChipsProps } from './chips.type'

// TODO: Add Chips Status partial, full, wait
const chips = ({ size = 'md', color = 'primary', variant = 'solid', corner = 'full', children }: ChipsProps) => {
  return (
    <Flex
      inline
      items="center"
      justify="center"
      className={`chips chips__${size} chips__${variant} u_corner--${corner} u_${color} `}
    >
      {children}
    </Flex>
  )
}

export default chips
