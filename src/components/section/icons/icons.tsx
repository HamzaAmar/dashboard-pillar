import { Flex, Grid, Heading, Text } from '@pillar-ui/core'
import { useClipboard } from '@hooks/useClipboard'
import { ICONS_DATA } from './icons.data'
import type { IconProps } from './icon.type'
import { DoubleCheck } from '@components/icons'

const IconItem = ({ icon, title, code }: IconProps) => {
  const { copy, copied } = useClipboard()
  return (
    <button
      data-visible={copied}
      onClick={() => copy(code)}
      aria-label={`Click To Copy ${title}`}
      className="icon-item-container l_box"
    >
      <div className="icon-content l_flow-sm">
        <span>{icon}</span>
        <Text size="1" weight="5">
          {title}
        </Text>
      </div>
      <Flex
        className="icon-copy-text"
        data-visible={copied}
        size="3"
        weight="5"
        as={Text}
        items="center"
        justify="center"
      >
        {copied ? (
          <Flex gap="1" as="span">
            Copied
            <DoubleCheck width="16" />
          </Flex>
        ) : (
          'Copy'
        )}
      </Flex>
    </button>
  )
}

const icons = () => {
  return (
    <div className="l_flow-lg">
      <Heading size="4"> Icons List </Heading>
      <Grid grid="repeat(auto-fit, minmax(5.75rem, 1fr))" gap="4">
        {ICONS_DATA.map(({ slug, ...rest }) => (
          <IconItem {...rest} key={slug} />
        ))}
      </Grid>
    </div>
  )
}

export default icons
