import { JOBS } from './jobs.data'

export function jobsTotal() {
  return JOBS.length
}

export const getJobs = () => {
  return JOBS
}
