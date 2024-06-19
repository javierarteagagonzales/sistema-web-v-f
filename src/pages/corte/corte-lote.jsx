import React from 'react'
import Sidenav from '../../components/Sidenav'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
//navegation
import Navigation from "../../components/Navigation";
import TablaCorteLote from "../../components/corte/tablacortelote";

export default function OrdenCortePage() {
  return (
    <>
    <Navbar />
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
      <Sidenav/>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>Área de Corte</h1> 
       <div>
            <Navigation />{" "}
          </div>
        <TablaCorteLote />
      </Box>

    </Box>
      
    
      
    </>
  )
}