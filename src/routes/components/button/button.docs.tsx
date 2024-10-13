const color = ['danger', 'warning', 'success', 'purple', 'indigo', 'yellow', 'slate', 'primary']

function generateTem(variants: Record<string, string[]>, story: (variant: any, attr: string, index: number) => string) {
  let index = -1
  let template = ``
  for (let variant of Object.values(variants)[0]) {
    ++index
    template += story(variant, Object.keys(variants)[0], index)
  }

  return template
}

const componentGenerate =
  (comp: string) =>
  (variants: Record<string, string[]>, story: (variant: any, attr: string, index: number) => string) => {
    return `
import { ${comp}} from "@pillar-ui/core";

function ${comp}s(){
  return (
    ${generateTem(variants, story)}
  )
}`
  }

const ButtonCompGenerate = componentGenerate('Button')

export const solidButton = ButtonCompGenerate(
  { color },
  (variant, attr, comp) => `<Button variant="solid"  ${attr}="${variant}"> Send </Button>\n`
)

export const outlineButton = ButtonCompGenerate(
  { color },
  (variant, attr) => `<Button variant='outline' ${attr}="${variant}"> Send </Button>\n`
)

export const softButton = ButtonCompGenerate(
  { color },
  (variant, attr) => `<Button variant='soft' ${attr}="${variant}"> Send </Button>\n`
)

export const textButton = ButtonCompGenerate(
  { color },
  (variant, attr) => `<Button variant='text' ${attr}="${variant}"> Send </Button>\n`
)

export const linkButton = ButtonCompGenerate(
  { color },
  (variant, attr) => `<Button variant='link' ${attr}="${variant}"> Send </Button>\n`
)

export const fluidButton = ButtonCompGenerate(
  { color },
  (variant, attr) => `<Button variant='solid' fluid ${attr}="${variant}"> Send </Button>\n`
)

export const sizeButton = `import { Button } from "@pillar-ui/core";

function Buttons(){
  return (
    <Button variant="solid" size="3">Update Profile</Button>
    <Button variant="solid" size="4">  Update Profile</Button>
    <Button variant="solid">Update Profile</Button>
    <Button variant="solid" size="6">  Update Profile</Button>
    <Button variant="solid" size="7">  Update Profile</Button>
  )
}`

export const sizeButtonIcon = `
import { Button } from "@pillar-ui/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <Button variant="solid" size="3" icon={<User />}>Update Profile</Button>
    <Button variant="solid" size="4" icon={<User />}>  Update Profile</Button>
    <Button variant="solid" icon={<User />}>Update Profile</Button>
    <Button variant="solid" size="6" icon={<User />}>  Update Profile</Button>
    <Button variant="solid" size="7" icon={<User />}>  Update Profile</Button>
  )
}`

export const buttonWithIcon = `
import { Button } from "@pillar-ui/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <Button variant="solid" icon={<User width={20} />}> Update Profile </Button>
    <Button iconPosition="end" variant="solid" icon={<Send width={20} />} color="d" > Send </Button>
    <Button variant="solid" icon={<Card width={20} />} color="w" > Add Cart </Button>
    <Button iconPosition="end" variant="solid" icon={<Message width={20} />} color="su" > Review </Button>
    <Button variant="solid" icon={<Heart width={20} />} color="i" > Like </Button>
    <Button iconPosition="end" variant="solid" icon={<Send width={20} />} color="se" > Send </Button>
    <Button variant="solid" icon={<User width={20} />} color="yellow"> Yellow </Button>
    <Button iconPosition="end" variant="solid" icon={<User width={20} />} color="b" > Slate </Button>
    <Button variant="solid" icon={<Gmail width={20} />} color="d" > Gmail </Button>
    <Button variant="solid" icon={<Facebook width={20} />} color="i" > Facebook </Button>
    <Button variant="solid" icon={<Twitter width={20} />} color="i" > Twitter </Button>
  )
}`

