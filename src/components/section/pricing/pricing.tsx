import { useState, useId } from 'react'
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Grid,
  Heading,
  TableColumn,
  TableRow,
  Text,
  Rating,
  Table,
  Paper,
} from '@pillar-ui/core'
import { CircleCheck, CircleCross } from '@components/icons'
import type { BillingArticleProps, CompanyRatingProps, Current, PlanFeatureProps, ReviewProps } from './pricing.type'
import { FEATURES_PLAN, PRICING_FEATURES, REVIEW } from './pricing.data'

const CompanyRating = ({ company, image, reviews, rating }: CompanyRatingProps) => {
  const ratingTrunc = Math.trunc(rating)
  return (
    <Flex items="start">
      <Avatar src={`/images/jobs/${image}`} title={company} />
      <div>
        <Flex gap="1">
          <Rating rating={ratingTrunc} size="4" />
          <Text size="4" weight="7" as="span" color="w" low>
            ({rating})
          </Text>
        </Flex>
        <Text size="3" color="b" as="span">
          {company}-
        </Text>
        <Text size="3" color="b" low as="span">
          {reviews}+ reviews
        </Text>
      </div>
    </Flex>
  )
}

const PlanFeature = ({ icon, title, description }: PlanFeatureProps) => {
  return (
    <Flex
      aria-labelledby="plan-feature-id"
      as="article"
      justify="center"
      direction="col"
      items="center"
      gap="4"
      className="l_box"
    >
      <div className="plan-feature--icon-wrapper">{icon}</div>
      <Heading align="center" id="plan-feature-id" size="3" as="h3" weight="5">
        {title}
      </Heading>
      <Text align="center" size="3" color="b" low>
        {description}
      </Text>
    </Flex>
  )
}

const Billing = ({ title, price, description, handlePricing, value, slug, features }: BillingArticleProps) => {
  const id = `billing-${useId()}-item`
  return (
    <article aria-labelledby={id} className="billing-item fl-1">
      <Paper
        as="button"
        flow="5"
        className="billing-trigger l_box"
        data-current={value === slug}
        onClick={() => handlePricing(slug)}
      >
        <header>
          <Flex items="start" justify="between">
            <div>
              <Heading id={id} as="h3" weight="7" size="3">
                {title}
              </Heading>
              <Text weight="7">${price} / month</Text>
              <Text color="b" low size="3">
                {description}
              </Text>
            </div>
            <Flex justify="center" items="center" className="icon-wrapper">
              <CircleCheck className="billing-check" width="24" stroke="var(--B12)" />
            </Flex>
          </Flex>
        </header>
        <div>
          <Paper as="ul" flow="4">
            {features.map((feature, index) => (
              <li key={index}>
                <Flex as={Text} gap="3" items="center" size="4" color="b" low>
                  <CircleCheck width="20" />
                  <Text as="span" size="4" align="start">
                    {feature}
                  </Text>
                </Flex>
              </li>
            ))}
          </Paper>
        </div>
      </Paper>
    </article>
  )
}

const Testimonials = ({ id, user, description, title, company }: ReviewProps) => {
  return (
    <Flex direction="col" as="article" gap="3" key={id} className="pricing-review l_box">
      <div>
        <Heading as="h3" size="3" weight="5">
          {title}
        </Heading>
        <Text size="3" color="b" low>
          {description}
        </Text>
      </div>

      <Flex gap="4" className="pricing-review--footer">
        <Avatar src={user.avatar} title={user.name} />
        <div>
          <Text size="4" weight="5">
            {user.name}
          </Text>
          <Text size="3" color="b" low weight="5">
            {company}
          </Text>
        </div>
      </Flex>
    </Flex>
  )
}

function featureOrNot(feature: boolean) {
  return feature ? <CircleCheck width={20} /> : <CircleCross stroke="var(--B11)" width={20} />
}

