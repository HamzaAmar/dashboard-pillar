import { useState } from 'react'
import { Drawer, Product } from '@components/composition'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  Flex,
  FormGroup,
  Grid,
  Heading,
  IconButton,
  Radio,
  RadioGroup,
  Text,
} from '@pillar-ui/core'
import { Caret, Filter, LayoutGrid, Menu, Star } from '@components/icons'
import { useLoaderData } from 'react-router-dom'

import type { ProductsModel } from '@api/ecommerce'
import { MenuButton } from '@components/composition/menuButton'

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
      <Text size="3" as="div">
        <Flex items="center" gap="1">
          <Text size="4" color="p" low weight="7">
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
        <Button size="4" icon={<Filter />} variant="outline" color="b">
          Filters
        </Button>
      }
      title="Products Filter"
      position="right"
      size="4"
    >
      <FormGroup direction="col" title="Customer Rating">
        <Checkbox name="hello" label={<CheckBoxStarContent number={1} />} title="hello" />
        <Checkbox name="hello" label={<CheckBoxStarContent number={2} />} title="hello" />
        <Checkbox name="hello" label={<CheckBoxStarContent number={3} />} title="hello" />
        <Checkbox name="hello" label={<CheckBoxStarContent number={4} />} title="hello" />
        <Checkbox name="hello" label={<CheckBoxStarContent number={5} />} title="hello" />
      </FormGroup>
      <FormGroup direction="row" title="Color">
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
      <RadioGroup name="sex" label="Color">
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
        <Button iconPosition="end" size="4" icon={<Caret />} variant="outline" color="b">
          Sort by
        </Button>
      }
    >
      <MenuButton.Content>
        <MenuButton.RadioGroup value={state} onValueChange={setState}>
          <MenuButton.Radio value="lowest-price">
            <Text size="3" weight={state === 'lowest-price' ? '5' : '4'}>
              Lowest Price
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="highest-price">
            <Text size="3" weight={state === 'highest-price' ? '5' : '4'}>
              Highest Price
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value={'top-review'}>
            <Text size="3" weight={state === 'top-review' ? '5' : '4'}>
              Top Customers Review
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="recent">
            <Text size="3" weight={state === 'recent' ? '5' : '4'}>
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
      <Flex gap="5" items="center">
        <Heading size="4" color="b" low>
          Men Shoes
        </Heading>
        <Breadcrumb size="5">
          <BreadcrumbItem link="../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../">E-commerce</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Products
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex wrap gap="4" items="center" justify="between">
        <Flex items="center" gap="4">
          <ProductFilter />
          <SortProducts />
        </Flex>
        <Flex style={{ marginLeft: 'auto' }} items="center" gap="3">
          <Text size="4" low color="b">
            Product View
          </Text>
          <IconButton
            variant={view === 'grid' ? 'solid' : 'outline'}
            size="4"
            corner="full"
            icon={<LayoutGrid />}
            title="hello"
            color="p"
            onClick={handleCurrent('grid')}
          />
          <IconButton
            variant={view === 'list' ? 'solid' : 'outline'}
            color="p"
            size="4"
            corner="full"
            icon={<Menu />}
            title="primary"
            onClick={handleCurrent('list')}
          />
        </Flex>
      </Flex>

      <Grid gap="4" md="1fr 1fr" sm="1fr" grid={view === 'grid' ? 'repeat(3, 1fr)' : '1fr'}>
        {data.map((product) => (
          <Product variant={view === 'grid' ? 'vertical' : 'horizontal'} key={product.id} {...product} />
        ))}
      </Grid>
    </section>
  )
}

export default Products
