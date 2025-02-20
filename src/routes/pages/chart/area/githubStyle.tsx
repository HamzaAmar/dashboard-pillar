import React from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

// Generate selection data (top chart)
const generateSelectionData = () => {
  const months = ["Apr '14", "Jun '14", "Aug '14", "Oct '14", "Dec '14", "Feb '15"]
  return months.map((month, index) => ({
    month,
    value:
      index === 2
        ? 100 // Highest peak in August
        : index === 1
        ? 60 // Medium peak in June
        : index === 5
        ? 30 // Small peaks at the end
        : index === 4
        ? 25
        : 15, // Base value for other months
  }))
}

const generateCommitData = () => {
  const years = ['2013', '2014', '2015', '2016', '2017', '2018']
  const data: { date: string; commits: number }[] = []

  years.forEach((year) => {
    for (let day = 0; day < 365; day++) {
      const random = Math.random()
      let commits = 0

      if (random > 0.8) {
        commits = Math.floor(Math.random() * 20)
      } else if (random > 0.95) {
        commits = Math.floor(Math.random() * 30)
      }

      data.push({
        date: `${year}-${Math.floor(day / 30) + 1}`,
        commits,
      })
    }
  })

  return data
}

const GithubStyleChart = () => {
  const selectionData = generateSelectionData()
  const commitData = generateCommitData()

  return (
    <div className="w-full max-w-4xl p-4 bg-gray-900">
      <AreaChart width={800} height={120} data={selectionData} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
        <XAxis dataKey="month" tick={{ fill: '#666' }} axisLine={false} tickLine={false} />
        <YAxis hide={true} />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </AreaChart>

      <div className="flex items-center gap-4 my-4 text-white">
        <img src="/api/placeholder/40/40" alt="coder" className="rounded-full" />
        <div>
          <div className="text-lg">coder</div>
          <div className="text-gray-400">120 commits</div>
        </div>
      </div>

      <BarChart
        width={800}
        height={200}
        data={commitData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        barSize={2}
      >
        <XAxis
          dataKey="date"
          tick={{ fill: '#666' }}
          axisLine={false}
          tickLine={false}
          interval={365}
          tickFormatter={(value) => value.split('-')[0]}
        />
        <YAxis tick={{ fill: '#666' }} axisLine={false} tickLine={false} domain={[0, 40]} ticks={[0, 20, 40]} />
        <Tooltip
          contentStyle={{ backgroundColor: '#333', border: 'none' }}
          itemStyle={{ color: '#fff' }}
          labelStyle={{ color: '#fff' }}
        />
        <Bar dataKey="commits" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default GithubStyleChart
