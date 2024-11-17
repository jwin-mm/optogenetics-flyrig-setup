import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './css/Bill.css'; 

const csvPath = '/BillofMaterials.csv'

const Bill: React.FC = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(csvPath)
      .then(response => console.log(response.body()))
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          complete: (result: any) => {
            setData(result.data);
          },
          error: (error: Error) => {
            console.error('Error parsing CSV:', error);
          }
        });
      });
  }, []);

  return (
    <div className="csv-table">
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
  
};

export default Bill;
