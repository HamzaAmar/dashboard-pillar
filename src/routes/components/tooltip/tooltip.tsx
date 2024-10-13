import { Breadcrumb, BreadcrumbItem, Flex, Heading, IconButton, Tooltip } from '@pillar-ui/core'
import { Warning } from '@components/icons'
import { Preview } from '@components/section'
import { TooltipPlacementDocs } from './tooltip.docs'

const tooltip = () => {
  return (
    <section aria-labelledby="toggle--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="toggle--page-id" size="3">
          Toggle Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Toggle
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      {/* <Preview title="Simple Alert Dialog" description="Show alert only with message Props" code={TooltipPlacementDocs}>
        <div
          style={{
            width: '100%',
            height: '50vh',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            placeItems: 'center',
          }}
        >
          <Tooltip title="Warning"  placement="top-start">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>
          <Tooltip title="Warning" placement="top-center">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>
          <Tooltip title="Warning" placement="top-end">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>

          <Tooltip title="Warning" placement="right-start">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>
          <Tooltip title="Warning" placement="right-center">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>
          <Tooltip title="Warning" placement="right-end">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>

          <Tooltip title="Warning" placement="bottom-start">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>
          <Tooltip title="Warning" placement="bottom-center">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>
          <Tooltip title="Warning" placement="bottom-end">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>
          <Tooltip title="Warning" placement="left-start">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>
          <Tooltip title="Warning" placement="left-center">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>
          <Tooltip title="Warning" placement="left-end">
            <IconButton icon={<Warning width={16} />} title="open popover" />
          </Tooltip>
        </div>
      </Preview> */}
    </section>
  )
}

export default tooltip
