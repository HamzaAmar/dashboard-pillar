export const sliderColor = `
import { Slider } from "@pillar-ui/core";

const SliderTest = ()=>{
    return(
      <>
        <Slider defaultValue={[55]}>
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="su">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="w">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="i">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="se">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="yellow">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="mint">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="b">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="mint">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
      </>
    )
}`

export const sliderOrientation = `
import { Slider } from "@pillar-ui/core";

const SliderTest = ()=>{
    return(
      <>
        <Slider orientation="vertical" defaultValue={[55]}>
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="su">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
      </>
    )
}`

export const sliderPrefixSuffix = `
import { Slider } from "@pillar-ui/core";
import { VolumeOff, Volume, CirclePlus, Minus } from '@components/icons';

const squareStyle = {
    width: "1.5rem",
    height: "1.5rem",
    background: "var(--indigo-9)",
    color: "white",
    borderRadius: ".25em",
  };

const SliderTest = ()=>{
    return(
        <Flex wrap gap="5" direction="col" color="d">
            <Slider
              sliderPrefix="0"
              SliderSuffix="100"
              defaultValue={[55]}
             
            >
            label="volume"    <Slider.Track />
              <Slider.Thumb />
            </Slider>
            <Slider
              sliderPrefix={<VolumeOff width="20" />}
              SliderSuffix={<Volume width="20" />}
              defaultValue={[55]}
             
              color="su"
            label="volume"  >
              <Slider.Track />
              <Slider.Thumb />
            </Slider>
            <Slider
              sliderPrefix={<Text size="3">A</Text>}
              SliderSuffix={<Text weight="7">A</Text>}
              defaultValue={[55]}
             
              color="w"
            label="volume"  >
              <Slider.Track />
              <Slider.Thumb />
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
            label="volume"  >
              <Slider.Track />
              <Slider.Thumb />
            </Slider>
        </Flex>
    )
}`

export const sliderThumbSize = `
import { Slider } from "@pillar-ui/core";

const SliderTest = ()=>{
    return(
      <>
      <Slider defaultValue={[55]}>
        <Slider.Track />
        <Slider.Thumb size="4" label="volume"  />
        </Slider>
        <Slider defaultValue={[55]} color="su">
        <Slider.Track />
        <Slider.Thumb size="5"  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="w">
        <Slider.Track />
        <Slider.Thumb size="6"  label="volume" />
      </Slider>
      </>
    )
}`

export const sliderThumbVariant = `
import { Slider } from "@pillar-ui/core";

const SliderTest = ()=>{
  return(
   <>
    <Slider defaultValue={[55]}>
        <Slider.Track />
        <Slider.Thumb variant label="volume" ="outline" />
    </Slider>
    <Slider defaultValue={[55]} color="su">
      <Slider.Track />
      <Slider.Thumb variant=" label="volume" solid" />
    </Slider>
   </>
  )
}`

export const sliderThumbCorner = `
import { Slider } from "@pillar-ui/core";

const SliderTest = ()=>{
  return(
   <>
    <Slider defaultValue={[55]} color="su">
     <Slider.Track />
     <Slider.Thumb corner="sh label="volume" arp" />
    </Slider>
    <Slider defaultValue={[55]}>
      <Slider.Track />
      <Slider.Thumb corner="2 label="volume" xs" />
    </Slider>
    <Slider defaultValue={[55]}>
      <Slider.Track />
      <Slider.Thumb corner="x label="volume" s" />
    </Slider>
    <Slider defaultValue={[55]} color="su">
      <Slider.Track />
      <Slider.Thumb corner="s label="volume" m" />
    </Slider>
    <Slider defaultValue={[55]} color="su">
      <Slider.Track />
      <Slider.Thumb corner="l label="volume" g" />
    </Slider>

    <Slider defaultValue={[55]} color="su">
      <Slider.Track />
      <Slider.Thumb corner="x label="volume" l" />
    </Slider>
    <Slider defaultValue={[55]} color="su">
      <Slider.Track />
      <Slider.Thumb corner="2 label="volume" xl" />
    </Slider>
    <Slider defaultValue={[55]}>
      <Slider.Track />
      <Slider.Thumb corner="f label="volume" ull" />
    </Slider>
   </>
  )
}`
