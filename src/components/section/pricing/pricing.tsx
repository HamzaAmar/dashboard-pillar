import { useState, useId } from 'react'
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Grid,
  Heading,
  Text,
  Rating,
  Table,
  Paper,
  Button,
  Chips,
} from '@pillar-ui/core'
import { CircleCheck, CircleX } from '@pillar-ui/icons'
import type { BillingArticleProps, CompanyRatingProps, Current, PlanFeatureProps, ReviewProps } from './pricing.type'
import { FEATURES_PLAN, PRICING_FEATURES, REVIEW } from './pricing.data'

const CompanyRating = ({ company, image, reviews, rating }: CompanyRatingProps) => {
  const ratingTrunc = Math.trunc(rating)
  return (
    <Flex as="article" gap="3" className="l_box">
      <Avatar src={`/images/jobs/${image}`} title={company} />
      <div>
        <Flex gap="3">
          <Text size="4" color="b" weight="5">
            {company}
          </Text>
          <Rating rating={ratingTrunc} size="3" hideTitle />
          <Text size="4" weight="5" as="span" color="w" low>
            ({rating})
          </Text>
        </Flex>

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

const Billing = ({ title, price, description, handlePricing, value, slug, features, type }: BillingArticleProps) => {
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
            <Paper flow="4">
              <Chips size="5">{title}</Chips>
              <div>
                <Text size="4" weight="6" transform="capitalize">
                  ${price} / {type}
                </Text>
                <Text color="b" low size="3">
                  {description}
                </Text>
              </div>
            </Paper>
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
    <Paper flow="6" as="article" key={id} className="l_box">
      <div>
        <Heading as="h3" size="3" weight="5">
          {title}
        </Heading>
        <Text size="3" color="b" low>
          {description}
        </Text>
      </div>

      <Flex gap="4">
        <Avatar size="4" src={user.avatar} title={user.name} />
        <div>
          <Text size="4" weight="5">
            {user.name}
          </Text>
          <Text size="3" color="b" low weight="5">
            {company}
          </Text>
        </div>
      </Flex>
    </Paper>
  )
}

function featureOrNot(feature: boolean) {
  return feature ? <CircleCheck width={20} /> : <CircleX stroke="var(--B11)" width={20} />
}

const Pricing = () => {
  const [current, setCurrent] = useState<Current>(null)
  const [type, setType] = useState<'monthly' | 'annual'>('monthly')

  const handlePricing = (name: Current) => {
    setCurrent(name)
  }

  return (
    <Paper as="section" flow="5" className="l_box">
      <Heading as="h2" size="4" weight="5">
        Choose Your Right Plan
      </Heading>
      <Paper flow="6">
        <Flex justify="center">
          <Paper width="max(50%, 250px)" corner="full" background="B3" p="2" gap="2" as={Flex}>
            <Button
              variant={type === 'monthly' ? 'shadow' : 'soft'}
              color={type === 'monthly' ? 'p' : 'b'}
              onClick={() => setType('monthly')}
              corner="full"
              className="fl-1"
            >
              Monthly
            </Button>
            <Button
              variant={type === 'annual' ? 'shadow' : 'soft'}
              color={type === 'annual' ? 'p' : 'b'}
              onClick={() => setType('annual')}
              corner="full"
              className="fl-1"
            >
              Annual
            </Button>
          </Paper>
        </Flex>
        <Grid cols={{ default: 'repeat(auto-fit, minmax(250px , 1fr))' }} gap="4">
          <Billing
            price={(type === 'annual' ? 11.2 : 1) * 10}
            slug="basic"
            title="Basic"
            value={current}
            type={type}
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
            price={(type === 'annual' ? 11.2 : 1) * 20}
            slug="business"
            title="Business"
            value={current}
            type={type}
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
            price={(type === 'annual' ? 11.2 : 1) * 50}
            slug="enterprise"
            title="Enterprise"
            value={current}
            type={type}
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
    </Paper>
  )
}

export const PricingSection = () => {
  return (
    <Paper as="section" flow="5" aria-labelledby="pricing-page-id">
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
      <Pricing />
      <Paper as="section" aria-labelledby="trusted-company-id" flow="5">
        <Paper flow="5" className="l_box">
          <Heading as="h2" size="4" id="trusted-company-id" weight="5">
            Trusted By 3000+ company around the globe
          </Heading>
          <Grid cols={{ default: '1fr', md: '1fr 1fr 1fr' }} gap="4">
            <CompanyRating image="dice.jfif" company="Dice" rating={5} reviews={230} />
            <CompanyRating image="apple.jfif" company="Apple" rating={5} reviews={100} />
            <CompanyRating image="dice.jfif" company="Dice" rating={5} reviews={230} />
            <CompanyRating image="Oracle.jfif" company="oracle" rating={4} reviews={300} />
            <CompanyRating image="mongodb.jfif" company="MongoDB" rating={4} reviews={30} />
            <CompanyRating image="dice.jfif" company="Dice" rating={5} reviews={230} />
          </Grid>
        </Paper>
        <Paper as="section" flow="5" aria-labelledby="testimonials-id" className="l_box">
          <Heading size="4" id="testimonials-id" weight="5" as="h2">
            Testimonials
          </Heading>
          <Grid cols={{ default: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap="4">
            {REVIEW.map((review) => (
              <Testimonials key={review.id} {...review} />
            ))}
          </Grid>
        </Paper>
      </Paper>
      <Paper as="section" aria-labelledby="pick-plan-id" flow="6" className="l_box">
        <div>
          <Heading size="4" weight="5" id="pick-plan-id" as="h2">
            Pick a plan that works best for you
          </Heading>
          <Text color="b" low size="3">
            Stay cool, we have a 48-hour money back guarantee!
          </Text>
        </div>
        <Table variant="striped">
          <thead>
            <tr>
              {PRICING_FEATURES.head.map(({ slug, content }) => (
                <td key={slug}>
                  <Heading as="h3" size="3">
                    {content[0]}
                  </Heading>
                  <Text size="3" color="b" low weight="4">
                    {content[1]}
                  </Text>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {PRICING_FEATURES.body.map(({ slug, title, feature }) => (
              <tr key={slug}>
                <td>
                  <Text weight="5" size="3">
                    {title}
                  </Text>{' '}
                </td>
                {feature.map((value, index) => (
                  <td key={index}>{featureOrNot(value)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
      <Paper as="section" aria-labelledby="personalization-plan-id" flow="4" className="l_box">
        <Heading as="h2" size="4" weight="5" id="personalization-plan-id">
          Personalization Plan features
        </Heading>
        <Grid cols={{ default: '1fr', md: '1fr 1fr', lg: 'repeat(4, 1fr)' }} gap="4" className="plan-features">
          {FEATURES_PLAN.map((plan) => (
            <PlanFeature key={plan.slug} {...plan} />
          ))}
        </Grid>
      </Paper>
    </Paper>
  )
}
