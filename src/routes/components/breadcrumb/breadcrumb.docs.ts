export const defaultBreadcrumb = `
import { Breadcrumb } from "@components/composite";

const breadcrumb = () =>{
  return(
    <Breadcrumb>
      <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
      <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
      <Breadcrumb.Item link="./" current> breadcrumb </Breadcrumb.Item>
    </Breadcrumb>
  )
}
`

export const customSeparatorBreadcrumb = `
import { Breadcrumb } from "@components/composite";

const breadcrumb = () =>{
  return(
    <Breadcrumb separator="-">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current> breadcrumb </Breadcrumb.Item>
    </Breadcrumb>
    
    <Breadcrumb separator="*">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current> breadcrumb </Breadcrumb.Item>
    </Breadcrumb>
    
    <Breadcrumb separator={<Minus width={10} />}>
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current> breadcrumb </Breadcrumb.Item>
    </Breadcrumb>
  )
}
`

export const breadcrumbWithIcon = `
import { Breadcrumb } from "@components/composite";

const breadcrumb = () =>{
  return(
    <Breadcrumb>
        <Breadcrumb.Item link="../../..">
            Home
            <Home width={16} />
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../..">
            components
            <Component width={16} />
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../">
            base-ui
            <Home width={16} />
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
            breadcrumb
            <LinkIcon width={16} />
        </Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb>
        <Breadcrumb.Item link="../../..">
            <Home width={16} />
            Home
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../..">
            <Component width={16} />
            components
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../">
            <Home width={16} />
            base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
            <LinkIcon width={16} />
            breadcrumb
        </Breadcrumb.Item>
    </Breadcrumb>
  )
}
`

export const sizeBreadcrumb = `
import { Breadcrumb } from "@components/composite";

const breadcrumb = () =>{
  return(
    <Breadcrumb separator="-">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current> breadcrumb </Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb size="md" separator="/">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current> breadcrumb </Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb size="lg">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current> breadcrumb </Breadcrumb.Item>
    </Breadcrumb>
  )
}
`
