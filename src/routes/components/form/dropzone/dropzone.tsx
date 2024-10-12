import { Flex, Heading, Checkbox, Grid } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './dropzone.docs'

const dropzonePage = () => {
  return (
    <div className="l_flow-md">
      <Heading color="slate" contrast="low" size="sm">
        CheckBox
      </Heading>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview title="Checkbox Color" description="Show alert only with message Props" code={docs.defaultDropzone}>
          <Flex wrap gap="md" items="center">
            <Checkbox color="danger" label="danger" />
            <Checkbox color="success" label="success" />
            <Checkbox color="purple" label="purple" />
            <Checkbox color="indigo" label="indigo" />
            <Checkbox color="slate" label="slate" />
            <Checkbox color="warning" label="warning" />
          </Flex>
        </Preview>
      </Grid>
    </div>
  )
}

export default dropzonePage
