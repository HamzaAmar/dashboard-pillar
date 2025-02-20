import { InboxModelType } from '@api/inbox/message.type'
import { useLoaderData, useParams } from 'react-router-dom'
import { InboxItem } from './item'
import { Button, Flex, Paper } from '@pillar-ui/core'
import { useState } from 'react'
import { MAIL_TYPE } from './inbox.data'

const InboxHeader = () => {
  const [current, setCurrent] = useState(MAIL_TYPE[0].title)
  return (
    <Paper p="4">
      <Flex gap="4" justify="end">
        {MAIL_TYPE.map(({ title, icon }) => {
          const isCurrent = current === title
          return (
            <Button
              onClick={() => setCurrent(title)}
              color={isCurrent ? 'p' : 'b'}
              variant={isCurrent ? 'solid' : 'text'}
              key={title}
              icon={icon}
            >
              {title}
            </Button>
          )
        })}
      </Flex>
    </Paper>
  )
}

const Inbox = () => {
  const search = useParams()
  const data = useLoaderData() as InboxModelType[]

  return (
    <section>
      <header>{search.title}</header>
      <div className="inbox--list-item">
        <InboxHeader />
        {data.map(({ id, ...rest }) => (
          <InboxItem key={id} {...rest} />
        ))}
      </div>
    </section>
  )
}

export default Inbox
