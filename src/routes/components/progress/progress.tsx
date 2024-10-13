import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Grid,
  Heading,
  ProgressBar,
  ProgressBarStack,
  ProgressBarStackItem,
  ProgressCircle,
} from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './progress.docs'

const progress = () => {
  return (
    <section aria-labelledby="progress--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="progress--page-id" size="3">
          Progress Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Progress
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="Progress Bar Size"
          description="Default progress bar size is sm size possibles values(xs,sm,md,lg,xl)"
          direction="col"
          code={docs.progressBarSize}
        >
          <Flex direction="col" gap="5">
            <ProgressBar size="3" value={90} label="hello" />
            <ProgressBar size="4" label="Hello" value={50} />
            <ProgressBar size="5" label="Hello" value={50} />
            <ProgressBar size="6" label="Hello" value={50} />
            <ProgressBar size="7" label="Hello" value={50} />
          </Flex>
        </Preview>
        <Preview
          title="Progress Bar Color"
          description="Progress bar color default is primary possible values(danger, success, mint, yellow, purple, indigo, warning, slate)"
          direction="col"
          code={docs.progressBarColor}
        >
          <Flex direction="col" gap="5">
            <ProgressBar color="d" value={90} label="hello" />
            <ProgressBar color="su" label="Hello" value={50} />
            <ProgressBar color="se" label="Hello" value={50} />
            <ProgressBar color="i" label="Hello" value={50} />
            <ProgressBar color="w" label="Hello" value={50} />
            <ProgressBar color="b" label="Hello" value={50} />
          </Flex>
        </Preview>

        <Preview
          title="Progress Value"
          description="Progress value can be a value between 0 and 100"
          direction="col"
          code={docs.progressBarValue}
        >
          <Flex direction="col" gap="5">
            <ProgressBar value={10} label="hello" />
            <ProgressBar label="Hello" value={30} />
            <ProgressBar label="Hello" value={50} />
            <ProgressBar label="Hello" value={70} />
            <ProgressBar label="Hello" value={90} />
            <ProgressBar label="Hello" value={100} />
          </Flex>
        </Preview>

        <Preview
          title="Show Value"
          description="Default Flex with small gap gap possibles values(xs,sm,md,lg,xl)"
          direction="col"
          code={docs.ProgressBarShowValue}
        >
          <Flex direction="col" gap="5">
            <ProgressBar showValue value={10} label="hello" />
            <ProgressBar showValue label="Hello" value={30} />
            <ProgressBar showValue label="Hello" value={50} />
            <ProgressBar showValue label="Hello" value={70} />
            <ProgressBar showValue label="Hello" value={90} />
            <ProgressBar showValue label="Hello" value={100} />
          </Flex>
        </Preview>
        <Preview
          title="Progress Bar Stack Size"
          description="Progress Bar stack Default"
          direction="col"
          code={docs.ProgressBarStack}
        >
          <Flex direction="col" gap="5">
            <ProgressBarStack size="3" label="Nice to meet you">
              <ProgressBarStackItem label="hello" color="d" value={30}>
                <button>CSS 30</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="su" value={15}>
                <button>HTML 15%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="se" value={25}>
                <button>React 25%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="i" value={15}>
                <button>Node 15%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="w" value={15}>
                <button>SCSS 15%</button>
              </ProgressBarStackItem>
            </ProgressBarStack>
            <ProgressBarStack size="4" label="Nice to meet you">
              <ProgressBarStackItem label="hello" color="d" value={30}>
                <button>CSS 30</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="su" value={15}>
                <button>HTML 15%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="se" value={25}>
                <button>React 25%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="i" value={15}>
                <button>Node 15%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="w" value={15}>
                <button>SCSS 15%</button>
              </ProgressBarStackItem>
            </ProgressBarStack>

            <ProgressBarStack size="5" label="Nice to meet you">
              <ProgressBarStackItem label="hello" color="d" value={30}>
                <button>CSS 30</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="su" value={15}>
                <button>HTML 15%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="se" value={25}>
                <button>React 25%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="i" value={15}>
                <button>Node 15%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="w" value={15}>
                <button>SCSS 15%</button>
              </ProgressBarStackItem>
            </ProgressBarStack>
            <ProgressBarStack size="6" label="Nice to meet you">
              <ProgressBarStackItem label="hello" color="d" value={30}>
                <button>CSS 30</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="su" value={15}>
                <button>HTML 15%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="se" value={25}>
                <button>React 25%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="i" value={15}>
                <button>Node 15%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="w" value={15}>
                <button>SCSS 15%</button>
              </ProgressBarStackItem>
            </ProgressBarStack>
            <ProgressBarStack size="7" label="Nice to meet you">
              <ProgressBarStackItem label="hello" color="d" value={30}>
                <button>CSS 30</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="su" value={15}>
                <button>HTML 15%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="se" value={25}>
                <button>React 25%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="i" value={15}>
                <button>Node 15%</button>
              </ProgressBarStackItem>
              <ProgressBarStackItem label="hello" color="w" value={15}>
                <button>SCSS 15%</button>
              </ProgressBarStackItem>
            </ProgressBarStack>
          </Flex>
        </Preview>
      </Grid>

      <Heading size="4">Progress Circle</Heading>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="Progress Circle Size"
          description="Default progress bar size is sm size possibles values(xs,sm,md,lg,xl)"
          direction="col"
          code={docs.progressCircleSize}
        >
          <Flex direction="col" gap="5">
            <ProgressCircle size="3" value={90} label="hello" />
            <ProgressCircle size="4" label="Hello" value={50} />
            <ProgressCircle size="5" label="Hello" value={50} />
            <ProgressCircle size="6" label="Hello" value={50} />
            <ProgressCircle size="7" label="Hello" value={50} />
          </Flex>
        </Preview>
        <Preview
          title="Progress CiProgressCircle Color"
          description="Progress bar color default is primary possible values(danger, success, mint, yellow, purple, indigo, warning, slate)"
          direction="col"
          code={docs.progressCircleColor}
        >
          <Flex direction="col" gap="5">
            <ProgressCircle color="d" value={90} label="hello" />
            <ProgressCircle color="su" label="Hello" value={50} />
            <ProgressCircle color="se" label="Hello" value={50} />
            <ProgressCircle color="i" label="Hello" value={50} />
            <ProgressCircle color="w" label="Hello" value={50} />
            <ProgressCircle color="b" label="Hello" value={50} />
          </Flex>
        </Preview>

        <Preview
          title="Progress Value"
          description="Progress value can be a value between 0 and 100"
          direction="col"
          code={docs.progressCircleValue}
        >
          <Flex direction="col" gap="5">
            <ProgressCircle value={10} label="hello" />
            <ProgressCircle label="Hello" value={30} />
            <ProgressCircle label="Hello" value={50} />
            <ProgressCircle label="Hello" value={70} />
            <ProgressCircle label="Hello" value={90} />
            <ProgressCircle label="Hello" value={100} />
          </Flex>
        </Preview>

        <Preview
          title="Show Value"
          description="Default Flex with small gap gap possibles values(xs,sm,md,lg,xl)"
          direction="col"
          code={docs.progressCircleShowValue}
        >
          <Flex direction="col" gap="5">
            <ProgressCircle showValue value={10} label="hello" />
            <ProgressCircle showValue label="Hello" value={30} />
            <ProgressCircle showValue label="Hello" value={50} />
            <ProgressCircle showValue label="Hello" value={70} />
            <ProgressCircle showValue label="Hello" value={90} />
            <ProgressCircle showValue label="Hello" value={100} />
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

export default progress
