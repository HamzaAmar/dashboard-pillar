interface BarStack2 {
  width: number
  height: number
}

const barStack2 = ({ width, height }: BarStack2) => {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} x={0} y={0} fill="orange" />
      {/* <Grid width={width} height={height} /> */}
    </svg>
  )
}

export default barStack2
