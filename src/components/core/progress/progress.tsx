import { classnames } from '@utils/classnames'
import { Flex, Text } from '..'
import { Children, isValidElement } from 'react'
import type {
  ProgressCircleProps,
  ProgressBarProps,
  ProgressBarStackItemProps,
  ProgressBarStackProps,
} from './progress.type'

// const sizes = {
//   xs: { width: 32, height: 32 },
//   sm: { width: 48, height: 48 },
//   md: { width: 56, height: 56 },
//   lg: { width: 72, height: 72 },
//   xl: { width: 100, height: 100 },
// } as const

export const ProgressCircle = ({ size = 'md', value, label, color = 'indigo', ...rest }: ProgressCircleProps) => {
  const radius = 100 / 2 - 5
  const circumference = radius * 2 * Math.PI

  const progress = (value / 100) * circumference
  return (
    <Flex justify="center" items="center" className={`progress-circle u_${color}`}>
      <svg
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={100}
        aria-valuemin={100}
        aria-label={`Progress : ${value}%`}
        viewBox="0 0 100 100"
      >
        <circle className="progress-circle__background" r={radius} cx="50" cy="50" />
        <circle
          className="progress-circle__progress"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
        <text x="50" y="50" className="progress-circle__text" textAnchor="middle" dominantBaseline="central">
          {value}%
        </text>
      </svg>
    </Flex>
  )
}

export const ProgressBar = ({
  showValue,
  value,
  color = 'primary',
  size = 'sm',
  label,
}: // className,
ProgressBarProps) => {
  return (
    <div className={`u_${color}`}>
      <Flex justify="end">
        <Text size={size} {...classnames({ 'u_sr-only': !showValue })}>
          {value}%
        </Text>
      </Flex>
      <div
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-valuetext={`${value}%`}
        aria-label={label}
        className={`progress-bar progress-bar__${size}`}
      >
        <div className="progress-bar--inner" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

const Item = ({ color = 'primary', value }: ProgressBarStackItemProps) => {
  return <div className={`progressbar-stack--item u_${color}`} style={{ width: `${value}%` }} />
}

export const ProgressBarStack = ({ size = 'sm', children }: ProgressBarStackProps) => {
  // TODO: Check IF you pass String If it can make an error
  const _children = Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return
    }
    const { children, ...rest } = child?.props
    return { children, color: rest.color }
  })
  return (
    <div className="l_flow-sm">
      <Flex gap="2xs" className={`progress-bar progressbar-stack progress-bar__${size}`}>
        {children}
      </Flex>
      <Flex as="ul" wrap gap="md">
        {_children?.map(({ children, color }, index) => (
          <Flex items="center" gap="2xs" as="li" className={`progress-stack--list-item u_${color}`} key={index}>
            <Text as="span" color="slate" size="sm" contrast="low">
              {children}
            </Text>
          </Flex>
        ))}
      </Flex>
    </div>
  )
}

ProgressBarStack.Item = Item
