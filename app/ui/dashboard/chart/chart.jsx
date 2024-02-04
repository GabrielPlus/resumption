"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: "Mon",
    Knec: 30,
    Jpuk: 13,
    ICM: 10,

  },
  {
    date: "Tue",
    Knec: 12,
    Jpuk: 13,
    ICM: 2,
  },
  {
    date: "Wed",
    Knec: 8,
    Jpuk: 13,
    ICM: 2,
  },
  {
    date: "Thur",
    Knec: 30,
    Jpuk: 1,
    ICM: 8,
  },
  {
    date: "Fri",
    Knec: 50,
    Jpuk: 1,
    ICM: 20,
  },
  {
    date: "Sat",
    Knec: 50,
    Jpuk: 1,
    ICM: 10,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap Coming Soon..!</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="Knec" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Jpuk" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          <Line type="monotone" dataKey="ICM" stroke="#e9e9f5" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart