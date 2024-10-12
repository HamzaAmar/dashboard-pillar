import { getJobs } from '@api/jobs'
import { JobsSection } from '@components/section'
import type { LoaderFunction } from 'react-router-dom'

export const loader: LoaderFunction = () => {
  const jobs = getJobs()
  return { jobs }
}

export const Component = () => {
  return <JobsSection />
}

Component.displayName = 'Jobs Page'
