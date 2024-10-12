import { useState, useId } from 'react'
import { Avatar, Breadcrumb, Flex, Grid, Heading, Text } from '@components/core'
import { CircleCheck, CircleCross } from '@components/icons'
import type { BillingArticleProps, CompanyRatingProps, Current, PlanFeatureProps, ReviewProps } from './pricing.type'
import { Rating, Table } from '@components/composition'
import { FEATURES_PLAN, PRICING_FEATURES, REVIEW } from './pricing.data'

const CompanyRating = ({ company, image, reviews, rating }: CompanyRatingProps) => {
  const ratingTrunc = Math.trunc(rating)
  return (
    <Flex items="start">
      <Avatar variant="image" image={`/images/jobs/${image}`} title={company} />
      <div>
        <Flex gap="2xs">
          <Rating rating={ratingTrunc} size="sm" />
          <Text size="sm" weight="bold" as="span" color="yellow" contrast="low">
            ({rating})
          </Text>
        </Flex>
        <Text size="xs" color="slate" as="span">
          {company}-
        </Text>
        <Text size="xs" color="slate" contrast="low" as="span">
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
      direction="column"
      items="center"
      className="l_flow-md l_box"
    >
      <div className="plan-feature--icon-wrapper">{icon}</div>
      <Heading align="center" id="plan-feature-id" size="xs" as="h3" weight="medium">
        {title}
      </Heading>
      <Text align="center" size="xs" color="slate" contrast="low">
        {description}
      </Text>
    </Flex>
  )
}

const Billing = ({ title, price, description, handlePricing, value, slug, features }: BillingArticleProps) => {
  const id = `billing-${useId()}-item`
  return (
    <article aria-labelledby={id} className="billing-item u_flex-1">
      <button
        className="billing-trigger l_box l_flow-md"
        data-current={value === slug}
        onClick={() => handlePricing(slug)}
      >
        <header>
          <Flex items="start" justify="between">
            <div>
              <Heading id={id} as="h3" weight="bold" size="xs">
                {title}
              </Heading>
              <Text weight="bold">${price} / month</Text>
              <Text color="slate" contrast="low" size="xs">
                {description}
              </Text>
            </div>
            <Flex justify="center" items="center" className="icon-wrapper">
              <CircleCheck className="billing-check" width="24" stroke="var(--slate-12)" />
            </Flex>
          </Flex>
        </header>
        <div>
          <ul className="l_flow-md">
            {features.map((feature, index) => (
              <li key={index}>
                <Flex as={Text} gap="xs" items="center" size="sm" color="slate" contrast="low">
                  <CircleCheck width="20" />
                  <Text as="span" size="sm" align="start">
                    {feature}
                  </Text>
                </Flex>
              </li>
            ))}
          </ul>
        </div>
      </button>
    </article>
  )
}

const Testimonials = ({ id, user, description, title, company }: ReviewProps) => {
  return (
    <Flex direction="column" as="article" gap="xs" key={id} className="pricing-review l_box l_flow-md">
      <div>
        <Heading as="h3" size="xs" weight="medium">
          {title}
        </Heading>
        <Text size="xs" color="slate" contrast="low">
          {description}
        </Text>
      </div>

      <Flex gap="sm" className="pricing-review--footer">
        <Avatar variant="image" image={user.avatar} title={user.name} />
        <div>
          <Text size="sm" weight="medium">
            {user.name}
          </Text>
          <Text size="xs" color="slate" contrast="low" weight="medium">
            {company}
          </Text>
        </div>
      </Flex>
    </Flex>
  )
}

function featureOrNot(feature: boolean) {
  return feature ? <CircleCheck width={20} /> : <CircleCross stroke="var(--slate-11)" width={20} />
}

