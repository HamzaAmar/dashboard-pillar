// import { Paper, Table,  Avatar, Text, Flex, Chips, Heading, Pagination } from '@pillar-ui/core'

// const patients = [
//   {
//     id: 'PAT1-9XYZ',
//     name: 'Alice Brown',
//     gender: 'Female',
//     age: 29,
//     doctor: 'Dr. Sarah Lee',
//     disease: 'Anemia',
//     contact: '301-654-9870',
//     appointment: '2024-01-10',
//     room: '201',
//   },
// ]

// export const PatientsList = () => {
//   return (
//     <Paper className="p-4">
//       <Heading size="4">Patients List</Heading>
//       <Table>
//         <thead>
//           <tr>
//             <td>Patient ID</td>
//             <td>Name</td>
//             <td>Gender</td>
//             <td>Age</td>
//             <td>Doctor</td>
//             <td>Disease</td>
//             <td>Contact</td>
//             <td>Appointment</td>
//             <td>Room</td>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((patient) => (
//             <tr key={patient.id}>
//               <td>{patient.id}</td>
//               <td>
//                 <Flex gap="2" items="center">
//                   <Avatar size="6" />
//                   <Text>{patient.name}</Text>
//                 </Flex>
//               </td>
//               <td>{patient.gender}</td>
//               <td>{patient.age}</td>
//               <td>{patient.doctor}</td>
//               <td>
//                 <Chips color="p">{patient.disease}</Chips>
//               </td>
//               <td>{patient.contact}</td>
//               <td>{patient.appointment}</td>
//               <td>{patient.room}</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <Pagination count={patients.length} onPageChange={() => console.log('page changed')} />
//         </tfoot>
//       </Table>
//     </Paper>
//   )
// }

import { Paper, Table, Avatar, Text, Flex, Chips, Heading, Pagination } from '@pillar-ui/core'
import { useState } from 'react'

