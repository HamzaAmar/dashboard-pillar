export const badgeVariant = `
import { Badge } from "@components/core";

const BadgeColor = ()=>{
    return(
        <Badge variant="dot" />
        <Badge variant="icon" icon={<User />} />
        <Badge variant="number" number={10} max={20} />
    )
}`

export const badgeColors = `
import { Badge } from "@components/core";

const BadgeColor = ()=>{
    return(
        <Badge variant="number" number={10} max={20} color="danger" />
        <Badge variant="number" number={10} max={20} color="success" />
        <Badge variant="number" number={10} max={20} color="purple" />
        <Badge variant="number" number={10} max={20} color="success" />
        <Badge variant="number" number={10} max={20} color="yellow" />
        <Badge variant="number" number={10} max={20} color="warning" />
    )
}`

export const badgeSize = `
import { Badge } from "@components/core";

const BadgeSize = ()=>{
    return(
        <Badge variant="number" number={10} max={20} size="xs" />
        <Badge variant="number" number={10} max={20} size="sm" />
        <Badge variant="number" number={10} max={20} size="md" />
        <Badge variant="number" number={10} max={20} size="lg" />
        <Badge variant="number" number={10} max={20} size="xl" />
    )
}`

export const dotBadgeSize = `
import { Badge } from "@components/core";

const AvatarSize = ()=>{
    return(
        <Badge variant="dot" color="warning" size="xs" />
        <Badge variant="dot" color="warning" size="sm" />
        <Badge variant="dot" color="warning" size="md" />
        <Badge variant="dot" color="warning" size="lg" />
        <Badge variant="dot" color="warning" size="xl" />
    )
}`

export const iconBadgeSize = `
import { Badge } from "@components/core";

const AvatarSize = ()=>{
    return(
        <Badge variant="icon" color="purple" icon={<User />} size="xs" />
        <Badge variant="icon" color="purple" icon={<User />} size="sm" />
        <Badge variant="icon" color="purple" icon={<User />} size="md" />
        <Badge variant="icon" color="purple" icon={<User />} size="lg" />
        <Badge variant="icon" color="purple" icon={<User />} size="xl" />
    )
}`

export const limitNumberBadge = `
import { Badge } from "@components/core";

const AvatarSize = ()=>{
    return(
        <Badge variant="number" color="danger" number={10} max={5} />
        <Badge variant="number" color="danger" number={10} max={9} />
        <Badge variant="number" color="danger" number={20} max={15} />
        <Badge variant="number" color="danger" number={1000} max={10} />
        <Badge variant="number" color="danger" number={99999} max={100} />
    )
}`

export const solidChipColor = `
import { Chips } from "@components/core";

const SolidChipsColor = ()=>{
    return(
      <Chips color="success" variant="solid"> Hello </Chips>
      <Chips color="danger" variant="solid"> Hello </Chips>
      <Chips color="warning" variant="solid"> Hello </Chips>
      <Chips color="purple" variant="solid"> Hello </Chips>
      <Chips color="indigo" variant="solid"> Hello </Chips>
      <Chips color="mint" variant="solid"> Hello </Chips>
      <Chips color="yellow" variant="solid"> Hello </Chips>
    )
}`

export const softChipColor = `
import { Chips } from "@components/core";

const SoftChipsColor = ()=>{
    return(
      <Chips color="success" variant="soft"> Hello </Chips>
      <Chips color="danger" variant="soft"> Hello </Chips>
      <Chips color="warning" variant="soft"> Hello </Chips>
      <Chips color="purple" variant="soft"> Hello </Chips>
      <Chips color="indigo" variant="soft"> Hello </Chips>
      <Chips color="mint" variant="soft"> Hello </Chips>
      <Chips color="yellow" variant="soft"> Hello </Chips>
    )
}`

export const outlineChipColor = `
import { Chips } from "@components/core";

const OutlineChipsColor = ()=>{
    return(
      <Chips color="success" variant="outline"> Hello </Chips>
      <Chips color="danger" variant="outline"> Hello </Chips>
      <Chips color="warning" variant="outline"> Hello </Chips>
      <Chips color="purple" variant="outline"> Hello </Chips>
      <Chips color="indigo" variant="outline"> Hello </Chips>
      <Chips color="mint" variant="outline"> Hello </Chips>
      <Chips color="yellow" variant="outline"> Hello </Chips>
    )
}`
