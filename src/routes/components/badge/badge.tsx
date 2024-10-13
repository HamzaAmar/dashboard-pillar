import { Flex, Badge, Chips, Heading, Grid, Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'
import { User } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './badge.docs'

export const Component = () => {
  return (
    <section aria-labelledby="avatar--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="avatar--page-id" size="3">
          Badge Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Badge
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview title="Badge Variant" description="Show alert only with message Props" code={docs.badgeVariant}>
          <Flex wrap gap="5" items="center">
            <Badge type="dot" />
            <Badge type="icon" icon={<User />} />
            <Badge type="numeric" number={10} max={20} />
          </Flex>
        </Preview>

        <Preview title="Badge Color" description="Show alert only with message Props" code={docs.badgeColors}>
          <Flex wrap gap="5" items="center">
            <Badge type="numeric" number={10} max={20} color="d" />
            <Badge type="numeric" number={10} max={20} color="su" />
            <Badge type="numeric" number={10} max={20} color="se" />
            <Badge type="numeric" number={10} max={20} color="su" />
            <Badge type="numeric" number={10} max={20} color="w" />
          </Flex>
        </Preview>

        <Preview title="Badge Size" description="Show alert only with message Props" code={docs.badgeSize}>
          <Flex wrap gap="5" items="center">
            <Badge type="numeric" number={10} max={20} size="3" />
            <Badge type="numeric" number={10} max={20} size="4" />
            <Badge type="numeric" number={10} max={20} size="5" />
            <Badge type="numeric" number={10} max={20} size="6" />
            <Badge type="numeric" number={10} max={20} size="7" />
          </Flex>
        </Preview>

        <Preview title="Dot Badge Size " description="Show alert only with message Props" code={docs.dotBadgeSize}>
          <Flex wrap gap="5" items="center">
            <Badge type="dot" color="w" size="3" />
            <Badge type="dot" color="w" size="4" />
            <Badge type="dot" color="w" size="5" />
            <Badge type="dot" color="w" size="6" />
            <Badge type="dot" color="w" size="7" />
          </Flex>
        </Preview>

        <Preview title="Icon Badge Size " description="Show alert only with message Props" code={docs.iconBadgeSize}>
          <Flex wrap gap="5" items="center">
            <Badge type="icon" color="se" icon={<User />} size="3" />
            <Badge type="icon" color="se" icon={<User />} size="4" />
            <Badge type="icon" color="se" icon={<User />} size="5" />
            <Badge type="icon" color="se" icon={<User />} size="6" />
            <Badge type="icon" color="se" icon={<User />} size="7" />
          </Flex>
        </Preview>

        <Preview
          title="Limit Number Badge"
          description="Show alert only with message Props"
          code={docs.limitNumberBadge}
        >
          <Flex wrap gap="5" items="center">
            <Badge type="numeric" color="d" number={10} max={5} />
            <Badge type="numeric" color="d" number={10} max={9} />
            <Badge type="numeric" color="d" number={20} max={15} />
            <Badge type="numeric" color="d" number={1000} max={10} />
            <Badge type="numeric" color="d" number={99999} max={100} />
          </Flex>
        </Preview>
      </Grid>

      <Heading color="b" low size="4">
        Chip
      </Heading>

      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview title="Solid Chips" description="Show alert only with message Props" code={docs.solidChipColor}>
          <Flex wrap gap="5" items="center">
            <Chips color="su" variant="solid">
              Hello
            </Chips>
            <Chips color="d" variant="solid">
              Hello
            </Chips>
            <Chips color="w" variant="solid">
              Hello
            </Chips>
            <Chips color="se" variant="solid">
              Hello
            </Chips>
            <Chips color="i" variant="solid">
              Hello
            </Chips>
          </Flex>
        </Preview>
        <Preview title="Soft Chips" description="Show alert only with message Props" code={docs.softChipColor}>
          <Flex wrap gap="5" items="center">
            <Chips color="su" variant="soft">
              Hello
            </Chips>
            <Chips color="d" variant="soft">
              Hello
            </Chips>
            <Chips color="w" variant="soft">
              Hello
            </Chips>
            <Chips color="se" variant="soft">
              Hello
            </Chips>
            <Chips color="i" variant="soft">
              Hello
            </Chips>
          </Flex>
        </Preview>
        <Preview title="Outline Chips" description="Show alert only with message Props" code={docs.outlineChipColor}>
          <Flex wrap gap="5" items="center">
            <Chips color="su" variant="outline">
              Hello
            </Chips>
            <Chips color="d" variant="outline">
              Hello
            </Chips>
            <Chips color="w" variant="outline">
              Hello
            </Chips>
            <Chips color="se" variant="outline">
              Hello
            </Chips>
            <Chips color="i" variant="outline">
              Hello
            </Chips>
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'BadgeDocs'
