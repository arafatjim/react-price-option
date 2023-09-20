
import React, { PureComponent } from 'react';
import { PieChart as PChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const PieChart = () => {
          const earningsData1 = [
                    { name: "Low Income", value: 33 },
                    { name: "Middle Income", value: 44 },
                    { name: "High Income", value: 23 },
                    { name: "High2 Income", value: 75 },
                    { name: "High3 Income", value: 43 },
                ];

          const earningsData2 = [
                    { name: "Low Income", value: 45 },
                    { name: "Middle Income", value: 39 },
                    { name: "High Income", value: 69 }, 
                    { name: "Low Income", value: 45 },
                    { name: "mr omuk", value: 39 },
                    { name: "mr tomuk", value: 69 }, 
                    { name: "ms omuki", value: 45 },
                    { name: "mr jodu", value: 39 },
                    { name: "ms jodua", value: 69 },
                ];
          return (
                    <div>
                           <PChart width={400} height={400}>
          <Pie data={earningsData1} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={earningsData2} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="red" label />
        </PChart>    
                    </div>
          );
};

export default PieChart;