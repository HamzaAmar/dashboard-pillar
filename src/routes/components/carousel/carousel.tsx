import { Carousel } from '@components/composition'
import { Breadcrumb, BreadcrumbItem, Flex, Grid, Heading } from '@pillar-ui/core'
import { Preview } from '@components/section'
import * as docs from './carousel.docs'

const slidesArr = Array.from(Array(10).keys())

const slides = slidesArr.map((key) => `https://picsum.photos/id/${key}/800/300`)

export const Component = () => {
  return (
    <section aria-labelledby="carousel--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="carousel--page-id" size="3">
          Carousel Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Composite</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Carousel
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Preview title="Carousel Controls" description="Carousel Controls and indicators" code={docs.controlsCarousel}>
        <Grid grid="repeat(2, 1fr)" className="md_grid-one" gap="4">
          <Carousel content={slides} />
          <Carousel content={slides} withIndicators />
          <Carousel content={slides} withControls />
          <Carousel content={slides} withIndicators withControls />
        </Grid>
      </Preview>
      <Preview title="Carousel Options" description="Carousel Controls and indicators" code={docs.optionsCarousel}>
        <Grid grid="repeat(2, 1fr)" className="md_grid-one" gap="4">
          <Carousel content={slides} withIndicators loop />
          <Carousel content={slides} withIndicators dragFree />
          <Carousel content={slides} withControls withIndicators draggable={false} />
        </Grid>
      </Preview>
      <Preview
        direction="col"
        title="PerView Carousel"
        description="perView props accept number of the item per view default is 1"
        code={docs.perViewCarousel}
      >
        <Carousel withControls content={slides} perView={3} containScroll="trimSnaps" gap="4" />
        <Carousel withControls content={slides} perView={3.5} containScroll="trimSnaps" gap="4" />
        <Carousel
          content={slides}
          perView={3.5}
          containScroll="trimSnaps"
          withControls
          withIndicators
          align="start"
          gap="4"
        />
        <Carousel
          content={slides}
          perView={3.5}
          containScroll="trimSnaps"
          withControls
          withIndicators
          align="end"
          gap="4"
        />
      </Preview>
      <Preview
        direction="col"
        title="Carousel Gap"
        description="no Default value possible values(2xs, xs , sm, md , lg, xl, 2xl)"
        code={docs.gapCarousel}
      >
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="1" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="3" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="4" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="5" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="6" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="7" />
        <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="8" />
      </Preview>
    </section>
  )
}

Component.displayName = 'CarouselDoc'
