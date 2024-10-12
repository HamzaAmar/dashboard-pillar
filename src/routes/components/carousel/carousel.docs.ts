export const controlsCarousel = `
import { Grid } from '@components/core'
import { Carousel } from '@components/composition'

function CarouselStory(){
    return(
        <Grid columns="repeat(2, 1fr)" className="md_grid-one" gap="sm">
          <Carousel content={slides} />
          <Carousel content={slides} withIndicators />
          <Carousel content={slides} withControls />
          <Carousel content={slides} withIndicators withControls />
        </Grid>
    )
}
`

export const optionsCarousel = `
import { Grid } from '@components/core'
import { Carousel } from '@components/composition'

function CarouselStory(){
    return(
        <Grid columns="repeat(2, 1fr)" className="md_grid-one" gap="sm">
          <Carousel content={slides} />
          <Carousel content={slides} withIndicators />
          <Carousel content={slides} withControls />
          <Carousel content={slides} withIndicators withControls />
        </Grid>
    )
}
`
export const gapCarousel = `
import { Grid } from '@components/core'
import { Carousel } from '@components/composition'

function CarouselStory(){
    return(
        <Grid columns="repeat(2, 1fr)" className="md_grid-one" gap="sm">
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="2xs" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="xs" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="sm" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="md" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="lg" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="xl" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="2xl" />
        </Grid>
    )
}
`

export const perViewCarousel = `
import { Grid } from '@components/core'
import { Carousel } from '@components/composition'

function CarouselStory(){
    return(
        <Grid columns="repeat(2, 1fr)" className="md_grid-one" gap="sm">
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
        </Grid>
    )
}
`
