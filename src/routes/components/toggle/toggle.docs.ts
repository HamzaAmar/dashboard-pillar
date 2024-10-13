export const toggleColor = `
import { Radio } from "@pillar-ui/core";

const RadioTest = ()=>{
    return(
        <Toggle label="hello" defaultPressed color="d" />
        <Toggle label="hello" defaultPressed color="su" />
        <Toggle label="hello" defaultPressed color="se" />
        <Toggle label="hello" defaultPressed color="i" />
        <Toggle label="hello" defaultPressed color="b" />
        <Toggle label="hello" defaultPressed color="w" />
    )
}`

export const toggleSize = `
import { Radio } from "@pillar-ui/core";

const RadioTest = ()=>{
    return(
        <Radio size='sm' label="danger" />
        <Radio size='md' label="success" />
        <Radio size='lg' label="purple" />
    )
}`

export const toggleDisabled = `
import { Radio } from "@pillar-ui/core";

const RadioTest = ()=>{
    return(
        <Toggle label="hello" disabled color="d" />
        <Toggle label="hello" disabled color="su" />
        <Toggle label="hello" disabled color="se" />
        <Toggle label="hello" disabled color="i" />
        <Toggle label="hello" disabled color="b" />
        <Toggle label="hello" disabled color="w" />
    )
}`