export const PricingSection = () => {
  const [current, setCurrent] = useState<Current>(null)

  const handlePricing = (name: Current) => {
    setCurrent(name)
  }

  return (
    <Paper as="section" flow="7" aria-labelledby="pricing-page-id">
      <Flex justify="between" items="center">
        <div>
          <Heading id="pricing-page-id" as="h1" size="4">
            Pricing
          </Heading>
          <Text size="4" color="b" low>
            Manage Your Plan and your Billing history
          </Text>
        </div>
        <Breadcrumb size="5">
          <BreadcrumbItem href="../../">Home</BreadcrumbItem>
          <BreadcrumbItem href="../">Pages</BreadcrumbItem>
          <BreadcrumbItem href="." current>
            Pricing
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Paper as="section" flow="5">
        <Heading as="h2" size="4" weight="5">
          Belling Plans
        </Heading>
        <Grid cols={{ default: 'repeat(auto-fit, minmax(250px , 1fr))' }} gap="4">
          <Billing
            price={10}
            slug="basic"
            title="Basic Plan"
            value={current}
            handlePricing={handlePricing}
            features={[
              'Access To all basic features',
              'basic reporting and analytics',
              'up to 20 individual persons',
              '200GB Data for All users',
              'Basic chat and email support',
            ]}
          />
          <Billing
            price={20}
            slug="business"
            title="Business Plan"
            value={current}
            handlePricing={handlePricing}
            features={[
              'Access To all Business features',
              'Advanced reporting and analytics',
              'up to 20 individual persons',
              '400GB Data for All users',
              'Advanced chat and email support',
            ]}
          />
          <Billing
            price={50}
            slug="enterprise"
            title="Enterprise Plan"
            value={current}
            handlePricing={handlePricing}
            features={[
              'Access To all basic features',
              'Unlimited reporting and analytics',
              'Up to 100 individual persons',
              '10TB Data for All users',
              'Unlimited chat and email support',
            ]}
          />
        </Grid>
      </Paper>
      <Paper flow="5">
        <Flex as="section" aria-labelledby="trusted-company-id" direction="col" gap="4">
          <Heading as="h2" size="4" id="trusted-company-id" weight="5">
            Trusted By 3000+ company around the globe
          </Heading>
          <Flex wrap gap="6">
            <CompanyRating image="dice.jfif" company="Dice" rating={5} reviews={230} />
            <CompanyRating image="apple.jfif" company="Apple" rating={5} reviews={100} />
            <CompanyRating image="dice.jfif" company="Dice" rating={5} reviews={230} />
            <CompanyRating image="Oracle.jfif" company="oracle" rating={4} reviews={300} />
            <CompanyRating image="mongodb.jfif" company="MongoDB" rating={4} reviews={30} />
            <CompanyRating image="dice.jfif" company="Dice" rating={5} reviews={230} />
          </Flex>
        </Flex>

        <Paper as="section" flow="5" aria-labelledby="testimonials-id">
          <Heading size="4" id="testimonials-id" weight="5" as="h2">
            Testimonials
          </Heading>
          <div className="pricing-review--list md_grid-two sm_grid-one">
            {REVIEW.map((review) => (
              <Testimonials key={review.id} {...review} />
            ))}
          </div>
        </Paper>
      </Paper>
      <Flex as="section" aria-labelledby="pick-plan-id" direction="col" gap="6">
        <div>
          <Heading size="4" weight="5" id="pick-plan-id" as="h2">
            Pick a plan that works best for you
          </Heading>
          <Text color="b" low size="4">
            Stay cool, we have a 48-hour money back guarantee!
          </Text>
        </div>
        <Table variant="striped">
          <thead>
            <TableRow type="head">
              {PRICING_FEATURES.head.map(({ slug, content }) => (
                <TableColumn key={slug} as="th">
                  <Heading as="h3" size="3">
                    {content[0]}
                  </Heading>
                  <Text size="3" color="b" low weight="4">
                    {content[1]}
                  </Text>
                </TableColumn>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {PRICING_FEATURES.body.map(({ slug, title, feature }) => (
              <TableRow key={slug}>
                <TableColumn weight="5">{title}</TableColumn>
                {feature.map((value, index) => (
                  <TableColumn key={index}>{featureOrNot(value)}</TableColumn>
                ))}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Flex>
      <Flex as="section" aria-labelledby="personalization-plan-id" direction="col" gap="4">
        <Heading as="h2" size="4" weight="5" id="personalization-plan-id">
          Personalization Plan features
        </Heading>
        <Grid cols={{ default: '1fr', md: '1fr 1fr', lg: 'repeat(4, 1fr)' }} gap="4" className="plan-features">
          {FEATURES_PLAN.map((plan) => (
            <PlanFeature key={plan.slug} {...plan} />
          ))}
        </Grid>
      </Flex>
    </Paper>
  )
}
