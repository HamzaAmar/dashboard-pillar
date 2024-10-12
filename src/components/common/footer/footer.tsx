import { Flex, IconButton, Text } from '@components/core'
import { Facebook, Github, Linkdin, Twitter } from '@components/icons'

const footer = () => {
  return (
    <Flex className="footer" as="footer" items="center" justify="between">
      <Text size="xs" color="slate" contrast="low" weight="medium" align="center">
        © {new Date().getFullYear()} Made By Hamza Miloud Amar
      </Text>
      <Flex as="ul" gap="xs">
        <li>
          <IconButton
            as="a"
            href="https://www.facebook.com/hamza.amar.351/"
            icon={<Facebook />}
            title={`Go to my Facebook`}
          />
        </li>
        <li>
          <IconButton as="a" href="https://github.com/HamzaAmar" icon={<Github />} title={`Go to my Github`} />
        </li>
        <li>
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/hamza-miloud-amar-463b24167/"
            icon={<Linkdin />}
            title={`Go to my Linkdin`}
          />
        </li>
        <li>
          <IconButton as="a" href="https://twitter.com/HamzaMiloudAma1" icon={<Twitter />} title={`Go to my Twitter`} />
        </li>
      </Flex>
    </Flex>
  )
}

export default footer
