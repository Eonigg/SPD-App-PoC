import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import HomePage from './pages/HomePage';
import LoginForm from './components/Auth/LoginForm';
import Navbar from './components/Navbar';
import { AuthProvider, useAuth } from './context/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B5E20',
    },
    background: {
      default: '#2E3B4E',
      paper: '#37474F',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && <Navbar />}
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <>
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;