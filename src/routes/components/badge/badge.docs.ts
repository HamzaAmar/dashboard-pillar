export const badgeVariant = `
import { Badge } from "@pillar-ui/core";

const BadgeColor = ()=>{
    return(
        <Badge type="dot" />
        <Badge type="icon" icon={<User />} />
        <Badge type="numeric" number={10} max={20} />
    )
}`

export const badgeColors = `
import { Badge } from "@pillar-ui/core";

const BadgeColor = ()=>{
    return(
        <Badge type="numeric" number={10} max={20} color="d" />
        <Badge type="numeric" number={10} max={20} color="su" />
        <Badge type="numeric" number={10} max={20} color="se" />
        <Badge type="numeric" number={10} max={20} color="su" />
        <Badge type="numeric" number={10} max={20} color="yellow" />
        <Badge type="numeric" number={10} max={20} color="w" />
    )
}`

export const badgeSize = `
import { Badge } from "@pillar-ui/core";

const BadgeSize = ()=>{
    return(
        <Badge type="numeric" number={10} max={20} size="3" />
        <Badge type="numeric" number={10} max={20} size="4" />
        <Badge type="numeric" number={10} max={20} size="5" />
        <Badge type="numeric" number={10} max={20} size="6" />
        <Badge type="numeric" number={10} max={20} size="7" />
    )
}`

export const dotBadgeSize = `
import { Badge } from "@pillar-ui/core";

const AvatarSize = ()=>{
    return(
        <Badge type="dot" color="w" size="3" />
        <Badge type="dot" color="w" size="4" />
        <Badge type="dot" color="w" size="5" />
        <Badge type="dot" color="w" size="6" />
        <Badge type="dot" color="w" size="7" />
    )
}`

export const iconBadgeSize = `
import { Badge } from "@pillar-ui/core";

const AvatarSize = ()=>{
    return(
        <Badge type="icon" color="se" icon={<User />} size="3" />
        <Badge type="icon" color="se" icon={<User />} size="4" />
        <Badge type="icon" color="se" icon={<User />} size="5" />
        <Badge type="icon" color="se" icon={<User />} size="6" />
        <Badge type="icon" color="se" icon={<User />} size="7" />
    )
}`

export const limitNumberBadge = `
import { Badge } from "@pillar-ui/core";

const AvatarSize = ()=>{
    return(
        <Badge type="numeric" color="d" number={10} max={5} />
        <Badge type="numeric" color="d" number={10} max={9} />
        <Badge type="numeric" color="d" number={20} max={15} />
        <Badge type="numeric" color="d" number={1000} max={10} />
        <Badge type="numeric" color="d" number={99999} max={100} />
    )
}`

export const solidChipColor = `
import { Chips } from "@pillar-ui/core";

const SolidChipsColor = ()=>{
    return(
      <Chips color="su" variant="solid"> Hello </Chips>
      <Chips color="d" variant="solid"> Hello </Chips>
      <Chips color="w" variant="solid"> Hello </Chips>
      <Chips color="se" variant="solid"> Hello </Chips>
      <Chips color="i" variant="solid"> Hello </Chips>
      <Chips color="mint" variant="solid"> Hello </Chips>
      <Chips color="yellow" variant="solid"> Hello </Chips>
    )
}`

export const softChipColor = `
import { Chips } from "@pillar-ui/core";

const SoftChipsColor = ()=>{
    return(
      <Chips color="su" variant="soft"> Hello </Chips>
      <Chips color="d" variant="soft"> Hello </Chips>
      <Chips color="w" variant="soft"> Hello </Chips>
      <Chips color="se" variant="soft"> Hello </Chips>
      <Chips color="i" variant="soft"> Hello </Chips>
      <Chips color="mint" variant="soft"> Hello </Chips>
      <Chips color="yellow" variant="soft"> Hello </Chips>
    )
}`

export const outlineChipColor = `
import { Chips } from "@pillar-ui/core";

const OutlineChipsColor = ()=>{
    return(
      <Chips color="su" variant="outline"> Hello </Chips>
      <Chips color="d" variant="outline"> Hello </Chips>
      <Chips color="w" variant="outline"> Hello </Chips>
      <Chips color="se" variant="outline"> Hello </Chips>
      <Chips color="i" variant="outline"> Hello </Chips>
      <Chips color="mint" variant="outline"> Hello </Chips>
      <Chips color="yellow" variant="outline"> Hello </Chips>
    )
}`
