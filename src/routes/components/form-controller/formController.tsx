import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  FormController,
  Grid,
  Heading,
  Input,
  InputFile,
  InputNumber,
  InputPassword,
  InputSearch,
  Select,
  Textarea,
} from '@pillar-ui/core'
import { Dollar, Globe } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './formController.docs'

const formController = () => {
  return (
    <section aria-labelledby="form-controller--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="form-controller--page-id" size="3">
          Form Controller Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Form Controller
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="Input  Outline Text State"
          description="Show All input State regular is the default state possible value (disabled)"
          code={docs.formControllerFilledState}
        >
          <Flex direction="col" gap="1">
            <FormController label="Name">
              <Input name="Name" placeholder="default input" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" readOnly value="Helllo" />
            </FormController>
            <FormController label="Name" required>
              <Input name="Name" placeholder="required input" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" disabled placeholder="disabled Input" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" isInvalid placeholder="Error Input" />
            </FormController>
          </Flex>
        </Preview>

        <Preview
          title="Input Filled Text State"
          description="default value outline possible values (outline, filled )"
          code={docs.formControllerOutlineState}
        >
          <Flex direction="col" gap="1">
            <FormController label="Name">
              <Input name="Name" variant="filled" placeholder="default input" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" value="Helllo" readOnly variant="filled" />
            </FormController>
            <FormController label="Name" required>
              <Input name="Name" variant="filled" placeholder="required input" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" disabled variant="filled" placeholder="disabled Input" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" isInvalid variant="filled" placeholder="Error Input" />
            </FormController>
          </Flex>
        </Preview>

        <Preview
          title="Custom Prefix and suffix"
          description="prefixInput and suffixInput "
          code={docs.formControllerPrefixSuffix}
        >
          <Flex direction="col" gap="1">
            <FormController label="Name">
              <Input name="Name" prefixInput="Hello" suffixInput="Hello" placeholder="default input" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" prefixInput="1s" suffixInput="2$" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" prefixInput={<Dollar />} suffixInput={'.00'} />
            </FormController>
            <FormController label="Name">
              <Input name="Name" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" variant="filled" prefixInput={<Globe />} suffixInput={'.net'} />
            </FormController>
          </Flex>
        </Preview>

        <Preview
          title="Form Controller size"
          description="default md possible values(xs,sm,md,lg, xl)"
          code={docs.formControllerSize}
        >
          <Flex direction="col" gap="1">
            <FormController label="Name">
              <Input name="Name" size="3" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" size="4" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" size="5" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" size="6" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" size="7" />
            </FormController>
          </Flex>
        </Preview>

        <Preview
          title="Corner Text"
          description="default radius possible values(circle, radius, sharp) "
          code={docs.formControllerCorner}
        >
          <Flex direction="col" gap="1">
            <FormController label="Name">
              <Input name="Name" corner="0" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" />
            </FormController>
            <FormController label="Name">
              <Input name="Name" corner="full" />
            </FormController>
          </Flex>
        </Preview>

        <Preview
          title="Form Controller Type"
          description="default radius possible values(circle, radius, sharp) "
          code={docs.formControllerType}
        >
          <Flex direction="col" gap="1">
            <FormController label="Name">
              <InputNumber name="Name" />
            </FormController>
            <FormController label="Name">
              <InputPassword name="Name" />
            </FormController>
            <FormController label="Name">
              <InputSearch name="Name" />
            </FormController>
            <FormController label="Name">
              <InputFile name="Name" />
            </FormController>
            <FormController label="Name">
              <Textarea name="Name" />
            </FormController>
            <FormController label="Name">
              <Select name="Name">
                <option value="">Choose You name</option>
                <option value="">Hello</option>
                <option value="">Hello</option>
                <option value="">Hello</option>
              </Select>
            </FormController>
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

export default formController
