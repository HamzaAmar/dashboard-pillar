import { TableComp } from './tables.data'

export const tableSize = `
import {Table} from '@components/composite'

${TableComp}

function TablesStories(){
  return(
   <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
    <TableComp  size="4" />
    <TableComp  />
    <TableComp  size="6" />
  </Grid>
  )  
}
`

export const tableVariant = `
import {Table} from '@components/composite'

${TableComp}

function TablesStories(){
  return(
   <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
    <TableComp color="d" variant="striped" />
    <TableComp color="su" variant="striped" />
    <TableComp color="se" variant="striped" />
    <TableComp color="i" variant="striped" />
  </Grid>
  )  
}
`

export const tableColor = `
import {Table} from '@components/composite'

${TableComp}

function TablesStories(){
  return(
    <Flex direction="col" gap="4">
         <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <TableComp  color="d" variant="striped" />
        <TableComp  color="su" variant="striped" />
        <TableComp  color="se" variant="striped" />
        <TableComp  color="i" variant="striped" />
        </Grid>

         <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <TableComp  color="d" />
        <TableComp  color="su" />
        <TableComp  color="se" />
        <TableComp  color="i" />
        </Grid>
         <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <TableComp  variant="soft" color="d" />
        <TableComp  variant="soft" color="su" />
        <TableComp  variant="soft" color="se" />
        <TableComp  variant="soft" color="i" />
        <TableComp  variant="soft" />
        </Grid>
         <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <TableComp  variant="head-color" color="d" />
        <TableComp  variant="head-color" color="su" />
        <TableComp  variant="head-color" color="se" />
        <TableComp  variant="head-color" color="i" />
        <TableComp  variant="head-color" />
        </Grid>
    </Flex>
  )  
}
`
