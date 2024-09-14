"use client";
import styles from './chart.module.css';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chartData: null,
      loading: true, // Add loading state
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/test/data'); // Adjust the API endpoint as per your backend setup
      const data = await response.json();
      this.setState({ chartData: data.studentsByExam, loading: false }); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { chartData, loading } = this.state;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Analytics</h2>
        <ResponsiveContainer width="100%" height="100%">
          {loading ? (
            <div className="w-full h-full flex items-center justify-center">
              <Skeleton className="w-full h-[300px]" />
            </div>
          ) : (
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
              <Bar dataKey="KNEC" fill="#0088FE" />
              <Bar dataKey="JPUK" fill="#00C49F" />
              <Bar dataKey="ICM" fill="#FFBB28" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    );
  }
}
