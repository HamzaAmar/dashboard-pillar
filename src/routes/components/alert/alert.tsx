import { Alert, Breadcrumb, BreadcrumbItem, Flex, Grid, Heading } from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './alert.docs'

export const Component = () => {
  return (
    <section aria-labelledby="alert--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="alert--page-id" size="3">
          Alert Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Alert
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="outline Alert"
          description="Show alert only with message Props"
          direction="col"
          code={docs.outlineAlert}
        >
          <Alert message="Hello world I like this message" color="d" />
          <Alert message="Hello world I like this message" color="i" />
          <Alert message="Hello world I like this message" color="w" />
          <Alert message="Hello world I like this message" color="su" />
        </Preview>
        <Preview
          title="Filled  Alert"
          description="Show alert only with message Props"
          direction="col"
          code={docs.fillAlert}
        >
          <Alert variant="fill" message="Hello world I like this message" color="d" />
          <Alert variant="fill" message="Hello world I like this message" color="i" />
          <Alert variant="fill" message="Hello world I like this message" color="w" />
          <Alert variant="fill" message="Hello world I like this message" color="su" />
        </Preview>
        <Preview
          title="title Alert"
          description="Show alert with message and title"
          direction="col"
          code={docs.outlineAlertTitle}
        >
          <Alert title="Error" message="Hello world I like this message" color="d" />
          <Alert title="Error" message="Hello world I like this message" color="i" />
          <Alert title="Error" message="Hello world I like this message" color="w" />
          <Alert title="Error" message="Hello world I like this message" color="su" />
        </Preview>

        <Preview
          title="Outline icon Alert"
          description="Show alert with message and title"
          direction="col"
          code={docs.outlineAlertIcon}
        >
          <Alert title="Error" message="Hello world I like this message" color="d" />
          <Alert title="Error" message="Hello world I like this message" color="i" />
          <Alert title="Error" message="Hello world I like this message" color="w" />
          <Alert title="Error" message="Hello world I like this message" color="su" />
        </Preview>
      </Grid>
    </section>
  )
}
