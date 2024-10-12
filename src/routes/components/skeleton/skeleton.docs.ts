export const avatarSkeletonSize = `
import  {Flex, Skeleton} from '@components/core'

function formControllerStories(){
    return(
      <Flex items="center" gap="2xs">
        <Skeleton.Avatar isLoading={true} size="xs">
          <Avatar
            variant="image"
            title="Hello"
            src="https://picsum.photos/300/100/100"
          />
        </Skeleton.Avatar>
        <Skeleton.Avatar isLoading={true} size="sm">
          <Avatar
            variant="image"
            title="Hello"
            src="https://picsum.photos/300/100/100"
          />
        </Skeleton.Avatar>
        <Skeleton.Avatar isLoading={true} size="md">
          <Avatar
            variant="image"
            title="Hello"
            src="https://picsum.photos/300/100/100"
          />
        </Skeleton.Avatar>
        <Skeleton.Avatar isLoading={true} size="lg">
          <Avatar
            variant="image"
            title="Hello"
            src="https://picsum.photos/300/100/100"
          />
        </Skeleton.Avatar>
        <Skeleton.Avatar isLoading={true} size="xl">
          <Avatar
            variant="image"
            title="Hello"
            src="https://picsum.photos/300/100/100"
          />
        </Skeleton.Avatar>
      </Flex>
    )
}`

export const avatarButtonSize = `
import  {Flex, Button, Skeleton} from '@components/core'

function formControllerStories(){
    return(
      <Flex direction="column" gap="2xs">
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
    )
}`

export const skeletonTextSize = `
import  {Flex, Skeleton, Text} from '@components/core'

function formControllerStories(){
    return(
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
    )
}`

export const skeletonLinesNumber = `
import  {Flex, Skeleton, Text} from '@components/core'

function formControllerStories(){
    return(
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
        <Skeleton.Text lines={2.1} isLoading={true}>
          <Text>Hello</Text>
        </Skeleton.Text>
        <Skeleton.Text lines={5.5} isLoading={true}>
          <Text>Hello</Text>
        </Skeleton.Text>
      </Flex>
    )
}`

export const skeletonImages = `
import  {Flex, Skeleton, Text} from '@components/core'

function formControllerStories(){
    return(
      <Flex direction="column" gap="xl">
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
      </Flex>
    )
}`
