import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Grid,
  Heading,
  Paper,
  ProgressBarStack,
  ProgressBarStackItem,
  Text,
} from '@pillar-ui/core'
import { JobStaticArticle, JobStatics } from './statics'
import { JobOptions } from './option'
import { Jobs } from './jobs'

const JobsSection = () => {
  return (
    <Paper as="section" flow="7" aria-labelledby="dashboard--page-id">
      <Flex items="center" justify="between">
        <Heading as="h1" id="dashboard--page-id" size="7">
          E_commerce Dashboard
        </Heading>
        <Breadcrumb>
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../..">Pages</BreadcrumbItem>
          <BreadcrumbItem href="./" current>
            Jobs
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Paper as="section" flow="5" aria-labelledby="job-analytics-id">
        <div>
          <Heading id="job-analytics-id" as="h2">
            Jobs Analytics
          </Heading>
          <Text color="b" low size="3">
            <span>Good Morning Hamza Amar:</span> Here is Your Jobs Listenings statics from Mars 21 to Mars 28
          </Text>
        </div>

        <JobOptions />
      </Paper>

      <Grid cols={{ default: '1fr', lg: '1fr 1fr' }} gap="5">
        <JobStatics />
        <Paper flow="5">
          <section aria-labelledby="applicant summary-id" className="l_flow-sm l_box">
            <Heading as="h3" id="applicant summary-id">
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
              <Heading as="h3" id="job-open-id">
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
        </Paper>
      </Grid>
      <Grid as="section" gap="4" cols={{ default: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' }}>
        <JobStaticArticle color="i" number={230} city="New York" />
        <JobStaticArticle color="se" number={200} city="Austin" />
        <JobStaticArticle color="su" number={550} city="Washington DC" />
      </Grid>
      <Jobs />
    </Paper>
  )
}

export default JobsSection
