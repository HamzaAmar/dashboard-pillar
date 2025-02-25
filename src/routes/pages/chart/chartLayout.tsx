import { Heading, Paper } from '@pillar-ui/core'
import React from 'react'

export const ChartLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <Paper flow="7">
      <Heading as="h2" truncate="1" size="4">
        {title}
      </Heading>
      {children}
    </Paper>
  )
}
