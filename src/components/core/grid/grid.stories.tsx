import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Grid } from '.'

export default {
  title: 'COMPONENTS/CORE/Grid',
  component: Grid,
  args: {
    children: 'Hello world',
  },
} as ComponentMeta<typeof Grid>

export const EqualColumns = () => {
  return (
    <Grid gap="xs" columns="repeat(12, 1fr)">
      {Array.from({ length: 144 }, (_, index) => (
        <div
          style={{
            background: `${index % 2 === 0 ? 'var(--indigo-8)' : 'var(--indigo-9)'}`,
            borderRadius: '.375rem',
          }}
        ></div>
      ))}
    </Grid>
  )
}

export const ResponsiveColumns = () => {
  return (
    <Grid gap="xs" columns="repeat(4, 1fr)">
      {Array.from({ length: 24 }, () => (
        <div style={{ background: 'var(--indigo-9)', minHeight: '5rem' }} />
      ))}
    </Grid>
  )
}

export const SpanningColumns = () => {
  return (
    <Grid gap="sm" columns="200px 1fr 1fr" rows="1fr 1fr">
      <Grid.Item style={{ minHeight: '10rem', background: 'var(--indigo-8)' }} row="span 2">
        Nice to Meet You
      </Grid.Item>
      <Grid.Item style={{ height: '10rem', background: 'var(--indigo-8)' }}>Hello</Grid.Item>

      <Grid.Item style={{ height: '10rem', background: 'var(--indigo-8)' }}>Hello</Grid.Item>
      <Grid.Item style={{ height: '10rem', background: 'var(--indigo-8)' }} column="span 2">
        Hello
      </Grid.Item>
    </Grid>
  )
}

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

export const PlayGround = Template.bind({})
