export const formControllerFilledState = `
import  {Flex, FormController, Input} from '@pillar-ui/core'

function formControllerStories(){
    return(
      <Flex direction="col" gap="1">
        <FormController label="Name">
            <Input name="Name" variant="filled" placeholder="default input" />
        </FormController>
        <FormController label="Name"  value="Hello">
            <Input name="Name" readOnly variant="filled" />
        </FormController>
        <FormController label="Name" required>
            <Input
                name="Name"
                variant="filled"
                placeholder="required input"
            />
        </FormController>
        <FormController disabled label="Name">
            <Input
                name="Name"
                variant="filled"
                placeholder="disabled Input"
            />
        </FormController>
        <FormController isInvalid label="Name">
            <Input name="Name" variant="filled" placeholder="Error Input" />
        </FormController>
      </Flex>
    )
}`
export const formControllerOutlineState = `
import  {Flex, FormController, Input} from '@pillar-ui/core'

function formControllerStories(){
    return(
      <Flex direction="col" gap="1">
        <FormController label="Name">
            <Input name="Name"  placeholder="default input" />
        </FormController>
        <FormController label="Name" value="Helllo">
            <Input name="Name"  readOnly />
        </FormController>
        <FormController label="Name" required>
            <Input  name="Name" placeholder="required input" />
        </FormController>
        <FormController disabled label="Name">
            <Input name="Name"placeholder="disabled Input" />
        </FormController>
        <FormController isInvalid label="Name">
            <Input name="Name"  placeholder="Error Input" />
        </FormController>
      </Flex>
    )
}`

export const formControllerPrefixSuffix = `
import  {Flex, FormController, Input} from '@pillar-ui/core'

function formControllerStories(){
    return(
      <Flex direction="col" gap="1">
        <FormController label="Name">
            <Input
                name="Name"
                prefixInput="Hello"
                suffixInput="Hello"
                placeholder="default input"
            />
        </FormController>
        <FormController label="Name">
            <Input name="Name" prefixInput="1s" suffixInput="2$" />
        </FormController>
        <FormController label="Name">
            <Input name="Name" prefixInput={<Dollar />} suffixInput={".00"} />
        </FormController>
        <FormController label="Name">
            <Input name="Name" />
        </FormController>
        <FormController label="Name">
            <Input
                name="Name"
                variant="filled"
                prefixInput={<Globe />}
                suffixInput={".net"}
            />
        </FormController>
      </Flex>
    )
}`

export const formControllerSize = `
import  {Flex, FormController, Input} from '@pillar-ui/core'

function formControllerStories(){
    return(
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
    )
}`

export const formControllerCorner = `
import  {Flex, FormController, Input} from '@pillar-ui/core'

function formControllerStories(){
    return(
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
    )
}`

export const formControllerType = `
import  {Flex, FormController, InputFile, InputPassword , InputSearch, TextArea, InputNumber} from '@pillar-ui/core'

function formControllerStories(){
    return(
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
    )
}
`
