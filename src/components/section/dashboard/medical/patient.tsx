// components/PatientVisits.jsx
import React from 'react'
import { Paper, Heading } from '@pillar-ui/core'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const visitSex = [
  { name: 'Female', value: 15.5, color: 'var(--Se9)' },
  { name: 'Male', value: 10.2, color: 'var(--I9)' },
]

const visitAge = [
  { name: 'old', value: 45, color: 'var(--Se11)' },
  { name: 'Adult', value: 30, color: 'var(--Se9)' },
  { name: 'Baby', value: 15, color: 'var(--P9)' },
  { name: 'Teenger', value: 10, color: 'var(--I9)' },
]

export const PatientVisits = () => {
  return (
    <Paper flow="5">
      <Paper className="l_box">
        <Heading size="4">Patients Visits</Heading>
        <ResponsiveContainer aspect={1 / 1.2} width="100%">
          <PieChart>
            <Pie data={visitSex} innerRadius={0} fill="red" outerRadius={100} paddingAngle={0} dataKey="value">
              {visitSex.map((entry, index) => (
                <Cell radius={20} key={index} fill={entry.color} stroke={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
      <Paper className="l_box">
        <Heading size="4">Patients Age Static</Heading>
        <ResponsiveContainer height="100%" aspect={1 / 1}>
          <PieChart>
            <Pie stroke="var(--B1)" data={visitAge} innerRadius={50} outerRadius={90} paddingAngle={0} dataKey="value">
              {visitAge.map((entry, index) => (
                <Cell key={index} stroke={entry.color} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Paper>
  )
}
