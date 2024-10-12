import { Flex, Grid, Heading, Text } from '@components/core'
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
        <Text size="2xs" weight="medium">
          {title}
        </Text>
      </div>
      <Flex
        className="icon-copy-text"
        data-visible={copied}
        size="xs"
        weight="medium"
        as={Text}
        items="center"
        justify="center"
      >
        {copied ? (
          <Flex gap="2xs" as="span">
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
      <Heading size="sm"> Icons List </Heading>
      <Grid columns="repeat(auto-fit, minmax(5.75rem, 1fr))" gap="sm">
        {ICONS_DATA.map(({ slug, ...rest }) => (
          <IconItem {...rest} key={slug} />
        ))}
      </Grid>
    </div>
  )
}

export default icons
