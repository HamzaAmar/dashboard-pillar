import {
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Paper,
} from '@pillar-ui/core'
import { Message } from '@pillar-ui/icons'
import { useId } from 'react'
import { CommonQuestion, FAQ_HEADER_DATA } from './faq.data'

import type { CardProps, QuestionProps } from './faq.type'

const Card = ({ title, icon, description }: CardProps) => {
  const id = `contact-${useId()}-info`
  return (
    <Flex aria-labelledby={id} as="article" direction="col" items="center" gap="3" className="l_box">
      {icon}
      <Heading id={id} size="4" weight="5" as="h2">
        {title}
      </Heading>
      <Text size="4">{description}</Text>
      <Button icon={<Message />} fluid size="6" corner="3">
        Contact Info
      </Button>
    </Flex>
  )
}

const AccordionFaq = ({ id, title, description }: QuestionProps) => {
  return (
    <Accordion>
      <AccordionItem className="faq--accordion-item" value={id}>
        <AccordionButton className="faq--accordion-trigger">{title}</AccordionButton>
        <AccordionPanel className="faq--accordion-content">{description}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

const faq = () => {
  return (
    <Paper as="section" flow="6" aria-labelledby="faq-page-id">
      <Flex items="end" as="header" className="faq--header l_box">
        <Heading id="faq-page-id" as="h1">
          Faq Page
        </Heading>
      </Flex>
      <div>
        <Grid gap="6" cols={{ default: '1fr', md: '1fr 1fr', lg: 'repeat(3, minmax(0,1fr))' }}>
          {FAQ_HEADER_DATA.map(({ id, ...rest }) => (
            <Card key={id} {...rest} />
          ))}
        </Grid>
      </div>
      <Paper as="section" flow="6" aria-labelledby="frequently-question-id">
        <Heading id="frequently-question-id" as="h2" size="3">
          Frequently Asked Question
        </Heading>
        <Paper flow="3">
          {CommonQuestion.map((question) => (
            <AccordionFaq key={question.id} {...question} />
          ))}
        </Paper>
      </Paper>
    </Paper>
  )
}
export default faq
