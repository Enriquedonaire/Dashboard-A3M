import React, { useState, useEffect } from 'react';
import seguimiento_campaña from '../../seguimiento_campaña.json'; // Importa el archivo JSON

const TablaCampaña = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(seguimiento_campaña);
  }, []);

  return (
    <div style={{ margin: "0 auto", maxWidth: "1600px" }}>
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
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}>Total ACTIVE</td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}></td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}></td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}>1.039.296</td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}>1.119.878</td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}>1.120.145</td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}>1.120.145</td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}>19.294,04</td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}>21.242,95</td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}>21.250,56</td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}>21.251</td>
            <td style={{ border: "none", padding: "4px", textAlign: "right" }}>0</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Placement Status"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Campaign Name"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Fecha"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Impre.Objetivo"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Impre.servidas"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Impresiones previstas a servir"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Impression Real/Prev"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Importe objetivo"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Importe real"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Importe previsto a servir"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Importe Real/Prev"]}</td>
              <td style={{ border: "none", padding: "4px", textAlign: "right" }}>{item["Neto Fuera"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaCampaña;

