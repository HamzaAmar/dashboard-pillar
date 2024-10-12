const TabComp = `
function TabComp(){
    <Tabs {...rest} defaultValue="one">
        <Tabs.List className="">
        <Tabs.Trigger variant={variant} value="one">
            One
        </Tabs.Trigger>
        <Tabs.Trigger variant={variant} value="two">
            Two
        </Tabs.Trigger>
        <Tabs.Trigger variant={variant} value="three">
            Three
        </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="one">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ipsam
            consectetur et impedit hic molestiae libero, perferendis iure pariatur,
            quidem obcaecati dolore blanditiis? Ut, vero similique. Numquam ipsam
            saepe hic!
        </Tabs.Content>
        <Tabs.Content value="two">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil,
            corporis quaerat eaque aut nostrum nemo ex ipsum numquam nesciunt
            tenetur rem. Voluptas rem vitae excepturi perferendis facere quo sunt.
        </Tabs.Content>
        <Tabs.Content value="three">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            obcaecati expedita provident optio placeat officia nihil voluptates?
            Possimus esse, facilis corporis ipsa fuga recusandae ipsum, non nostrum
            voluptatibus aliquam sint.
        </Tabs.Content>
    </Tabs>
}
`

export const tabVariant = `
import { Tabs } from '@components/composition'

${TabComp}

function TabsStories(){
    return(
      <Grid columns="1fr 1fr" className="sm_grid-one" gap="md">
        <TabComp variant="solid" />
        <TabComp variant="outline" />
        <TabComp variant="soft" />
        <TabComp />
      </Grid>
    )
}
`

export const tabColor = `
import { Tabs } from '@components/composition'

${TabComp}

function TabsStories(){
    return(
      <Grid columns="1fr 1fr" className="sm_grid-one" gap="md">
        <TabComp color="danger" variant="solid" />
        <TabComp color="indigo" variant="outline" />
        <TabComp variant="soft" />
        <TabComp color="purple" />
        <TabComp color="secondary" variant="solid" />
        <TabComp color="slate" variant="outline" />
        <TabComp color="yellow" variant="soft" />
        <TabComp color="warning" />
      </Grid>
    )
}
`

export const tabSize = `
import { Tabs } from '@components/composition'

${TabComp}

function TabsStories(){
    return(
      <Grid columns="1fr 1fr" className="sm_grid-one" gap="md">
        <TabComp size="sm" />
        <TabComp size="md" />
        <TabComp size="lg" />
        <TabComp />
      </Grid>
    )
}
`

export const tabIcon = `
import { Tabs } from '@components/composition'

function TabsStories(){
    return(
      <Tabs size="lg" defaultValue="one">
        <Tabs.List className="">
          <Tabs.Trigger value="one">
            <Home width="20" />
          </Tabs.Trigger>
          <Tabs.Trigger value="two">
            <Flex items="center" gap="2xs">
              <Home width="20" />
              <Text size="xs">Home</Text>
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="three">
            <Flex items="center" gap="2xs">
              <Text size="xs">User</Text>
              <User width="20" />
            </Flex>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="one">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
          ipsam consectetur et impedit hic molestiae libero, perferendis
          iure pariatur, quidem obcaecati dolore blanditiis? Ut, vero
          similique. Numquam ipsam saepe hic!
        </Tabs.Content>
        <Tabs.Content value="two">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          nihil, corporis quaerat eaque aut nostrum nemo ex ipsum numquam
          nesciunt tenetur rem. Voluptas rem vitae excepturi perferendis
          facere quo sunt.
        </Tabs.Content>
        <Tabs.Content value="three">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          obcaecati expedita provident optio placeat officia nihil
          voluptates? Possimus esse, facilis corporis ipsa fuga recusandae
          ipsum, non nostrum voluptatibus aliquam sint.
        </Tabs.Content>
      </Tabs>
    )
}
`
