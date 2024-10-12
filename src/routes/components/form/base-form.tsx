import {
  Breadcrumb,
  Flex,
  Heading,
  Input,
  InputNumber,
  InputPassword,
  Text,
  Textarea,
  InputSearch,
  FormController,
  Select,
  InputFile,
} from '@components/core'

export const Component = () => {
  return (
    <section className="l_flow-md">
      <Flex justify="between" items="center">
        <Heading size="sm">Form Elements</Heading>

        <Breadcrumb size="md">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Form</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Base UI
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <section className="l_flow-md l_box">
        <div>
          <Heading as="h2" size="sm" weight="medium">
            Input Types
          </Heading>
          <Text size="xs" color="slate" contrast="low">
            Hello
          </Text>
        </div>

        <FormController label="Input Text">
          <Input name="hello" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Input Password">
          <InputPassword name="hello" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Input Number">
          <InputNumber name="hello" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Text Area">
          <Textarea name="hello" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Text Search">
          <InputSearch type="search" name="hello" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Input File">
          <InputFile name="file" />
        </FormController>
        <FormController label="Input File (multiple)">
          <InputFile name="hello" multiple />
        </FormController>
        <FormController label="Text Date">
          <Input type="date" name="hello" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Text Time">
          <Input type="time" name="hello" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Text Week">
          <Input type="week" name="hello" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Text Week">
          <Input type="week" name="hello" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Text Tel">
          <Input type="tel" name="hello" placeholder="Type Your Telephone" />
        </FormController>
        <FormController label="Text Tel">
          <Select name="hello">
            <option value="morocco">Morocco</option>
            <option value="saudi-arabia">Saudi Arabia</option>
            <option value="usa">USA</option>
            <option value="qatar">Qatar</option>
            <option value="england">England</option>
          </Select>
        </FormController>
      </section>
      <section className="l_flow-md l_box">
        <div>
          <Heading as="h2" size="sm" weight="medium">
            Input Types
          </Heading>
          <Text size="xs" color="slate" contrast="low">
            Default Props is md Possible Values (sm, md, lg)
          </Text>
        </div>

        <FormController label="Input Text">
          <Input name="hello" size="sm" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Input Text">
          <Input name="hello" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Input Text">
          <Input name="hello" size="lg" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Input Text">
          <Input name="hello" size="lg" width={20} placeholder="Type Your Name" />
        </FormController>
      </section>
      <section className="l_flow-md l_box">
        <div>
          <Heading as="h2" size="sm" weight="medium">
            Input Variant
          </Heading>
          <Text size="xs" color="slate" contrast="low">
            Default Props is outline Possible Values (filled , outline)
          </Text>
        </div>

        <FormController label="Input Text">
          <Input name="hello" size="sm" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Input Text">
          <Input name="hello" variant="filled" size="md" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Text Tel">
          <Select variant="filled" name="hello">
            <option value="morocco">Morocco</option>
            <option value="saudi-arabia">Saudi Arabia</option>
            <option value="usa">USA</option>
            <option value="qatar">Qatar</option>
            <option value="england">England</option>
          </Select>
        </FormController>
      </section>

      <section className="l_flow-md l_box">
        <div>
          <Heading as="h2" size="sm" weight="medium">
            Input Corner
          </Heading>
          <Text size="xs" color="slate" contrast="low">
            Default Props is radius Possible Values (sharp, radius , round)
          </Text>
        </div>

        <FormController label="Input Text">
          <Input name="hello" corner="sharp" size="sm" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Input Text">
          <Input name="hello" variant="filled" size="md" placeholder="Type Your Name" />
        </FormController>
        <FormController label="Text Tel">
          <Select corner="full" variant="filled" name="hello">
            <option value="morocco">Morocco</option>
            <option value="saudi-arabia">Saudi Arabia</option>
            <option value="usa">USA</option>
            <option value="qatar">Qatar</option>
            <option value="england">England</option>
          </Select>
        </FormController>
      </section>
    </section>
  )
}

Component.displayName = 'BaseFormDOc'
