import { Avatar, Breadcrumb, Flex, Grid, Heading } from '@components/core'
import { User } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './avatar.docs'

function getImage(index: number) {
  return `https://i.pravatar.cc/150?img=${index}`
}

export const Component = () => {
  return (
    <section aria-labelledby="avatar--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="avatar--page-id" size="xs">
          Avatar Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Avatar
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview title="Avatar Size" description="Show alert only with message Props" code={docs.avatarSizeCode}>
          <Flex wrap items="center">
            <Avatar variant="image" size="xs" image={getImage(1)} title="Hello" />
            <Avatar variant="image" size="sm" image={getImage(2)} title="Hello" />
            <Avatar variant="image" image={getImage(3)} title="Hello" />
            <Avatar variant="image" size="lg" image={getImage(4)} title="Hello" />
            <Avatar variant="image" size="xl" image={getImage(5)} title="Hello" />
            <Avatar variant="image" size="2xl" image={getImage(6)} title="Hello" />
          </Flex>
        </Preview>

        <Preview title="Bad Image" description="give bad image extension or url" code={docs.avatarBadImage}>
          <Flex wrap items="center">
            <Avatar variant="image" image="/hello/hle" size="md" title="Hamza Miloud Amar" />
            <Avatar variant="image" image="/images/crypto/bitcoin.pngs" size="md" title="Hamza Miloud Amar" />
            <Avatar variant="image" image="/images/crypto/bitcoins.png" size="md" title="Hamza Miloud Amar" />
            <Avatar variant="image" size="md" title="Hamza Miloud Amar" />
          </Flex>
        </Preview>
        <Preview title="Avatar Fallback" description="Show Avatar Fallback in all sizes" code={docs.avatarFallback}>
          <Flex wrap items="center">
            <Avatar variant="image" size="xs" title="Hamza Miloud Amar" />
            <Avatar variant="image" size="sm" title="Nabil Labil" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" size="lg" title="Lamia T9alya" />
            <Avatar variant="image" size="xl" title="souad Khadiri" />
            <Avatar variant="image" size="2xl" title="Wissal Zirari" />
          </Flex>
        </Preview>
        <Preview
          title="Avatar Icon"
          description="Show Avatar Without Image and show fallback text"
          code={docs.avatarIcons}
        >
          <Flex wrap items="center">
            <Avatar variant="icon" icon={<User />} size="xs" title="Hamza Miloud Amar" />
            <Avatar variant="icon" icon={<User />} size="sm" title="Nabil Labil" />
            <Avatar variant="icon" icon={<User />} title="Kmal Sifoun" />
            <Avatar variant="icon" icon={<User />} size="lg" title="Lamia T9alya" />
            <Avatar variant="icon" icon={<User />} size="xl" title="souad Khadiri" />
            <Avatar variant="icon" icon={<User />} size="2xl" title="Wissal Zirari" />
          </Flex>
        </Preview>

        <Preview
          title="Avatar Color"
          description="Show Avatar Without Image and show fallback text"
          code={docs.avatarFallbackColor}
        >
          <Flex wrap items="center">
            <Avatar variant="image" color="success" title="Hamza Miloud Amar" />
            <Avatar variant="image" color="indigo" title="Nabil Labil" />
            <Avatar variant="image" color="danger" title="Kmal Sifoun" />
            <Avatar variant="image" color="warning" title="Lamia T9alya" />
            <Avatar variant="image" color="yellow" title="souad Khadiri" />
            <Avatar variant="image" color="purple" title="Wissal Zirari" />
            <Avatar variant="image" color="primary" title="Samit Moumn" />
          </Flex>
        </Preview>
        <Preview
          title="Avatar Corner"
          description="Show Avatar Without Image and show fallback text"
          code={docs.avatarCorner}
        >
          <Flex wrap items="center">
            <Avatar corner="sharp" color="success" variant="image" title="Nabil Labil" />
            <Avatar corner="2xs" color="success" variant="image" title="Nabil Labil" />
            <Avatar corner="xs" color="warning" variant="image" title="Kmal Sifoun" />
            <Avatar corner="sm" color="indigo" variant="image" title="Kmal Sifoun" />
            <Avatar corner="md" color="yellow" variant="image" title="Kmal Sifoun" />
            <Avatar corner="lg" color="mint" variant="image" title="Kmal Sifoun" />
            <Avatar corner="xl" color="purple" variant="image" title="Kmal Sifoun" />
            <Avatar corner="2xl" color="slate" variant="image" title="Kmal Sifoun" />
            <Avatar corner="full" color="slate" variant="image" title="Kmal Sifoun" />
          </Flex>
        </Preview>
        <Preview
          title="Group Avatar Stack"
          description="Show Avatar Without Image and show fallback text"
          code={docs.avatarGroupStack}
        >
          <Avatar.Group color="warning" variant="stack">
            <Avatar variant="image" title="Hamza Miloud Amar" />
            <Avatar variant="image" title="Nabil Labil" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
          </Avatar.Group>
        </Preview>

        <Preview
          title="Group Avatar Stack Limit"
          description="Show Avatar Without Image and show fallback text"
          code={docs.avatarGroupStackLimit}
        >
          <Avatar.Group color="purple" variant="stack" limit={7}>
            <Avatar variant="image" title="Hamza Miloud Amar" />
            <Avatar variant="image" title="Nabil Labil" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
          </Avatar.Group>
        </Preview>
        <Preview title="Group Avatar Grid" description="Show alert with message and title" code={docs.avatarGroupGrid}>
          <Avatar.Group color="success" size="sm" variant="grid">
            <Avatar variant="image" title="Hamza Miloud Amar" />
            <Avatar variant="image" title="Nabil Labil" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
          </Avatar.Group>
        </Preview>

        <Preview
          title="Group Avatar Grid Limit"
          description="Show alert with message and title"
          code={docs.avatarGroupGridLimit}
        >
          <Avatar.Group limit={10} size="lg" color="success" variant="grid">
            <Avatar variant="image" title="Hamza Miloud Amar" />
            <Avatar variant="image" title="Nabil Labil" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
          </Avatar.Group>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'AvatarDocs'