const patients = [
  {
    id: 'PAT1-9XYZ',
    name: 'Alice Brown',
    gender: 'Female',
    age: 29,
    doctor: 'Dr. Sarah Lee',
    disease: 'Anemia',
    contact: '301-654-9870',
    appointment: '2024-01-10',
    room: '201',
    avatar: 'https://i.pravatar.cc/60?img=1',
  },
  {
    id: 'PAT2-8ABC',
    name: 'John Doe',
    gender: 'Male',
    age: 45,
    doctor: 'Dr. Michael Smith',
    disease: 'Hypertension',
    contact: '202-555-0164',
    appointment: '2024-01-12',
    avatar: 'https://i.pravatar.cc/60?img=2',
    room: '202',
  },
  {
    id: 'PAT3-7DEF',
    name: 'Emily Johnson',
    gender: 'Female',
    age: 34,
    doctor: 'Dr. Sarah Lee',
    disease: 'Migraine',
    contact: '404-555-0176',
    appointment: '2024-01-15',
    room: '203',
    avatar: 'https://i.pravatar.cc/60?img=3',
  },
  {
    id: 'PAT4-6GHI',
    name: 'Michael Brown',
    gender: 'Male',
    age: 50,
    doctor: 'Dr. James Wilson',
    disease: 'Diabetes',
    contact: '305-555-0188',
    appointment: '2024-01-18',
    room: '204',
    avatar: 'https://i.pravatar.cc/60?img=4',
  },
  {
    id: 'PAT5-5JKL',
    name: 'Sophia Davis',
    gender: 'Female',
    age: 27,
    doctor: 'Dr. Sarah Lee',
    disease: 'Asthma',
    contact: '212-555-0190',
    appointment: '2024-01-20',
    room: '205',
    avatar: 'https://i.pravatar.cc/60?img=5',
  },
  {
    id: 'PAT6-4MNO',
    name: 'William Garcia',
    gender: 'Male',
    age: 60,
    doctor: 'Dr. Michael Smith',
    disease: 'Arthritis',
    contact: '213-555-0192',
    appointment: '2024-01-22',
    room: '206',
    avatar: 'https://i.pravatar.cc/60?img=6',
  },
  {
    id: 'PAT7-3PQR',
    name: 'Olivia Martinez',
    gender: 'Female',
    age: 38,
    doctor: 'Dr. James Wilson',
    disease: 'Depression',
    contact: '310-555-0194',
    appointment: '2024-01-25',
    room: '207',
    avatar: 'https://i.pravatar.cc/60?img=7',
  },
  {
    id: 'PAT8-2STU',
    name: 'Daniel Rodriguez',
    gender: 'Male',
    age: 42,
    doctor: 'Dr. Sarah Lee',
    disease: 'Obesity',
    contact: '415-555-0196',
    appointment: '2024-01-28',
    room: '208',
    avatar: 'https://i.pravatar.cc/60?img=8',
  },
  {
    id: 'PAT9-1VWX',
    name: 'Ava Hernandez',
    gender: 'Female',
    age: 31,
    doctor: 'Dr. Michael Smith',
    disease: 'Allergies',
    contact: '512-555-0198',
    appointment: '2024-01-30',
    room: '209',
    avatar: 'https://i.pravatar.cc/60?img=9',
  },
  {
    id: 'PAT10-0YZA',
    name: 'Ethan Lopez',
    gender: 'Male',
    age: 55,
    doctor: 'Dr. James Wilson',
    disease: 'High Cholesterol',
    contact: '617-555-0200',
    appointment: '2024-02-01',
    room: '210',
    avatar: 'https://i.pravatar.cc/60?img=10',
  },
  {
    id: 'PAT11-9BCD',
    name: 'Mia Gonzalez',
    gender: 'Female',
    age: 29,
    doctor: 'Dr. Sarah Lee',
    disease: 'Anemia',
    contact: '713-555-0202',
    appointment: '2024-02-03',
    room: '211',
    avatar: 'https://i.pravatar.cc/60?img=11',
  },
  {
    id: 'PAT12-8EFG',
    name: 'Alexander Perez',
    gender: 'Male',
    age: 47,
    doctor: 'Dr. Michael Smith',
    disease: 'Hypertension',
    contact: '214-555-0204',
    appointment: '2024-02-05',
    room: '212',
    avatar: 'https://i.pravatar.cc/60?img=12',
  },
  {
    id: 'PAT13-7HIJ',
    name: 'Charlotte Torres',
    gender: 'Female',
    age: 36,
    doctor: 'Dr. James Wilson',
    disease: 'Migraine',
    contact: '312-555-0206',
    appointment: '2024-02-07',
    room: '213',
    avatar: 'https://i.pravatar.cc/60?img=13',
  },
  {
    id: 'PAT14-6KLM',
    name: 'James Flores',
    gender: 'Male',
    age: 52,
    doctor: 'Dr. Sarah Lee',
    disease: 'Diabetes',
    contact: '414-555-0208',
    appointment: '2024-02-09',
    room: '214',
    avatar: 'https://i.pravatar.cc/60?img=14',
  },
  {
    id: 'PAT15-5NOP',
    name: 'Amelia Rivera',
    gender: 'Female',
    age: 28,
    doctor: 'Dr. Michael Smith',
    disease: 'Asthma',
    contact: '512-555-0210',
    appointment: '2024-02-11',
    room: '215',
    avatar: 'https://i.pravatar.cc/60?img=15',
  },
  {
    id: 'PAT16-4QRS',
    name: 'Benjamin Cruz',
    gender: 'Male',
    age: 61,
    doctor: 'Dr. James Wilson',
    disease: 'Arthritis',
    contact: '615-555-0212',
    appointment: '2024-02-13',
    room: '216',
    avatar: 'https://i.pravatar.cc/60?img=16',
  },
  {
    id: 'PAT17-3TUV',
    name: 'Harper Gomez',
    gender: 'Female',
    age: 39,
    doctor: 'Dr. Sarah Lee',
    disease: 'Depression',
    contact: '716-555-0214',
    appointment: '2024-02-15',
    room: '217',
    avatar: 'https://i.pravatar.cc/60?img=17',
  },
  {
    id: 'PAT18-2WXY',
    name: 'Logan Reyes',
    gender: 'Male',
    age: 43,
    doctor: 'Dr. Michael Smith',
    disease: 'Obesity',
    contact: '817-555-0216',
    appointment: '2024-02-17',
    room: '218',
    avatar: 'https://i.pravatar.cc/60?img=18',
  },
  {
    id: 'PAT19-1ZAB',
    name: 'Evelyn Morales',
    gender: 'Female',
    age: 32,
    doctor: 'Dr. James Wilson',
    disease: 'Allergies',
    contact: '918-555-0218',
    appointment: '2024-02-19',
    room: '219',
    avatar: 'https://i.pravatar.cc/60?img=19',
  },
  {
    id: 'PAT20-0CDE',
    name: 'Mason Ortiz',
    gender: 'Male',
    age: 56,
    doctor: 'Dr. Sarah Lee',
    disease: 'High Cholesterol',
    contact: '919-555-0220',
    appointment: '2024-02-21',
    room: '220',
    avatar: 'https://i.pravatar.cc/60?img=20',
  },
]

export const PatientsList = () => {
  const [page, setPage] = useState(1)
  const PATIENTS = patients.slice((page - 1) * 10, page * 10)

  // Handle page change
  const handlePageChange = (page: number) => {
    console.log(page)
    setPage(page)
  }

  return (
    <Paper flow="5" className="l_box">
      <Heading as="h2" weight="5">
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
          {PATIENTS.map(({ id, name, gender, age, doctor, disease, contact, appointment, room, avatar }) => (
            <tr key={id}>
              <td>
                <Text size="2" weight="5">
                  {id}
                </Text>
              </td>
              <td>
                <Flex gap="2" items="center">
                  <Avatar size="4" src={avatar} />
                  <Text size="3">{name}</Text>
                </Flex>
              </td>
              <td>
                <Chips variant="soft" color={gender === 'Male' ? 'se' : 'i'}>
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
        <Pagination count={patients.length / 10} onPageChange={handlePageChange} />
      </Flex>
    </Paper>
  )
}
