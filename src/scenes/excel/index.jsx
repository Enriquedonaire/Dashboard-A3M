import { useState } from "react";
import * as XLSX from "xlsx";
import './styles.css'

const Excel = () => {
  const [data, setData] = useState([]);

  const handleFileInput = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parseData = XLSX.utils.sheet_to_json(sheet);
      setData(parseData);
    };
  };

  return (
    <div >
      <input className="input-file" style={{margin: '50px 20px 30px 40px'}} type="file" accept=".xlsx, .xls, .csv, .json" onChange={handleFileInput} />

      {data.length > 0 && (
        <table className="excel-table" style={{margin: '50px', borderCollapse: 'collapse'}}>
          <thead>
            <tr className="table-header">
              {Object.keys(data[0]).map((key) => (
                <th className="table-cell table-cell-centered" key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td className="table-cell" key={index}>{value}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Excel;

