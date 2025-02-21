import React, { useState } from 'react'
import {
  Paper,
  Flex,
  Heading,
  Text,
  Avatar,
  Table,
  Checkbox,
  ProgressBar,
  Pagination,
  Input,
  Chips,
  IconButton,
} from '@pillar-ui/core'
import { TEACHERS } from './school.data'
import { DotsHorizontal } from '@pillar-ui/icons'

const Teachers = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const pageCount = Math.ceil(TEACHERS.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = TEACHERS.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Paper flow="5" className="l_box">
      <Flex justify="between" items="center" className="u_padding-block-4 u_padding-inline-3">
        <Heading size="4" weight="6">
          Course you are taking
        </Heading>
        <Input type="search" placeholder="Search Course" size="4" />
      </Flex>
      <Table>
        <thead>
          <tr>
            <th>
              <Checkbox aria-label="Select all courses" />
            </th>
            <th>Course</th>
            <th>Time</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentData.map(
            ({ type, avatar, course, time, progress, studentCount, teacher, chatCount, bookCount }, index) => (
              <tr key={index}>
                <td>
                  <Checkbox aria-label={`Select course ${course}`} />
                </td>
                <td>
                  <Flex gap="3" items="center">
                    <Avatar src={avatar} size="3" color="b" />
                    <div>
                      <Text size="4" weight="5" truncate="2">
                        {course}
                      </Text>
                      <Text size="3" color="b" low>
                        {teacher}
                      </Text>
                    </div>
                  </Flex>
                </td>
                <td>
                  <Text size="3" low>
                    {time}
                  </Text>
                </td>
                <td>
                  <ProgressBar value={progress} label="hello" />
                </td>
                <td>
                  <Chips color={progress === 100 ? 'su' : 'w'} variant="soft">
                    {progress === 100 ? 'Completed' : 'In Progress'}
                  </Chips>
                </td>
                <td>
                  <Chips variant="soft">{type}</Chips>
                </td>
                <td>
                  <IconButton size="3" variant="text" title="delete User" icon={<DotsHorizontal />} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>

      <Flex justify="between" items="center" className="u_padding-4">
        <Text size="3" color="b" low>
          Showing {startIndex + 1} to {Math.min(endIndex, TEACHERS.length)} of {TEACHERS.length} entries
        </Text>
        <Pagination current={currentPage} count={pageCount} onPageChange={handlePageChange} />
      </Flex>
    </Paper>
  )
}

export default Teachers
