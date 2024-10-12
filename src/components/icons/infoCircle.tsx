import type { SVGProps } from 'react'

type Type = 'circle' | 'square'

const INFO_TYPE: Record<Type, JSX.Element> = {
  circle: <path d="M12 8h0m-1 4h1v4h1m8-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  square: <path d="M12 8h0m-1 4h1v4h1M6 4h12l2 2v12l-2 2H6l-2-2V6l2-2Z" />,
} as const

export interface InfoProps extends SVGProps<SVGSVGElement> {
  type: Type
}

const infoCircle = ({ type, ...rest }: InfoProps) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...rest}
  >
    {INFO_TYPE[type]}
  </svg>
)

export default infoCircle
