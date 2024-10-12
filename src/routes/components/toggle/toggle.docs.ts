export const toggleColor = `
import { Radio } from "@components/core";

const RadioTest = ()=>{
    return(
        <Toggle label="hello" defaultPressed color="danger" />
        <Toggle label="hello" defaultPressed color="success" />
        <Toggle label="hello" defaultPressed color="purple" />
        <Toggle label="hello" defaultPressed color="indigo" />
        <Toggle label="hello" defaultPressed color="slate" />
        <Toggle label="hello" defaultPressed color="warning" />
    )
}`

export const toggleSize = `
import { Radio } from "@components/core";

const RadioTest = ()=>{
    return(
        <Radio size='sm' label="danger" />
        <Radio size='md' label="success" />
        <Radio size='lg' label="purple" />
    )
}`

export const toggleDisabled = `
import { Radio } from "@components/core";

const RadioTest = ()=>{
    return(
        <Toggle label="hello" disabled color="danger" />
        <Toggle label="hello" disabled color="success" />
        <Toggle label="hello" disabled color="purple" />
        <Toggle label="hello" disabled color="indigo" />
        <Toggle label="hello" disabled color="slate" />
        <Toggle label="hello" disabled color="warning" />
    )
}`
