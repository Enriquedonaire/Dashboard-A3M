import React, { useState, useEffect } from 'react';
import seguimiento_campaña from '../../seguimiento_campaña.json'; // Importa el archivo JSON

const TablaCampaña = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(seguimiento_campaña);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Placement Status</th>
            <th>Campaign Name</th>
            <th>Fecha - Día-Mes</th>
            <th>Impre.Objetivo</th>
            <th>Impre.servidas</th>
            <th>Impresiones previstas a servir</th>
            <th>Impression Real/Prev</th>
            <th>Importe objetivo</th>
            <th>Importe real</th>
            <th>Importe previsto a servir</th>
            <th>Importe Real/Prev</th>
            <th>Neto Fuera</th>
          </tr>
          <tr>
            <td>Total ACTIVE</td>
            <td></td>
            <td></td>
            <td>1.039.296</td>
            <td>1.119.878</td>
            <td>1.120.145</td>
            <td>1.120.145</td>
            <td>19.294,04</td>
            <td>21.242,95</td>
            <td>21.250,56</td>
            <td>21.251</td>
            <td>0</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item["Placement Status"]}</td>
              <td>{item["Campaign Name"]}</td>
              <td>{item["Fecha"]}</td>
              <td>{item["Impre.Objetivo"]}</td>
              <td>{item["Impre.servidas"]}</td>
              <td>{item["Impresiones previstas a servir"]}</td>
              <td>{item["Impression Real/Prev"]}</td>
              <td>{item["Importe objetivo"]}</td>
              <td>{item["Importe real"]}</td>
              <td>{item["Importe previsto a servir"]}</td>
              <td>{item["Importe Real/Prev"]}</td>
              <td>{item["Neto Fuera"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaCampaña;

