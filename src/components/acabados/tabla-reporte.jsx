import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

// tablas
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//estilos
import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 10,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));






  export default function TablaReporte() {

  
    const [acabado, setAcabado] = useState([]);

      useEffect(() => {
          const obtenerAcabados = async () => {
              try {
                  const response = await axios.get('https://sistema-web-v.onrender.com/sistema/acabado');
                  setAcabado(response.data);
              } catch (error) {
                  console.error('Error al obtener acabados:', error);
              }
          };
  
          obtenerAcabados();
      }, []);

    return (


<TableContainer component={Paper}>
<Table sx={{ maxWidth: 900}} size="small" aria-label="a dense table">
  <TableHead>
    <StyledTableRow>
    <StyledTableCell>ID caja</StyledTableCell>
    <StyledTableCell>ID prenda</StyledTableCell>
    <StyledTableCell>Cantidad</StyledTableCell>
    <StyledTableCell>Fecha creación</StyledTableCell>
    <StyledTableCell>ID operario</StyledTableCell>
    <StyledTableCell>Operario</StyledTableCell>
    </StyledTableRow>
    </TableHead>
    <TableBody>
    {acabado.map((acabado, index) => (
    <StyledTableRow key={index} >
    <StyledTableCell >{acabado.id_acabado}</StyledTableCell>
    <StyledTableCell >{acabado.nombre}</StyledTableCell>
    </StyledTableRow>
  ))}
    </TableBody>
  </Table>
</TableContainer>

);
}