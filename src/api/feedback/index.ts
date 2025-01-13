// import { FEEDBACK } from './feedback.data'

// export const getFeedbacksLimit = async (params?: string) => {
//   const { limit = 10, page = 1 } = params ?? {}
//   const feedbacks = FEEDBACK.slice(0, limit)
//   return {
//     feedbacks,
//     pagination: {
//       totalPages: 1,
//       currentPage: 1,
//     },
//   }
// }

import { getPaginatedData } from '@utils/queryString'
import { FEEDBACK } from './feedback.data'
import { FeedbackPaginationDTO } from '@type/api/feedback'

export const getFeedbacksLimit = (queryString?: string): FeedbackPaginationDTO => {
  // Parse the query string into pagination params
  const { limit, page } = getPaginatedData(queryString)

  // Calculate pagination values
  const totalItems = FEEDBACK.length
  const totalPages = Math.ceil(totalItems / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  // Get paginated data
  const paginatedFeedbacks = FEEDBACK.slice(startIndex, endIndex)

  return {
    feedbacks: paginatedFeedbacks,
    pagination: {
      totalPages,
      currentPage: page,
      totalItems,
      itemsPerPage: limit,
    },
  }
}
