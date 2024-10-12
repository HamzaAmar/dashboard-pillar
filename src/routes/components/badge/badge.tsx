import { Flex, Badge, Chips, Heading, Grid, Breadcrumb } from '@components/core'
import { User } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './badge.docs'

export const Component = () => {
  return (
    <section aria-labelledby="avatar--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="avatar--page-id" size="xs">
          Badge Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Badge
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview title="Badge Variant" description="Show alert only with message Props" code={docs.badgeVariant}>
          <Flex wrap gap="md" items="center">
            <Badge variant="dot" />
            <Badge variant="icon" icon={<User />} />
            <Badge variant="number" number={10} max={20} />
          </Flex>
        </Preview>

        <Preview title="Badge Color" description="Show alert only with message Props" code={docs.badgeColors}>
          <Flex wrap gap="md" items="center">
            <Badge variant="number" number={10} max={20} color="danger" />
            <Badge variant="number" number={10} max={20} color="success" />
            <Badge variant="number" number={10} max={20} color="purple" />
            <Badge variant="number" number={10} max={20} color="success" />
            <Badge variant="number" number={10} max={20} color="yellow" />
            <Badge variant="number" number={10} max={20} color="warning" />
          </Flex>
        </Preview>

        <Preview title="Badge Size" description="Show alert only with message Props" code={docs.badgeSize}>
          <Flex wrap gap="md" items="center">
            <Badge variant="number" number={10} max={20} size="xs" />
            <Badge variant="number" number={10} max={20} size="sm" />
            <Badge variant="number" number={10} max={20} size="md" />
            <Badge variant="number" number={10} max={20} size="lg" />
            <Badge variant="number" number={10} max={20} size="xl" />
          </Flex>
        </Preview>

        <Preview title="Dot Badge Size " description="Show alert only with message Props" code={docs.dotBadgeSize}>
          <Flex wrap gap="md" items="center">
            <Badge variant="dot" color="warning" size="xs" />
            <Badge variant="dot" color="warning" size="sm" />
            <Badge variant="dot" color="warning" size="md" />
            <Badge variant="dot" color="warning" size="lg" />
            <Badge variant="dot" color="warning" size="xl" />
          </Flex>
        </Preview>

        <Preview title="Icon Badge Size " description="Show alert only with message Props" code={docs.iconBadgeSize}>
          <Flex wrap gap="md" items="center">
            <Badge variant="icon" color="purple" icon={<User />} size="xs" />
            <Badge variant="icon" color="purple" icon={<User />} size="sm" />
            <Badge variant="icon" color="purple" icon={<User />} size="md" />
            <Badge variant="icon" color="purple" icon={<User />} size="lg" />
            <Badge variant="icon" color="purple" icon={<User />} size="xl" />
          </Flex>
        </Preview>

        <Preview
          title="Limit Number Badge"
          description="Show alert only with message Props"
          code={docs.limitNumberBadge}
        >
          <Flex wrap gap="md" items="center">
            <Badge variant="number" color="danger" number={10} max={5} />
            <Badge variant="number" color="danger" number={10} max={9} />
            <Badge variant="number" color="danger" number={20} max={15} />
            <Badge variant="number" color="danger" number={1000} max={10} />
            <Badge variant="number" color="danger" number={99999} max={100} />
          </Flex>
        </Preview>
      </Grid>

      <Heading color="slate" contrast="low" size="sm">
        Chip
      </Heading>

      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview title="Solid Chips" description="Show alert only with message Props" code={docs.solidChipColor}>
          <Flex wrap gap="md" items="center">
            <Chips color="success" variant="solid">
              Hello
            </Chips>
            <Chips color="danger" variant="solid">
              Hello
            </Chips>
            <Chips color="warning" variant="solid">
              Hello
            </Chips>
            <Chips color="purple" variant="solid">
              Hello
            </Chips>
            <Chips color="indigo" variant="solid">
              Hello
            </Chips>
            <Chips color="mint" variant="solid">
              Hello
            </Chips>
            <Chips color="yellow" variant="solid">
              Hello
            </Chips>
          </Flex>
        </Preview>
        <Preview title="Soft Chips" description="Show alert only with message Props" code={docs.softChipColor}>
          <Flex wrap gap="md" items="center">
            <Chips color="success" variant="soft">
              Hello
            </Chips>
            <Chips color="danger" variant="soft">
              Hello
            </Chips>
            <Chips color="warning" variant="soft">
              Hello
            </Chips>
            <Chips color="purple" variant="soft">
              Hello
            </Chips>
            <Chips color="indigo" variant="soft">
              Hello
            </Chips>
            <Chips color="mint" variant="soft">
              Hello
            </Chips>
            <Chips color="yellow" variant="soft">
              Hello
            </Chips>
          </Flex>
        </Preview>
        <Preview title="Outline Chips" description="Show alert only with message Props" code={docs.outlineChipColor}>
          <Flex wrap gap="md" items="center">
            <Chips color="success" variant="outline">
              Hello
            </Chips>
            <Chips color="danger" variant="outline">
              Hello
            </Chips>
            <Chips color="warning" variant="outline">
              Hello
            </Chips>
            <Chips color="purple" variant="outline">
              Hello
            </Chips>
            <Chips color="indigo" variant="outline">
              Hello
            </Chips>
            <Chips color="mint" variant="outline">
              Hello
            </Chips>
            <Chips color="yellow" variant="outline">
              Hello
            </Chips>
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'BadgeDocs'
