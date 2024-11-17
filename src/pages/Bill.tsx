import React, { useState, useEffect } from 'react';

const csvFile = '../assets/Bill of Materials.csv'

// Component to read and display CSV content from a subfolder
const Bill: React.FC = () => {
  const [tableData, setTableData] = useState<string[][]>([]);

  // Function to fetch and parse CSV
  useEffect(() => {
      try {
        const rows = csvFile.split('\n').map((row: any) => row.split(','));
        setTableData(rows);
        console.log(rows)
      } catch (error) {
        console.error('CSV file could not be loaded:', error);
      }
  }, []);

  return (
    <>
      <h1>Bill of Materials</h1>
      {tableData.length > 0 ? (
        <table border={1} cellPadding="5" style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {tableData[0].map((header, index) => (
                <th key={index}>{header.trim()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell.trim()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading CSV data...</p>
      )}
    </>
  );
};

export default Bill;
