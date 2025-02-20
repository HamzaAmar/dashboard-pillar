import { CSSProperties, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Flex, IconButton } from '@pillar-ui/core'
import { ChevronDown } from '@pillar-ui/icons'

import type { CarouselProps } from './carousel.type'
import { classnames } from '@utils/classnames'

const Carousel = ({
  children,
  withIndicators,
  withControls = false,
  orientation = 'horizontal',
  perView = 1,
  gap,
  ...rest
}: CarouselProps) => {
  const option: EmblaOptionsType = orientation === 'vertical' ? { ...rest, axis: 'y' } : { ...rest, axis: 'x' }
  const [carouselRef, emblaApi] = useEmblaCarousel(option)
  const [selected, setSelected] = useState(0)
  const [slidesCount, setSlidesCount] = useState(0)
  const slides = Array.from(Array(10).keys())

  const controlsClassnames = (direction: 'next' | 'previous') =>
    classnames(`carousel--control carousel--control__${direction}`, {
      hide_controls: !withControls,
    })

  const handleSelect = useCallback(() => {
    if (!emblaApi) return
    const slide = emblaApi.selectedScrollSnap()
    setSelected(slide)
    // onSlideChange?.(slide);
  }, [emblaApi, setSelected])

  const handlePrevious = useCallback(() => {
    emblaApi?.scrollPrev()
    // onPreviousSlide?.();
  }, [emblaApi])

  const handleScroll = useCallback(
    (index: any) => {
      emblaApi?.scrollTo(index)
      // onPreviousSlide?.();
    },
    [emblaApi]
  )

  const handleNext = useCallback(() => {
    emblaApi?.scrollNext()
    // onNextSlide?.();
  }, [emblaApi])

  const handleKeydown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        handleNext()
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        handlePrevious()
      }
    },
    [handleNext, handlePrevious]
  )

  useEffect(() => {
    if (emblaApi) {
      handleSelect()
      setSlidesCount(emblaApi.scrollSnapList().length)
      emblaApi.on('select', handleSelect)

      return () => {
        emblaApi.off('select', handleSelect)
      }
    }
  }, [emblaApi, handleSelect])

  const indicators = Array(slidesCount)
    .fill(0)
    .map((_, index) => (
      <button
        key={index}
        data-active={index === selected || undefined}
        className="carousel--indicator"
        aria-hidden
        tabIndex={-1}
        onClick={() => handleScroll(index)}
        aria-label={`indicator number ${index}`}
      />
    ))

  return (
    <div className="carousel" onKeyDownCapture={handleKeydown}>
      <IconButton
        {...controlsClassnames('previous')}
        icon={<ChevronDown direction="left" />}
        corner="full"
        title="Previous"
        onClick={handlePrevious}
        variant="outline"
        color="b"
        disabled={!emblaApi?.canScrollPrev()}
      />
      <div className="carousel--viewport" style={{ '--per-view-carousel': perView } as CSSProperties} ref={carouselRef}>
        <Flex gap={gap} className={`carousel--container__${orientation}`}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel--slide">
              <img
                className="carousel--image"
                src={`https://picsum.photos/id/${120 + slide}/1000/500`}
                alt="Your alt text"
              />
            </div>
          ))}
        </Flex>
      </div>
      <IconButton
        {...controlsClassnames('next')}
        icon={<ChevronDown direction="right" />}
        corner="full"
        title="Next"
        onClick={handleNext}
        variant="outline"
        color="b"
        disabled={!emblaApi?.canScrollNext()}
      />

      {withIndicators && (
        <Flex className="carousel--indicators" gap="3" justify="center" items="center">
          {indicators}
        </Flex>
      )}
    </div>
  )
}

export default Carousel
