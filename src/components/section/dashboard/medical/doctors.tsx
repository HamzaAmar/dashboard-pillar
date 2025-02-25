// components/DoctorsList.jsx
import React from 'react'
import { Paper, Heading, Avatar, Text, Flex, IconButton, Chips, Button } from '@pillar-ui/core'
import { Phone, Calendar } from '@pillar-ui/icons'

interface DoctorDTO {
  id: number
  name: string
  credentials: string
  status: 'available' | 'busy' | 'unavailable'
  specialization: string
  avatar: string
}

const doctors: DoctorDTO[] = [
  {
    id: 1,
    name: 'Dr. Smith',
    credentials: 'MBBS, Ph.D',
    status: 'available',
    specialization: 'Cardiology',
    avatar: 'https://i.pravatar.cc/60?img=1',
  },
  {
    id: 2,
    name: 'Dr. Jane Doe',
    credentials: 'MBBS, MD',
    status: 'available',
    specialization: 'Dermatology',
    avatar: 'https://i.pravatar.cc/60?img=2',
  },
  {
    id: 3,
    name: 'Dr. Michael Lee',
    credentials: 'MBBS, MS',
    status: 'busy',
    specialization: 'Orthopedics',
    avatar: 'https://i.pravatar.cc/60?img=3',
  },
  {
    id: 4,
    name: 'Dr. Emily Clark',
    credentials: 'MBBS, FRCS',
    status: 'unavailable',
    specialization: 'General Surgery',
    avatar: 'https://i.pravatar.cc/60?img=4',
  },
  {
    id: 5,
    name: 'Dr. Robert King',
    credentials: 'MBBS, DNB',
    status: 'available',
    specialization: 'Pediatrics',
    avatar: 'https://i.pravatar.cc/60?img=5',
  },
]

const getStatusColor = (status: 'available' | 'busy' | 'unavailable') => {
  switch (status.toLowerCase()) {
    case 'available':
      return 'su'
    case 'busy':
      return 'w'
    case 'unavailable':
      return 'd'
    default:
      return 'p'
  }
}

export const DoctorsList = () => {
  return (
    <Paper className="l_box" flow="7">
      <Flex justify="between" items="center" className="mb-4">
        <Heading as="h2" weight="5" size="4">
          Doctors List
        </Heading>
        <Button variant="soft" color="b" size="3">
          View All
        </Button>
      </Flex>
      <div className="separator">
        {doctors.map(({ id, name, credentials, status, specialization, avatar }) => (
          <Flex as={Paper} p="2" gap="2" key={id} justify="between" items="center">
            <Flex gap="4" items="center">
              <Avatar variant="outline" src={avatar} />
              <div>
                <div>
                  <Text weight="5" size="4" leading="2">
                    {name}
                  </Text>
                  <Text size="3">{specialization}</Text>
                </div>
                <Text size="2" color="b" low>
                  {credentials}
                </Text>
              </div>
              <Chips variant="soft" size="3" color={getStatusColor(status)}>
                {status}
              </Chips>
            </Flex>
            <Flex gap="4" items="center">
              <Flex gap="2">
                <IconButton size="4" icon={<Phone />} color="su" variant="shadow" title="Call" />
                <IconButton size="4" icon={<Calendar />} variant="soft" title="View Appointment" />
              </Flex>
            </Flex>
          </Flex>
        ))}
      </div>
    </Paper>
  )
}
