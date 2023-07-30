import React from 'react';
import './style.scss';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type BarChartProps = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
const BarChatBox = (props: BarChartProps) => {
  console.log('props', { props });
  return (
    <div className="boxChatBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              cursor={{ fill: 'none' }}
              contentStyle={{
                backgroundColor: '#2a3447',
                borderRadius: '5px',
              }}
              labelStyle={{ display: 'none' }}
            />

            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChatBox;
