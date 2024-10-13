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
      <Grid grid="1fr 1fr" className="sm_grid-one" gap="5">
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
      <Grid grid="1fr 1fr" className="sm_grid-one" gap="5">
        <TabComp color="d" variant="solid" />
        <TabComp color="i" variant="outline" />
        <TabComp variant="soft" />
        <TabComp color="se" />
        <TabComp color="se" variant="solid" />
        <TabComp color="b" variant="outline" />
        <TabComp color="w" />
      </Grid>
    )
}
`

export const tabSize = `
import { Tabs } from '@components/composition'

${TabComp}

function TabsStories(){
    return(
      <Grid grid="1fr 1fr" className="sm_grid-one" gap="5">
        <TabComp size="4" />
        <TabComp size="5" />
        <TabComp size="6" />
        <TabComp />
      </Grid>
    )
}
`

export const tabIcon = `
import { Tabs } from '@components/composition'

function TabsStories(){
    return(
      <Tabs size="6" defaultValue="one">
        <Tabs.List className="">
          <Tabs.Trigger value="one">
            <Home width="20" />
          </Tabs.Trigger>
          <Tabs.Trigger value="two">
            <Flex items="center" gap="1">
              <Home width="20" />
              <Text size="3">Home</Text>
            </Flex>
          </Tabs.Trigger>
          <Tabs.Trigger value="three">
            <Flex items="center" gap="1">
              <Text size="3">User</Text>
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
