import Bar from "./Bar";

import './Chart.css';

const Chart = ({ dataPoints }) => {
  const values = dataPoints.map((p) => p.value);
  const max = Math.max(...values);

  return (
    <div className="chart">
      {dataPoints.map((data, i) => {
        return <Bar key={i} value={data.value} label={data.label} max={max} />;
      })}
    </div>
  );
};

export default Chart;
