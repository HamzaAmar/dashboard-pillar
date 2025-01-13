export interface PaginationParams {
  limit: number
  page: number
}

export const getPaginatedData = (queryString?: string): PaginationParams => {
  const searchParams = new URLSearchParams(queryString)

  const limit = +(searchParams.get('limit') ?? '10')
  const page = +(searchParams.get('page') ?? '1')

  return { limit, page }
}
