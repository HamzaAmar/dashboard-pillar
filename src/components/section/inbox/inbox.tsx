import { InboxModelType } from '@api/inbox/message.type'
import { useLoaderData, useParams } from 'react-router-dom'
import { InboxItem } from './item'

const Inbox = () => {
  const search = useParams()
  const data = useLoaderData() as InboxModelType[]

  return (
    <section>
      <header>{search.title}</header>
      <div className="inbox--list-item">
        {data.map(({ id, ...rest }) => (
          <InboxItem key={id} {...rest} />
        ))}
      </div>
    </section>
  )
}

export default Inbox
