// TableChart.jsx
import React, { useEffect, useState } from 'react';

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/table');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const TableChart = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData();
        setTableData(result);
      } catch (error) {
        // Handle error if needed
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div className='table'> 
      <table className='styled-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableChart;
