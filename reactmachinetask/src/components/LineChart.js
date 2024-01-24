// LineChart.jsx
import React from 'react';
import { useQuery } from 'react-query';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/graph');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to let react-query handle it
  }
};

const LineChartComponent = () => {
  const { data, error, isLoading } = useQuery('graphData', fetchData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <LineChart width={700} height={350} data={data}>
      <XAxis dataKey="x" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="y" stroke="#a6cee3" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default LineChartComponent;
