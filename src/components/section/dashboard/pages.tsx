import { Button, Grid, Heading, Text } from '@components/core'
import { Link } from 'react-router-dom'

import type { PagesProps } from './dashboard.type'

const pagesArr = [
  {
    id: 'e-commerce',
    title: 'E_Commerce',
    description: "It's a commerce Dashboard That show you all about your chart and users visits ",
    href: '',
    image: 'https://picsum.photos/id/128/300/160',
  },
  {
    id: 'crypto',
    title: 'Crypto',
    description: '',
    href: '',
    image: 'https://picsum.photos/id/128/300/160',
  },
  {
    id: 'chat',
    title: 'Chat',
    description: '',
    href: '',
    image: 'https://picsum.photos/id/128/300/160',
  },
  {
    id: 'email',
    title: 'Email',
    description: '',
    href: '',
    image: 'https://picsum.photos/id/128/300/160',
  },
  {
    id: 'jobs',
    title: 'Jobs',
    description: '',
    href: '',
    image: 'https://picsum.photos/id/128/300/160',
  },
  {
    id: 'nft',
    title: 'NFT',
    description: '',
    href: '',
    image: 'https://picsum.photos/id/128/300/160',
  },
  {
    id: 'todo',
    title: 'TODO',
    description: '',
    href: '',
    image: 'https://picsum.photos/id/128/300/160',
  },
  {
    id: 'contact',
    title: 'Contact',
    description: '',
    href: '',
    image: 'https://picsum.photos/id/128/300/160',
  },
]

const Article = ({ title, description, href, image }: PagesProps) => {
  return (
    <article className="page--article">
      <img className="page--article-image" src={image} height="140" alt="Hello" />
      <div className="page--article-content  l_flow-sm">
        <Heading as="h2" size="xs" weight="medium">
          {title}
        </Heading>

        <Text size="sm" color="slate" contrast="low">
          {description}
        </Text>
        <Button fluid variant="soft" as={Link} to={href}>
          Go TO
        </Button>
      </div>
    </article>
  )
}

const pages = () => {
  return (
    <section className="pages-section l_flow-md">
      <Heading size="sm">Pages</Heading>

      <Grid columns="repeat(auto-fit, minmax(260px, 1fr))" gap="sm">
        {pagesArr.map((page) => (
          <Article key={page.id} {...page} />
        ))}
      </Grid>
    </section>
  )
}

export default pages
