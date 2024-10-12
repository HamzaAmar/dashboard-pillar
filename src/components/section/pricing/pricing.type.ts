import type { ReactElement } from 'react'

export type Current = 'basic' | 'business' | 'enterprise' | null

export interface BillingArticleProps {
  title: string
  price: number
  description?: string
  handlePricing: (name: Current) => void
  value: Current
  slug: Current
  features: string[]
}

export interface CompanyRatingProps {
  company: string
  image: string
  reviews: number
  rating: number
}

export interface ReviewProps {
  id: number
  title: string
  description: string
  user: { name: string; avatar: string }
  company: string
}

interface FeatureHead {
  slug: string
  content: [string, string]
}
interface FeatureBody {
  slug: string
  title: string
  feature: [boolean, boolean, boolean, boolean]
}

export interface FeaturePricingModel {
  body: FeatureBody[]
  head: FeatureHead[]
}

export interface PlanFeatureProps {
  slug: string
  icon: ReactElement
  title: string
  description: string
}
