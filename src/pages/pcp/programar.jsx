import React from 'react'
import Sidenav from '../../components/Sidenav'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import ConsultaOrdenTrabajo from '../../components/pcp/conordentra';
import ConsultaRegistroProd from '../../components/pcp/conregistropro';
import ConsultaRegistroOrden from '../../components/pcp/conregistroord';
import EnhancedTable from '../../components/pcp/a';

export default function ProgramarPage() {
  return (
    <>
    <Navbar />
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
      <Sidenav/>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>Área de PCP</h1> 
       <h3>
          Orden de produccion
        </h3>
        
      <div><ConsultaOrdenTrabajo /></div>
      <h3>
          Registro Orden de produccion
        </h3>
        
      <div><ConsultaRegistroProd /></div>
      <h3>
          Registro Orden de pedido
        </h3>
        
      <div><ConsultaRegistroOrden /></div>
      <div><EnhancedTable /></div>

     
     
      </Box>

    </Box>
      
    
      
    </>
  )
}