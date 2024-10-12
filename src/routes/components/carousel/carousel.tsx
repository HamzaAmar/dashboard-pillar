import { Carousel } from '@components/composition'
import { Breadcrumb, Flex, Grid, Heading } from '@components/core'
import { Preview } from '@components/section'
import * as docs from './carousel.docs'

const slidesArr = Array.from(Array(10).keys())

const slides = slidesArr.map((key) => `https://picsum.photos/id/${key}/800/300`)

export const Component = () => {
  return (
    <section aria-labelledby="carousel--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="carousel--page-id" size="xs">
          Carousel Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Composite</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Carousel
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Preview title="Carousel Controls" description="Carousel Controls and indicators" code={docs.controlsCarousel}>
        <Grid columns="repeat(2, 1fr)" className="md_grid-one" gap="sm">
          <Carousel content={slides} />
          <Carousel content={slides} withIndicators />
          <Carousel content={slides} withControls />
          <Carousel content={slides} withIndicators withControls />
        </Grid>
      </Preview>
      <Preview title="Carousel Options" description="Carousel Controls and indicators" code={docs.optionsCarousel}>
        <Grid columns="repeat(2, 1fr)" className="md_grid-one" gap="sm">
          <Carousel content={slides} withIndicators loop />
          <Carousel content={slides} withIndicators dragFree />
          <Carousel content={slides} withControls withIndicators draggable={false} />
        </Grid>
      </Preview>
      <Preview
        direction="column"
        title="PerView Carousel"
        description="perView props accept number of the item per view default is 1"
        code={docs.perViewCarousel}
      >
        <Carousel withControls content={slides} perView={3} containScroll="trimSnaps" gap="sm" />
        <Carousel withControls content={slides} perView={3.5} containScroll="trimSnaps" gap="sm" />
        <Carousel
          content={slides}
          perView={3.5}
          containScroll="trimSnaps"
          withControls
          withIndicators
          align="start"
          gap="sm"
        />
        <Carousel
          content={slides}
          perView={3.5}
          containScroll="trimSnaps"
          withControls
          withIndicators
          align="end"
          gap="sm"
        />
      </Preview>
      <Preview
        direction="column"
        title="Carousel Gap"
        description="no Default value possible values(2xs, xs , sm, md , lg, xl, 2xl)"
        code={docs.gapCarousel}
      >
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="2xs" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="xs" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="sm" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="md" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="lg" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="xl" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="2xl" />
      </Preview>
    </section>
  )
}

Component.displayName = 'CarouselDoc'
