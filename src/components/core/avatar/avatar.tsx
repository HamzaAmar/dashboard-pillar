import { Children, forwardRef } from 'react'
import { Badge } from '..'
import { initials } from './avatar-utils'
import { AvatarProvider, useAvatarContext } from './context'

import type { AvatarBadgeProps, AvatarProps, AvatarGroupProps } from './avatar.type'
import type { ReactNode } from 'react'
import useBoolean from '@hooks/useBoolean'
import { ForwardRefComponent } from '@type/polymorphic.type'

/*  
=================================================================================
Avatar Component
=================================================================================
*/

export const Avatar = forwardRef((props, ref) => {
  const { state: error, handleTrue } = useBoolean()
  const context = useAvatarContext()
  const {
    size = context?.size ?? 'md',
    title,
    children,
    color = context?.color ?? 'primary',
    corner = context?.corner ?? 'full',
    ...rest
  } = props

  const avatarFallbackText = (
    <span role="img" className="avatar--letter" aria-label={title}>
      {title ? initials(title) : 'E'}
    </span>
  )

  let content: ReactNode
  if (props.variant === 'icon') {
    content = props.icon ? <span className="avatar--icon">{props.icon}</span> : null
  } else {
    content =
      props.image && !error ? (
        <img ref={ref} {...rest} onError={handleTrue} className="avatar--image" src={props.image} alt={title} />
      ) : null
  }

  const avatarContent = content ?? avatarFallbackText

  return (
    <div className={`avatar avatar__${size} u_corner--${corner} u_${color} u_center`}>
      {avatarContent}
      {children}
    </div>
  )
}) as ForwardRefComponent<'img', AvatarProps> & { Group: typeof AvatarGroup; Badge: typeof AvatarBadge }

/*  
=================================================================================
Avatar Group Component
=================================================================================
*/

const AvatarGroup = ({
  size = 'md',
  limit,
  variant = 'stack',
  color = 'primary',
  corner = 'full',
  children,
}: AvatarGroupProps) => {
  const restNumbers = limit && limit < Children.count(children) ? Children.count(children) - limit : null

  const max = limit && limit < Children.count(children) ? limit : Children.count(children)

  const contextProps = { color, corner, size }

  return (
    <div className={`avatar-group avatar-group__${variant}`}>
      <AvatarProvider {...contextProps}>
        {Array.from(new Array(max)).map((_, index) => {
          return Children.toArray(children)[index]
        })}
      </AvatarProvider>

      {restNumbers && (
        <div className={`avatar avatar__${size} u_corner--${corner} u_${color} u_center`}>
          <span className="avatar--letter">{restNumbers}</span> <span className="avatar--letter avatar--plus">+</span>
        </div>
      )}
    </div>
  )
}

// TODO: Make IT Generic

/*  
=================================================================================
Avatar Badge Component
=================================================================================
*/

const AvatarBadge = ({ position = 'end-end', ...rest }: AvatarBadgeProps) => {
  return (
    <span className={`avatar-badge avatar-badge__${position}`}>
      <Badge {...rest} />
    </span>
  )
}

Avatar.Group = AvatarGroup
Avatar.Badge = AvatarBadge

export default Avatar
