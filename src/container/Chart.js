import React from "react";
import { Column } from "@ant-design/charts";

const Chart = () => {
  const data = [
    { year: "1991", value: 8 },
    { year: "1992", value: 6 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 10 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 15 },
    { year: "2000", value: 13 },
    { year: "2001", value: 11 },
    { year: "2002", value: 13 },
    { year: "2003", value: 12 },
    { year: "2004", value: 13 },
    { year: "2005", value: 17 },
    { year: "2006", value: 13 },
  ];

  const config = {
    data,

    height: 500,
    xField: "year",
    yField: "value",
    columnStyle: {
      fill: "red",
      fillOpacity: 0.5,
      stroke: "black",
      lineWidth: 1,
      lineDash: [4, 5],
      strokeOpacity: 0.7,
      shadowColor: "black",
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      cursor: "pointer",
    },
    label: {
      position: "middle",
      style: {
        fill: "black",
      },
    },
  };
  return (
    <div>
      <Column
        {...config}
        onReady={(plot) => {
          plot.on("plot:click", (evt) => {
            const { x, y } = evt;
         
            const tooltipData = plot.chart.getTooltipItems({ x, y });
            console.log(tooltipData);
          });
        }}
      />
    </div>
  );
};

export default Chart;
