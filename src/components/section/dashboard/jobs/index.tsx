import { Breadcrumb, Flex, Grid, Heading, ProgressBarStack, Text } from '@components/core'
import { Jobs, JobStatics, JobOptions } from './section'
import { JobStaticArticle } from './section/statics'

const JobsSection = () => {
  return (
    <section aria-labelledby="dashboard--page-id" className="l_flow-lg">
      <Flex items="center" justify="between">
        <Heading as="h1" id="dashboard--page-id" size="xs">
          E_commerce Dashboard
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Pages</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Jobs
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <section aria-labelledby="job-analytics-id" className="l_flow-md">
        <div>
          <Heading id="job-analytics-id" as="h2" size="xs">
            Jobs Analytics
          </Heading>
          <Text color="slate" contrast="low" size="xs">
            <span>Good Morning Hamza Amar:</span> Here is Your Jobs Listenings statics from Mars 21 to Mars 28
          </Text>
        </div>

        <JobOptions />
      </section>

      <Grid columns="1fr 1fr" className="md_grid-one" gap="md">
        <JobStatics />
        <div className="l_flow-md">
          <section aria-labelledby="applicant summary-id" className="l_flow-sm l_box">
            <Heading as="h3" id="applicant summary-id" size="xs">
              Applicant Summary
            </Heading>
            <div>
              <Text as="span" weight="bold" size="3xl">
                67
              </Text>
              <Text as="span" color="slate" contrast="low">
                Applicant
              </Text>
            </div>
            <ProgressBarStack label="Nice to meet you">
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
          </section>
          <section aria-labelledby="job-open-id" className="l_flow-sm">
            <div className="l_box">
              <Heading as="h3" id="job-open-id" size="xs">
                Job Open
              </Heading>
              <Text as="span" weight="bold" size="3xl">
                15
              </Text>
              <Text as="span" color="slate" contrast="low">
                Jobs Opened
              </Text>
            </div>
          </section>
        </div>
      </Grid>
      <Grid as="section" gap="sm" columns="repeat(4, 1fr)" className="sm_grid-one md_grid-two">
        <JobStaticArticle color="indigo" number={230} city="New York" />
        <JobStaticArticle color="yellow" number={220} city="San Francisco" />
        <JobStaticArticle color="purple" number={200} city="Austin" />
        <JobStaticArticle color="success" number={550} city="Washington DC" />
      </Grid>
      <Jobs />
    </section>
  )
}

export default JobsSection
