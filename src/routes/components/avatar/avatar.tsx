import { Avatar, AvatarGroup, Breadcrumb, BreadcrumbItem, Flex, Grid, Heading } from '@pillar-ui/core'
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
        <Heading as="h1" id="avatar--page-id" size="3">
          Avatar Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Avatar
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview title="Avatar Size" description="Show alert only with message Props" code={docs.avatarSizeCode}>
          <Flex wrap items="center">
            <Avatar size="3" image={getImage(1)} title="Hello" />
            <Avatar size="4" image={getImage(2)} title="Hello" />
            <Avatar image={getImage(3)} title="Hello" />
            <Avatar size="6" image={getImage(4)} title="Hello" />
            <Avatar size="7" image={getImage(5)} title="Hello" />
            <Avatar size="8" image={getImage(6)} title="Hello" />
          </Flex>
        </Preview>

        <Preview title="Bad Image" description="give bad image extension or url" code={docs.avatarBadImage}>
          <Flex wrap items="center">
            <Avatar image="/hello/hle" size="5" title="Hamza Miloud Amar" />
            <Avatar image="/images/crypto/bitcoin.pngs" size="5" title="Hamza Miloud Amar" />
            <Avatar image="/images/crypto/bitcoins.png" size="5" title="Hamza Miloud Amar" />
            <Avatar size="5" title="Hamza Miloud Amar" />
          </Flex>
        </Preview>
        <Preview title="Avatar Fallback" description="Show Avatar Fallback in all sizes" code={docs.avatarFallback}>
          <Flex wrap items="center">
            <Avatar size="3" title="Hamza Miloud Amar" />
            <Avatar size="4" title="Nabil Labil" />
            <Avatar title="Kmal Sifoun" />
            <Avatar size="6" title="Lamia T9alya" />
            <Avatar size="7" title="souad Khadiri" />
            <Avatar size="8" title="Wissal Zirari" />
          </Flex>
        </Preview>
        <Preview
          title="Avatar Icon"
          description="Show Avatar Without Image and show fallback text"
          code={docs.avatarIcons}
        >
          <Flex wrap items="center">
            <Avatar fallback={<User />} size="3" title="Hamza Miloud Amar" />
            <Avatar fallback={<User />} size="4" title="Nabil Labil" />
            <Avatar fallback={<User />} title="Kmal Sifoun" />
            <Avatar fallback={<User />} size="6" title="Lamia T9alya" />
            <Avatar fallback={<User />} size="7" title="souad Khadiri" />
            <Avatar fallback={<User />} size="8" title="Wissal Zirari" />
          </Flex>
        </Preview>

        <Preview
          title="Avatar Color"
          description="Show Avatar Without Image and show fallback text"
          code={docs.avatarFallbackColor}
        >
          <Flex wrap items="center">
            <Avatar color="su" title="Hamza Miloud Amar" />
            <Avatar color="i" title="Nabil Labil" />
            <Avatar color="d" title="Kmal Sifoun" />
            <Avatar color="w" title="Lamia T9alya" />
            <Avatar color="se" title="Wissal Zirari" />
            <Avatar color="p" title="Samit Moumn" />
          </Flex>
        </Preview>
        <Preview
          title="Avatar Corner"
          description="Show Avatar Without Image and show fallback text"
          code={docs.avatarCorner}
        >
          <Flex wrap items="center">
            <Avatar corner="0" color="se" title="Nabil Labil" />
            <Avatar corner="1" color="su" title="Nabil Labil" />
            <Avatar corner="2" color="w" title="Kmal Sifoun" />
            <Avatar corner="3" color="i" title="Kmal Sifoun" />
            <Avatar corner="4" color="p" title="Kmal Sifoun" />
            <Avatar corner="full" color="b" title="Kmal Sifoun" />
          </Flex>
        </Preview>
        <Preview
          title="Group Avatar Stack"
          description="Show Avatar Without Image and show fallback text"
          code={docs.avatarGroupStack}
        >
          <AvatarGroup color="w" variant="stack">
            <Avatar title="Hamza Miloud Amar" />
            <Avatar title="Nabil Labil" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
          </AvatarGroup>
        </Preview>

        <Preview
          title="Group Avatar Stack Limit"
          description="Show Avatar Without Image and show fallback text"
          code={docs.avatarGroupStackLimit}
        >
          <AvatarGroup color="se" variant="stack" limit={7}>
            <Avatar title="Hamza Miloud Amar" />
            <Avatar title="Nabil Labil" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
          </AvatarGroup>
        </Preview>
        <Preview title="Group Avatar Grid" description="Show alert with message and title" code={docs.avatarGroupGrid}>
          <AvatarGroup color="su" size="4" variant="grid">
            <Avatar title="Hamza Miloud Amar" />
            <Avatar title="Nabil Labil" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
          </AvatarGroup>
        </Preview>

        <Preview
          title="Group Avatar Grid Limit"
          description="Show alert with message and title"
          code={docs.avatarGroupGridLimit}
        >
          <AvatarGroup limit={10} size="6" color="su" variant="grid">
            <Avatar title="Hamza Miloud Amar" />
            <Avatar title="Nabil Labil" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
            <Avatar title="Kmal Sifoun" />
          </AvatarGroup>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'AvatarDocs'
