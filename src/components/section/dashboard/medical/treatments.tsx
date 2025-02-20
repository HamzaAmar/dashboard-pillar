// components/Treatments.jsx
import { Paper, Heading, Text, Flex, ProgressBar, Chips, Button } from '@pillar-ui/core'
import { Heart, Shield, Nervous, Stethoscope } from '@pillar-ui/icons'

const treatments = [
  {
    id: 1,
    name: 'Cardiology',
    icon: <Heart width={24} />,
    patients: '500+ Patients Treated',
    successRate: 95,
    sessions: '3 Sessions',
    color: 'd',
  },
  {
    id: 2,
    name: 'Immunology',
    icon: <Shield width={24} />,
    patients: '700+ Vaccinations',
    successRate: 92,
    sessions: '1 Follow-up',
    color: 'se',
  },
  {
    id: 3,
    name: 'Neurology',
    icon: <Nervous width={24} />,
    patients: '300+ Brain Surgeries',
    successRate: 88,
    sessions: '4 Sessions',
    color: 'i',
  },
  {
    id: 4,
    name: 'Pediatrics',
    icon: <Stethoscope width={24} />,
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
        <Heading as="h2">Treatments</Heading>
        <Button variant="text">View All</Button>
      </Flex>
      <Paper flow="4">
        {treatments.map(({ id, name, icon, patients, successRate, sessions, color }) => (
          <Paper key={id} className="p-4">
            <Flex direction="col" gap="3">
              <Flex justify="between" gap="2">
                <Flex items="center" gap="3">
                  <Flex as={Paper} p="3" background="B6" corner="2">
                    {icon}
                  </Flex>
                  <div>
                    <Text weight="6">{name}</Text>
                    <Text size="3" color="b" low>
                      {patients}
                    </Text>
                  </div>
                </Flex>
                <div>
                  <Text size="3" color="p">
                    Success Rate
                  </Text>
                  <Chips color="p">{sessions}</Chips>
                </div>
              </Flex>
              <Flex items="center" gap="2">
                <div className="flex-grow">
                  <ProgressBar value={successRate} max={100} label="Success Rate" color={color} />
                </div>
                <Text size="3" weight="6">
                  {successRate}%
                </Text>
              </Flex>
            </Flex>
          </Paper>
        ))}
      </Paper>
    </Paper>
  )
}
