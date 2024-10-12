import { Flex, Skeleton, Grid, Heading, Avatar, Button, Text, Breadcrumb } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './skeleton.docs'

const formController = () => {
  return (
    <section aria-labelledby="skeleton--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="skeleton--page-id" size="xs">
          Skeleton Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Skeleton
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview
          title="Skeleton Avatar Size"
          description="default md possible values (xs, sm, md, lg, xl)"
          code={docs.avatarSkeletonSize}
        >
          <Flex items="center" gap="2xs">
            <Skeleton.Avatar isLoading={true} size="xs">
              <Avatar variant="image" title="Hello" src="https://picsum.photos/300/100/100" />
            </Skeleton.Avatar>
            <Skeleton.Avatar isLoading={true} size="sm">
              <Avatar variant="image" title="Hello" src="https://picsum.photos/300/100/100" />
            </Skeleton.Avatar>
            <Skeleton.Avatar isLoading={true} size="md">
              <Avatar variant="image" title="Hello" src="https://picsum.photos/300/100/100" />
            </Skeleton.Avatar>
            <Skeleton.Avatar isLoading={true} size="lg">
              <Avatar variant="image" title="Hello" src="https://picsum.photos/300/100/100" />
            </Skeleton.Avatar>
            <Skeleton.Avatar isLoading={true} size="xl">
              <Avatar variant="image" title="Hello" src="https://picsum.photos/300/100/100" />
            </Skeleton.Avatar>
          </Flex>
        </Preview>

        <Preview
          title="Skeleton Avatar Size"
          description="default md possible values (xs, sm, md, lg, xl)"
          code={docs.avatarButtonSize}
        >
          <Flex items="center" gap="2xs">
            <Skeleton.Button isLoading={true} size="xs">
              <Button>Hello</Button>
            </Skeleton.Button>
            <Skeleton.Button isLoading={true} size="sm">
              <Button>Hello</Button>
            </Skeleton.Button>
            <Skeleton.Button isLoading={true} size="md">
              <Button>Hello</Button>
            </Skeleton.Button>
            <Skeleton.Button isLoading={true} size="lg">
              <Button>Hello</Button>
            </Skeleton.Button>
            <Skeleton.Button isLoading={true} size="xl">
              <Button>Hello</Button>
            </Skeleton.Button>
          </Flex>
        </Preview>

        <Preview
          title="Skeleton Text Size"
          description="default md possible values (xs, sm, md, lg, xl)"
          code={docs.skeletonTextSize}
        >
          <Flex direction="column" gap="xl">
            <Skeleton.Text isLoading={true} size="xs">
              <Text>Hello</Text>
            </Skeleton.Text>
            <Skeleton.Text isLoading={true} size="sm">
              <Text>Hello</Text>
            </Skeleton.Text>
            <Skeleton.Text isLoading={true} size="md">
              <Text>Hello</Text>
            </Skeleton.Text>
            <Skeleton.Text isLoading={true} size="lg">
              <Text>Hello</Text>
            </Skeleton.Text>
            <Skeleton.Text isLoading={true} size="xl">
              <Text>Hello</Text>
            </Skeleton.Text>
          </Flex>
        </Preview>

        <Preview
          title="Skeleton Lines Number"
          description="default md possible values (xs, sm, md, lg, xl)"
          code={docs.skeletonLinesNumber}
        >
          <Flex direction="column" gap="xl">
            <Skeleton.Text lines={1} isLoading={true}>
              <Text>Hello</Text>
            </Skeleton.Text>
            <Skeleton.Text lines={1.7} isLoading={true}>
              <Text>Hello</Text>
            </Skeleton.Text>
            <Skeleton.Text lines={2.7} isLoading={true}>
              <Text>Hello</Text>
            </Skeleton.Text>
            <Skeleton.Text lines={3.4} isLoading={true}>
              <Text>Hello</Text>
            </Skeleton.Text>
            <Skeleton.Text lines={5.5} isLoading={true}>
              <Text>Hello</Text>
            </Skeleton.Text>
          </Flex>
        </Preview>

        <Grid.Item column="span 2">
          <Preview
            title="Skeleton Image"
            description="default md possible values (xs, sm, md, lg, xl)"
            code={docs.skeletonImages}
          >
            <Grid columns="1fr 1fr" gap="sm">
              <Skeleton height="500px" isLoading={true}>
                <img src="https://picsum.photos/id/120/500/500" alt="" />
              </Skeleton>
              <Skeleton height="450px" isLoading={true}>
                <img src="https://picsum.photos/id/120/450/450" alt="" />
              </Skeleton>
              <Skeleton height="300px" isLoading={true}>
                <img src="https://picsum.photos/id/120/300/300" alt="" />
              </Skeleton>
              <Skeleton height="200px" isLoading={true}>
                <img src="https://picsum.photos/id/120/150/150" alt="" />
              </Skeleton>
            </Grid>
          </Preview>
        </Grid.Item>
      </Grid>
    </section>
  )
}

export default formController
