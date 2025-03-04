import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Paper } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import './LoginForm.css'; // Import the CSS file

const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const [redirectToHome, setRedirectToHome] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
      setRedirectToHome(true);
    },
  });

  if (redirectToHome && isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box className="login-box">
        <Paper elevation={3} className="login-paper" sx={{ backgroundColor: '#263a55' }}>
          <Typography component="h1" variant="h5" align="center" className="login-text">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} className="login-form">
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              className="login-text"
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              className="login-text"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="login-button"
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginForm;