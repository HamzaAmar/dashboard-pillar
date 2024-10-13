import { Flex, Heading, Checkbox, Grid } from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './dropzone.docs'

const dropzonePage = () => {
  return (
    <div className="l_flow-md">
      <Heading color="b" low size="4">
        CheckBox
      </Heading>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview title="Checkbox Color" description="Show alert only with message Props" code={docs.defaultDropzone}>
          <Flex wrap gap="5" items="center">
            <Checkbox color="d" label="danger" />
            <Checkbox color="su" label="success" />
            <Checkbox color="se" label="purple" />
            <Checkbox color="i" label="indigo" />
            <Checkbox color="b" label="slate" />
            <Checkbox color="w" label="warning" />
          </Flex>
        </Preview>
      </Grid>
    </div>
  )
}

export default dropzonePage
