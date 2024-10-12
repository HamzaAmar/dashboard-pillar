import { CSSProperties } from 'react'
import type * as SKeletonType from './skeleton.type'

const Avatar = ({ size = 'xl', corner = 'full', children, isLoading = true }: SKeletonType.SkeletonAvatarProps) => {
  return isLoading ? (
    <div className={`skeleton skeleton--avatar avatar__${size} avatar__${corner}`}></div>
  ) : (
    <div>{children}</div>
  )
}

const Text = ({ size = 'md', lines = 2.5 }: SKeletonType.SkeletonTextProps) => {
  const ceilNumber = Math.ceil(lines)
  const linesComp = Array.from({ length: ceilNumber }, (_, index) => {
    const decimalPercentage = (lines - Math.floor(lines)) * 100
    const isLast = ceilNumber === index + 1
    const textWidth = !isLast ? '100%' : `${decimalPercentage || 100}%`

    return (
      <div
        key={index}
        style={{ '--text-width': textWidth } as CSSProperties}
        className={`skeleton skeleton--text u_size-${size}`}
      />
    )
  })
  return (
    <div className="l_flow-sm" style={{ width: '100%' }}>
      {linesComp}
    </div>
  )
}

const Button = ({ size = 'md' }: SKeletonType.SkeletonButtonProps) => {
  return <div className={`skeleton skeleton--btn btn__${size}`} />
}

const Skeleton = ({ height = '10rem' }: SKeletonType.SkeletonProps) => {
  return <div style={{ '--height': height } as CSSProperties} className="skeleton skeleton--box" />
}

Skeleton.Avatar = Avatar
Skeleton.Text = Text
Skeleton.Button = Button

export default Skeleton
