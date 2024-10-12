import { Alert, Breadcrumb, Flex, Heading, Text } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './typography.docs'

const heading = () => {
  return (
    <section aria-labelledby="typography--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="typography--page-id" size="xs">
          Typography Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Typography
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Alert
        type="info"
        message="All the same Props you can use with Text component Can also use it with Heading components Except of as that only have from (h1  to h6) in Heading Component"
        title="Text And Heading"
        showIcon
      />
      <Preview title="Text Size" description="Choose your best size default to md" code={docs.textSize}>
        <Flex direction="column">
          <Text size="3xs">Test Your text is better than nothing here you can find all size that we have (3xs)</Text>
          <Text size="2xs">Test Your text is better than nothing here you can find all size that we have (2xs)</Text>
          <Text size="xs">Test Your text is better than nothing here you can find all size that we have (xs)</Text>
          <Text size="sm">Test Your text is better than nothing here you can find all size that we have (sm)</Text>
          <Text>Test Your text is better than nothing here you can find all size that we have (md)</Text>
          <Text size="lg">Test Your text is better than nothing here you can find all size that we have (lg)</Text>
          <Text size="xl">Test Your text is better than nothing here you can find all size that we have (xl)</Text>
          <Text size="2xl">Test Your text is better than nothing here you can find all size that we have (2xl)</Text>
          <Text size="3xl">Test Your text is better than nothing here you can find all size that we have (3xl)</Text>
        </Flex>
      </Preview>

      <Preview
        title="text Line Height"
        description="leading props can use it to change default global line-height=1.5 possible value(sm, md , xl) "
        code={docs.textLineHeight}
      >
        <Flex wrap gap="md" items="center">
          <Text size="lg" leading="none">
            Test Your text is better than nothing here you can find all size that we have (lg)
          </Text>
          <Text size="xl" leading="lg">
            Test Your text is better than nothing here you can find all size that we have Test Your text is better than
            nothing here you can find all size that we have (Large Leading)
          </Text>
          <Text size="2xl" leading="md">
            Test Your text is better than nothing here you can find all size that we have (2xl) (Medium Leading)
          </Text>
          <Text size="3xl" leading="sm">
            Test Your text is better than nothing here you can find all size that we have (Small Leading)
          </Text>
        </Flex>
      </Preview>

      <Preview
        title="Text Transform"
        description="transform props can use it to change default global text-transform=initial possible value(capitalize, uppercase , lowercase) "
        code={docs.textTransform}
      >
        <Flex wrap gap="md" items="center">
          <Text size="lg" transform="uppercase">
            Test Your text is better than nothing here you can find all size that we have (lg)
          </Text>
          <Text size="xl" transform="capitalize">
            Test Your text is better than nothing here you can find all size that we have Test Your text is better than
            nothing here you can find all size that we have (Large Leading)
          </Text>
          <Text size="2xl" transform="lowercase">
            Test Your text is better than nothing here you can find all size that we have (2xl) (Medium Leading)
          </Text>
        </Flex>
      </Preview>

      <Preview
        title="Text Weight"
        description="transform props can use it to change default global text-transform=(400 equal to normal)  possible value(thin, extra-light, light , normal, medium , bold, extra-bold, black) "
        code={docs.textWeight}
      >
        <Flex wrap gap="md" items="center">
          <Text weight="thin">
            Test Your text is better than nothing here you can find all size that we have (thin)
          </Text>
          <Text weight="extra-light">
            Test Your text is better than nothing here you can find all size that we have (extra-light)
          </Text>
          <Text weight="light">
            Test Your text is better than nothing here you can find all size that we have (light)
          </Text>
          <Text>Test Your text is better than nothing here you can find all size that we have (normal)</Text>
          <Text weight="medium">
            Test Your text is better than nothing here you can find all size that we have (normal)
          </Text>
          <Text weight="bold">
            Test Your text is better than nothing here you can find all size that we have (bold)
          </Text>
          <Text weight="extra-bold">
            Test Your text is better than nothing here you can find all size that we have (extra-bold)
          </Text>
          <Text weight="black">
            Test Your text is better than nothing here you can find all size that we have (black)
          </Text>
        </Flex>
      </Preview>

      <Preview
        title="text decoration"
        description="decoration prop to add text decoration to text possible value(line-through , overline, underline)"
        code={docs.textDecoration}
      >
        <Flex wrap gap="md" items="center">
          <Text decoration="line-through">
            Test Your text is better than nothing here you can find all size that we have (line-through)
          </Text>
          <Text decoration="overline">
            Test Your text is better than nothing here you can find all size that we have Test Your text is better than
            nothing here you can find all size that we have (overline)
          </Text>
          <Text decoration="underline">
            Test Your text is better than nothing here you can find all size that we have (underline)
          </Text>
        </Flex>
      </Preview>

      <Preview
        title="text truncate"
        description="truncate have 2 values (multiline or singleline) but I prefer to use multiline in all cases with another value numberLine(choose your number line you want)"
        code={docs.textTruncate}
      >
        <Flex wrap gap="md" items="center">
          <Text truncate="multiline" numberLine={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat voluptatum dolor voluptas itaque neque
            minima tenetur ipsam adipisci nam quo, vitae quia laboriosam deleniti libero tempore numquam, a odio. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Similique iste ad nemo, modi deserunt natus enim quidem
            rem sed veritatis dolorem possimus ex quisquam quia pariatur quas! Labore, iusto harum?
          </Text>
          <Text truncate="multiline" numberLine={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat voluptatum dolor voluptas itaque neque
            minima tenetur ipsam adipisci nam quo, vitae quia laboriosam deleniti libero tempore numquam, a odio. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Similique iste ad nemo, modi deserunt natus enim quidem
            rem sed veritatis dolorem possimus ex quisquam quia pariatur quas! Labore, iusto harum? Test Your text is
            better than nothing here you can find all size that we have
          </Text>
          <Text truncate="multiline" numberLine={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat voluptatum dolor voluptas itaque neque
            minima tenetur ipsam adipisci nam quo, vitae quia laboriosam deleniti libero tempore numquam, a odio. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Similique iste ad nemo, modi deserunt natus enim quidem
            rem sed veritatis dolorem possimus ex quisquam quia pariatur quas! Labore, iusto harum?
          </Text>
          <Text truncate="multiline" numberLine={4}>
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
        <Flex wrap gap="md" items="center">
          <Text color="indigo">Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
          <Text color="indigo" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>

          <Text color="slate">Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
          <Text color="slate" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>
          <Text color="purple">Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>

          <Text color="purple" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>
          <Text color="orange">Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
          <Text color="orange" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>
          <Text color="red">Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
          <Text color="red" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Text>
        </Flex>
      </Preview>
    </section>
  )
}

export default heading
