import { Breadcrumb, Flex, Heading, Input, FormController } from '@components/core'
import { Calendar, Card, Clock, Phone } from '@components/icons'
import { Preview } from '@components/section'
import { FormEvent, useState } from 'react'
import InputMask from 'react-input-mask'
import { formMasking } from './maskForm.docs'

const initialVal = {
  phone: '',
  creditCard: '',
  birthday: '12/12/2020',
  releaseTime: '',
}

const FormLayout = () => {
  const [value, setValue] = useState(initialVal)

  function handleChange(event: FormEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget
    setValue((values) => ({
      ...values,
      [name]: value,
    }))
  }
  return (
    <section className="l_flow-md">
      <Flex justify="between" items="center">
        <Heading size="sm">Form Elements</Heading>

        <Breadcrumb size="md">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Form</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Form Layout
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>

      <Preview title="Input Mask" description="Show alert only with message Props" code={formMasking}>
        <Flex wrap gap="md">
          <FormController required label="Number Phone">
            <InputMask key="phone" value={value.phone} name="phone" onChange={handleChange} mask="(+1) 999 999 9999">
              <Input prefixInput={<Phone />} placeholder="type you phone number" type="tel" />
            </InputMask>
          </FormController>
          <FormController required label="Birthday">
            <InputMask
              key="birthday-number"
              value={value.birthday}
              name="birthday"
              maskPlaceholder=" "
              onChange={handleChange}
              mask="99/99/9999"
              alwaysShowMask={true}
            >
              <Input placeholder="DD/MM/YYYY" prefixInput={<Calendar />} type="tel" />
            </InputMask>
          </FormController>
          <FormController required label="credit Card">
            <InputMask
              value={value.creditCard}
              name="creditCard"
              maskPlaceholder="-"
              onChange={handleChange}
              mask="9999 9999 9999 9999"
              alwaysShowMask={true}
            >
              <Input placeholder="DD/MM/YYYY" prefixInput={<Card />} type="tel" />
            </InputMask>
          </FormController>
          <FormController required label="Time">
            <InputMask
              value={value.releaseTime}
              name="releaseTime"
              maskPlaceholder="-"
              onChange={handleChange}
              mask="99:99:99"
              alwaysShowMask={true}
            >
              <Input placeholder="12:12:PM" prefixInput={<Clock />} type="tel" />
            </InputMask>
          </FormController>
        </Flex>
      </Preview>
    </section>
  )
}

export default FormLayout
