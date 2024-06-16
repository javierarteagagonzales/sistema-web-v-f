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
            <Typography variant="h4" gutterBottom>
                Vista Lote Entrada
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID Entrada</TableCell>
                            <TableCell>Fecha Entrada</TableCell>
                            <TableCell>ID Tipo Lote</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>ID Dim Confección</TableCell>
                            <TableCell>ID Guía Confección</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(item => (
                            <TableRow key={item.id_entrada}>
                                <TableCell>{item.id_entrada}</TableCell>
                                <TableCell>{new Date(item.fecha_entrada).toLocaleString()}</TableCell>
                                <TableCell>{item.id_tipo_lote}</TableCell>
                                <TableCell>{item.cantidad}</TableCell>
                                <TableCell>{item.id_dim_confeccion}</TableCell>
                                <TableCell>{item.id_guia_confeccion}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default LoteEntradaVista;
