import { TableComp } from './tables.data'

export const tableSize = `
import {Table} from '@components/composite'

${TableComp}

function TablesStories(){
  return(
   <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
    <TableComp  size="sm" />
    <TableComp  />
    <TableComp  size="lg" />
  </Grid>
  )  
}
`

export const tableVariant = `
import {Table} from '@components/composite'

${TableComp}

function TablesStories(){
  return(
   <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
    <TableComp color="danger" variant="striped" />
    <TableComp color="success" variant="striped" />
    <TableComp color="purple" variant="striped" />
    <TableComp color="yellow" variant="striped" />
    <TableComp color="indigo" variant="striped" />
  </Grid>
  )  
}
`

export const tableColor = `
import {Table} from '@components/composite'

${TableComp}

function TablesStories(){
  return(
    <Flex direction="column" gap="sm">
         <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <TableComp  color="danger" variant="striped" />
        <TableComp  color="success" variant="striped" />
        <TableComp  color="purple" variant="striped" />
        <TableComp  color="yellow" variant="striped" />
        <TableComp  color="indigo" variant="striped" />
        </Grid>

         <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <TableComp  color="danger" />
        <TableComp  color="success" />
        <TableComp  color="purple" />
        <TableComp  color="yellow" />
        <TableComp  color="indigo" />
        </Grid>
         <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <TableComp  variant="soft" color="danger" />
        <TableComp  variant="soft" color="success" />
        <TableComp  variant="soft" color="purple" />
        <TableComp  variant="soft" color="yellow" />
        <TableComp  variant="soft" color="indigo" />
        <TableComp  variant="soft" />
        </Grid>
         <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <TableComp  variant="head-color" color="danger" />
        <TableComp  variant="head-color" color="success" />
        <TableComp  variant="head-color" color="purple" />
        <TableComp  variant="head-color" color="yellow" />
        <TableComp  variant="head-color" color="indigo" />
        <TableComp  variant="head-color" />
        </Grid>
    </Flex>
  )  
}
`
