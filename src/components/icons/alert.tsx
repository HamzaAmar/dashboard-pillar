import type { SVGProps } from 'react'

type Type = 'triangle' | 'circle' | 'octagon'

const ALERT_TYPE: Record<Type, JSX.Element> = {
  circle: <path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  triangle: (
    <path d="M12 9v2m0 4v.01M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19" />
  ),

  octagon: (
    <path d="M12 8v4m0 4h.01M8.7 3h6.6c.3 0 .5.1.7.3L20.7 8c.2.2.3.4.3.7v6.6c0 .3-.1.5-.3.7L16 20.7c-.2.2-.4.3-.7.3H8.7a.9.9 0 0 1-.7-.3L3.3 16a.9.9 0 0 1-.3-.7V8.7c0-.3.1-.5.3-.7L8 3.3c.2-.2.4-.3.7-.3Z" />
  ),
} as const

export interface AlertProps extends SVGProps<SVGSVGElement> {
  type: Type
}

const alert = ({ type = 'circle', ...rest }: AlertProps) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {ALERT_TYPE[type]}
  </svg>
)

export default alert
