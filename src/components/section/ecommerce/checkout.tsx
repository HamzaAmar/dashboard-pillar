import { Breadcrumb, Button, Flex, FormController, Heading, Input, Text, Textarea } from '@components/core'
import { ArrowDown, Card, Check, CircleCheck, Ship } from '@components/icons'
import { useState } from 'react'

type InfoUnion = 'shipping' | 'payment' | 'success'

const Checkout = () => {
  const [info, setInfo] = useState<InfoUnion>('shipping')

  const handleInfo = (info: InfoUnion) => () => {
    setInfo(info)
  }

  return (
    <section className="l_flow-md">
      <Flex justify="between" items="center">
        <Heading weight="medium" size="sm">
          Products Details
        </Heading>
        <Breadcrumb size="md">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">E-commerce</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Checkout
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Flex gap="md">
        <button data-current={info === 'shipping'} onClick={handleInfo('shipping')} className="checkout--button l_box">
          <div>
            <Ship width="28" />
            <Text size="sm">Shipping info</Text>
          </div>
        </button>
        <button data-current={info === 'payment'} onClick={handleInfo('payment')} className="checkout--button l_box">
          <div>
            <Card width="28" />
            <Text size="sm">Payment Info</Text>
          </div>
        </button>
        <button data-current={info === 'success'} onClick={handleInfo('success')} className="checkout--button l_box">
          <div>
            <CircleCheck width="28" />
            <Text size="sm">Confirmation</Text>
          </div>
        </button>
      </Flex>

      <div className="checkout--content">
        <Flex
          as="section"
          direction="column"
          data-current={info === 'shipping'}
          className="checkout--content-shipping l_box l_flow-md"
        >
          <div>
            <Heading as="h2" size="xs">
              Shipping information
            </Heading>
            <Text size="xs" color="slate" contrast="low">
              Fill all information below filled with * is (required)
            </Text>
          </div>
          <form className="l_flow-md u_flex-1">
            <FormController required label="name">
              <Input />
            </FormController>
            <FormController required label="Email">
              <Input type="email" />
            </FormController>
            <FormController required label="Phone">
              <Input type="tel" />
            </FormController>
            <FormController required label="Phone">
              <Textarea />
            </FormController>
            <Flex className="checkout--content-footer" items="center" gap="xs">
              <Button
                icon={<ArrowDown direction="right" />}
                iconPosition="end"
                type="button"
                variant="solid"
                onClick={handleInfo('payment')}
              >
                Next
              </Button>
            </Flex>
          </form>
        </Flex>
        <Flex as="section" direction="column" data-current={info === 'payment'} className="l_box l_flow-md">
          <div>
            <Heading as="h2" size="xs">
              Payment information
            </Heading>
            <Text size="xs" color="slate" contrast="low">
              Fill all information below filled with * is (required)
            </Text>
          </div>
          <form className="l_flow-md">
            <FormController required label="name">
              <Input />
            </FormController>
            <FormController required label="Email">
              <Input type="email" />
            </FormController>
            <FormController required label="Phone">
              <Input type="tel" />
            </FormController>
            <FormController required label="Phone">
              <Textarea />
            </FormController>
            <Flex className="checkout--content-footer" items="center" gap="xs">
              <Button
                icon={<ArrowDown direction="left" />}
                type="button"
                variant="soft"
                onClick={handleInfo('shipping')}
              >
                Back
              </Button>
              <Button
                icon={<ArrowDown direction="right" />}
                iconPosition="end"
                type="button"
                variant="solid"
                onClick={handleInfo('success')}
              >
                Next
              </Button>
            </Flex>
          </form>
        </Flex>
        <Flex direction="column" data-current={info === 'success'} className="l_box l_flow-md">
          <form className="l_flow-md">
            <FormController required label="name">
              <Input />
            </FormController>
            <FormController required label="Email">
              <Input type="email" />
            </FormController>
            <FormController required label="Phone">
              <Input type="tel" />
            </FormController>
            <FormController required label="Phone">
              <Textarea />
            </FormController>
            <Flex className="checkout--content-footer" items="center" gap="xs">
              <Button
                icon={<ArrowDown direction="left" />}
                type="button"
                variant="soft"
                onClick={handleInfo('payment')}
              >
                Back
              </Button>
              <Button icon={<Check />} iconPosition="end" type="button" variant="solid">
                Success
              </Button>
            </Flex>
          </form>
        </Flex>
      </div>
    </section>
  )
}

export default Checkout