import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Grid,
  Heading,
  ProgressBarStack,
  ProgressBarStackItem,
  Text,
} from '@pillar-ui/core'
import { Jobs, JobStatics, JobOptions } from './section'
import { JobStaticArticle } from './section/statics'

const JobsSection = () => {
  return (
    <section aria-labelledby="dashboard--page-id" className="l_flow-lg">
      <Flex items="center" justify="between">
        <Heading as="h1" id="dashboard--page-id" size="3">
          E_commerce Dashboard
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Pages</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Jobs
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <section aria-labelledby="job-analytics-id" className="l_flow-md">
        <div>
          <Heading id="job-analytics-id" as="h2" size="3">
            Jobs Analytics
          </Heading>
          <Text color="b" low size="3">
            <span>Good Morning Hamza Amar:</span> Here is Your Jobs Listenings statics from Mars 21 to Mars 28
          </Text>
        </div>

        <JobOptions />
      </section>

      <Grid grid="1fr 1fr" className="md_grid-one" gap="5">
        <JobStatics />
        <div className="l_flow-md">
          <section aria-labelledby="applicant summary-id" className="l_flow-sm l_box">
            <Heading as="h3" id="applicant summary-id" size="3">
              Applicant Summary
            </Heading>
            <div>
              <Text as="span" weight="7" size="9">
                67
              </Text>
              <Text as="span" color="b" low>
                Applicant
              </Text>
            </div>
            <ProgressBarStack label="Nice to meet you">
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
          </section>
          <section aria-labelledby="job-open-id" className="l_flow-sm">
            <div className="l_box">
              <Heading as="h3" id="job-open-id" size="3">
                Job Open
              </Heading>
              <Text as="span" weight="7" size="9">
                15
              </Text>
              <Text as="span" color="b" low>
                Jobs Opened
              </Text>
            </div>
          </section>
        </div>
      </Grid>
      <Grid as="section" gap="4" grid="repeat(4, 1fr)" className="sm_grid-one md_grid-two">
        <JobStaticArticle color="i" number={230} city="New York" />
        <JobStaticArticle color="se" number={200} city="Austin" />
        <JobStaticArticle color="su" number={550} city="Washington DC" />
      </Grid>
      <Jobs />
    </section>
  )
}

export default JobsSection
