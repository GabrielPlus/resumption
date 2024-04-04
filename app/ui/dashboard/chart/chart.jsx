"use client";
import styles from './chart.module.css';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chartData: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/test/data'); // Adjust the API endpoint as per your backend setup
      const data = await response.json();
      this.setState({ chartData: data.studentsByExam });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { chartData } = this.state;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Analytics</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={[{ name: 'Students Report', ...chartData }]}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="KNEC" fill="#0088FE" activeBar={<Rectangle />} />
            <Bar dataKey="JPUK" fill="#00C49F" activeBar={<Rectangle />} />
            <Bar dataKey="ICM" fill="#FFBB28" activeBar={<Rectangle />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
