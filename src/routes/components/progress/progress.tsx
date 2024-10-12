import { Breadcrumb, Flex, Grid, Heading, ProgressBar, ProgressBarStack, ProgressCircle } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './progress.docs'

const progress = () => {
  return (
    <section aria-labelledby="progress--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="progress--page-id" size="xs">
          Progress Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Progress
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview
          title="Progress Bar Size"
          description="Default progress bar size is sm size possibles values(xs,sm,md,lg,xl)"
          direction="column"
          code={docs.progressBarSize}
        >
          <Flex direction="column" gap="md">
            <ProgressBar size="xs" value={90} label="hello" />
            <ProgressBar size="sm" label="Hello" value={50} />
            <ProgressBar size="md" label="Hello" value={50} />
            <ProgressBar size="lg" label="Hello" value={50} />
            <ProgressBar size="xl" label="Hello" value={50} />
          </Flex>
        </Preview>
        <Preview
          title="Progress Bar Color"
          description="Progress bar color default is primary possible values(danger, success, mint, yellow, purple, indigo, warning, slate)"
          direction="column"
          code={docs.progressBarColor}
        >
          <Flex direction="column" gap="md">
            <ProgressBar color="danger" value={90} label="hello" />
            <ProgressBar color="success" label="Hello" value={50} />
            <ProgressBar color="mint" label="Hello" value={50} />
            <ProgressBar color="yellow" label="Hello" value={50} />
            <ProgressBar color="purple" label="Hello" value={50} />
            <ProgressBar color="indigo" label="Hello" value={50} />
            <ProgressBar color="warning" label="Hello" value={50} />
            <ProgressBar color="slate" label="Hello" value={50} />
          </Flex>
        </Preview>

        <Preview
          title="Progress Value"
          description="Progress value can be a value between 0 and 100"
          direction="column"
          code={docs.progressBarValue}
        >
          <Flex direction="column" gap="md">
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
          direction="column"
          code={docs.ProgressBarShowValue}
        >
          <Flex direction="column" gap="md">
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
          direction="column"
          code={docs.ProgressBarStack}
        >
          <Flex direction="column" gap="md">
            <ProgressBarStack size="xs" label="Nice to meet you">
              <ProgressBarStack.Item label="hello" color="danger" value={30}>
                <button>CSS 30</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="success" value={15}>
                <button>HTML 15%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="purple" value={25}>
                <button>React 25%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="indigo" value={15}>
                <button>Node 15%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="warning" value={15}>
                <button>SCSS 15%</button>
              </ProgressBarStack.Item>
            </ProgressBarStack>
            <ProgressBarStack size="sm" label="Nice to meet you">
              <ProgressBarStack.Item label="hello" color="danger" value={30}>
                <button>CSS 30</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="success" value={15}>
                <button>HTML 15%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="purple" value={25}>
                <button>React 25%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="indigo" value={15}>
                <button>Node 15%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="warning" value={15}>
                <button>SCSS 15%</button>
              </ProgressBarStack.Item>
            </ProgressBarStack>

            <ProgressBarStack size="md" label="Nice to meet you">
              <ProgressBarStack.Item label="hello" color="danger" value={30}>
                <button>CSS 30</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="success" value={15}>
                <button>HTML 15%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="purple" value={25}>
                <button>React 25%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="indigo" value={15}>
                <button>Node 15%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="warning" value={15}>
                <button>SCSS 15%</button>
              </ProgressBarStack.Item>
            </ProgressBarStack>
            <ProgressBarStack size="lg" label="Nice to meet you">
              <ProgressBarStack.Item label="hello" color="danger" value={30}>
                <button>CSS 30</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="success" value={15}>
                <button>HTML 15%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="purple" value={25}>
                <button>React 25%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="indigo" value={15}>
                <button>Node 15%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="warning" value={15}>
                <button>SCSS 15%</button>
              </ProgressBarStack.Item>
            </ProgressBarStack>
            <ProgressBarStack size="xl" label="Nice to meet you">
              <ProgressBarStack.Item label="hello" color="danger" value={30}>
                <button>CSS 30</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="success" value={15}>
                <button>HTML 15%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="purple" value={25}>
                <button>React 25%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="indigo" value={15}>
                <button>Node 15%</button>
              </ProgressBarStack.Item>
              <ProgressBarStack.Item label="hello" color="warning" value={15}>
                <button>SCSS 15%</button>
              </ProgressBarStack.Item>
            </ProgressBarStack>
          </Flex>
        </Preview>
      </Grid>

      <Heading size="sm">Progress Circle</Heading>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview
          title="Progress Circle Size"
          description="Default progress bar size is sm size possibles values(xs,sm,md,lg,xl)"
          direction="column"
          code={docs.progressCircleSize}
        >
          <Flex direction="column" gap="md">
            <ProgressCircle size="xs" value={90} label="hello" />
            <ProgressCircle size="sm" label="Hello" value={50} />
            <ProgressCircle size="md" label="Hello" value={50} />
            <ProgressCircle size="lg" label="Hello" value={50} />
            <ProgressCircle size="xl" label="Hello" value={50} />
          </Flex>
        </Preview>
        <Preview
          title="Progress CiProgressCircle Color"
          description="Progress bar color default is primary possible values(danger, success, mint, yellow, purple, indigo, warning, slate)"
          direction="column"
          code={docs.progressCircleColor}
        >
          <Flex direction="column" gap="md">
            <ProgressCircle color="danger" value={90} label="hello" />
            <ProgressCircle color="success" label="Hello" value={50} />
            <ProgressCircle color="mint" label="Hello" value={50} />
            <ProgressCircle color="yellow" label="Hello" value={50} />
            <ProgressCircle color="purple" label="Hello" value={50} />
            <ProgressCircle color="indigo" label="Hello" value={50} />
            <ProgressCircle color="warning" label="Hello" value={50} />
            <ProgressCircle color="slate" label="Hello" value={50} />
          </Flex>
        </Preview>

        <Preview
          title="Progress Value"
          description="Progress value can be a value between 0 and 100"
          direction="column"
          code={docs.progressCircleValue}
        >
          <Flex direction="column" gap="md">
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
          direction="column"
          code={docs.progressCircleShowValue}
        >
          <Flex direction="column" gap="md">
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
