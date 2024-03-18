import React, { useState, useEffect } from "react";
import { tokens } from "../../theme";
import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import * as XLSX from "xlsx";
import dummyData from "../../dummyData.json";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const datos = dummyData;

const TablaDinamica = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tablaData, setTablaData] = useState({
    categorias: {},
    totalGeneral: {},
  });

  useEffect(() => {
    const categorias = {};

    datos.forEach((dato) => {
      if (!categorias[dato["Principales Categorías"]]) {
        categorias[dato["Principales Categorías"]] = {
          DIRECTAS: 0,
          PROGRAMATICA: 0,
          Impressions: 0,
          dispositivos: {},
        };
      }
      categorias[dato["Principales Categorías"]].DIRECTAS += parseFloat(
        dato["Net Counted Ads Promo"]
      );
      categorias[dato["Principales Categorías"]].PROGRAMATICA += parseFloat(
        dato["Net Counted Ads Sin Promo"]
      );
      categorias[dato["Principales Categorías"]].Impressions +=
        parseFloat(dato["Net Counted Ads Promo"]) +
        parseFloat(dato["Net Counted Ads Sin Promo"]);

      if (
        !categorias[dato["Principales Categorías"]].dispositivos[
          dato.Dispositivo
        ]
      ) {
        categorias[dato["Principales Categorías"]].dispositivos[
          dato.Dispositivo
        ] = {
          DIRECTAS: 0,
          PROGRAMATICA: 0,
          Impressions: 0,
        };
      }
      categorias[dato["Principales Categorías"]].dispositivos[
        dato.Dispositivo
      ].DIRECTAS += parseFloat(dato["Net Counted Ads Promo"]);
      categorias[dato["Principales Categorías"]].dispositivos[
        dato.Dispositivo
      ].PROGRAMATICA += parseFloat(dato["Net Counted Ads Sin Promo"]);
      categorias[dato["Principales Categorías"]].dispositivos[
        dato.Dispositivo
      ].Impressions +=
        parseFloat(dato["Net Counted Ads Promo"]) +
        parseFloat(dato["Net Counted Ads Sin Promo"]);
    });

    const totalGeneral = {
      DIRECTAS: 0,
      PROGRAMATICA: 0,
      Impressions: 0,
    };

    Object.values(categorias).forEach((categoria) => {
      totalGeneral.DIRECTAS += categoria.DIRECTAS;
      totalGeneral.PROGRAMATICA += categoria.PROGRAMATICA;
      totalGeneral.Impressions += categoria.Impressions;
    });

    setTablaData({
      categorias,
      totalGeneral,
    });
  }, []);

  const descargarTabla = () => {
    const wsData = [];

    wsData.push([
      "Etiquetas de fila",
      "Dispositivo",
      "DIRECTAS",
      "PROGRAMATICA",
      "Impressions",
      "% DIR",
      "% PROG",
      "% TOTAL",
      "INVENTARIO",
      "OCU DIR",
      "OCU PROG",
      "OCUPACION",
    ]);

    Object.entries(tablaData.categorias).forEach(([categoria, valores]) => {
      wsData.push([categoria]);
      if (valores.dispositivos) {
        Object.entries(valores.dispositivos).forEach(
          ([dispositivo, dispositivoValores]) => {
            wsData.push([
              "",
              dispositivo,
              dispositivoValores.DIRECTAS,
              dispositivoValores.PROGRAMATICA,
              dispositivoValores.Impressions,
            ]);
          }
        );
      }
      wsData.push([
        "",
        "",
        valores.DIRECTAS,
        valores.PROGRAMATICA,
        valores.Impressions,
        `${((valores.DIRECTAS / tablaData.totalGeneral.DIRECTAS) * 100).toFixed(
          0
        )}%`,
        `${(
          (valores.PROGRAMATICA / tablaData.totalGeneral.PROGRAMATICA) *
          100
        ).toFixed(0)}%`,
        `${(
          (valores.Impressions / tablaData.totalGeneral.Impressions) *
          100
        ).toFixed(0)}%`,
        "",
        "",
        "",
        "",
      ]);
    });

    wsData.push([
      "Total general",
      "",
      tablaData.totalGeneral.DIRECTAS,
      tablaData.totalGeneral.PROGRAMATICA,
      tablaData.totalGeneral.Impressions,
      "100%",
      "100%",
      "100%",
      "",
      "",
      "",
      "",
    ]);

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Tabla Dinámica");
    XLSX.writeFile(wb, "tabla_dinamica.xlsx");
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "1600px" }}>
      <Header title="DYNAMIC TABLE" subtitle="Check your Inventory Analytics" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button
          sx={{
            backgroundColor: colors.greenAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "5px 10px",
          }}
          onClick={descargarTabla}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Table
        </Button>
      </Box>

      <Header title="dic-23" />
      <hr style={{ border: "2px solid #ED7D31" }} />
      <h2>CATEGORIAS (pre + mid)</h2>
      <hr
        style={{
          border: "2px solid #92AFE2",
          borderColor: "#92AFE2",
          width: "200px",
          marginLeft: "0",
          marginRight: "auto",
        }}
      />
      <div style={{ display: "flex", gap: "200px" }}>
        <p style={{ margin: "0" }}>Fecha</p>
        <p style={{ margin: "0" }}>(Todas)</p>
      </div>
      <div style={{ display: "flex", gap: "149px" }}>
        <p style={{ margin: "0" }}>Formato Video</p>
        <p style={{ margin: "0" }}>(Varios elementos)</p>
      </div>
      <div style={{ display: "flex", gap: "210px" }}>
        <p style={{ margin: "0" }}>Site</p>
        <p style={{ margin: "0" }}>(Varios elementos)</p>
      </div>
      <br />
      <br />
      <table
        style={{
          width: "100%",
          border: "none",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "none", padding: "8px", textAlign: "left" }}>
              Etiquetas de fila
            </th>
            <th style={{ border: "none", padding: "8px", textAlign: "left" }}>Dispositivo</th>
            <th
              style={{
                border: "none",
                padding: "8px",
                backgroundColor: "#8EAADB",
                color: "white",
              }}
              colSpan="3"
            >
              IMPRESIONES
            </th>
            <th
              style={{
                border: "none",
                padding: "8px",
                backgroundColor: "#B4C6E7",
                color: "white",
              }}
              colSpan="3"
            >
              % SERVIDO
            </th>
            <th style={{ border: "none", padding: "3px" }} colSpan="1"></th>
            <th
              style={{
                border: "none",
                padding: "3px",
                backgroundColor: "#8EAADB",
                color: "white",
              }}
              colSpan="6"
            >
              OCUPACIONES
            </th>
          </tr>
          <tr>
            <th style={{ border: "none", padding: "8px" }}></th>
            <th style={{ border: "none", padding: "8px" }}></th>
            <th style={{ border: "none", padding: "8px" }}>DIRECTAS</th>
            <th style={{ border: "none", padding: "8px" }}>PROGRAMATICA</th>
            <th style={{ border: "none", padding: "8px" }}>Impressions</th>
            <th style={{ border: "none", padding: "8px" }}>% DIR</th>
            <th style={{ border: "none", padding: "8px" }}>% PROG</th>
            <th style={{ border: "none", padding: "8px" }}>% TOTAL</th>
            <th style={{ border: "2px solid black", padding: "8px" }}>
              INVENTARIO
            </th>
            <th style={{ border: "none", padding: "8px" }}>OCU DIR</th>
            <th style={{ border: "none", padding: "8px" }}>OCU PROG</th>
            <th style={{ border: "none", padding: "8px" }}>OCUPACION</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tablaData.categorias).map(
            ([categoria, valores], index) => (
              <React.Fragment key={index}>
                {valores.dispositivos &&
                  Object.entries(valores.dispositivos).map(
                    ([dispositivo, dispositivoValores], dispositivoIndex) => (
                      <tr key={`${index}-${dispositivoIndex}`}>
                        <td style={{ border: "none", padding: "8px", fontWeight: "bold" }}>
                          {categoria}
                        </td>
                        <td style={{ border: "none", padding: "8px" }}>
                          {dispositivo}
                        </td>
                        <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                          {dispositivoValores.DIRECTAS}
                        </td>
                        <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                          {dispositivoValores.PROGRAMATICA}
                        </td>
                        <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                          {dispositivoValores.Impressions}
                        </td>
                        <td style={{ border: "none", padding: "8px", textAlign: "right"}}>
                          {(
                            (dispositivoValores.DIRECTAS /
                              tablaData.totalGeneral.DIRECTAS) *
                            100
                          ).toFixed(0)}
                          %
                        </td>
                        <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                          {(
                            (dispositivoValores.PROGRAMATICA /
                              tablaData.totalGeneral.PROGRAMATICA) *
                            100
                          ).toFixed(0)}
                          %
                        </td>
                        <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                          {(
                            (dispositivoValores.Impressions /
                              tablaData.totalGeneral.Impressions) *
                            100
                          ).toFixed(0)}
                          %
                        </td>
                        <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                          {(
                            (dispositivoValores.Impressions /
                              tablaData.totalGeneral.Impressions) *
                            100
                          ).toFixed(0)}
                          %
                        </td>
                        <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                          {(
                            (dispositivoValores.DIRECTAS /
                              tablaData.totalGeneral.DIRECTAS) *
                            100
                          ).toFixed(0)}
                          %
                        </td>
                        <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                          {(
                            (dispositivoValores.PROGRAMATICA /
                              tablaData.totalGeneral.PROGRAMATICA) *
                            100
                          ).toFixed(0)}
                          %
                        </td>
                        <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
                      </tr>
                    )
                  )}
                <tr>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                  
                  </td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                    {valores.DIRECTAS}
                  </td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                    {valores.PROGRAMATICA}
                  </td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                    {valores.Impressions}
                  </td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                    {(
                      (valores.DIRECTAS / tablaData.totalGeneral.DIRECTAS) *
                      100
                    ).toFixed(0)}
                    %
                  </td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                    {(
                      (valores.PROGRAMATICA /
                        tablaData.totalGeneral.PROGRAMATICA) *
                      100
                    ).toFixed(0)}
                    %
                  </td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
                    {(
                      (valores.Impressions /
                        tablaData.totalGeneral.Impressions) *
                      100
                    ).toFixed(0)}
                    %
                  </td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
                  <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
                </tr>
              </React.Fragment>
            )
          )}
          <tr>
            <td style={{ border: "none", padding: "8px", textAlign: "left" }}>Total general</td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
              {tablaData.totalGeneral.DIRECTAS}
            </td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
              {tablaData.totalGeneral.PROGRAMATICA}
            </td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}>
              {tablaData.totalGeneral.Impressions}
            </td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}>100%</td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}>100%</td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}>100%</td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
            <td style={{ border: "none", padding: "8px", textAlign: "right" }}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default TablaDinamica;
