export const formMasking = `
import {useState} from 'react'
import { Calendar, Card, Clock, Phone } from '@components/icons'
import { Flex, Input, FormController } from '@components/core'
import InputMask from 'react-input-mask'

const initialVal = {
    phone: '',
    creditCard: '',
    birthday: '12/12/2020',
    releaseTime: '',
  }

function FormMasking(){
    const [value, setValue] = useState(initialVal)

    function handleChange(event: FormEvent<HTMLInputElement>) {
      const { name, value } = event.currentTarget
      setValue((values) => ({
        ...values,
        [name]: value,
      }))
    return(
        <Flex wrap gap="md">
          <FormController required label="Number Phone">
            <InputMask value={value.phone} name="phone" onChange={handleChange} mask="(+1) 999 999 9999">
              <Input prefixInput={<Phone />} placeholder="type you phone number" type="tel" />
            </InputMask>
          </FormController>
          <FormController required label="Birthday">
            <InputMask
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
    )
}

`
