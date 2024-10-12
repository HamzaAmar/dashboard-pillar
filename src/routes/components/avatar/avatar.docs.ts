export const avatarSizeCode = `
import { Avatar } from "@components/core";

const AvatarSize = ()=>{
    return(
      <Avatar variant="image" size="xs" image={getImage(1)} title="Hello" />
      <Avatar variant="image" size="sm" image={getImage(2)} title="Hello" />
      <Avatar variant="image" image={getImage(3)} title="Hello" />
      <Avatar variant="image" size="lg" image={getImage(4)} title="Hello" />
      <Avatar variant="image" size="xl" image={getImage(5)} title="Hello" />
      <Avatar variant="image" size="2xl" image={getImage(6)} title="Hello"/>
    )
}`

export const avatarBadImage = `
import { Avatar } from "@components/core";

const AvatarBad = ()=> {
    return(
        <Avatar variant="image" image="/hello/hle" size="md" title="Hamza Miloud Amar" />
        <Avatar variant="image" image="/images/crypto/bitcoin.pngs" size="md" title="Hamza Miloud Amar" />
        <Avatar variant="image" image="/images/crypto/bitcoins.png" size="md" title="Hamza Miloud Amar" />
        <Avatar variant="image" size="md"  Hamza Miloud  />     
    )
}
`

export const avatarFallback = `
import { Avatar } from "@components/core";

const AvatarFallback = ()=> {
    return(
        <Avatar variant="image" size="xs" title="Hamza Miloud Amar" />
        <Avatar variant="image" size="sm" title="Nabil Labil" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" size="lg" title="Lamia T9alya" />
        <Avatar variant="image" size="xl" title="souad Khadiri" />
        <Avatar variant="image" size="2xl" title="Wissal Zirari" />
    )
}
`

export const avatarIcons = `
import { Avatar } from "@components/core";

const AvatarIcons = ()=> {
    return(
        <Avatar variant="icon" icon={<User />} size="xs" title="Hamza Miloud Amar"/>
        <Avatar variant="icon" icon={<User />} size="sm" title="Nabil Labil"/>
        <Avatar variant="icon" icon={<User />} title="Kmal Sifoun" />
        <Avatar variant="icon" icon={<User />} size="lg" title="Lamia T9alya" />
        <Avatar variant="icon" icon={<User />} size="xl" title="souad Khadiri" />
        <Avatar variant="icon" icon={<User />} size="2xl" title="Wissal Zirari" />
    )
}
`

export const avatarFallbackColor = `
import { Avatar } from "@components/core";

const AvatarFallbackColor = ()=> {
    return(
        <Avatar variant="image" color="success" title="Hamza Miloud Amar" />
        <Avatar variant="image" color="indigo" title="Nabil Labil" />
        <Avatar variant="image" color="danger" title="Kmal Sifoun" />
        <Avatar variant="image" color="warning" title="Lamia T9alya" />
        <Avatar variant="image" color="yellow" title="souad Khadiri" />
        <Avatar variant="image" color="purple" title="Wissal Zirari" />
        <Avatar variant="image" color="primary" title="Samit Moumn" />
    )
}
`

export const avatarCorner = `
import { Avatar } from "@components/core";

const AvatarCorner = ()=> {
    return(
        <Avatar corner="sharp" color="success" variant="image" title="Nabil Labil" />
        <Avatar corner="2xs" color="success" variant="image" title="Nabil Labil" />
        <Avatar corner="xs" color="warning" variant="image" title="Kmal Sifoun" />
        <Avatar corner="sm" color="indigo" variant="image" title="Kmal Sifoun" />
        <Avatar corner="md" color="yellow" variant="image" title="Kmal Sifoun" />
        <Avatar corner="lg" color="mint" variant="image" title="Kmal Sifoun" />
        <Avatar corner="xl" color="purple" variant="image" title="Kmal Sifoun" />
        <Avatar corner="2xl" color="slate" variant="image" title="Kmal Sifoun" />
        <Avatar corner="full" color="slate" variant="image" title="Kmal Sifoun" />
    )
}
`

export const avatarGroupStack = `
import { Avatar } from "@components/core";

const AvatarGroupStack = ()=> {
    return(
        <Avatar.Group color="warning" variant="stack">
            <Avatar variant="image" title="Hamza Miloud Amar" />
            <Avatar variant="image" title="Nabil Labil" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
        </Avatar.Group>
    )
}
`

export const avatarGroupStackLimit = `
import { Avatar } from "@components/core";

const AvatarGroupStack = ()=> {
    return(
        <Avatar.Group color="purple" variant="stack" limit={7}>
            <Avatar variant="image" title="Hamza Miloud Amar" />
            <Avatar variant="image" title="Nabil Labil" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
        </Avatar.Group>
    )
}
`

export const avatarGroupGrid = `
import { Avatar } from "@components/core";

const AvatarGroupStack = ()=> {
    return(
        <Avatar.Group color="success" size="sm" variant="grid">
            <Avatar variant="image" title="Hamza Miloud Amar" />
            <Avatar variant="image" title="Nabil Labil" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
            <Avatar variant="image" title="Kmal Sifoun" />
        </Avatar.Group>
    )
}
`

export const avatarGroupGridLimit = `
import { Avatar } from "@components/core";

const AvatarGroupStack = ()=> {
    return(
    <Avatar.Group limit={10} color="success" size="sm" variant="grid">
        <Avatar variant="image" title="Hamza Miloud Amar" />
        <Avatar variant="image" title="Nabil Labil" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
        <Avatar variant="image" title="Kmal Sifoun" />
    </Avatar.Group>
    )
}
`
