export const radioButtonColor = `
import { Radio } from "@pillar-ui/core";

const RadioTest = ()=>{
    return(
        <Radio color="d" label="danger" />
        <Radio color="su" label="success" />
        <Radio color="se" label="purple" />
        <Radio color="i" label="indigo" />
        <Radio color="b" label="slate" />
        <Radio color="w" label="warning" />
    )
}`

export const defaultCheckedRadio = `
import { Radio } from "@pillar-ui/core";

const RadioTest = ()=>{
    return(
      <Radio defaultChecked color="d" label="danger" />
      <Radio defaultChecked color="su" label="success" />
      <Radio defaultChecked color="se" label="purple" />
      <Radio defaultChecked color="i" label="indigo" />
      <Radio defaultChecked color="b" label="slate" />
      <Radio defaultChecked color="w" label="warning" />
    )
}`

export const radioButtonDisabled = `
import { Radio } from "@pillar-ui/core";

const RadioTest = ()=>{
    return(
      <Radio disabled defaultChecked color="d" label="danger" />
      <Radio disabled color="su" label="success" />
      <Radio disabled color="se" label="purple" />
      <Radio disabled color="i" label="indigo" />
      <Radio disabled color="b" label="slate" />
      <Radio disabled defaultChecked color="w" label="warning" />
    )
}`

export const radioButtonSize = `
import { Radio } from "@pillar-ui/core";

const RadioTest = ()=>{
    return(
      <Radio size="4" label="danger" />
      <Radio label="danger" />
      <Radio size="6" label="success" />
    )
}`

export const radioButtonGroup = `
import { Radio, RadioGroup } from "@pillar-ui/core";

const RadioTest = ()=>{
    return(
      <RadioGroup label="Rating" color="d" name="hello">
        <Radio defaultChecked label="Bad" />
        <Radio defaultChecked label="Poor" />
        <Radio defaultChecked label="Medium" />
        <Radio defaultChecked label="Nice" />
        <Radio defaultChecked label="Excellent" />
      </RadioGroup>
    )
}`

export const radioButtonGroupVertical = `
import { Radio , RadioGroup} from "@pillar-ui/core";

const RadioTest = ()=>{
    return(
      <RadioGroup direction="vertical" label="Rating" color="d">
          <Radio defaultChecked label="Bad" />
          <Radio defaultChecked label="Poor" />
          <Radio defaultChecked label="Medium" />
          <Radio defaultChecked label="Nice" />
          <Radio defaultChecked label="Excellent" />
       </RadioGroup>
    )
}`
