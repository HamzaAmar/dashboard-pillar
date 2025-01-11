import { Flex, IconButton, Text } from '@pillar-ui/core'
import { SOCIAL_MEDIA } from '@constants/social'

export const Footer = () => {
  return (
    <Flex className="footer" as="footer" items="center" justify="between">
      <Text size="3" color="b" low weight="5" align="center">
        © {new Date().getFullYear()} Made By Hamza Miloud Amar
      </Text>
      <Flex as="ul" gap="3">
        {SOCIAL_MEDIA.map((link) => (
          <li key={link.href}>
            <IconButton as="a" {...link} />
          </li>
        ))}
      </Flex>
    </Flex>
  )
}
