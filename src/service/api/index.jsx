import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }

      const labels = data.map(item => item['Site']);
      const metrics = Object.keys(data[0]).filter(key => key !== 'Site');

      const datasets = metrics.map(metric => ({
        label: metric,
        data: data.map(item => item[metric]),
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        borderWidth: 1
      }));

      const ctx = chartRef.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: datasets
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [data]);

  // Función para generar colores aleatorios
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Gráfico de Barras</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
