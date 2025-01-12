import { Button, Grid, Heading, Paper, Text } from '@pillar-ui/core'
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
      <Paper flow="3" className="page--article-content">
        <Heading as="h2" size="3" weight="5">
          {title}
        </Heading>

        <Text size="4" color="b" low>
          {description}
        </Text>
        <Button fluid variant="soft" as={Link} to={href}>
          Go TO
        </Button>
      </Paper>
    </article>
  )
}

const pages = () => {
  return (
    <Paper as="section" flow="7" className="pages-section">
      <Heading size="4">Pages</Heading>

      <Grid cols={{ default: 'repeat(auto-fit, minmax(260px, 1fr))' }} gap="4">
        {pagesArr.map((page) => (
          <Article key={page.id} {...page} />
        ))}
      </Grid>
    </Paper>
  )
}

export default pages
