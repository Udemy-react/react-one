import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const chartDataValues = props.dataPoints.map(data => data.value)
    const totalMaximum = Math.max(...chartDataValues)
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
          key={data.id}
        />
      ))}
    </div>
  );
};

export default Chart;
