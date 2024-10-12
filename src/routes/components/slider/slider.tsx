import { Breadcrumb, Flex, Grid, Heading, Slider, Text } from '@components/core'
import { CirclePlus, Minus, Volume, VolumeOff } from '@components/icons'
import { Preview } from '@components/section'
import * as docs from './slider.docs'

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
        <Heading as="h1" id="slider--page-id" size="xs">
          Slider Docs Page
        </Heading>
        <Breadcrumb size="sm">
          <Breadcrumb.Item link="../../..">Home</Breadcrumb.Item>
          <Breadcrumb.Item link="../..">Components</Breadcrumb.Item>
          <Breadcrumb.Item link="../">Base UI</Breadcrumb.Item>
          <Breadcrumb.Item link="./" current>
            Slider
          </Breadcrumb.Item>
        </Breadcrumb>
      </Flex>
      <Grid columns="minmax(0,1fr) minmax(0,1fr)" className="md_grid-one" gap="sm">
        <Preview
          title="Slider Color"
          description="Slider Color default is primary possible values( danger, success, warning, purple , yellow, slate, mint, indigo )"
          code={docs.sliderColor}
        >
          <Flex wrap gap="md" direction="column" color="danger">
            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="success">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="warning">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="indigo">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="purple">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="yellow">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="mint">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="slate">
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="mint">
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
          <Flex wrap gap="md" direction="column" color="danger">
            <Slider orientation="vertical" defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="success">
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
          <Flex wrap gap="md" direction="column" color="danger">
            <Slider sliderPrefix="0" SliderSuffix="100" defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider
              sliderPrefix={<VolumeOff width="20" />}
              SliderSuffix={<Volume width="20" />}
              defaultValue={[55]}
              color="success"
            >
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
            <Slider
              sliderPrefix={<Text size="xs">A</Text>}
              SliderSuffix={<Text weight="bold">A</Text>}
              defaultValue={[55]}
              color="warning"
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
              color="warning"
            >
              <Slider.Track />
              <Slider.Thumb label="volume" />
            </Slider>
          </Flex>
        </Preview>

        <Preview title="Slider Thumb Size" description="default " code={docs.sliderThumbSize}>
          <Flex wrap gap="md" direction="column" color="danger">
            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" size="sm" />
            </Slider>
            <Slider defaultValue={[55]} color="success">
              <Slider.Track />
              <Slider.Thumb size="md" label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="warning">
              <Slider.Track />
              <Slider.Thumb size="lg" label="volume" />
            </Slider>
          </Flex>
        </Preview>

        <Preview
          title="Slider Thumb Variant"
          description="default solid possible values(solid, outline)"
          code={docs.sliderThumbVariant}
        >
          <Flex wrap gap="md" direction="column" color="danger">
            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb variant="outline" label="volume" />
            </Slider>
            <Slider defaultValue={[55]} color="success">
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
          <Flex wrap gap="md" direction="column" color="danger">
            <Slider defaultValue={[55]} color="success">
              <Slider.Track />
              <Slider.Thumb label="volume" corner="sharp" />
            </Slider>
            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" corner="2xs" />
            </Slider>
            <Slider defaultValue={[55]}>
              <Slider.Track />
              <Slider.Thumb label="volume" corner="xs" />
            </Slider>
            <Slider defaultValue={[55]} color="success">
              <Slider.Track />
              <Slider.Thumb label="volume" corner="sm" />
            </Slider>
            <Slider defaultValue={[55]} color="success">
              <Slider.Track />
              <Slider.Thumb label="volume" corner="lg" />
            </Slider>

            <Slider defaultValue={[55]} color="success">
              <Slider.Track />
              <Slider.Thumb label="volume" corner="xl" />
            </Slider>
            <Slider defaultValue={[55]} color="success">
              <Slider.Track />
              <Slider.Thumb label="volume" corner="2xl" />
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
