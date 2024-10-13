export const avatarSizeCode = `
import { Avatar } from "@pillar-ui/core";

const AvatarSize = ()=>{
    return(
      <Avatar  size="3" src={getImage(1)} title="Hello" />
      <Avatar  size="4" src={getImage(2)} title="Hello" />
      <Avatar  src={getImage(3)} title="Hello" />
      <Avatar  size="6" src={getImage(4)} title="Hello" />
      <Avatar  size="7" src={getImage(5)} title="Hello" />
      <Avatar  size="8" src={getImage(6)} title="Hello"/>
    )
}`

export const avatarBadImage = `
import { Avatar } from "@pillar-ui/core";

const AvatarBad = ()=> {
    return(
        <Avatar  image="/hello/hle" size="5" title="Hamza Miloud Amar" />
        <Avatar  image="/images/crypto/bitcoin.pngs" size="5" title="Hamza Miloud Amar" />
        <Avatar  image="/images/crypto/bitcoins.png" size="5" title="Hamza Miloud Amar" />
        <Avatar  size="5"  Hamza Miloud  />     
    )
}
`

export const avatarFallback = `
import { Avatar } from "@pillar-ui/core";

const AvatarFallback = ()=> {
    return(
        <Avatar  size="3" title="Hamza Miloud Amar" />
        <Avatar  size="4" title="Nabil Labil" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  size="6" title="Lamia T9alya" />
        <Avatar  size="7" title="souad Khadiri" />
        <Avatar  size="8" title="Wissal Zirari" />
    )
}
`

export const avatarIcons = `
import { Avatar } from "@pillar-ui/core";

const AvatarIcons = ()=> {
    return(
        <Avatar fallback="icon" icon={<User />} size="3" title="Hamza Miloud Amar"/>
        <Avatar fallback="icon" icon={<User />} size="4" title="Nabil Labil"/>
        <Avatar fallback="icon" icon={<User />} title="Kmal Sifoun" />
        <Avatar fallback="icon" icon={<User />} size="6" title="Lamia T9alya" />
        <Avatar fallback="icon" icon={<User />} size="7" title="souad Khadiri" />
        <Avatar fallback="icon" icon={<User />} size="8" title="Wissal Zirari" />
    )
}
`

export const avatarFallbackColor = `
import { Avatar } from "@pillar-ui/core";

const AvatarFallbackColor = ()=> {
    return(
        <Avatar  color="su" title="Hamza Miloud Amar" />
        <Avatar  color="i" title="Nabil Labil" />
        <Avatar  color="d" title="Kmal Sifoun" />
        <Avatar  color="w" title="Lamia T9alya" />
        <Avatar  color="se" title="Wissal Zirari" />
        <Avatar  color="p" title="Samit Moumn" />
    )
}
`

export const avatarCorner = `
import { Avatar } from "@pillar-ui/core";

const AvatarCorner = ()=> {
    return(
        <Avatar corner="0" color="su"  title="Nabil Labil" />
        <Avatar corner="1" color="su"  title="Nabil Labil" />
        <Avatar corner="2" color="w"  title="Kmal Sifoun" />
        <Avatar corner="3" color="i"  title="Kmal Sifoun" />
        <Avatar corner="full" color="b"  title="Kmal Sifoun" />
    )
}
`

export const avatarGroupStack = `
import { Avatar } from "@pillar-ui/core";

const AvatarGroupStack = ()=> {
    return(
        <AvatarGroup color="w" fallback="stack">
            <Avatar  title="Hamza Miloud Amar" />
            <Avatar  title="Nabil Labil" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
        </AvatarGroup>
    )
}
`

export const avatarGroupStackLimit = `
import { Avatar } from "@pillar-ui/core";

const AvatarGroupStack = ()=> {
    return(
        <AvatarGroup color="se" fallback="stack" limit={7}>
            <Avatar  title="Hamza Miloud Amar" />
            <Avatar  title="Nabil Labil" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
        </AvatarGroup>
    )
}
`

export const avatarGroupGrid = `
import { Avatar } from "@pillar-ui/core";

const AvatarGroupStack = ()=> {
    return(
        <AvatarGroup color="su" size="4" fallback="grid">
            <Avatar  title="Hamza Miloud Amar" />
            <Avatar  title="Nabil Labil" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
            <Avatar  title="Kmal Sifoun" />
        </AvatarGroup>
    )
}
`

export const avatarGroupGridLimit = `
import { Avatar } from "@pillar-ui/core";

const AvatarGroupStack = ()=> {
    return(
    <AvatarGroup limit={10} color="su" size="4" fallback="grid">
        <Avatar  title="Hamza Miloud Amar" />
        <Avatar  title="Nabil Labil" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
        <Avatar  title="Kmal Sifoun" />
    </AvatarGroup>
    )
}
`
