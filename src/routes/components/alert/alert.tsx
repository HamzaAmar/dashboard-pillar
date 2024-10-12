import { Alert, Breadcrumb, Flex, Grid, Heading } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './alert.docs'

export const Component = () => {
  return (
    <section aria-labelledby="alert--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="alert--page-id" size="xs">
          Alert Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Alert
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview
          title="outline Alert"
          description="Show alert only with message Props"
          direction="column"
          code={docs.outlineAlert}
        >
          <Alert message="Hello world I like this message" type="danger" />
          <Alert message="Hello world I like this message" type="info" />
          <Alert message="Hello world I like this message" type="warning" />
          <Alert message="Hello world I like this message" type="success" />
        </Preview>
        <Preview
          title="Filled  Alert"
          description="Show alert only with message Props"
          direction="column"
          code={docs.fillAlert}
        >
          <Alert variant="fill" message="Hello world I like this message" type="danger" />
          <Alert variant="fill" message="Hello world I like this message" type="info" />
          <Alert variant="fill" message="Hello world I like this message" type="warning" />
          <Alert variant="fill" message="Hello world I like this message" type="success" />
        </Preview>
        <Preview
          title="title Alert"
          description="Show alert with message and title"
          direction="column"
          code={docs.outlineAlertTitle}
        >
          <Alert title="Error" message="Hello world I like this message" type="danger" />
          <Alert title="Error" message="Hello world I like this message" type="info" />
          <Alert title="Error" message="Hello world I like this message" type="warning" />
          <Alert title="Error" message="Hello world I like this message" type="success" />
        </Preview>

        <Preview
          title="Outline icon Alert"
          description="Show alert with message and title"
          direction="column"
          code={docs.outlineAlertIcon}
        >
          <Alert showIcon title="Error" message="Hello world I like this message" type="danger" />
          <Alert showIcon title="Error" message="Hello world I like this message" type="info" />
          <Alert showIcon title="Error" message="Hello world I like this message" type="warning" />
          <Alert showIcon title="Error" message="Hello world I like this message" type="success" />
        </Preview>
      </Grid>
    </section>
  )
}
