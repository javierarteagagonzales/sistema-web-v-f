// LoteEntradaVista.js
import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Typography,
    CircularProgress,
} from '@mui/material';

import { tableCellClasses } from "@mui/material/TableCell";

//estilos
import { styled } from "@mui/material/styles";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const LoteEntradaVista = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/lote-entrada-vista/')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Container>
                <Typography variant="h4" gutterBottom>
                    Vista Lote Entrada
                </Typography>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>ID Entrada</StyledTableCell>
                            <StyledTableCell>Fecha Entrada</StyledTableCell>
                            <StyledTableCell>ID Tipo Lote</StyledTableCell>
                            <StyledTableCell>Cantidad</StyledTableCell>
                            <StyledTableCell>ID Dim Confección</StyledTableCell>
                            <StyledTableCell>ID Guía Confección</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(item => (
                            <StyledTableRow key={item.id_entrada}>
                                <StyledTableCell>{item.id_entrada}</StyledTableCell>
                                <StyledTableCell>{new Date(item.fecha_entrada).toLocaleString()}</StyledTableCell>
                                <StyledTableCell>{item.id_tipo_lote}</StyledTableCell>
                                <StyledTableCell>{item.cantidad}</StyledTableCell>
                                <StyledTableCell>{item.id_dim_confeccion}</StyledTableCell>
                                <StyledTableCell>{item.id_guia_confeccion}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default LoteEntradaVista;
