export const defaultFlex = `
import { Flex } from "@components/core";

const FlexTest = ()=>{
    return(
      <Flex gap="sm">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Flex>
    )
}`

export const centeredFlex = `
import { Flex } from "@components/core";

const FlexTest = ()=>{
    return(
      <Flex gap="sm" items="center" justify="center">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Flex>
    )
}`

export const justifyAroundFlex = `
import { Flex } from "@components/core";

const FlexTest = ()=>{
    return(
      <Flex gap="sm" items="center" justify="around">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Flex>
    )
}`

export const justifyBetweenFlex = `
import { Flex } from "@components/core";

const FlexTest = ()=>{
    return(
      <Flex gap="sm" items="center" justify="between">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Flex>
    )
}`

export const justifyEvenlyFlex = `
import { Flex } from "@components/core";

const FlexTest = ()=>{
    return(
      <Flex gap="sm" items="center" justify="evenly">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Flex>
    )
}`

export const wrapFlex = `
import { Flex } from "@components/core";

const FlexWrap = ()=>{
    return(
    <Flex gap="sm" wrap>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
    </Flex>
    )
}`

export const flexGrowEqual = `
import { Flex } from "@components/core";

const FlexWrap = ()=>{
    return(
      <Flex gap="sm" wrap>
        <Box className="u_flex-1" />
        <Box className="u_flex-1" />
        <Box className="u_flex-1" />
        <Box className="u_flex-1" />
      </Flex>
    )
}`

export const flexGrowDifferent = `
import { Flex } from "@components/core";

const FlexWrap = ()=>{
    return(
      <Flex gap="sm" wrap>
        <Box className="u_flex-1" />
        <Box className="u_flex-2" />
        <Box className="u_flex-1" />
      </Flex>
    )
}`

export const flexDirectionCol = `
import { Flex } from "@components/core";

const FlexWrap = ()=>{
    return(
      <Flex gap="sm" direction='column'>
        <Box  />
        <Box />
        <Box  />
      </Flex>
    )
}`

export const flexNested = `
import { Flex } from "@components/core";

const FlexWrap = ()=>{
    return(
        <Flex gap="sm" direction="column">
          <Box className="u_flex-1" content="header" />
            <Flex gap="sm">
              <Box className="u_flex-1" content="sidebar" />
              <Box className="u_flex-2" content="main" />
              <Box className="u_flex-1" content="sidebar" />
            </Flex>
          <Box className="u_flex-1" content="footer" />
        </Flex>
    )
}`

export const gridTwoColumns = `
import { Grid } from "@components/core";

const GridTest = ()=>{
    return(
      <Grid columns="1fr 1fr" gap="sm">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Grid>
    )
}`
export const gridColumnsDifferentValues = `
import { Grid } from "@components/core";

const GridTest = ()=>{
    return(
      <Grid columns=".5fr 2fr auto 100px" gap="sm">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Grid>
    )
}`

export const gridLayoutTemplate = `
import { Grid } from "@components/core";

const GridTest = ()=>{
    return(
      <Grid columns="100px 1fr 100px" rows="2rem minmax(6rem, 1fr) 2rem" gap="sm">
        <Grid.Item column="1/4" style={{ background: "var(--slate-8)" }}>Header <Grid.Item>
        <Grid.Item column="span 1" style={{ background: "var(--slate-8)" }}> sidebar </Grid.Item>
        <Grid.Item column="span 1" style={{ background: "var(--slate-8)" }}> main </Grid.Item>
        <Grid.Item column="span 1" style={{ background: "var(--slate-8)" }}> sidebar </Grid.Item>
        <Grid.Item column="span 3" style={{ background: "var(--slate-8)" }}> Footer </Grid.Item>
      </Grid>
    )
}`

export const gridLayoutTwoTemplate = `
import { Grid } from "@components/core";

const GridTest = ()=>{
    return(
      <Grid
        columns="100px 1fr 100px"
        rows="2rem minmax(6rem, 1fr) 2rem"
        gap="sm"
      >
        <Grid.Item column="2/4" style={{ background: "var(--slate-8)" }}>
          Header
        </Grid.Item>
        <Grid.Item
          column="span 1"
          row="1 / span 3"
          style={{ background: "var(--slate-8)" }}
        >
          sidebar
        </Grid.Item>
        <Grid.Item column="2 / 3" style={{ background: "var(--slate-8)" }}>
          main
        </Grid.Item>
        <Grid.Item column="3 / 4" style={{ background: "var(--slate-8)" }}>
          sidebar
        </Grid.Item>
        <Grid.Item
          column="2 / span 2"
          style={{ background: "var(--slate-8)" }}
        >
          Footer
        </Grid.Item>
      </Grid>
    )
}`
