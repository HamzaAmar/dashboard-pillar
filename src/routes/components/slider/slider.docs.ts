export const sliderColor = `
import { Slider } from "@components/core";

const SliderTest = ()=>{
    return(
      <>
        <Slider defaultValue={[55]}>
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="success">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="warning">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="indigo">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="purple">
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
        <Slider defaultValue={[55]} color="slate">
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
import { Slider } from "@components/core";

const SliderTest = ()=>{
    return(
      <>
        <Slider orientation="vertical" defaultValue={[55]}>
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="success">
            <Slider.Track />
            <Slider.Thumb  label="volume" />
        </Slider>
      </>
    )
}`

export const sliderPrefixSuffix = `
import { Slider } from "@components/core";
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
        <Flex wrap gap="md" direction="column" color="danger">
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
             
              color="success"
            label="volume"  >
              <Slider.Track />
              <Slider.Thumb />
            </Slider>
            <Slider
              sliderPrefix={<Text size="xs">A</Text>}
              SliderSuffix={<Text weight="bold">A</Text>}
              defaultValue={[55]}
             
              color="warning"
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
             
              color="warning"
            label="volume"  >
              <Slider.Track />
              <Slider.Thumb />
            </Slider>
        </Flex>
    )
}`

export const sliderThumbSize = `
import { Slider } from "@components/core";

const SliderTest = ()=>{
    return(
      <>
      <Slider defaultValue={[55]}>
        <Slider.Track />
        <Slider.Thumb size="sm" label="volume"  />
        </Slider>
        <Slider defaultValue={[55]} color="success">
        <Slider.Track />
        <Slider.Thumb size="md"  label="volume" />
        </Slider>
        <Slider defaultValue={[55]} color="warning">
        <Slider.Track />
        <Slider.Thumb size="lg"  label="volume" />
      </Slider>
      </>
    )
}`

export const sliderThumbVariant = `
import { Slider } from "@components/core";

const SliderTest = ()=>{
  return(
   <>
    <Slider defaultValue={[55]}>
        <Slider.Track />
        <Slider.Thumb variant label="volume" ="outline" />
    </Slider>
    <Slider defaultValue={[55]} color="success">
      <Slider.Track />
      <Slider.Thumb variant=" label="volume" solid" />
    </Slider>
   </>
  )
}`

export const sliderThumbCorner = `
import { Slider } from "@components/core";

const SliderTest = ()=>{
  return(
   <>
    <Slider defaultValue={[55]} color="success">
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
    <Slider defaultValue={[55]} color="success">
      <Slider.Track />
      <Slider.Thumb corner="s label="volume" m" />
    </Slider>
    <Slider defaultValue={[55]} color="success">
      <Slider.Track />
      <Slider.Thumb corner="l label="volume" g" />
    </Slider>

    <Slider defaultValue={[55]} color="success">
      <Slider.Track />
      <Slider.Thumb corner="x label="volume" l" />
    </Slider>
    <Slider defaultValue={[55]} color="success">
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
