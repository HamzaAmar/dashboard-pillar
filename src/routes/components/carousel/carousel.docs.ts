export const controlsCarousel = `
import { Grid } from '@pillar-ui/core'
import { Carousel } from '@components/composition'

function CarouselStory(){
    return(
        <Grid grid="repeat(2, 1fr)" className="md_grid-one" gap="4">
          <Carousel content={slides} />
          <Carousel content={slides} withIndicators />
          <Carousel content={slides} withControls />
          <Carousel content={slides} withIndicators withControls />
        </Grid>
    )
}
`

export const optionsCarousel = `
import { Grid } from '@pillar-ui/core'
import { Carousel } from '@components/composition'

function CarouselStory(){
    return(
        <Grid grid="repeat(2, 1fr)" className="md_grid-one" gap="4">
          <Carousel content={slides} />
          <Carousel content={slides} withIndicators />
          <Carousel content={slides} withControls />
          <Carousel content={slides} withIndicators withControls />
        </Grid>
    )
}
`
export const gapCarousel = `
import { Grid } from '@pillar-ui/core'
import { Carousel } from '@components/composition'

function CarouselStory(){
    return(
        <Grid grid="repeat(2, 1fr)" className="md_grid-one" gap="4">
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="1" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="3" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="4" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="5" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="6" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="7" />
            <Carousel content={slides} containScroll="trimSnaps" withControls perView={4} gap="8" />
        </Grid>
    )
}
`

export const perViewCarousel = `
import { Grid } from '@pillar-ui/core'
import { Carousel } from '@components/composition'

function CarouselStory(){
    return(
        <Grid grid="repeat(2, 1fr)" className="md_grid-one" gap="4">
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
        </Grid>
    )
}
`
