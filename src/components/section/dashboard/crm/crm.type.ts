export interface CompanyDTO {
  company: string
  website: string
  status: 'Customer' | 'Churned'
  aboutCategory: string
  aboutDescription: string
  rating: number
  logo: string
}