export const PricingSection = () => {
  const [current, setCurrent] = useState<Current>(null)

  const handlePricing = (name: Current) => {
    setCurrent(name)
  }

  return (
    <section aria-labelledby="pricing-page-id" className="l_flow-lg">
      <Flex justify="between" items="center">
        <div>
          <Heading id="pricing-page-id" as="h1" size="sm">
            Pricing
          </Heading>
          <Text size="sm" color="slate" contrast="low">
            Manage Your Plan and your Billing history
          </Text>
        </div>
        <Breadcrumb size="md">
          <Breadcrumb.Item link="../../">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Pages</Breadcrumb.Item>
          <Breadcrumb.Item link="." current>
            Pricing
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <section className="l_flow-sm">
        <Heading as="h2" size="sm" weight="medium">
          Belling Plans
        </Heading>
        <Grid columns="repeat(auto-fit, minmax(250px , 1fr))" gap="sm">
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
      </section>
      <div className="l_flow-lg">
        <Flex as="section" aria-labelledby="trusted-company-id" direction="column" gap="sm">
          <Heading as="h2" size="sm" id="trusted-company-id" weight="medium">
            Trusted By 3000+ company around the globe{' '}
          </Heading>
          <Flex wrap gap="lg">
            <CompanyRating image="dice.jfif" company="Dice" rating={5} reviews={230} />
            <CompanyRating image="apple.jfif" company="Apple" rating={5} reviews={100} />
            <CompanyRating image="dice.jfif" company="Dice" rating={5} reviews={230} />
            <CompanyRating image="Oracle.jfif" company="oracle" rating={4} reviews={300} />
            <CompanyRating image="mongodb.jfif" company="MongoDB" rating={4} reviews={30} />
            <CompanyRating image="dice.jfif" company="Dice" rating={5} reviews={230} />
          </Flex>
        </Flex>

        <section aria-labelledby="testimonials-id" className="l_flow-sm">
          <Heading size="sm" id="testimonials-id" weight="medium" as="h2">
            Testimonials
          </Heading>
          <div className="pricing-review--list md_grid-two sm_grid-one">
            {REVIEW.map((review) => (
              <Testimonials key={review.id} {...review} />
            ))}
          </div>
        </section>
      </div>
      <Flex as="section" aria-labelledby="pick-plan-id" direction="column" className="l_flow-lg">
        <div>
          <Heading size="sm" weight="medium" id="pick-plan-id" as="h2">
            Pick a plan that works best for you
          </Heading>
          <Text color="slate" contrast="low" size="sm">
            Stay cool, we have a 48-hour money back guarantee!
          </Text>
        </div>
        <Table variant="striped">
          <thead>
            <Table.Row type="head">
              {PRICING_FEATURES.head.map(({ slug, content }) => (
                <Table.Column key={slug} as="th">
                  <Heading as="h3" size="xs">
                    {content[0]}
                  </Heading>
                  <Text size="xs" color="slate" contrast="low" weight="normal">
                    {content[1]}
                  </Text>
                </Table.Column>
              ))}
            </Table.Row>
          </thead>
          <tbody>
            {PRICING_FEATURES.body.map(({ slug, title, feature }) => (
              <Table.Row key={slug}>
                <Table.Column weight="bold">{title}</Table.Column>
                {feature.map((value, index) => (
                  <Table.Column key={index}>{featureOrNot(value)}</Table.Column>
                ))}
              </Table.Row>
            ))}
          </tbody>
        </Table>
      </Flex>
      <Flex as="section" aria-labelledby="personalization-plan-id" direction="column" className="l_flow-lg">
        <Heading as="h2" size="sm" weight="medium" id="personalization-plan-id">
          Personalization Plan features
        </Heading>
        <Grid columns="repeat(4, 1fr)" gap="sm" className="plan-features md_grid-two sm_grid-one">
          {FEATURES_PLAN.map((plan) => (
            <PlanFeature key={plan.slug} {...plan} />
          ))}
        </Grid>
      </Flex>
    </section>
  )
}
