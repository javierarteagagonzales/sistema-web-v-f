import React from 'react'
import Sidenav from '../../components/Sidenav'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InspecCal1 from '../../components/calidad/inspeccal';

export default function Tipo1Page() {
  return (
    <>
    <Navbar />
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
      <Sidenav/>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>Área de Almacén Central</h1> 
        <Typography paragraph>
          resumen
        </Typography>
        <h3>
          Orden de producción
        </h3>
        
      <div><InspecCal1 /></div>
      </Box>

    </Box>
      
    
      
    </>
  )
}