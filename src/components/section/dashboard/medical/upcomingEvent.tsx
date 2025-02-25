// components/UpcomingAppointments.jsx
import { Paper, Heading, Text, Flex, Button, IconButton } from '@pillar-ui/core'
import { Clock, Video, DotsHorizontal } from '@pillar-ui/icons'

const appointments = [
  {
    id: 1,
    title: 'Medical Billing Workshop',
    type: 'Online session',
    date: '01',
    day: 'Thu',
    time: '09:00 AM - 11:00 AM',
  },
  {
    id: 2,
    title: 'Staff Training: Medical Records',
    type: 'Online seminar',
    date: '02',
    day: 'Fri',
    time: '11:00 AM - 01:00 PM',
  },
  {
    id: 3,
    title: 'Emergency Response Drill',
    type: 'Simulation exercise',
    date: '03',
    day: 'Sat',
    time: '02:00 PM - 04:00 PM',
  },
  {
    id: 4,
    title: 'Medical Workflow Workshop',
    type: 'Online session',
    date: '01',
    day: 'Thu',
    time: '09:00 AM - 11:00 AM',
  },
  {
    id: 5,
    title: 'Compliance Training for Medical Staff',
    type: 'Online Webinar',
    date: '06',
    day: 'Mon',
    time: '10:00 AM - 12:00 PM',
  },
  {
    id: 6,
    title: 'Patient Communication Skills Workshop',
    type: 'In-person Workshop',
    date: '07',
    day: 'Fri',
    time: '01:00 PM - 03:00 PM',
  },
]

export const UpcomingAppointments = () => {
  return (
    <Paper flow="5" className="l_box">
      <Flex justify="between" items="center" className="mb-4">
        <Heading as="h2" size="4">
          Upcoming Appointments
        </Heading>
        <Button variant="text">View All</Button>
      </Flex>
      <Paper flow="4">
        {appointments.map((apt) => (
          <Paper key={apt.id} className="l_box">
            <Paper flow="3">
              <Flex justify="between" gap="4" items="center">
                <Flex items="center" gap="4">
                  <Paper
                    as={Flex}
                    items="center"
                    justify="center"
                    corner="2"
                    width="40px"
                    ratio="1"
                    style={{ color: 'var(--Se11)' }}
                    background="Se4"
                  >
                    <Video width={28} />
                  </Paper>
                  <div>
                    <Text weight="5" truncate="1" size="4">
                      {apt.title}
                    </Text>
                    <Text size="3" color="b" low>
                      {apt.type}
                    </Text>
                  </div>
                </Flex>
                <IconButton icon={<DotsHorizontal />} size="3" title="More options" />
              </Flex>

              <Flex items="end" gap="2">
                <Clock width={16} />
                <Text size="3" color="b" low>
                  {apt.time}
                </Text>
              </Flex>
            </Paper>
          </Paper>
        ))}
      </Paper>
    </Paper>
  )
}
