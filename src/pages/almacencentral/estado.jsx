import React from 'react'
import Sidenav from '../../components/Sidenav'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import ConsultaCentral from '../../components/almacencentral/consulta'
import ConsultaLotesFechas from '../../components/almacencentral/conlotesf';
import ConsultaProveedor from '../../components/almacencentral/conprovee';
import ConsultaLotesActividad from '../../components/almacencentral/conlotesact';
import ConsultaLotesEstado from '../../components/almacencentral/conlotesest';
import ConsultaLotesEntrada from '../../components/almacencentral/conlotesent';
import ConsultaLotesSalida from '../../components/almacencentral/conlotessal';

export default function EstadoPage() {
  return (
    <>
    <Navbar />
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
      <Sidenav/>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>Área de Almacén Central</h1> 
       <Box>
        <h3>
          Consulta de lotes por estado
        </h3>
        
      <div><ConsultaCentral /></div>
      <h3>
          Consulta de lotes entre fechas
        </h3>
        
      <div><ConsultaLotesFechas /></div>
      
      <h3>
          Consulta por proveedor
        </h3>
        
      <div><ConsultaProveedor /></div>
      <h3>
          Cantidad de lotes por actividad
        </h3>
        
      <div><ConsultaLotesActividad /></div>
      <h3>
          Cantidad de lotes por estado
        </h3>
        
      <div><ConsultaLotesEstado /></div>
      <h3>
          Lotes de entrada en una fecha
        </h3>
        
      <div><ConsultaLotesEntrada /></div>
      <h3>
          Lotes de salida en una fecha
        </h3>
        
      <div><ConsultaLotesSalida /></div>
      
      </Box>
      </Box>
      
    </Box>
    
    
      
    </>
  )
}