export interface FeedbackDTO {
  id: number
  name: string
  email: string
  message: string
  job: string
  rating: number
  avatar: string
}

export interface FeedbackPaginationDTO {
  feedbacks: FeedbackDTO[]
  pagination: {
    totalPages: number
    currentPage: number
    totalItems: number
    itemsPerPage: number
  }
}
