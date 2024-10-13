export const defaultBreadcrumb = `
import { Breadcrumb } from "@components/composite";

const breadcrumb = () =>{
  return(
    <Breadcrumb>
      <BreadcrumbItem link="../..">components</BreadcrumbItem>
      <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
      <BreadcrumbItem link="./" current> breadcrumb </BreadcrumbItem>
    </Breadcrumb>
  )
}
`

export const customSeparatorBreadcrumb = `
import { Breadcrumb } from "@components/composite";

const breadcrumb = () =>{
  return(
    <Breadcrumb separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current> breadcrumb </BreadcrumbItem>
    </Breadcrumb>
    
    <Breadcrumb separator="*">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current> breadcrumb </BreadcrumbItem>
    </Breadcrumb>
    
    <Breadcrumb separator={<Minus width={10} />}>
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current> breadcrumb </BreadcrumbItem>
    </Breadcrumb>
  )
}
`

export const breadcrumbWithIcon = `
import { Breadcrumb } from "@components/composite";

const breadcrumb = () =>{
  return(
    <Breadcrumb>
        <BreadcrumbItem link="../../..">
            Home
            <Home width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem link="../..">
            components
            <Component width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem link="../">
            base-ui
            <Home width={16} />
        </BreadcrumbItem>
        <BreadcrumbItem link="./" current>
            breadcrumb
            <LinkIcon width={16} />
        </BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb>
        <BreadcrumbItem link="../../..">
            <Home width={16} />
            Home
        </BreadcrumbItem>

        <BreadcrumbItem link="../..">
            <Component width={16} />
            components
        </BreadcrumbItem>

        <BreadcrumbItem link="../">
            <Home width={16} />
            base-ui
        </BreadcrumbItem>
        <BreadcrumbItem link="./" current>
            <LinkIcon width={16} />
            breadcrumb
        </BreadcrumbItem>
    </Breadcrumb>
  )
}
`

export const sizeBreadcrumb = `
import { Breadcrumb } from "@components/composite";

const breadcrumb = () =>{
  return(
    <Breadcrumb separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current> breadcrumb </BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb size="5" separator="/">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current> breadcrumb </BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb size="6">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current> breadcrumb </BreadcrumbItem>
    </Breadcrumb>
  )
}
`
