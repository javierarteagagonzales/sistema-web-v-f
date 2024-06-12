import React from 'react'
import { useState, useEffect } from 'react';
import Sidenav from '../../components/Sidenav'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';

//navegation
import Navigation from "../../components/Navigation";

import DenseTable from "../../components/acabados/tabla-et";
import DenseTable1 from '../../components/acabados/tabla-aca';

import SkeletonLoader from '../SkeletonLoader'; // Importar el componente de skeleton



export default function LotesPage() {

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
    
        <div className="App2">
      <div className="container">
        <div className="field">
          <label>Id Operario:</label>
          <span>12345</span>
        </div>
        <div className="field">
          <label><strong>Detalle:</strong></label>
          <span>Operario de Acabados</span>
        </div>
        <div className="field">
          <label>Nombres Completos:</label>
          <span>Javier Arteaga Gonzales</span>
        </div>
        <div className="field">
          <label>Correo:</label>
          <span>juan.perez@example.com</span>
        </div>
        <div className="field">
          <label>ID caja:</label>
          <span>67890</span>
        </div>
      </div>
    </div>
    <div><DenseTable /> </div>
    <div><DenseTable1 /> </div>
     </>
    )}
    </Box> 
    </Box>

    </>
  )
}