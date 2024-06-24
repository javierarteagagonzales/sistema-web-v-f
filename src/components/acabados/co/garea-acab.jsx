import React from 'react';
import { Box, Typography, Link } from '@mui/material';
//import "../estilos/home.css"; // Si aún necesitas tu CSS personalizado
import ListaAcabados from "../AcabadoList";

const GareaAca = () => {
  return (
    <Box className="nos-container" sx={{ padding: 8, backgroundColor: '#f0f0f0', borderRadius: 2, boxShadow: 3, maxWidth: '95%', margin: '0 auto' }}>
  <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
    Datos generales
  </Typography>
  <Box component="section" mb={2}>
    
    <div className="App">
            <ListaAcabados />
          </div>
  </Box>
  <Box component="section">
    <Link href="https://www.vircatex.com/" target="_blank" rel="noopener noreferrer" color="primary" underline="hover">
      Visita nuestro sitio web.
    </Link>
  </Box>
</Box>
  );
}

export default GareaAca;
