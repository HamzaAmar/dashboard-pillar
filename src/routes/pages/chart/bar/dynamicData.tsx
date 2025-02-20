import { Button } from '@pillar-ui/core'
import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const monthlyData = [
  { period: 'Jan', activeJob: 5500, onHold: 4500, shortlisted: 3000 },
  { period: 'Feb', activeJob: 1800, onHold: 5200, shortlisted: 800 },
  { period: 'Mar', activeJob: 4200, onHold: 2800, shortlisted: 1500 },
  { period: 'Apr', activeJob: 5500, onHold: 5800, shortlisted: 2200 },
  { period: 'May', activeJob: 5200, onHold: 5600, shortlisted: 2000 },
  { period: 'Jun', activeJob: 5400, onHold: 5900, shortlisted: 2100 },
]

const weeklyData = [
  { period: 'Sat', activeJob: 9800, onHold: 8000, shortlisted: 1500 },
  { period: 'Sun', activeJob: 8500, onHold: 4800, shortlisted: 1200 },
  { period: 'Mon', activeJob: 4800, onHold: 8500, shortlisted: 3000 },
  { period: 'Tue', activeJob: 4200, onHold: 6500, shortlisted: 1000 },
  { period: 'Wed', activeJob: 2200, onHold: 3500, shortlisted: 800 },
  { period: 'Thu', activeJob: 8000, onHold: 5500, shortlisted: 1000 },
  { period: 'Fri', activeJob: 8800, onHold: 4500, shortlisted: 900 },
]

const formatCurrency = (value: number) => {
  return `$${(value / 1000).toFixed(1)}K`
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded shadow">
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {formatCurrency(entry.value)}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export const DynamicBarData = () => {
  const [viewType, setViewType] = useState<'Monthly' | 'Weekly'>('Monthly')

  const data = viewType === 'Monthly' ? monthlyData : weeklyData

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Job Overview</h2>
          <div className="flex items-center mt-2">
            <span className="text-2xl font-bold">80,345</span>
            <span className="ml-2 text-green-500">↗ 32.40%</span>
          </div>
        </div>

        <div className="relative">
          <Button onClick={() => setViewType(viewType === 'Monthly' ? 'Weekly' : 'Monthly')}>{viewType}</Button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="period" axisLine={false} tickLine={false} />
            <YAxis tickFormatter={formatCurrency} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="activeJob" name="Active Job" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="onHold" name="On Hold" fill="#1d4ed8" radius={[4, 4, 0, 0]} />
            <Bar dataKey="shortlisted" name="Shortlisted" fill="#dbeafe" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
