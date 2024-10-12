import { ComingSoom, Error500, NotFound, StatusArticle } from '@components/composition'
import { Breadcrumb, Flex, Grid, Heading } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './status.docs'

const spinner = () => {
  return (
    <section aria-labelledby="status--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="status--page-id" size="xs">
          Status Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Composite</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Status
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr)" className="md_grid-one" gap="md">
        <Preview
          title="Status Color"
          description="Progress bar color default is primary possible values(danger, success, mint, yellow, purple, indigo, warning, slate)"
          code={docs.status404Color}
        >
          <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="sm_grid-one" gap="sm">
            <NotFound color="danger" />
            <NotFound color="success" />
            <NotFound color="purple" />
            <NotFound color="yellow" />
            <NotFound color="indigo" />
            <NotFound color="warning" />
            <NotFound color="slate" />
            <NotFound color="mint" />
            <NotFound />
          </Grid>
        </Preview>
        <Preview
          title="Status Variant"
          description="default gradient possible values (outline, solid , gradient)"
          code={docs.status404Variant}
        >
          <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="sm_grid-one" gap="sm">
            <NotFound variant="gradient" color="red" />
            <NotFound variant="outline" />
            <NotFound variant="solid" />
          </Grid>
        </Preview>

        <Preview
          title="Status Type"
          description="we have Three components(<Error500 />,<NotFound />,<ComingSoom />) for status if you need another one you can look for CustomStatus"
          // code={AvatarSizeCode}
        >
          <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="sm_grid-one" gap="sm">
            <Error500 />
            <NotFound />
            <ComingSoom />
          </Grid>
        </Preview>

        <Preview
          title="Custom Status"
          description="Disabled is Boolean value default to false"
          code={docs.customStatus}
        >
          <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="sm_grid-one" gap="sm">
            <StatusArticle
              title="Add Email With Success"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas
            laborum aliquid vero quo assumenda harum error, mollitia alias soluta
            quia. Natus vitae repellat minima consequatur enim quidem architecto!
            Numquam?"
              status="success"
            />
            <StatusArticle
              title="Did you want to delete this account"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas
            laborum aliquid vero quo assumenda harum error, mollitia alias soluta
            quia. Natus vitae repellat minima consequatur enim quidem architecto!
            Numquam?"
              status="danger"
            />
            <StatusArticle
              title="The image is too big for this operation"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas
            laborum aliquid vero quo assumenda harum error, mollitia alias soluta
            quia. Natus vitae repellat minima consequatur enim quidem architecto!
            Numquam?"
              status="warning"
            />
            <StatusArticle
              title="Props in Heading is Same as Text"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas
            laborum aliquid vero quo assumenda harum error, mollitia alias soluta
            quia. Natus vitae repellat minima consequatur enim quidem architecto!
            Numquam?"
              status="info"
            />
          </Grid>
        </Preview>
      </Grid>
    </section>
  )
}

export default spinner
