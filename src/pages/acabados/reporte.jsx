import React from 'react'
import { useState, useEffect } from 'react';
import Sidenav from '../../components/Sidenav'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';

//navegation
import Navigation from "../../components/Navigation";

import { TextField, Grid } from '@mui/material';
import SkeletonLoader from '../SkeletonLoader'; // Importar el componente de skeleton



export default function Reporte() {

//Skeleton
const [loading, setLoading] = useState(true);

useEffect(() => {
  // Simula la carga de datos
  setTimeout(() => {
    setLoading(false);
  }, 1500); // Tiempo de espera simulado de 3 segundos
}, []);




  return (

    <>
    <Navbar />
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
      <Sidenav/>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {loading ? (
            <SkeletonLoader /> // Mostrar el skeleton mientras se cargan los datos
          ) : (
            <> 
       <h1>Área de Acabados</h1>  
      <div><Navigation /> </div>
    
      <Grid container spacing={2} alignItems="center">
      <Grid item xs={3}>
        <TextField
          id="date-start"
          label="Fecha inicio"
          type="date"
          defaultValue=""
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="date-end"
          label="Fecha fin"
          type="date"
          defaultValue=""
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>
    </Grid>




     </>
    )}
    </Box> 
    </Box>

    </>
  )
}