import { Flex, Heading, Checkbox, Grid, Breadcrumb } from '@components/core'
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
        <Heading as="h1" id="checkbox--page-id" size="xs">
          Checkbox Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Checkbox
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview title="Checkbox Color" description="Show alert only with message Props" code={docs.checkboxColor}>
          <Flex wrap gap="md" items="center">
            <Checkbox color="danger" label="danger" />
            <Checkbox color="success" label="success" />
            <Checkbox color="purple" label="purple" />
            <Checkbox color="indigo" label="indigo" />
            <Checkbox color="slate" label="slate" />
            <Checkbox color="warning" label="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Checkbox Default Check"
          description="Default check is Boolean value default to false"
          code={docs.defaultCheckedCheckbox}
        >
          <Flex wrap gap="md" items="center">
            <Checkbox defaultChecked color="danger" label="danger" />
            <Checkbox defaultChecked color="success" label="success" />
            <Checkbox defaultChecked color="purple" label="purple" />
            <Checkbox defaultChecked color="indigo" label="indigo" />
            <Checkbox defaultChecked color="slate" label="slate" />
            <Checkbox defaultChecked color="warning" label="warning" />
          </Flex>
        </Preview>

        <Preview
          title="Checkbox Disabled"
          description="Disabled is Boolean value default to false"
          code={docs.checkboxDisabled}
        >
          <Flex wrap gap="md" items="center">
            <Checkbox disabled defaultChecked color="danger" label="danger" />
            <Checkbox disabled color="success" label="success" />
            <Checkbox disabled color="purple" label="purple" />
            <Checkbox disabled color="indigo" label="indigo" />
            <Checkbox disabled color="slate" label="slate" />
            <Checkbox disabled defaultChecked color="warning" label="warning" />
          </Flex>
        </Preview>

        <Preview title="Checkbox Size" description="Show alert only with message Props" code={docs.checkboxSize}>
          <Flex wrap gap="md" items="center">
            <Checkbox size="sm" label="danger" />
            <Checkbox label="danger" />
            <Checkbox size="lg" label="success" />
          </Flex>
        </Preview>

        <Preview
          title="Indeterminite State"
          description="Show alert only with message Props"
          code={docs.checkboxIsIndeterminate}
        >
          <Flex wrap gap="md" items="center">
            <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="sm" label="Indeterminate" />
            <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="md" label="Indeterminate" />
            <Checkbox checked={state} onChange={handleToggle} isIndeterminate size="lg" label="Indeterminate" />
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
            <Flex style={{ paddingInlineStart: '1rem' }} gap="md" direction="column" items="start">
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
