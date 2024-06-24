import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
//import Typography from "@mui/material/Typography";
import { Grid, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Sidenav from "../../components/Sidenav";
import Navbar from "../../components/Navbar";
import Navigation from "../../components/Navigation";
export default function AcabadoPage() {
  const [empleados, setEmpleados] = useState([]);
  const [selectedEmpleado, setSelectedEmpleado] = useState('');
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('https://sistema-web-v.onrender.com/sistema/acabadoreporte/empleadosa/')
      .then(response => response.json())
      .then(data => setEmpleados(data));
  }, []);

  useEffect(() => {
    if (selectedEmpleado) {
      fetch(`https://sistema-web-v.onrender.com/sistema/datos/?empleado=${selectedEmpleado}`)
        .then(response => response.json())
        .then(data => setDatos(data));
    }
  }, [selectedEmpleado]);

  const handleEmpleadoChange = (event) => {
    setSelectedEmpleado(event.target.value);
  };

  const columns = [
    { field: 'ID_Caja', headerName: 'ID Caja', width: 150 },
    { field: 'nombre', headerName: 'Empleado', width: 150 },
    { field: 'cantidad', headerName: 'Cantidad', width: 150 },
    { field: 'ID_guia', headerName: 'ID Guía', width: 150 },
    { field: 'tipo_prenda', headerName: 'Tipo Prenda', width: 150 },
    { field: 'estilo_prenda', headerName: 'Estilo Prenda', width: 150 },
    { field: 'talla', headerName: 'Talla', width: 150 },
    { field: 'genero', headerName: 'Género', width: 150 },
    { field: 'ml', headerName: 'Medida Longitud', width: 150 },
    { field: 'mh', headerName: 'Medida Hombro', width: 150 },
    { field: 'mp', headerName: 'Medida Pecho', width: 150 },
    { field: 'mm', headerName: 'Medida Manga', width: 150 },
    { field: 'mc', headerName: 'Medida Cintura', width: 150 },
    { field: 'mca', headerName: 'Medida Cadera', width: 150 },
    { field: 'mmu', headerName: 'Medida Muslo', width: 150 },
  ];

  return (
    <>

<Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1>Área de Acabados</h1>
              <div>
                <Navigation />{" "}
              </div>
              <Grid container spacing={3} alignItems="center" sx={{ padding: 2 }}>
              <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel>Operario</InputLabel>
          <Select value={selectedEmpleado} onChange={handleEmpleadoChange}>
            {empleados.map((empleado) => (
              <MenuItem key={empleado.nombre} value={empleado.nombre}>
                {empleado.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </Grid></Grid>
            
        <Box mt={3}  width={1000} maxHeight={500}>
          <DataGrid rows={datos} columns={columns} pageSize={5} />
        </Box>
        

      </Box>

      </Box>

    </>
  );
}
