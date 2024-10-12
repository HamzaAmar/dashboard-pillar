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
import { ${comp}} from "@components/core";

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

export const sizeButton = `import { Button } from "@components/core";

function Buttons(){
  return (
    <Button variant="solid" size="xs">Update Profile</Button>
    <Button variant="solid" size="sm">  Update Profile</Button>
    <Button variant="solid">Update Profile</Button>
    <Button variant="solid" size="lg">  Update Profile</Button>
    <Button variant="solid" size="xl">  Update Profile</Button>
  )
}`

export const sizeButtonIcon = `
import { Button } from "@components/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <Button variant="solid" size="xs" icon={<User />}>Update Profile</Button>
    <Button variant="solid" size="sm" icon={<User />}>  Update Profile</Button>
    <Button variant="solid" icon={<User />}>Update Profile</Button>
    <Button variant="solid" size="lg" icon={<User />}>  Update Profile</Button>
    <Button variant="solid" size="xl" icon={<User />}>  Update Profile</Button>
  )
}`

export const buttonWithIcon = `
import { Button } from "@components/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <Button variant="solid" icon={<User width={20} />}> Update Profile </Button>
    <Button iconPosition="end" variant="solid" icon={<Send width={20} />} color="danger" > Send </Button>
    <Button variant="solid" icon={<Card width={20} />} color="warning" > Add Cart </Button>
    <Button iconPosition="end" variant="solid" icon={<Message width={20} />} color="success" > Review </Button>
    <Button variant="solid" icon={<Heart width={20} />} color="indigo" > Like </Button>
    <Button iconPosition="end" variant="solid" icon={<Send width={20} />} color="purple" > Send </Button>
    <Button variant="solid" icon={<User width={20} />} color="yellow"> Yellow </Button>
    <Button iconPosition="end" variant="solid" icon={<User width={20} />} color="slate" > Slate </Button>
    <Button variant="solid" icon={<Gmail width={20} />} color="danger" > Gmail </Button>
    <Button variant="solid" icon={<Facebook width={20} />} color="indigo" > Facebook </Button>
    <Button variant="solid" icon={<Twitter width={20} />} color="indigo" > Twitter </Button>
  )
}`

export const cornerButton = `
import { Button } from "@components/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <Button variant="solid">Update Profile</Button>
    <Button variant="solid" corner="sharp"> Update Profile </Button>
    <Button variant="solid" corner="full"> Update Profile </Button>
  )
}`

export const buttonStatus = `
import { Button } from "@components/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <Button variant="solid" disabled icon={<User />} size="xs">Update Profile</Button>
    <Button variant="solid" state="loading" icon={<User />} size="sm">Update Profile </Button>
    <Button variant="solid" state="loading" iconPosition="end" icon={<User />} >Update Profile</Button>
  )
}`

export const iconButtonSize = `
import { Button } from "@components/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <IconButton icon={<User />} title="hello" size="xs" />
    <IconButton icon={<User />} title="hello" size="sm" />
    <IconButton icon={<User />} title="hello" />
    <IconButton icon={<User />} title="hello" size="lg" />
    <IconButton icon={<User />} title="hello" size="xl" />
  )
}`

export const iconButtonSoft = `
import { Button } from "@components/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <IconButton title="Hey" icon={<User />} variant="soft" color="danger" />
    <IconButton title="Add Cart" variant="soft" icon={<User />} color="warning" />
    <IconButton title="Review" icon={<User />} variant="soft" color="success" />
    <IconButton title="Like" icon={<User />} variant="soft" color="indigo" />
    <IconButton title="Send" icon={<User />} variant="soft" color="purple" />
    <IconButton title="Yellow" icon={<User />} variant="soft" color="yellow" />
    <IconButton title="Slate" icon={<User />} variant="soft" color="slate" />
  )
}`

export const iconButtonOutline = `
import { Button } from "@components/core";
import { User } from "@components/icons";

function Buttons(){
  return (
      <IconButton title="Hey" icon={<User />} variant="outline" color="danger" />
      <IconButton title="Add Cart" variant="outline" icon={<User />} color="warning" />
      <IconButton title="Review" icon={<User />} variant="outline" color="success" />
      <IconButton title="Like" icon={<User />} variant="outline" color="indigo" />
      <IconButton title="Send" icon={<User />} variant="outline" color="purple" />
      <IconButton title="Yellow" icon={<User />} variant="outline" color="yellow" />
      <IconButton title="Slate" icon={<User />} variant="outline" color="slate" />
    )
}`

export const iconButtonSolid = `
import { Button } from "@components/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <IconButton title="Hey" icon={<User />} variant="solid" color="danger" />
    <IconButton title="Add Cart" variant="solid" icon={<User />} color="warning" />
    <IconButton title="Review" icon={<User />} variant="solid" color="success" />
    <IconButton title="Like" icon={<User />} variant="solid" color="indigo" />
    <IconButton title="Send" icon={<User />} variant="solid" color="purple" />
    <IconButton title="Yellow" icon={<User />} variant="solid" color="yellow" />
    <IconButton title="Slate" icon={<User />} variant="solid" color="slate" />
  )
}`

export const iconButtonDefault = `
import { Button } from "@components/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <IconButton title="Hey" icon={<User />}  color="danger" />
    <IconButton title="Add Cart"  icon={<User />} color="warning" />
    <IconButton title="Review" icon={<User />}  color="success" />
    <IconButton title="Like" icon={<User />}  color="indigo" />
    <IconButton title="Send" icon={<User />}  color="purple" />
    <IconButton title="Yellow" icon={<User />}  color="yellow" />
    <IconButton title="Slate" icon={<User />}  color="slate" />
  )
}`

export const iconButtonCorner = `
import { Button } from "@components/core";
import { User } from "@components/icons";

function Buttons(){
  return (
    <Button variant="solid">Update Profile</Button>
    <Button variant="solid" corner="sharp">
      Update Profile
    </Button>
    <Button variant="solid" corner="2xs">
      Update Profile
    </Button>
    <Button variant="solid" corner="xs">
      Update Profile
    </Button>
    <Button variant="solid" corner="sm">
      Update Profile
    </Button>
    <Button variant="solid" corner="lg">
      Update Profile
    </Button>
    <Button variant="solid" corner="xl">
      Update Profile
    </Button>
    <Button variant="solid" corner="2xl">
      Update Profile
    </Button>
    <Button variant="solid" corner="full">
      Update Profile
    </Button>
  )
}`
