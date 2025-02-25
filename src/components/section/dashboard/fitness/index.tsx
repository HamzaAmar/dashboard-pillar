'use client'
// import WorkoutAnalytics from './WorkoutAnalytics'
// import HeartRateAnalysis from './HeartRateAnalysis'
// import SleepQualityPatterns from './SleepQualityPatterns'
// import NutritionHydration from './NutritionHydration'
// import ProgressGoalTracking from './ProgressGoalTracking'
// import PerformanceMetricsTrends from './PerformanceMetricsTrends'
import RadarChartAnalysis from './analysis'
import { MetricOverview } from './metricOverview'
import { Recommendation } from './recommandition'
import { Activities } from './activities'
import { Grid, Paper } from '@pillar-ui/core'
import { PerformanceMetricsTrends } from './performanceTrend'
// import DayActivitiesDetailedView from './DayActivitiesDetailedView'

export default function FitnessDashboard() {
  return (
    <Paper flow="4" className="">
      <MetricOverview />
      <Recommendation />
      <Activities />
      {/* <WorkoutAnalytics />
      <HeartRateAnalysis />
      <SleepQualityPatterns />
      <NutritionHydration />
      <PerformanceMetricsTrends />
      <ProgressGoalTracking />
       */}
      <Grid cols={{ default: '1fr', lg: '2fr 1fr' }} gap="4">
        <PerformanceMetricsTrends />
        <RadarChartAnalysis />
      </Grid>
      {/* <DayActivitiesDetailedView date={selectedDate} onDateChange={setSelectedDate} /> */}
    </Paper>
  )
}
