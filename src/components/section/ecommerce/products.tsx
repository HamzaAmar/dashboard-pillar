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
  Paper,
  Text,
} from '@pillar-ui/core'
import { Filter, GridHorizontal, Menu, Star } from '@pillar-ui/icons'
import { useLoaderData } from 'react-router-dom'

import type { ProductDTO } from '@api/ecommerce'
// import { MenuButton } from '@components/composition/menuButton'

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
          <Star width="16" fill="var(--W8)" stroke="var(--W8)" />
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
      <FormGroup legend="Hello World my name is Hamza" direction="col" title="Customer Rating">
        <Checkbox name="hello" title="hello">
          <CheckBoxStarContent number={1} />
        </Checkbox>
        <Checkbox name="hello" title="hello">
          <CheckBoxStarContent number={2} />
        </Checkbox>
        <Checkbox name="hello" title="hello">
          <CheckBoxStarContent number={3} />
        </Checkbox>
        <Checkbox name="hello" title="hello">
          <CheckBoxStarContent number={4} />
        </Checkbox>
        <Checkbox name="hello" title="hello">
          <CheckBoxStarContent number={5} />
        </Checkbox>
      </FormGroup>
      <FormGroup legend="Hello World my name is Hamza" direction="row" title="Color">
        <Checkbox name="hello" title="hello">
          red
        </Checkbox>
        <Checkbox name="hello" title="hello">
          white
        </Checkbox>
        <Checkbox name="hello" title="hello">
          white
        </Checkbox>
        <Checkbox name="hello" title="hello">
          white
        </Checkbox>
        <Checkbox name="hello" title="hello">
          white
        </Checkbox>
        <Checkbox name="hello" title="hello">
          white
        </Checkbox>
        <Checkbox name="hello" title="hello">
          white
        </Checkbox>
        <Checkbox name="hello" title="hello">
          white
        </Checkbox>
        <Checkbox name="hello" title="hello">
          white
        </Checkbox>
      </FormGroup>
      {/* <RadioGroup name="sex">
        <Radio name="hello" title="men">
          white
        </Radio>
        <Radio name="hello" title="kids">
          white
        </Radio>
        <Radio name="hello" title="women">
          white
        </Radio>
      </RadioGroup> */}
    </Drawer>
  )
}

// const SortProducts = () => {
//   // const [state, setState] = useState<ProductSortUnion>("lowest-price");
//   const [state, setState] = useState('lowest-price')

//   return (
//     <MenuButton
//       trigger={
//         <Button iconPosition="end" size="4" icon={<Caret />} variant="outline" color="b">
//           Sort by
//         </Button>
//       }
//     >
//       <MenuButton.Content>
//         <MenuButton.RadioGroup value={state} onValueChange={setState}>
//           <MenuButton.Radio value="lowest-price">
//             <Text size="3" weight={state === 'lowest-price' ? '5' : '4'}>
//               Lowest Price
//             </Text>
//           </MenuButton.Radio>
//           <MenuButton.Radio value="highest-price">
//             <Text size="3" weight={state === 'highest-price' ? '5' : '4'}>
//               Highest Price
//             </Text>
//           </MenuButton.Radio>
//           <MenuButton.Radio value={'top-review'}>
//             <Text size="3" weight={state === 'top-review' ? '5' : '4'}>
//               Top Customers Review
//             </Text>
//           </MenuButton.Radio>
//           <MenuButton.Radio value="recent">
//             <Text size="3" weight={state === 'recent' ? '5' : '4'}>
//               Most Recent
//             </Text>
//           </MenuButton.Radio>
//         </MenuButton.RadioGroup>
//       </MenuButton.Content>
//     </MenuButton>
//   )
// }

/*
====================================================================================================
  Products Section  Content
====================================================================================================
*/

const Products = () => {
  const data = useLoaderData() as ProductDTO[]
  const [view, setView] = useState<Current>('grid')

  const handleCurrent = (current: Current) => () => {
    setView(current)
  }

  return (
    <Paper as="section" flow="5">
      <Flex gap="5" items="center">
        <Heading size="4" color="b" low>
          Men Shoes
        </Heading>
        <Breadcrumb size="5">
          <BreadcrumbItem href="../..">Home</BreadcrumbItem>
          <BreadcrumbItem href="../">E-commerce</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Products
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex wrap gap="4" items="center" justify="between">
        <Flex items="center" gap="4">
          <ProductFilter />
          {/* <SortProducts /> */}
        </Flex>
        <Flex style={{ marginLeft: 'auto' }} items="center" gap="3">
          <Text size="4" low color="b">
            Product View
          </Text>
          <IconButton
            variant={view === 'grid' ? 'solid' : 'outline'}
            size="4"
            corner="full"
            icon={<GridHorizontal />}
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

      <Grid gap="4" cols={{ default: '1fr', md: '1fr 1fr', lg: view === 'grid' ? 'repeat(3, 1fr)' : '1fr' }}>
        {data.map((product) => (
          <Product variant={view === 'grid' ? 'vertical' : 'horizontal'} key={product.id} {...product} />
        ))}
      </Grid>
    </Paper>
  )
}

export default Products
