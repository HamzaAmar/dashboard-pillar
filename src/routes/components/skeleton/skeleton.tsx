import {
  Flex,
  Skeleton,
  Grid,
  Heading,
  Avatar,
  Button,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonText,
  GridItem,
} from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './skeleton.docs'

const formController = () => {
  return (
    <section aria-labelledby="skeleton--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="skeleton--page-id" size="3">
          Skeleton Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Skeleton
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="Skeleton Avatar Size"
          description="default md possible values (xs, sm, md, lg, xl)"
          code={docs.avatarSkeletonSize}
        >
          <Flex items="center" gap="1">
            <SkeletonAvatar isLoading={true} size="3">
              <Avatar title="Hello" image="https://picsum.photos/300/100/100" />
            </SkeletonAvatar>
            <SkeletonAvatar isLoading={true} size="4">
              <Avatar title="Hello" image="https://picsum.photos/300/100/100" />
            </SkeletonAvatar>
            <SkeletonAvatar isLoading={true} size="5">
              <Avatar title="Hello" image="https://picsum.photos/300/100/100" />
            </SkeletonAvatar>
            <SkeletonAvatar isLoading={true} size="6">
              <Avatar title="Hello" image="https://picsum.photos/300/100/100" />
            </SkeletonAvatar>
            <SkeletonAvatar isLoading={true} size="7">
              <Avatar title="Hello" image="https://picsum.photos/300/100/100" />
            </SkeletonAvatar>
          </Flex>
        </Preview>

        <Preview
          title="Skeleton Avatar Size"
          description="default md possible values (xs, sm, md, lg, xl)"
          code={docs.avatarButtonSize}
        >
          <Flex items="center" gap="1">
            <SkeletonButton isLoading={true} size="3">
              <Button>Hello</Button>
            </SkeletonButton>
            <SkeletonButton isLoading={true} size="4">
              <Button>Hello</Button>
            </SkeletonButton>
            <SkeletonButton isLoading={true} size="5">
              <Button>Hello</Button>
            </SkeletonButton>
            <SkeletonButton isLoading={true} size="6">
              <Button>Hello</Button>
            </SkeletonButton>
            <SkeletonButton isLoading={true} size="7">
              <Button>Hello</Button>
            </SkeletonButton>
          </Flex>
        </Preview>

        <Preview
          title="Skeleton Text Size"
          description="default md possible values (xs, sm, md, lg, xl)"
          code={docs.skeletonTextSize}
        >
          <Flex direction="col" gap="7">
            <SkeletonText isLoading={true} size="3">
              <Text>Hello</Text>
            </SkeletonText>
            <SkeletonText isLoading={true} size="4">
              <Text>Hello</Text>
            </SkeletonText>
            <SkeletonText isLoading={true} size="5">
              <Text>Hello</Text>
            </SkeletonText>
            <SkeletonText isLoading={true} size="6">
              <Text>Hello</Text>
            </SkeletonText>
            <SkeletonText isLoading={true} size="7">
              <Text>Hello</Text>
            </SkeletonText>
          </Flex>
        </Preview>

        <Preview
          title="Skeleton Lines Number"
          description="default md possible values (xs, sm, md, lg, xl)"
          code={docs.skeletonLinesNumber}
        >
          <Flex direction="col" gap="7">
            <SkeletonText lines={1} isLoading={true}>
              <Text>Hello</Text>
            </SkeletonText>
            <SkeletonText lines={1.7} isLoading={true}>
              <Text>Hello</Text>
            </SkeletonText>
            <SkeletonText lines={2.7} isLoading={true}>
              <Text>Hello</Text>
            </SkeletonText>
            <SkeletonText lines={3.4} isLoading={true}>
              <Text>Hello</Text>
            </SkeletonText>
            <SkeletonText lines={5.5} isLoading={true}>
              <Text>Hello</Text>
            </SkeletonText>
          </Flex>
        </Preview>

        <GridItem placement="span 2">
          <Preview
            title="Skeleton Image"
            description="default md possible values (xs, sm, md, lg, xl)"
            code={docs.skeletonImages}
          >
            <Grid grid="1fr 1fr" gap="4">
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
        </GridItem>
      </Grid>
    </section>
  )
}

export default formController
