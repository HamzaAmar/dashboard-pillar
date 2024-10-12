import { Post } from '@components/article'
import { BlogPost } from '@components/article/blog'
import { Product, Review } from '@components/composition'
import { Breadcrumb, Flex, Grid, Heading } from '@components/core'
import { Preview } from '@components/section'
import { POSTS, ProductData, ProductWithoutDiscountData, reviewData, reviewData2 } from './card.data'

export const Component = () => {
  return (
    <section aria-labelledby="card--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="card--page-id" size="xs">
          Card Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Composite</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Card
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Preview title="Default outline Alert" description="Product With Discount">
        <Grid columns="1fr 1fr" gap="sm">
          <Product {...ProductData} />
          <Product {...ProductWithoutDiscountData} />
        </Grid>
      </Preview>
      <Preview direction="column" title="Default outline Alert" description="Product Without Discount">
        <Review {...reviewData} />
        <Review {...reviewData2} />
      </Preview>
      <Preview title="Default outline Alert" description="Product Without Discount">
        <Grid gap="sm" columns="1fr 1fr 1fr" className="sm_grid-one md_grid-two">
          {POSTS.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </Grid>
      </Preview>
      <Preview title="Default outline Alert" description="Product Without Discount">
        <Grid gap="sm" columns="1fr 1fr 1fr" className="sm_grid-one md_grid-two">
          <Post user={{ name: 'Hamza Miloud Amar Assebbane Nabil' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam commodi recusandae numquam
            laudantium eos eligendi, aperiam eveniet blanditiis possimus tempora! Voluptates alias rem illum iste
            voluptatum aut mollitia sed.
          </Post>
          <Post>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam commodi recusandae numquam
            laudantium eos eligendi,
          </Post>
          <Post>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam commodi recusandae numquam
            laudantium eos eligendi, aperiam eveniet blanditiis possimus tempora! Voluptates alias rem illum iste
            voluptatum aut mollitia sed.
          </Post>
        </Grid>
      </Preview>
    </section>
  )
}

Component.displayName = 'CardDocs'
