import { Accordion } from '@components/composition'
import { Button, Flex, Grid, Heading, Text } from '@components/core'
import { Message } from '@components/icons'
import { useId } from 'react'
import { CommonQuestion, FAQ_HEADER_DATA } from './faq.data'

import type { CardProps, QuestionProps } from './faq.type'

const Card = ({ title, icon, description }: CardProps) => {
  const id = `contact-${useId()}-info`
  return (
    <Flex aria-labelledby={id} as="article" direction="column" items="center" className="l_box l_flow-sm">
      {icon}
      <Heading id={id} size="sm" weight="medium" as="h2">
        {title}
      </Heading>
      <Text size="sm">{description}</Text>
      <Button icon={<Message />} fluid size="lg" corner="sm">
        Contact Info
      </Button>
    </Flex>
  )
}

const AccordionFaq = ({ id, title, description }: QuestionProps) => {
  return (
    <Accordion>
      <Accordion.Item className="faq--accordion-item" value={id}>
        <Accordion.Trigger className="faq--accordion-trigger">{title}</Accordion.Trigger>
        <Accordion.Content className="faq--accordion-content">{description}</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}

const faq = () => {
  return (
    <section aria-labelledby="faq-page-id" className="l_flow-lg">
      <Flex items="end" as="header" className="faq--header l_box">
        <Heading id="faq-page-id" as="h1">
          Faq Page
        </Heading>
      </Flex>
      <div>
        <Grid gap="lg" className="md_grid-two sm_grid-one" columns="repeat(3, minmax(0,1fr))">
          {FAQ_HEADER_DATA.map(({ id, ...rest }) => (
            <Card key={id} {...rest} />
          ))}
        </Grid>
      </div>
      <section aria-labelledby="frequently-question-id" className="l_flow-md">
        <Heading id="frequently-question-id" as="h2" size="xs">
          Frequently Asked Question
        </Heading>
        <div className="l_flow-sm">
          {CommonQuestion.map((question) => (
            <AccordionFaq key={question.id} {...question} />
          ))}
        </div>
      </section>
    </section>
  )
}
export default faq
