// import { useState } from "react";
// import { Bar } from "@visx/shape";
// import { Group } from "@visx/group";
// import { localPoint } from "@visx/event";
// import { withTooltip, Tooltip } from "@visx/tooltip";
// import { LinearGradient } from "@visx/gradient";
// import { withParentSize } from "@visx/responsive";
// import { GridRows, GridColumns } from "@visx/grid";
// import { AxisLeft, AxisBottom, AxisRight } from "@visx/axis";
// import { scaleTime, scaleLinear, scaleBand } from "@visx/scale";
// import { timeFormat } from "d3-time-format";

// function HoverMarker({
//   yScale,
//   xScale,
//   height,
//   width,
//   margin,
//   time,
//   yPoint,
//   formatPrice,
// }: any) {
//   return (
//     <g>
//       <Bar
//         width={xScale.bandwidth()}
//         height={height - margin.bottom}
//         fill="white"
//         fillOpacity={0.2}
//         x={xScale(time)}
//       />
//       <line
//         x1={0}
//         x2={width}
//         y1={yPoint}
//         y2={yPoint}
//         stroke="white"
//         strokeOpacity={0.6}
//       />
//       <rect
//         width={55}
//         height={20}
//         fill="#27273f"
//         y={yPoint - 11}
//         x={width - 55}
//       />
//       <path
//         d={`M${width - 55},${yPoint - 11}L${width - 55},${yPoint - 11 + 20},L${
//           width - 55 - 10
//         },${yPoint},${width - 55},${yPoint - 11}`}
//         fill="#27273f"
//       />
//       <text fontSize={11} x={width - 50} y={yPoint} dy="0.3em" fill="white">
//         {formatPrice(yScale.invert(yPoint))}
//       </text>
//     </g>
//   );
// }

// function TimeMarker({ top, time, formatTime, xScale }: any) {
//   return (
//     <Tooltip
//       style={{
//         transform: "translate(-50%)",
//         borderRadius: 0,
//         boxShadow: "0 1px 10px rgba(0,0,0,0.1)",
//         backgroundColor: "#27273f",
//         color: "white",
//         fontSize: "11px",
//       }}
//       top={top}
//       left={xScale(time)}
//     >
//       <div>{formatTime(time)}</div>
//     </Tooltip>
//   );
// }

// function Volume({ top, scale, xScale, height, data }: any) {
//   return (
//     <Group top={top}>
//       <Bar
//         data={data}
//         width={xScale.bandwidth()}
//         height={height - scale(data.volume)}
//         x={xScale(data.closeTime)}
//         y={scale(data.volume)}
//         fill={data.hollow ? "transparent" : "white"}
//         stroke={data.hollow ? "white" : "transparent"}
//         fillOpacity={0.7}
//         strokeOpacity={0.7}
//       />
//     </Group>
//   );
// }

// function Details({ formatPrice, formatNumber, bucket, xScale, yScale }: any) {
//   const left = xScale(bucket.closeTime) + xScale.bandwidth() + 5;
//   const halfway = xScale.range()[1] / 2;

//   return (
//     <Tooltip
//       style={{
//         borderRadius: 0,
//         boxShadow: "0 1px 10px rgba(0,0,0,0.1)",
//         backgroundColor: "#27273f",
//         color: "white",
//         transform: xScale(bucket.closeTime) > halfway ? "translate(-104%)" : "",
//       }}
//       top={yScale(bucket.lowPrice)}
//       left={left}
//     >
//       <div className="details">
//         <div className="detail">
//           <div className="tooltip-label">high</div>
//           <div>{formatPrice(bucket.highPrice)}</div>
//         </div>
//         <div className="detail">
//           <div className="tooltip-label">low</div>
//           <div>{formatPrice(bucket.lowPrice)}</div>
//         </div>
//         <div className="detail">
//           <div className="tooltip-label">open</div>
//           <div>{formatPrice(bucket.openPrice)}</div>
//         </div>
//         <div className="detail">
//           <div className="tooltip-label">close</div>
//           <div>{formatPrice(bucket.closePrice)}</div>
//         </div>
//         <div className="detail">
//           <div className="tooltip-label">volume</div>
//           <div>{formatNumber(bucket.volume)}</div>
//         </div>
//       </div>
//       <style jsx>{`
//         .details {
//           display: flex;
//           flex-direction: row;
//         }
//         .detail {
//           margin-right: 1rem;
//         }
//         .tooltip-label {
//           font-size: 9px;
//           font-weight: 900;
//           color: #5473b8;
//         }
//       `}</style>
//     </Tooltip>
//   );
// }
// const formatTime = timeFormat("%I:%M%p");

// function CandleStick({ parentWidth, parentHeight, data }: any) {
//   const [activeBucket, setActiveBacket] = useState(null);
//   const [yPoint, setYPoint] = useState(null);
//   const svgRef = useRef(null);

//   const {
//     buckets,
//     start,
//     end,
//     maxHighPrice,
//     minLowPrice,
//     maxVolume,
//     showTooltip,
//     hideTooltip,
//     tooltipLeft,
//     tooltipTop,
//     tooltipData,
//   } = data;

//   const margin = {
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 80,
//   };

//   const width = parentWidth;
//   const height = parentHeight;

//   const xScale = scaleBand({
//     range: [0, width - 50],
//     domain: buckets.map((b) => b.closeTime),
//     padding: 0.3,
//   });
//   const timeScale = scaleTime({
//     range: [0, width - 50],
//     domain: [start, end],
//   });
//   const yScale = scaleLinear({
//     range: [height - margin.bottom, 20],
//     domain: [minLowPrice - 3, maxHighPrice],
//   });

