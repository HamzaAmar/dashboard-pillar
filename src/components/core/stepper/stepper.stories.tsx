import { Check, Home, Setting, User } from '@components/icons'
import type { ComponentMeta } from '@storybook/react'
import { Stepper } from '.'
import { Button, Flex, Heading, Text } from '..'
import { useStepper } from '@hooks/useStepper'

export default {
  title: 'Components/Core/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>

const CompleteComponent = () => {
  return (
    <Flex items="center" justify="center" gap="xs" direction="column">
      <div style={{ color: 'white', background: 'var(--green-9)', padding: '.5rem', borderRadius: '1rem' }}>
        <Check width={60} />
      </div>
      <Text weight="bold">Success</Text>
      <Text style={{ width: '90ch' }} size="sm" color="slate" contrast="low">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, illum, ut eius esse voluptates voluptatibus
        perferendis laborum, quam temporibus consequuntur iure porro excepturi dolore. Enim labore id tempore iusto sed?{' '}
      </Text>
    </Flex>
  )
}

export const StepperIcon = () => {
  const { active, setActive, handleNext, handlePrev } = useStepper(3)

  return (
    <Flex gap="lg" direction="column">
      <Stepper active={active} setActive={setActive} completeComponent={<CompleteComponent />}>
        <Stepper.Step title="About" icon={<Home />} description="Hello world my name is hamza miloud amar">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="slate" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<User />} title="Profile" description="Nice Picture from here i Like it so much">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="slate" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<Setting />} title="Skills" description="Word is word no matter what happen">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="slate" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
      </Stepper>
      <Flex items="center" justify="center" gap="sm">
        <Button disabled={active === 4} onClick={handleNext}>
          Next{' '}
        </Button>
        <Button disabled={active === 1} onClick={handlePrev} variant="soft">
          Back
        </Button>
      </Flex>
    </Flex>
  )
}

export const DefaultStepper = () => {
  const { active, setActive, handleNext, handlePrev } = useStepper(3)
  return (
    <Flex gap="lg" direction="column">
      <Stepper active={active} setActive={setActive} completeComponent={<CompleteComponent />}>
        <Stepper.Step title="About" icon={<Home />} description="Hello world my name is hamza miloud amar">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="slate" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<User />} title="Profile" description="Nice Picture from here i Like it so much">
          <Heading size="xs">Hello Nice</Heading>
          <Text size="sm" color="slate" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<Setting />} title="Skills" description="Word is word no matter what happen">
          <Heading size="xs">Nice to Meet You</Heading>
          <Text size="sm" color="slate" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
      </Stepper>

      <Flex items="center" justify="center" gap="sm">
        <Button disabled={active === 4} onClick={handleNext}>
          Next{' '}
        </Button>
        <Button disabled={active === 1} onClick={handlePrev} variant="soft">
          Back
        </Button>
      </Flex>
    </Flex>
  )
}