export const cornerButton = `
import { Button } from "@pillar-ui/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <Button variant="solid">Update Profile</Button>
    <Button variant="solid" corner="0"> Update Profile </Button>
    <Button variant="solid" corner="full"> Update Profile </Button>
  )
}`

export const buttonStatus = `
import { Button } from "@pillar-ui/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <Button variant="solid" disabled icon={<User />} size="3">Update Profile</Button>
    <Button variant="solid" state="loading" icon={<User />} size="4">Update Profile </Button>
    <Button variant="solid" state="loading" iconPosition="end" icon={<User />} >Update Profile</Button>
  )
}`

export const iconButtonSize = `
import { Button } from "@pillar-ui/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <IconButton icon={<User />} title="hello" size="3" />
    <IconButton icon={<User />} title="hello" size="4" />
    <IconButton icon={<User />} title="hello" />
    <IconButton icon={<User />} title="hello" size="6" />
    <IconButton icon={<User />} title="hello" size="7" />
  )
}`

export const iconButtonSoft = `
import { Button } from "@pillar-ui/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <IconButton title="Hey" icon={<User />} variant="soft" color="d" />
    <IconButton title="Add Cart" variant="soft" icon={<User />} color="w" />
    <IconButton title="Review" icon={<User />} variant="soft" color="su" />
    <IconButton title="Like" icon={<User />} variant="soft" color="i" />
    <IconButton title="Send" icon={<User />} variant="soft" color="se" />
    <IconButton title="Yellow" icon={<User />} variant="soft" color="yellow" />
    <IconButton title="Slate" icon={<User />} variant="soft" color="b" />
  )
}`

export const iconButtonOutline = `
import { Button } from "@pillar-ui/core";
import { User } from "@components/icons";

function Buttons(){
  return (
      <IconButton title="Hey" icon={<User />} variant="outline" color="d" />
      <IconButton title="Add Cart" variant="outline" icon={<User />} color="w" />
      <IconButton title="Review" icon={<User />} variant="outline" color="su" />
      <IconButton title="Like" icon={<User />} variant="outline" color="i" />
      <IconButton title="Send" icon={<User />} variant="outline" color="se" />
      <IconButton title="Yellow" icon={<User />} variant="outline" color="yellow" />
      <IconButton title="Slate" icon={<User />} variant="outline" color="b" />
    )
}`

export const iconButtonSolid = `
import { Button } from "@pillar-ui/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <IconButton title="Hey" icon={<User />} variant="solid" color="d" />
    <IconButton title="Add Cart" variant="solid" icon={<User />} color="w" />
    <IconButton title="Review" icon={<User />} variant="solid" color="su" />
    <IconButton title="Like" icon={<User />} variant="solid" color="i" />
    <IconButton title="Send" icon={<User />} variant="solid" color="se" />
    <IconButton title="Yellow" icon={<User />} variant="solid" color="yellow" />
    <IconButton title="Slate" icon={<User />} variant="solid" color="b" />
  )
}`

export const iconButtonDefault = `
import { Button } from "@pillar-ui/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <IconButton title="Hey" icon={<User />}  color="d" />
    <IconButton title="Add Cart"  icon={<User />} color="w" />
    <IconButton title="Review" icon={<User />}  color="su" />
    <IconButton title="Like" icon={<User />}  color="i" />
    <IconButton title="Send" icon={<User />}  color="se" />
    <IconButton title="Yellow" icon={<User />}  color="yellow" />
    <IconButton title="Slate" icon={<User />}  color="b" />
  )
}`

export const iconButtonCorner = `
import { Button } from "@pillar-ui/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <Button variant="solid">Update Profile</Button>
    <Button variant="solid" corner="0">
      Update Profile
    </Button>
    <Button variant="solid" corner="1">
      Update Profile
    </Button>
    <Button variant="solid" corner="2">
      Update Profile
    </Button>
    <Button variant="solid" corner="3">
      Update Profile
    </Button>
    <Button variant="solid" corner="5">
      Update Profile
    </Button>
 
    <Button variant="solid" corner="full">
      Update Profile
    </Button>
  )
}`