//   const volumeHeight = (height - margin.bottom) * 0.25;
//   const yVolumeScale = scaleLinear({
//     range: [volumeHeight, 0],
//     domain: [0, maxVolume],
//   });

//   return (
//     <div>
//       <svg width={width} height={height} ref={svgRef}>
//         <Group top={margin.top} left={margin.left}>
//           <LinearGradient
//             id="gradient"
//             from="#FF9A8B"
//             to="#FF6A88"
//             vertical={false}
//           />
//           <rect width={width} height={height} fill="url(#gradient)" />
//           <GridRows
//             width={width}
//             height={height}
//             scale={yScale}
//             stroke="rgba(255,255,255,0.2)"
//           />
//           <GridColumns
//             width={width}
//             height={height - margin.bottom}
//             scale={timeScale}
//             stroke="rgba(255,255,255,0.1)"
//           />
//         </Group>
//         {buckets.map((b) => {
//           return (
//             <g key={`b-${b.closeTime}`}>
//               <line
//                 x1={xScale(b.closeTime) + xScale.bandwidth() / 2}
//                 x2={xScale(b.closeTime) + xScale.bandwidth() / 2}
//                 y1={yScale(b.highPrice)}
//                 y2={b.hollow ? yScale(b.closePrice) : yScale(b.lowPrice)}
//                 stroke="white"
//                 strokeWidth={1}
//               />
//               <line
//                 x1={xScale(b.closeTime) + xScale.bandwidth() / 2}
//                 x2={xScale(b.closeTime) + xScale.bandwidth() / 2}
//                 y1={b.hollow ? yScale(b.openPrice) : yScale(b.closePrice)}
//                 y2={yScale(b.lowPrice)}
//                 stroke="white"
//                 strokeWidth={1}
//               />
//               <Bar
//                 data={b}
//                 width={xScale.bandwidth()}
//                 height={
//                   b.hollow
//                     ? yScale(b.openPrice) - yScale(b.closePrice)
//                     : yScale(b.closePrice) - yScale(b.openPrice)
//                 }
//                 fill={b.hollow ? "transparent" : "white"}
//                 stroke={b.hollow ? "white" : "transparent"}
//                 strokeWidth={1}
//                 x={xScale(b.closeTime)}
//                 y={b.hollow ? yScale(b.closePrice) : yScale(b.openPrice)}
//               />
//               <Volume
//                 top={height - margin.bottom - volumeHeight}
//                 height={volumeHeight}
//                 scale={yVolumeScale}
//                 xScale={xScale}
//                 data={b}
//               />
//             </g>
//           );
//         })}
//         <Group top={height - margin.bottom - volumeHeight}>
//           <AxisRight
//             scale={yVolumeScale}
//             hideZero
//             hideTicks
//             hideAxisLine
//             tickLength={0}
//             tickValues={yVolumeScale.ticks(5)}
//             tickLabelComponent={
//               <text dx="0.33em" fill="white" fontSize={8} fillOpacity={0.8} />
//             }
//           />
//         </Group>
//         <AxisLeft
//           left={width}
//           scale={yScale}
//           hideAxisLine
//           hideTicks
//           hideZero
//           tickFormat={formatPrice}
//           tickLength={0}
//           tickStroke="white"
//           tickLabelComponent={
//             <text
//               fill="white"
//               textAnchor="end"
//               dx="-.33em"
//               dy="-.33em"
//               fontSize={10}
//             />
//           }
//         />
//         {activeBucket && (
//           <HoverMarkers
//             xScale={xScale}
//             yScale={yScale}
//             height={height}
//             width={width}
//             margin={margin}
//             time={activeBucket.closeTime}
//             yPoint={yPoint}
//             formatPrice={formatPrice}
//           />
//         )}
//         <Bar
//           data={data}
//           width={width}
//           height={height - margin.bottom}
//           fill="transparent"
//           onMouseMove={(data) => (event) => {
//             const { x: xPoint, y: yPoint } = localPoint(this.svg, event);
//             const bandWidth = xScale.step();
//             const index = Math.floor(xPoint / bandWidth);
//             const val = buckets[index];
//             const left = xScale(val.closeTime);
//             this.setState({
//               activeBucket: val,
//               yPoint,
//             });
//           }}
//           onMouseLeave={(data) => (event) =>
//             this.setState({ activeBucket: undefined, yPoint: undefined })}
//         />
//         <AxisBottom
//           top={height - margin.bottom}
//           scale={timeScale}
//           stroke="rgba(255,255,255,0.5)"
//           tickStroke="rgba(255,255,255,0.5)"
//           tickFormat={formatTime}
//           tickLabelComponent={
//             <text
//               fill="white"
//               fillOpacity={0.5}
//               textAnchor="middle"
//               fontSize={10}
//             />
//           }
//         />
//       </svg>
//       {activeBucket && (
//         <div>
//           <TimeMarker
//             top={height - margin.bottom + 3}
//             xScale={xScale}
//             formatTime={formatTime}
//             time={activeBucket.closeTime}
//           />
//           <Details
//             yScale={yScale}
//             xScale={xScale}
//             // formatPrice={formatPrice}
//             // formatNumber={formatNumber}
//             bucket={activeBucket}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default withParentSize(withTooltip(CandleStick));

const hello = 'Hello'

export default hello
