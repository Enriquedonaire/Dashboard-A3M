// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CampaignTracker = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const startDate = "01-12-2023";
//   const endDate = "10-12-2023";
//   const productKey = process.env.REACT_APP_PRODUCT_KEY;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const config = {
//           headers: {
//             'productKey': productKey,
//             'Content-Type': 'application/json',
//             'Accept': '*/*'
//           },
//           params: {
//             start_date: startDate,
//             end_date: endDate,
//             companyName: 'atresmedia'
//           }
//         };
        
//         const url = `http://34.118.58.199/dashboard/campaign/getAllImpressionsByDates`;
//         const response = await axios.get(url, config);
//         console.log(response.data);
//         setData(response.data);
//       } catch (error) {
//         setError('Error al obtener los datos: ' + error.message);
//         console.error('Detalles del error:', error.response);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchData();
//   }, [productKey, startDate, endDate]); 

//   if (isLoading) return <p>Cargando...</p>;
//   if (error) return <p>Hubo un error: {error}</p>;
//   if (!data) return <p>No hay datos disponibles.</p>;

//   return (
//     <div>
//       <h1>Datos de la Campaña</h1>
//       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//         <div style={{ border: '1px solid #ccc', padding: '20px' }}>
//           <h2>Total de Impresiones</h2>
//           <p>{data.totalImpresiones}</p>
//         </div>
//         <div style={{ border: '1px solid #ccc', padding: '20px' }}>
//           <h2>Total de Importe</h2>
//           <p>${data.totalImporte}</p>
//         </div>
//       </div>
//       <br />
//     </div>
//   );
// };

// export default CampaignTracker;









































// // import Chart from 'chart.js/auto';

// // const BarChart = ({ data }) => {
// // const chartRef = useRef(null);
// // const chartInstance = useRef(null);

// // useEffect(() => {
// //   if (data && data.length > 0) {
// //     if (chartInstance.current !== null) {
// //       chartInstance.current.destroy();
// //     }

// //     const labels = data.map(item => item['Site']);
// //     const metrics = Object.keys(data[0]).filter(key => key !== 'Site');

// //     const datasets = metrics.map(metric => ({
// //       label: metric,
// //       data: data.map(item => item[metric]),
// //       backgroundColor: getRandomColor(),
// //       borderColor: getRandomColor(),
// //       borderWidth: 1
// //     }));

// //     const ctx = chartRef.current.getContext('2d');

// //     chartInstance.current = new Chart(ctx, {
// //       type: 'bar',
// //       data: {
// //         labels: labels,
// //         datasets: datasets
// //       },
// //       options: {
// //         scales: {
// //           y: {
// //             beginAtZero: true
// //           }
// //         }
// //       }
// //     });
// //   }
// // }, [data]);

// // // Función para generar colores aleatorios
// // const getRandomColor = () => {
// //   const letters = '0123456789ABCDEF';
// //   let color = '#';
// //   for (let i = 0; i < 6; i++) {
// //     color += letters[Math.floor(Math.random() * 16)];
// //   }
// //   return color;
// // };

// // return (
// //   <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
// //     <h2 style={{ textAlign: 'center' }}>Gráfico de Barras</h2>
// //     <canvas ref={chartRef}></canvas>
// //   </div>
// // );
// // };
// // export default BarChart;
