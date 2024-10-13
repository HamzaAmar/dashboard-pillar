import { Alert, Breadcrumb, BreadcrumbItem, Flex, Heading, Text } from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './typography.docs'

const heading = () => {
  return (
    <section aria-labelledby="typography--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="typography--page-id" size="3">
          Typography Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Typography
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Alert
        message="All the same Props you can use with Text component Can also use it with Heading components Except of as that only have from (h1  to h6) in Heading Component"
        title="Text And Heading"
      />
      <Preview title="Text Size" description="Choose your best size default to md" code={docs.textSize}>
        <Flex direction="col">
          <Text size="1">Test Your text is better than nothing here you can find all size that we have (3xs)</Text>
          <Text size="1">Test Your text is better than nothing here you can find all size that we have (2xs)</Text>
          <Text size="3">Test Your text is better than nothing here you can find all size that we have (xs)</Text>
          <Text size="4">Test Your text is better than nothing here you can find all size that we have (sm)</Text>
          <Text>Test Your text is better than nothing here you can find all size that we have (md)</Text>
          <Text size="6">Test Your text is better than nothing here you can find all size that we have (lg)</Text>
          <Text size="7">Test Your text is better than nothing here you can find all size that we have (xl)</Text>
          <Text size="8">Test Your text is better than nothing here you can find all size that we have (2xl)</Text>
          <Text size="9">Test Your text is better than nothing here you can find all size that we have (3xl)</Text>
        </Flex>
      </Preview>

      <Preview
        title="text Line Height"
        description="leading props can use it to change default global line-height=1.5 possible value(sm, md , xl) "
        code={docs.textLineHeight}
      >
        <Flex wrap gap="5" items="center">
          <Text size="6" leading="1">
            Test Your text is better than nothing here you can find all size that we have (lg)
          </Text>
          <Text size="7" leading="2">
            Test Your text is better than nothing here you can find all size that we have Test Your text is better than
            nothing here you can find all size that we have (Large Leading)
          </Text>
          <Text size="8" leading="3">
            Test Your text is better than nothing here you can find all size that we have (2xl) (Medium Leading)
          </Text>
          <Text size="9" leading="4">
            Test Your text is better than nothing here you can find all size that we have (Small Leading)
          </Text>
        </Flex>
      </Preview>

      <Preview
        title="Text Transform"
        description="transform props can use it to change default global text-transform=initial possible value(capitalize, uppercase , lowercase) "
        code={docs.textTransform}
      >
        <Flex wrap gap="5" items="center">
          <Text size="6" transform="uppercase">
            Test Your text is better than nothing here you can find all size that we have (lg)
          </Text>
          <Text size="7" transform="capitalize">
            Test Your text is better than nothing here you can find all size that we have Test Your text is better than
            nothing here you can find all size that we have (Large Leading)
          </Text>
          <Text size="8" transform="lowercase">
            Test Your text is better than nothing here you can find all size that we have (2xl) (Medium Leading)
          </Text>
        </Flex>
      </Preview>

      <Preview
        title="Text Weight"
        description="transform props can use it to change default global text-transform=(400 equal to normal)  possible value(thin, extra-light, light , normal, medium , bold, extra-bold, black) "
        code={docs.textWeight}
      >
        <Flex wrap gap="5" items="center">
          <Text weight="2">Test Your text is better than nothing here you can find all size that we have (thin)</Text>
          <Text weight="1">
            Test Your text is better than nothing here you can find all size that we have (extra-light)
          </Text>
          <Text weight="3">Test Your text is better than nothing here you can find all size that we have (light)</Text>
          <Text>Test Your text is better than nothing here you can find all size that we have (normal)</Text>
          <Text weight="5">Test Your text is better than nothing here you can find all size that we have (normal)</Text>
          <Text weight="7">Test Your text is better than nothing here you can find all size that we have (bold)</Text>
          <Text weight="8">
            Test Your text is better than nothing here you can find all size that we have (extra-bold)
          </Text>
          <Text weight="9">Test Your text is better than nothing here you can find all size that we have (black)</Text>
        </Flex>
      </Preview>

      <Preview
        title="text decoration"
        description="decoration prop to add text decoration to text possible value(line-through , overline, underline)"
        code={docs.textDecoration}
      >
        <Flex wrap gap="5" items="center">
          <Text decoration="through">
            Test Your text is better than nothing here you can find all size that we have (line-through)
          </Text>
          <Text decoration="over">
            Test Your text is better than nothing here you can find all size that we have Test Your text is better than
            nothing here you can find all size that we have (overline)
          </Text>
          <Text decoration="under">
            Test Your text is better than nothing here you can find all size that we have (underline)
          </Text>
        </Flex>
      </Preview>

      <Preview
        title="text truncate"
        description="truncate have 2 values (multiline or singleline) but I prefer to use multiline in all cases with another value numberLine(choose your number line you want)"
        code={docs.textTruncate}
      >
        <Flex wrap gap="5" items="center">
          <Text truncate="1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat voluptatum dolor voluptas itaque neque
            minima tenetur ipsam adipisci nam quo, vitae quia laboriosam deleniti libero tempore numquam, a odio. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Similique iste ad nemo, modi deserunt natus enim quidem
            rem sed veritatis dolorem possimus ex quisquam quia pariatur quas! Labore, iusto harum?
          </Text>
          <Text truncate="2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat voluptatum dolor voluptas itaque neque
            minima tenetur ipsam adipisci nam quo, vitae quia laboriosam deleniti libero tempore numquam, a odio. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Similique iste ad nemo, modi deserunt natus enim quidem
            rem sed veritatis dolorem possimus ex quisquam quia pariatur quas! Labore, iusto harum? Test Your text is
            better than nothing here you can find all size that we have
          </Text>
          <Text truncate="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat voluptatum dolor voluptas itaque neque
            minima tenetur ipsam adipisci nam quo, vitae quia laboriosam deleniti libero tempore numquam, a odio. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Similique iste ad nemo, modi deserunt natus enim quidem
            rem sed veritatis dolorem possimus ex quisquam quia pariatur quas! Labore, iusto harum?
          </Text>
          <Text truncate="4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat voluptatum dolor voluptas itaque neque
            minima tenetur ipsam adipisci nam quo, vitae quia laboriosam deleniti libero tempore numquam, a odio. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Similique iste ad nemo, modi deserunt natus enim quidem
            rem sed veritatis dolorem possimus ex quisquam quia pariatur quas! Labore, iusto harum? ste ad nemo, modi
            deserunt natus enim quidem rem sed veritatis dolorem possimus ex quisquam quia pariatur quas! Labore, iusto
            harum?
          </Text>
        </Flex>
      </Preview>

      <Preview
        title="Text color"
        description="Default to slate high Contrast possible color(red, indigo, green , purple, orange) with another props to choose if you have high contrast or low"
        code={docs.textColor}
      >
        <Flex wrap gap="5" items="center">
          <Text color="i">Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
          <Text color="i" low>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>

          <Text color="b">Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
          <Text color="b" low>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>
          <Text color="se">Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>

          <Text color="se" low>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>
          <Text color="w">Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
          <Text color="w" low>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>
          <Text color="d">Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
          <Text color="d" low>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>
        </Flex>
      </Preview>
    </section>
  )
}

export default heading
