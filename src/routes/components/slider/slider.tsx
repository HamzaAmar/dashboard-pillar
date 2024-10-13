import { Breadcrumb, BreadcrumbItem, Flex, Grid, Heading, Text } from '@pillar-ui/core'
import { CirclePlus, Minus, Volume, VolumeOff } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './slider.docs'
import { Slider } from '@components/composition/slider'

const slider = () => {
  const squareStyle = {
    width: '1.5rem',
    height: '1.5rem',
    background: 'var(--indigo-9)',
    color: 'white',
    borderRadius: '.25em',
  }
  return (
    <section aria-labelledby="slider--page-id" className="l_flow-lg">
      <Flex items="center" wrap justify="between">
        <Heading as="h1" id="slider--page-id" size="3">
          Slider Docs Page
        </Heading>
        <Breadcrumb size="4">
          <BreadcrumbItem link="../../..">Home</BreadcrumbItem>
          <BreadcrumbItem link="../..">Components</BreadcrumbItem>
          <BreadcrumbItem link="../">Base UI</BreadcrumbItem>
          <BreadcrumbItem link="./" current>
            Slider
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Grid grid="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="4">
        <Preview
          title="Slider Color"
          description="Slider Color default is primary possible values( danger, success, warning, purple , yellow, slate, mint, indigo )"
          code={docs.sliderColor}
        >
          <Flex wrap gap="5" direction="col" color="d">
            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="su">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="w">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="i">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="se">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>

            <Slider defaultValue={[55]} color="b">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
          </Flex>
        </Preview>
        <Preview
          title="Slider Orientation"
          description="default value is horizontal possible values (horizontal, vertical)"
          code={docs.sliderOrientation}
        >
          <Flex wrap gap="5" direction="col" color="d">
            <Slider orientation="vertical" defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="su">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
          </Flex>
        </Preview>

        <Preview
          title="Slider Prefix suffix"
          description="Prefix and suffix is a React Node can accept react element or string or number"
          code={docs.sliderPrefixSuffix}
        >
          <Flex wrap gap="5" direction="col" color="d">
            <Slider sliderPrefix="0" SliderSuffix="100" defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider
              sliderPrefix={<VolumeOff width="20" />}
              SliderSuffix={<Volume width="20" />}
              defaultValue={[55]}
              color="su"
            >
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider
              sliderPrefix={<Text size="3">A</Text>}
              SliderSuffix={<Text weight="7">A</Text>}
              defaultValue={[55]}
              color="w"
            >
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider
              sliderPrefix={
                <Flex items="center" justify="center" style={squareStyle}>
                  <Minus width="16" />
                </Flex>
              }
              SliderSuffix={
                <Flex items="center" justify="center" style={squareStyle}>
                  <CirclePlus width="16" />
                </Flex>
              }
              defaultValue={[55]}
              color="w"
            >
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
          </Flex>
        </Preview>

        <Preview title="Slider Thumb Size" description="default " code={docs.sliderThumbSize}>
          <Flex wrap gap="5" direction="col" color="d">
            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" size="4" />
            </Slider>
            <Slider defaultValue={[55]} color="su">
              <Slider.Track />
              <Slider.Thumb size="5" label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="w">
              <Slider.Track />
              <Slider.Thumb size="6" label="volume" />
            </Slider>
          </Flex>
        </Preview>

        <Preview
          title="Slider Thumb Variant"
          description="default solid possible values(solid, outline)"
          code={docs.sliderThumbVariant}
        >
          <Flex wrap gap="5" direction="col" color="d">
            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb variant="outline" label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="su">
              <Slider.Track />
              <Slider.Thumb variant="solid" label="volume" />
            </Slider>
          </Flex>
        </Preview>

        <Preview
          title="Slider Thumb Corner"
          description="default circle possible values (circle, radius, sharp)"
          code={docs.sliderThumbCorner}
        >
          <Flex wrap gap="5" direction="col" color="d">
            <Slider defaultValue={[55]} color="su">
              <Slider.Track />
              <Slider.Thumb label="volume" corner="0" />
            </Slider>
            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" corner="1" />
            </Slider>
            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" corner="2" />
            </Slider>
            <Slider defaultValue={[55]} color="su">
              <Slider.Track />
              <Slider.Thumb label="volume" corner="3" />
            </Slider>
            <Slider defaultValue={[55]} color="su">
              <Slider.Track />
              <Slider.Thumb label="volume" corner="5" />
            </Slider>

            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" corner="full" />
            </Slider>
          </Flex>
        </Preview>
      </Grid>
    </section>
  )
}

export default slider
