import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedCredentials = localStorage.getItem('credentials');
    if (storedCredentials) {
      const { email, password } = JSON.parse(storedCredentials);
      if (email === 'admin@example.com' && password === 'admin') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const login = (email: string, password: string) => {
    if (email === 'admin@example.com' && password === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem('credentials', JSON.stringify({ email, password }));
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('credentials');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};