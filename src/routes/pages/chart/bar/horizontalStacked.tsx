import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartLayout } from '../chartLayout'

const data = [
  {
    category: 'Electronics',
    onlineSales: 1200,
    inStoreSales: 800,
    wholesaleSales: 500,
    discountSales: 300,
    totalSales: 2800,
  },
  {
    category: 'Clothing',
    onlineSales: 900,
    inStoreSales: 1100,
    wholesaleSales: 600,
    discountSales: 400,
    totalSales: 3000,
  },
  {
    category: 'Home & Kitchen',
    onlineSales: 700,
    inStoreSales: 1300,
    wholesaleSales: 400,
    discountSales: 200,
    totalSales: 2600,
  },
  {
    category: 'Sports & Outdoors',
    onlineSales: 1500,
    inStoreSales: 500,
    wholesaleSales: 700,
    discountSales: 300,
    totalSales: 3000,
  },
  {
    category: 'Books',
    onlineSales: 600,
    inStoreSales: 1400,
    wholesaleSales: 300,
    discountSales: 100,
    totalSales: 2400,
  },
  {
    category: 'Toys',
    onlineSales: 1000,
    inStoreSales: 800,
    wholesaleSales: 500,
    discountSales: 200,
    totalSales: 2500,
  },
  {
    category: 'Beauty',
    onlineSales: 1300,
    inStoreSales: 700,
    wholesaleSales: 400,
    discountSales: 300,
    totalSales: 2700,
  },
  {
    category: 'Automotive',
    onlineSales: 800,
    inStoreSales: 1200,
    wholesaleSales: 600,
    discountSales: 400,
    totalSales: 3000,
  },
]

export const HorizontalStacked = () => {
  return (
    <ChartLayout title="Horizontal Stacked Bar Chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <Legend />
          <CartesianGrid vertical={false} stroke="var(--B5)" />
          <XAxis type="number" stroke="var(--B11)" fontSize={12} axisLine={false} tickLine={false} />
          <YAxis fontSize={12} width={30} type="category" dataKey="name" interval={0} />
          <Tooltip />
          <Bar dataKey="discountSales" stackId="a" fill="var(--D9)" />
          <Bar dataKey="wholesaleSales" stackId="a" fill="var(--P9)" />
          <Bar dataKey="onlineSales" stackId="a" fill="var(--Se9)" />
          <Bar dataKey="inStoreSales" stackId="a" fill="var(--Su9)" />
          <Bar dataKey="totalSales" stackId="a" fill="var(--W9)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartLayout>
  )
}
