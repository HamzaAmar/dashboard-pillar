export const avatarSkeletonSize = `
import  {Flex, Skeleton} from '@pillar-ui/core'

function formControllerStories(){
    return(
      <Flex items="center" gap="1">
        <SkeletonAvatar isLoading={true} size="3">
          <Avatar
            
            title="Hello"
            src="https://picsum.photos/300/100/100"
          />
        </SkeletonAvatar>
        <SkeletonAvatar isLoading={true} size="4">
          <Avatar
            
            title="Hello"
            src="https://picsum.photos/300/100/100"
          />
        </SkeletonAvatar>
        <SkeletonAvatar isLoading={true} size="5">
          <Avatar
            
            title="Hello"
            src="https://picsum.photos/300/100/100"
          />
        </SkeletonAvatar>
        <SkeletonAvatar isLoading={true} size="6">
          <Avatar
            
            title="Hello"
            src="https://picsum.photos/300/100/100"
          />
        </SkeletonAvatar>
        <SkeletonAvatar isLoading={true} size="7">
          <Avatar
            
            title="Hello"
            src="https://picsum.photos/300/100/100"
          />
        </SkeletonAvatar>
      </Flex>
    )
}`

export const avatarButtonSize = `
import  {Flex, Button, Skeleton} from '@pillar-ui/core'

function formControllerStories(){
    return(
      <Flex direction="col" gap="1">
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
    )
}`

export const skeletonTextSize = `
import  {Flex, Skeleton, Text} from '@pillar-ui/core'

function formControllerStories(){
    return(
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
    )
}`

export const skeletonLinesNumber = `
import  {Flex, Skeleton, Text} from '@pillar-ui/core'

function formControllerStories(){
    return(
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
        <SkeletonText lines={2.1} isLoading={true}>
          <Text>Hello</Text>
        </SkeletonText>
        <SkeletonText lines={5.5} isLoading={true}>
          <Text>Hello</Text>
        </SkeletonText>
      </Flex>
    )
}`

export const skeletonImages = `
import  {Flex, Skeleton, Text} from '@pillar-ui/core'

function formControllerStories(){
    return(
      <Flex direction="col" gap="7">
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
