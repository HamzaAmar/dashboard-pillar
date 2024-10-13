export const defaultFlex = `
import { Flex } from "@pillar-ui/core";

const FlexTest = ()=>{
    return(
      <Flex gap="4">
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
import { Flex } from "@pillar-ui/core";

const FlexTest = ()=>{
    return(
      <Flex gap="4" items="center" justify="center">
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
import { Flex } from "@pillar-ui/core";

const FlexTest = ()=>{
    return(
      <Flex gap="4" items="center" justify="around">
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
import { Flex } from "@pillar-ui/core";

const FlexTest = ()=>{
    return(
      <Flex gap="4" items="center" justify="between">
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
import { Flex } from "@pillar-ui/core";

const FlexTest = ()=>{
    return(
      <Flex gap="4" items="center" justify="evenly">
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
import { Flex } from "@pillar-ui/core";

const FlexWrap = ()=>{
    return(
    <Flex gap="4" wrap>
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
import { Flex } from "@pillar-ui/core";

const FlexWrap = ()=>{
    return(
      <Flex gap="4" wrap>
        <Box className="u_flex-1" />
        <Box className="u_flex-1" />
        <Box className="u_flex-1" />
        <Box className="u_flex-1" />
      </Flex>
    )
}`

export const flexGrowDifferent = `
import { Flex } from "@pillar-ui/core";

const FlexWrap = ()=>{
    return(
      <Flex gap="4" wrap>
        <Box className="u_flex-1" />
        <Box className="u_flex-2" />
        <Box className="u_flex-1" />
      </Flex>
    )
}`

export const flexDirectionCol = `
import { Flex } from "@pillar-ui/core";

const FlexWrap = ()=>{
    return(
      <Flex gap="4" direction='column'>
        <Box  />
        <Box />
        <Box  />
      </Flex>
    )
}`

export const flexNested = `
import { Flex } from "@pillar-ui/core";

const FlexWrap = ()=>{
    return(
        <Flex gap="4" direction="col">
          <Box className="u_flex-1" content="header" />
            <Flex gap="4">
              <Box className="u_flex-1" content="sidebar" />
              <Box className="u_flex-2" content="main" />
              <Box className="u_flex-1" content="sidebar" />
            </Flex>
          <Box className="u_flex-1" content="footer" />
        </Flex>
    )
}`

export const gridTwoColumns = `
import { Grid } from "@pillar-ui/core";

const GridTest = ()=>{
    return(
      <Grid grid="1fr 1fr" gap="4">
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
import { Grid } from "@pillar-ui/core";

const GridTest = ()=>{
    return(
      <Grid grid=".5fr 2fr auto 100px" gap="4">
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
import { Grid } from "@pillar-ui/core";

const GridTest = ()=>{
    return(
      <Grid grid="100px 1fr 100px" rows="2rem minmax(6rem, 1fr) 2rem" gap="4">
        <Grid.Item column="1/4" style={{ background: "var(--slate-8)" }}>Header <Grid.Item>
        <Grid.Item column="span 1" style={{ background: "var(--slate-8)" }}> sidebar </Grid.Item>
        <Grid.Item column="span 1" style={{ background: "var(--slate-8)" }}> main </Grid.Item>
        <Grid.Item column="span 1" style={{ background: "var(--slate-8)" }}> sidebar </Grid.Item>
        <Grid.Item column="span 3" style={{ background: "var(--slate-8)" }}> Footer </Grid.Item>
      </Grid>
    )
}`

export const gridLayoutTwoTemplate = `
import { Grid } from "@pillar-ui/core";

const GridTest = ()=>{
    return(
      <Grid
        grid="100px 1fr 100px"
        rows="2rem minmax(6rem, 1fr) 2rem"
        gap="4"
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
