import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Sustainable Product Design
      </Typography>
      <Typography variant="body1">
        This is the main window where the application functionalities will be displayed.
      </Typography>
    </Container>
  );
};

export default HomePage;