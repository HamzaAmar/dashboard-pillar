import { DonutChart, PieChart } from '@components/chart'

const bar = () => {
  return (
    <div>
      <section className="l_box l_flow-lg">
        <DonutChart width={1000} height={500} />
        <PieChart width={1000} height={500} />
      </section>
    </div>
  )
}

export default bar