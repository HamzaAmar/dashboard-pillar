// components/Treatments.jsx
import { Paper, Heading, Text, Flex, ProgressBar, Chips, Button, Avatar } from '@pillar-ui/core'
import { Heart, Shield, Nervous, Stethoscope } from '@pillar-ui/icons'

const treatments = [
  {
    id: 1,
    name: 'Cardiology',
    icon: <Heart width={20} />,
    patients: '500+ Patients Treated',
    successRate: 95,
    sessions: '3 Sessions',
    color: 'd',
  },
  {
    id: 2,
    name: 'Immunology',
    icon: <Shield width={20} />,
    patients: '700+ Vaccinations',
    successRate: 92,
    sessions: '1 Follow-up',
    color: 'se',
  },
  {
    id: 3,
    name: 'Neurology',
    icon: <Nervous width={20} />,
    patients: '300+ Brain Surgeries',
    successRate: 88,
    sessions: '4 Sessions',
    color: 'i',
  },
  {
    id: 4,
    name: 'Pediatrics',
    icon: <Stethoscope width={20} />,
    patients: '1,000+ Pediatric Patients',
    successRate: 95,
    sessions: '2 Sessions',
    color: 'su',
  },
] as const

export const Treatments = () => {
  return (
    <Paper flow="7" className="l_box">
      <Flex justify="between" items="center" className="mb-4">
        <Heading size="4" as="h2">
          Treatments
        </Heading>
        <Button variant="text">View All</Button>
      </Flex>
      <Paper flow="4">
        {treatments.map(({ id, name, icon, patients, successRate, sessions, color }) => (
          <Paper key={id} className="p-4">
            <Paper flow="3">
              <Flex justify="between" gap="2">
                <Flex items="center" gap="3">
                  <Avatar size="3" corner="3" fallback={icon} color={color} />
                  <div>
                    <Text weight="6">{name}</Text>
                    <Text size="3" color="b" low>
                      {patients}
                    </Text>
                  </div>
                </Flex>
                <div>
                  <Text size="2" color="b" low>
                    Success Rate
                  </Text>
                  <Chips color="p">{sessions}</Chips>
                </div>
              </Flex>
              <Flex items="center" gap="2">
                <div className="flex-grow">
                  <ProgressBar value={successRate} max={100} label="Success Rate" size="3" color={color} />
                </div>
                <Text size="3" weight="6">
                  {successRate}%
                </Text>
              </Flex>
            </Paper>
          </Paper>
        ))}
      </Paper>
    </Paper>
  )
}
