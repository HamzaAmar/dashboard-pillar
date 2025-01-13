import { Flex, Pagination, Paper } from '@pillar-ui/core'
import Testimonials from './testimonials'
import { getFeedbacksLimit } from '@api/feedback'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import { FeedbackPaginationDTO } from '@type/api/feedback'

export const loader = ({ request }: { request: Request }) => {
  const url = new URL(request.url)
  const page = url.searchParams.get('page') || '1'
  const data = getFeedbacksLimit(`page=${page}`)
  return data
}

export const Component = () => {
  const { pagination } = useLoaderData() as FeedbackPaginationDTO
  const [_, setSearchParams] = useSearchParams()

  const onPageChange = (page: number) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev)
      newParams.set('page', page.toString())
      return newParams
    })
  }

  return (
    <Paper flow="5">
      <Testimonials />
      <Flex justify="center">
        <Pagination count={pagination.totalPages} onPageChange={onPageChange} />
      </Flex>
    </Paper>
  )
}
