import { Grid, Heading, Paper, Text } from '@pillar-ui/core'
import { ChartLine, Coffee, Scale } from '@pillar-ui/icons'

export const Recommendation = () => {
  return (
    <Paper className="l_box" flow="4">
      <Heading size="4" className="mb-4">
        Personalized Recommendations
      </Heading>
      <Grid cols={{ default: '1fr', md: 'repeat(3, 1fr)' }} gap="4">
        <Paper className="l_box">
          <ChartLine className="text-blue-500" />
          <Text weight="6">Increase Daily Steps</Text>
          <Text size="3" low>
            Try to reach 12,000 steps by adding short walks during breaks
          </Text>
        </Paper>
        <Paper className="l_box">
          <Coffee className="text-green-500" />
          <Text weight="6">Improve Sleep Quality</Text>
          <Text size="3" low>
            Aim for 7-8 hours of sleep and maintain consistent sleep schedule
          </Text>
        </Paper>
        <Paper className="l_box">
          <Scale className="text-purple-500" />
          <Text weight="6">Balance Nutrition</Text>
          <Text size="3" low>
            Focus on protein intake and reduce evening snacking
          </Text>
        </Paper>
      </Grid>
    </Paper>
  )
}
