import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Calendar from "./scenes/calendar";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";
import TablaDinamica from "./scenes/excel/TablaDinamica";
import TablaCampaña from "./scenes/excel/TablaCampaña";
// import BarChart from "./service/api";
import CampaignTracker from "./service/api";

function App() {
  // const dataJson = [
  //   {
  //     Dispositivo: "androidsmarttv",
  //     Fecha: "10/04/2023",
  //     "Principales Categorías": "A3P CORTO",
  //     "Net Counted Ads": 26,
  //     "Ad Avails (Constrained)": 0,
  //     "Formato Video específico": "Pre-roll FIB (pre-roll first in break)",
  //     "Formato Video": "preroll",
  //     Site: "atresplayer",
  //     "Sistema Operativo": "",
  //     "Video Largo/Corto": "FORM | Corto",
  //     "Site Section Name": "atresplayer_androidsmarttv",
  //     "Tipo de venta": "AtresMedia Live",
  //     Vertical: "atresplayer",
  //     "Net Counted Ads Promo": 0,
  //     "Net Counted Ads Sin Promo": 26,
  //   },
  //   {
  //     Dispositivo: "androidsmarttv",
  //     Fecha: "10/04/2023",
  //     "Principales Categorías": "A3P CORTO",
  //     "Net Counted Ads": 17,
  //     "Ad Avails (Constrained)": 0,
  //     "Formato Video específico": "Pre-roll FIB (pre-roll first in break)",
  //     "Formato Video": "preroll",
  //     Site: "atresplayer",
  //     "Sistema Operativo": "",
  //     "Video Largo/Corto": "FORM | Extra corto",
  //     "Site Section Name": "atresplayer_androidsmarttv",
  //     "Tipo de venta": "AtresMedia Live",
  //     Vertical: "atresplayer",
  //     "Net Counted Ads Promo": 0,
  //     "Net Counted Ads Sin Promo": 17,
  //   },
  //   {
  //     Dispositivo: "androidsmarttv",
  //     Fecha: "10/04/2023",
  //     "Principales Categorías": "A3P CORTO",
  //     "Net Counted Ads": 361,
  //     "Ad Avails (Constrained)": 0,
  //     "Formato Video específico": "Preroll Standard",
  //     "Formato Video": "preroll",
  //     Site: "atresplayer",
  //     "Sistema Operativo": "",
  //     "Video Largo/Corto": "FORM | Corto",
  //     "Site Section Name": "atresplayer_androidsmarttv",
  //     "Tipo de venta": "AtresMedia Live",
  //     Vertical: "atresplayer",
  //     "Net Counted Ads Promo": 0,
  //     "Net Counted Ads Sin Promo": 361,
  //   },
  //   {
  //     Dispositivo: "androidsmarttv",
  //     Fecha: "10/04/2023",
  //     "Principales Categorías": "A3P CORTO",
  //     "Net Counted Ads": 26,
  //     "Ad Avails (Constrained)": 0,
  //     "Formato Video específico": "Preroll Standard",
  //     "Formato Video": "preroll",
  //     Site: "atresplayer",
  //     "Sistema Operativo": "",
  //     "Video Largo/Corto": "FORM | Corto",
  //     "Site Section Name": "atresplayer_androidsmarttv",
  //     "Tipo de venta": "SmartClip Alemania",
  //     Vertical: "atresplayer",
  //     "Net Counted Ads Promo": 0,
  //     "Net Counted Ads Sin Promo": 26,
  //   },
  //   {
  //     Dispositivo: "androidsmarttv",
  //     Fecha: "10/04/2023",
  //     "Principales Categorías": "A3P CORTO",
  //     "Net Counted Ads": 1,
  //     "Ad Avails (Constrained)": 0,
  //     "Formato Video específico": "Preroll Standard",
  //     "Formato Video": "preroll",
  //     Site: "atresplayer",
  //     "Sistema Operativo": "",
  //     "Video Largo/Corto": "FORM | Corto",
  //     "Site Section Name": "atresplayer_androidsmarttv",
  //     "Tipo de venta": "StickyAds",
  //     Vertical: "atresplayer",
  //     "Net Counted Ads Promo": 0,
  //     "Net Counted Ads Sin Promo": 1,
  //   },
  //   {
  //     Dispositivo: "androidsmarttv",
  //     Fecha: "10/04/2023",
  //     "Principales Categorías": "A3P CORTO",
  //     "Net Counted Ads": 0,
  //     "Ad Avails (Constrained)": 806,
  //     "Formato Video específico": "Preroll Standard",
  //     "Formato Video": "preroll",
  //     Site: "atresplayer",
  //     "Sistema Operativo": "",
  //     "Video Largo/Corto": "FORM | Corto",
  //     "Site Section Name": "atresplayer_androidsmarttv",
  //     "Tipo de venta": "Unknown Network",
  //     Vertical: "atresplayer",
  //     "Net Counted Ads Promo": 0,
  //     "Net Counted Ads Sin Promo": 0,
  //   },
  //   {
  //     Dispositivo: "androidsmarttv",
  //     Fecha: "10/04/2023",
  //     "Principales Categorías": "A3P CORTO",
  //     "Net Counted Ads": 62,
  //     "Ad Avails (Constrained)": 0,
  //     "Formato Video específico": "Preroll Standard",
  //     "Formato Video": "preroll",
  //     Site: "atresplayer",
  //     "Sistema Operativo": "",
  //     "Video Largo/Corto": "FORM | Extra corto",
  //     "Site Section Name": "atresplayer_androidsmarttv",
  //     "Tipo de venta": "AtresMedia Live",
  //     Vertical: "atresplayer",
  //     "Net Counted Ads Promo": 0,
  //     "Net Counted Ads Sin Promo": 62,
  //   },
  //   {
  //     Dispositivo: "androidsmarttv",
  //     Fecha: "10/04/2023",
  //     "Principales Categorías": "A3P CORTO",
  //     "Net Counted Ads": 27,
  //     "Ad Avails (Constrained)": 0,
  //     "Formato Video específico": "Preroll Standard",
  //     "Formato Video": "preroll",
  //     Site: "atresplayer",
  //     "Sistema Operativo": "",
  //     "Video Largo/Corto": "FORM | Extra corto",
  //     "Site Section Name": "atresplayer_androidsmarttv",
  //     "Tipo de venta": "SmartClip Alemania",
  //     Vertical: "atresplayer",
  //     "Net Counted Ads Promo": 0,
  //     "Net Counted Ads Sin Promo": 27,
  //   },
  //   {
  //     Dispositivo: "androidsmarttv",
  //     Fecha: "10/04/2023",
  //     "Principales Categorías": "A3P CORTO",
  //     "Net Counted Ads": 0,
  //     "Ad Avails (Constrained)": 173,
  //     "Formato Video específico": "Preroll Standard",
  //     "Formato Video": "preroll",
  //     Site: "atresplayer",
  //     "Sistema Operativo": "",
  //     "Video Largo/Corto": "FORM | Extra corto",
  //     "Site Section Name": "atresplayer_androidsmarttv",
  //     "Tipo de venta": "Unknown Network",
  //     Vertical: "atresplayer",
  //     "Net Counted Ads Promo": 0,
  //     "Net Counted Ads Sin Promo": 0,
  //   },
  //   {
  //     Dispositivo: "androidsmarttv",
  //     Fecha: "10/04/2023",
  //     "Principales Categorías": "A3P CORTO",
  //     "Net Counted Ads": 311,
  //     "Ad Avails (Constrained)": 0,
  //     "Formato Video específico": "Standard Pre",
  //     "Formato Video": "preroll",
  //     Site: "atresplayer",
  //     "Sistema Operativo": "",
  //     "Video Largo/Corto": "FORM | Corto",
  //     "Site Section Name": "atresplayer_androidsmarttv",
  //     "Tipo de venta": "Unknown Network",
  //     Vertical: "atresplayer",
  //     "Net Counted Ads Promo": 0,
  //     "Net Counted Ads Sin Promo": 311,
  //   },
  // ];
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/excel" element={<TablaDinamica />} />
              <Route path="/dynamic" element={<TablaCampaña />} />
              <Route path="/service" element={<CampaignTracker />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
