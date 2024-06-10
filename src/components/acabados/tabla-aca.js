import React from 'react'
import { useEffect, useState } from 'react';
import { getAllData } from '../../api/v.api'
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






  export default function DenseTable1() {

   /* const [acabado, setAcabado] = useState([]);


    useEffect(() => {
      async function loadData() {
        const res = await getAllData();
        setAcabado(res.data);
      }
      loadData();
    },[]);*/
  

      const [acabados, setAcabados] = useState([]);
      useEffect(() => {
        const obtenerAcabados = async () => {
            try {
                const response = await getAllData();
                setAcabados(response.data);
            } catch (error) {
                console.error('Error al obtener acabados:', error);
            }
        };
    
        obtenerAcabados();
    }, []);
  
      /*useEffect(() => {
          const obtenerAcabados = async () => {
              try {
                  const response = await axios.get('https://sistema-web-v.onrender.com/sistema/acabados');
                  setAcabados(response.data);
              } catch (error) {
                  console.error('Error al obtener acabados:', error);
              }
          };
  
          obtenerAcabados();
      }, []);*/

    return (


<TableContainer component={Paper}>
<Table sx={{ maxWidth: 450}} size="small" aria-label="a dense table">
  <TableHead>
    <StyledTableRow>
    <StyledTableCell>ID</StyledTableCell>
    <StyledTableCell>Nombre</StyledTableCell>
    <StyledTableCell>Fecha</StyledTableCell>
    <StyledTableCell>Caja Entrada</StyledTableCell>
    <StyledTableCell>Caja Salida</StyledTableCell>
    </StyledTableRow>
    </TableHead>
    <TableBody>
    {acabados.map((acabado, index) => (
    <StyledTableRow key={index} >
    <StyledTableCell >{acabado.id}</StyledTableCell>
    <StyledTableCell >{acabado.nombre}</StyledTableCell>
    </StyledTableRow>
  ))}
    </TableBody>
  </Table>
</TableContainer>

);
}