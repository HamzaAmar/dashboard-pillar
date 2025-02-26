import { Paper, Table, Avatar, Text, Flex, Chips, Heading, Pagination } from '@pillar-ui/core'
import { useState } from 'react'
import { PATIENTS } from './medicals.data'

export const PatientsList = () => {
  const [page, setPage] = useState(1)
  const paginated_patients = PATIENTS.slice((page - 1) * 10, page * 10)

  // Handle page change
  const handlePageChange = (page: number) => {
    console.log(page)
    setPage(page)
  }

  return (
    <Paper flow="5" className="l_box">
      <Heading as="h2" weight="5" size="4">
        Patients List
      </Heading>
      <Table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Doctor</th>
            <th>Disease</th>
            <th>Contact</th>
            <th>Appointment</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {paginated_patients.map(({ id, name, gender, age, doctor, disease, contact, appointment, room, avatar }) => (
            <tr key={id}>
              <td>
                <Text size="2" weight="5" color="b" low>
                  {id}
                </Text>
              </td>
              <td>
                <Flex gap="2" items="center">
                  <Avatar size="4" src={avatar} />
                  <Text size="3" color="b" low>
                    {name}
                  </Text>
                </Flex>
              </td>
              <td>
                <Chips variant="soft" color={gender === 'Male' ? 'i' : 'se'}>
                  {gender}
                </Chips>
              </td>
              <td>{age}</td>
              <td>
                <Text size="3" weight="5">
                  {doctor}
                </Text>
              </td>
              <td>
                <Chips color="p">{disease}</Chips>
              </td>
              <td>
                <Text color="b" low size="3">
                  {contact}
                </Text>
              </td>
              <td>
                <Text color="b" low size="3">
                  {appointment}
                </Text>
              </td>
              <td>{room}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Flex as={Paper} className="l_box">
        <Pagination count={PATIENTS.length / 10} onPageChange={handlePageChange} />
      </Flex>
    </Paper>
  )
}
