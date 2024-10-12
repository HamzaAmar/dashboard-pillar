import { useState } from 'react'
import { Drawer, Product } from '@components/composition'
import {
  Breadcrumb,
  Button,
  Checkbox,
  Flex,
  FormGroup,
  Grid,
  Heading,
  IconButton,
  MenuButton,
  Radio,
  RadioGroup,
  Text,
} from '@components/core'
import { Caret, Filter, LayoutGrid, Menu, Star } from '@components/icons'
import { useLoaderData } from 'react-router-dom'

import type { ProductsModel } from '@api/ecommerce'

/*
====================================================================================================
  Menu Button Sort Content
====================================================================================================
*/

/*
====================================================================================================
  Filter Drawer Content
====================================================================================================
*/

type Current = 'grid' | 'list'

function CheckBoxStarContent({ number }: any) {
  return (
    <div>
      <Text size="xs" as="div">
        <Flex items="center" gap="2xs">
          <Text size="sm" color="primary" contrast="low" weight="bold">
            {number}
          </Text>
          <Star width="16" fill="var(--orange-8)" stroke="var(--orange-8)" />
          And Above
        </Flex>
      </Text>
    </div>
  )
}

const ProductFilter = () => {
  return (
    <Drawer
      trigger={
        <Button size="sm" icon={<Filter />} variant="outline" color="slate">
          Filters
        </Button>
      }
      title="Products Filter"
      position="right"
      size="sm"
    >
      <FormGroup showLabel direction="column" title="Customer Rating">
        <Checkbox name="hello" label={<CheckBoxStarContent number={1} />} title="hello" />
        <Checkbox name="hello" label={<CheckBoxStarContent number={2} />} title="hello" />
        <Checkbox name="hello" label={<CheckBoxStarContent number={3} />} title="hello" />
        <Checkbox name="hello" label={<CheckBoxStarContent number={4} />} title="hello" />
        <Checkbox name="hello" label={<CheckBoxStarContent number={5} />} title="hello" />
      </FormGroup>
      <FormGroup showLabel direction="row" title="Color">
        <Checkbox name="hello" label="red" title="hello" />
        <Checkbox name="hello" label="white" title="hello" />
        <Checkbox name="hello" label="orange" title="hello" />
        <Checkbox name="hello" label="black" title="hello" />
        <Checkbox name="hello" label="beige" title="hello" />
        <Checkbox name="hello" label="gray" title="hello" />
        <Checkbox name="hello" label="black" title="hello" />
        <Checkbox name="hello" label="beige" title="hello" />
        <Checkbox name="hello" label="gray" title="hello" />
      </FormGroup>
      <RadioGroup showLabel name="sex" label="Color">
        <Radio name="hello" label="red" title="men" />
        <Radio name="hello" label="white" title="kids" />
        <Radio name="hello" label="orange" title="women" />
      </RadioGroup>
    </Drawer>
  )
}

const SortProducts = () => {
  // const [state, setState] = useState<ProductSortUnion>("lowest-price");
  const [state, setState] = useState('lowest-price')

  return (
    <MenuButton
      trigger={
        <Button iconPosition="end" size="sm" icon={<Caret />} variant="outline" color="slate">
          Sort by
        </Button>
      }
    >
      <MenuButton.Content>
        <MenuButton.RadioGroup value={state} onValueChange={setState}>
          <MenuButton.Radio value="lowest-price">
            <Text size="xs" weight={state === 'lowest-price' ? 'medium' : 'normal'}>
              Lowest Price
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="highest-price">
            <Text size="xs" weight={state === 'highest-price' ? 'medium' : 'normal'}>
              Highest Price
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value={'top-review'}>
            <Text size="xs" weight={state === 'top-review' ? 'medium' : 'normal'}>
              Top Customers Review
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="recent">
            <Text size="xs" weight={state === 'recent' ? 'medium' : 'normal'}>
              Most Recent
            </Text>
          </MenuButton.Radio>
        </MenuButton.RadioGroup>
      </MenuButton.Content>
    </MenuButton>
  )
}

/*
====================================================================================================
  Products Section  Content
====================================================================================================
*/

const Products = () => {
  const data = useLoaderData() as ProductsModel[]
  const [view, setView] = useState<Current>('grid')

  const handleCurrent = (current: Current) => () => {
    setView(current)
  }

  return (
    <section className="l_flow-md">
      <Flex gap="md" items="center">
        <Heading size="sm" color="slate" contrast="low">
          Men Shoes
        </Heading>
        <Breadcrumb size="md">
          <Breadcrumb.Item link="../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../">E-commerce</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Products
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Flex wrap gap="sm" items="center" justify="between">
        <Flex items="center" gap="sm">
          <ProductFilter />
          <SortProducts />
        </Flex>
        <Flex style={{ marginLeft: 'auto' }} items="center" gap="xs">
          <Text size="sm" contrast="low" color="slate">
            Product View
          </Text>
          <IconButton
            variant={view === 'grid' ? 'solid' : 'outline'}
            size="sm"
            corner="full"
            icon={<LayoutGrid />}
            title="hello"
            color="primary"
            onClick={handleCurrent('grid')}
          />
          <IconButton
            variant={view === 'list' ? 'solid' : 'outline'}
            color="primary"
            size="sm"
            corner="full"
            icon={<Menu />}
            title="primary"
            onClick={handleCurrent('list')}
          />
        </Flex>
      </Flex>

      <Grid gap="sm" className="md_grid-two sm_grid-one" columns={view === 'grid' ? 'repeat(3, 1fr)' : '1fr'}>
        {data.map((product) => (
          <Product variant={view === 'grid' ? 'vertical' : 'horizontal'} key={product.id} {...product} />
        ))}
      </Grid>
    </section>
  )
}

export default Products
