import { Children, isValidElement, createElement, type ReactNode, useId } from 'react'
import { Flex, Text } from '..'
import { StepperProvider, useStepperContext } from './stepper.context'
import type { StepperProps, StepProps } from './stepper.type'
import { Check } from '@components/icons'

const Step = (props: StepProps) => {
  const context = useStepperContext()
  const {
    state,
    title,
    description,
    step,
    icon,
    corner = context?.corner ?? 'full',
    size = context?.size ?? 'md',
    setActive = context!.setActive,
  } = props

  const id = useId()
  const labelledbyID = `label-${id}`
  const describedbyID = `description-${id}`

  const content = icon ?? step
  return (
    <Flex data-state={state} items="center" className={`step step__${size}`}>
      <button
        type="button"
        onClick={() => setActive(step!)}
        className={`step--button u_corner--${corner} u_font-medium`}
        aria-labelledby={labelledbyID}
        aria-describedby={describedbyID}
      >
        {state === 'complete' ? (
          <div className="step--complete-icon">
            <Check />
          </div>
        ) : (
          content
        )}
      </button>
      <div className="step--content">
        <Text id={labelledbyID} weight="medium" size="sm">
          {title}
        </Text>
        <Text id={describedbyID} size="xs" color="slate" contrast="low">
          {description}
        </Text>
      </div>
    </Flex>
  )
}

const Stepper = ({ children, color = 'slate', active = 1, completeComponent, ...rest }: StepperProps) => {
  let _content: ReactNode[] = []

  const _children = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      const step = index + 1
      const state = active === step ? 'current' : active > step ? 'complete' : 'inactive'
      const { children, ...props } = child.props
      _content.push(children)
      return createElement(child.type, { ...props, state, step })
    }
    return child
  })

  const content = _content[active - 1] ?? completeComponent

  return (
    <div className="stepper--wrapper l_flow-md">
      <Flex justify="between" className={`stepper u_${color}`}>
        <StepperProvider {...rest}> {_children}</StepperProvider>
      </Flex>
      <div className="step--current-content">{content}</div>
    </div>
  )
}

Stepper.Step = Step

export default Stepper
