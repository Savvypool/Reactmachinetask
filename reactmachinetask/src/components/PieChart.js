// PieChart.jsx
import React from 'react';
import { useQuery } from 'react-query';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const fetchPieData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/pie-chart');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    // Add a "fill" property with different shades of green
    const shadesOfGreen = ['#67c587', '#88d1a1', '#a9deba', '#c9ead4', '#eaf6ed'];
    const dataWithColors = result.map((item, index) => ({
      ...item,
      fill: shadesOfGreen[index % shadesOfGreen.length],
    }));

    return dataWithColors;
  } catch (error) {
    console.error('Error fetching pie data:', error);
    throw error;
  }
};

const PieChartComponent = () => {
  const { data, error, isLoading } = useQuery('pieChartData', fetchPieData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <PieChart width={300} height={350}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="label"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="fill"
        label
      />
      <Tooltip />
      <Legend
        layout="horizontal" // Set layout to "vertical" for a column format
        verticalAlign="bottom"
        align="left" // Align the legend to the left
        wrapperStyle={{ color: 'black', margin: '15px', lineHeight : '1.5'}} // Set text color to black and margin to 5px
      />
    </PieChart>
  );
};

export default PieChartComponent;
