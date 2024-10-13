export const outlineAlert = `
import { Alert } from "@pillar-ui/core";

const AlertOutline = ()=>{
    return(
        <Alert message="Hello world I like this message" type="danger" />
        <Alert message="Hello world I like this message" type="info" />
        <Alert message="Hello world I like this message" type="warning" />
        <Alert message="Hello world I like this message" type="success" />
    )
}`

export const fillAlert = `
import { Alert } from "@pillar-ui/core";

const AlertOutline = ()=>{
    return(
        <Alert variant='fill' message="Hello world I like this message" type="danger" />
        <Alert variant='fill' message="Hello world I like this message" type="info" />
        <Alert variant='fill' message="Hello world I like this message" type="warning" />
        <Alert variant='fill' message="Hello world I like this message" type="success" />
    )
}`

export const outlineAlertTitle = `
import { Alert } from "@pillar-ui/core";

const AlertOutline = ()=>{
    return(
        <Alert title='Hello' message="Hello world I like this message" type="danger" />
        <Alert title='Hello' message="Hello world I like this message" type="info" />
        <Alert title='Hello' message="Hello world I like this message" type="warning" />
        <Alert title='Hello' message="Hello world I like this message" type="success" />
    )
}`

export const outlineAlertIcon = `
import { Alert } from "@pillar-ui/core";

const AlertOutline = ()=>{
    return(
        <Alert showIcon  title='Hello' message="Hello world I like this message" type="danger" />
        <Alert showIcon  title='Hello' message="Hello world I like this message" type="info" />
        <Alert showIcon  title='Hello' message="Hello world I like this message" type="warning" />
        <Alert showIcon  title='Hello' message="Hello world I like this message" type="success" />
    )
}`
