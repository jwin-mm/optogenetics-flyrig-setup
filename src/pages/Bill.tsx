import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './css/Bill.css'; 

const csvPath = '/BillofMaterials.csv'

const Bill: React.FC = () => {
  const [data, setData] = useState<string[][]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(csvPath);
        const csvText = await response.text();
        const parsedData = Papa.parse<string[]>(csvText).data;

        setData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the CSV file:', error);
      }
    };

    fetchCSV();
  }, []);

  return (
    <div>
    <h1>Bill Data</h1>
    {loading ? (
        <p>Data is loading...</p>
    ) : (
      <table border={1}>
        <thead>
          {data!.length > 0 && (
            <tr>
              {data![0].map((header, index) => (
                <th key={index} className={header === 'Link' ? 'link-column' : ''}>
                  {header}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {data!.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={data![0][cellIndex] === 'Link' ? 'link-column' : ''}>
                  {data![0][cellIndex] === 'Link' ? (
                    <a href={cell} target="_blank" rel="noopener noreferrer">
                      {cell}
                    </a>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  );
  
};

export default Bill;
