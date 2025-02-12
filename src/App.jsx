import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import PropertyCheck from './components/PropertyCheck/PropertyCheck';
import ThingsToRemember from './components/ThingsToRemember/ThingsToRemember';
import InspectionOverview from './components/InspectionOverview/InspectionOverview';
import Electrics from './components/Electrics/Electrics';
import './assets/fonts/fonts.css';

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Gotham Book, sans-serif',
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    primary: {
      main: '#4CAF50',
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: { sm: `calc(100% - 280px)` },
              ml: { sm: '280px' },
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/inspection-overview" replace />} />
              <Route path="/inspection-overview" element={<InspectionOverview />} />
              <Route path="/handover-check" element={<PropertyCheck />} />
              <Route path="/things-to-remember" element={<ThingsToRemember />} />
              <Route path="/electrics" element={<Electrics />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;