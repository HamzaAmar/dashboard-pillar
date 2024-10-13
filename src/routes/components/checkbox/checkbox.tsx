import { Flex, Heading, Checkbox, Grid, Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'
import { Preview } from '@components/section'
import useBoolean from '@hooks/useBoolean'
import { FormEvent, useState } from 'react'
import * as docs from './checkbox.docs'

export const Component = () => {
  const { state, handleToggle } = useBoolean(false)
  const [isCheck, setIsCheck] = useState([false, false, false])

  const allChecked = isCheck.every(Boolean)
  const isIndeterminate = isCheck.some(Boolean) && !allChecked

  const handleToggles = () => {
    setIsCheck([false, false, false])
  }

  const handleChecks = (name: string) => (event: FormEvent<HTMLInputElement>) => {
    const newArr = isCheck.map((val) => {
      //TODO: IF you can fix this without type assertion
      const target = event.target as HTMLInputElement
      return name === target.name ? !val : val
    })
    setIsCheck(newArr)
  }

  return (
    <section aria-labelledby="checkbox--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="checkbox--page-id" size="3">
          Checkbox Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Checkbox
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview title="Checkbox Color" description="Show alert only with message Props" code={docs.checkboxColor}>
          <Flex wrap gap="5" items="center">
            <Checkbox color="d" label="danger" />
            <Checkbox color="su" label="success" />
            <Checkbox color="se" label="purple" />
            <Checkbox color="i" label="indigo" />
            <Checkbox color="b" label="slate" />
            <Checkbox color="w" label="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Checkbox Default Check"
          description="Default check is Boolean value default to false"
          code={docs.defaultCheckedCheckbox}
        >
          <Flex wrap gap="5" items="center">
            <Checkbox defaultChecked color="d" label="danger" />
            <Checkbox defaultChecked color="su" label="success" />
            <Checkbox defaultChecked color="se" label="purple" />
            <Checkbox defaultChecked color="i" label="indigo" />
            <Checkbox defaultChecked color="b" label="slate" />
            <Checkbox defaultChecked color="w" label="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Checkbox Disabled"
          description="Disabled is Boolean value default to false"
          code={docs.checkboxDisabled}
        >
          <Flex wrap gap="5" items="center">
            <Checkbox disabled defaultChecked color="d" label="danger" />
            <Checkbox disabled color="su" label="success" />
            <Checkbox disabled color="se" label="purple" />
            <Checkbox disabled color="i" label="indigo" />
            <Checkbox disabled color="b" label="slate" />
            <Checkbox disabled defaultChecked color="w" label="warning" />
          </Flex>
        </Preview>

        <Preview title="Checkbox Size" description="Show alert only with message Props" code={docs.checkboxSize}>
          <Flex wrap gap="5" items="center">
            <Checkbox size="4" label="danger" />
            <Checkbox label="danger" />
            <Checkbox size="6" label="success" />
          </Flex>
        </Preview>

        <Preview
          title="Indeterminite State"
          description="Show alert only with message Props"
          code={docs.checkboxIsIndeterminate}
        >
          <Flex wrap gap="5" items="center">
            <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="4" label="Indeterminate" />
            <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="5" label="Indeterminate" />
            <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="6" label="Indeterminate" />
          </Flex>
        </Preview>

        <Preview
          title="Indeterminite State"
          description="Show alert only with message Props"
          code={docs.checkboxIsIndeterminateSecond}
        >
          <div className="l_flow-md">
            <Checkbox
              checked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={handleToggles}
              label="Parent"
              name="Hello"
            />
            <Flex style={{ paddingInlineStart: '1rem' }} gap="5" direction="col" items="start">
              <Checkbox checked={isCheck[0]} onChange={handleChecks('first')} label="first" name="first" />
              <Checkbox checked={isCheck[1]} onChange={handleChecks('second')} label="second" name="second" />
              <Checkbox checked={isCheck[2]} onChange={handleChecks('third')} label="third" name="third" />
            </Flex>
          </div>
        </Preview>
      </Grid>
    </section>
  )
}

Component.displayName = 'CheckboxDoc'
