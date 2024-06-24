import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
// tablas
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';

import AsignarCajaSalida from "../../components/acabados/popup";

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


const EmpleadosList = () => {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        axios.get("https://sistema-web-v.onrender.com/sistema/empleados")
            .then(response => setEmpleados(response.data))
            .catch(error => console.error('Error fetching empleados:', error));
    }, []);

    return (
        <div>
            <ul>
                {empleados.map((empleado, index) => (
                    <li key={index}>
                        {empleado.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmpleadosList;