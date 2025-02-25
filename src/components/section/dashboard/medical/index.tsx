// MedicalDashboard/index.jsx
import { Paper, Grid } from '@pillar-ui/core'
import { MetricsSection } from './meterics'
import { RevenueStats } from './revenue'
import { PatientVisits } from './patient'
import { PatientsList } from './patients'
import { DoctorsList } from './doctors'
import { UpcomingAppointments } from './upcomingEvent'
import { Treatments } from './treatments'
import PatientsOverviewCard from './patientOverview'

export const MedicalDashboard = () => {
  return (
    <Paper flow="5">
      <MetricsSection />

      <Grid cols={{ default: '1fr', lg: '1.25fr 2fr' }} gap="4">
        <DoctorsList />
        <RevenueStats />
      </Grid>

      <Grid cols={{ default: '1fr', lg: '1.5fr 2fr 2fr' }} gap="4">
        <PatientVisits />
        <UpcomingAppointments />
        <Paper flow="4">
          <Treatments />
          <PatientsOverviewCard />
        </Paper>
      </Grid>

      <PatientsList />
    </Paper>
  )
}
