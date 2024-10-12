import { BarChart, BarStackChart, BarStackChart2 } from '@components/chart'

const bar = () => {
  return (
    <div>
      <section className="l_box l_flow-lg">
        <BarChart width={1000} height={500} />
        <BarStackChart width={1000} height={500} />
        <BarStackChart2 width={1000} height={500} />
      </section>
    </div>
  )
}

export default bar
