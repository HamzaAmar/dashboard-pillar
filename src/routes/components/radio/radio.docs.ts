export const radioButtonColor = `
import { Radio } from "@components/core";

const RadioTest = ()=>{
    return(
        <Radio color="danger" label="danger" />
        <Radio color="success" label="success" />
        <Radio color="purple" label="purple" />
        <Radio color="indigo" label="indigo" />
        <Radio color="slate" label="slate" />
        <Radio color="warning" label="warning" />
    )
}`

export const defaultCheckedRadio = `
import { Radio } from "@components/core";

const RadioTest = ()=>{
    return(
      <Radio defaultChecked color="danger" label="danger" />
      <Radio defaultChecked color="success" label="success" />
      <Radio defaultChecked color="purple" label="purple" />
      <Radio defaultChecked color="indigo" label="indigo" />
      <Radio defaultChecked color="slate" label="slate" />
      <Radio defaultChecked color="warning" label="warning" />
    )
}`

export const radioButtonDisabled = `
import { Radio } from "@components/core";

const RadioTest = ()=>{
    return(
      <Radio disabled defaultChecked color="danger" label="danger" />
      <Radio disabled color="success" label="success" />
      <Radio disabled color="purple" label="purple" />
      <Radio disabled color="indigo" label="indigo" />
      <Radio disabled color="slate" label="slate" />
      <Radio disabled defaultChecked color="warning" label="warning" />
    )
}`

export const radioButtonSize = `
import { Radio } from "@components/core";

const RadioTest = ()=>{
    return(
      <Radio size="sm" label="danger" />
      <Radio label="danger" />
      <Radio size="lg" label="success" />
    )
}`

export const radioButtonGroup = `
import { Radio, RadioGroup } from "@components/core";

const RadioTest = ()=>{
    return(
      <RadioGroup label="Rating" color="danger" name="hello">
        <Radio defaultChecked label="Bad" />
        <Radio defaultChecked label="Poor" />
        <Radio defaultChecked label="Medium" />
        <Radio defaultChecked label="Nice" />
        <Radio defaultChecked label="Excellent" />
      </RadioGroup>
    )
}`

export const radioButtonGroupVertical = `
import { Radio , RadioGroup} from "@components/core";

const RadioTest = ()=>{
    return(
      <RadioGroup direction="vertical" label="Rating" color="danger">
          <Radio defaultChecked label="Bad" />
          <Radio defaultChecked label="Poor" />
          <Radio defaultChecked label="Medium" />
          <Radio defaultChecked label="Nice" />
          <Radio defaultChecked label="Excellent" />
       </RadioGroup>
    )
}`
