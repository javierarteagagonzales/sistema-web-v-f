import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Typography } from '@mui/material';

const columns = [
  { field: 'id_area', headerName: 'ID Area', width: 150 },
  { field: 'id_caja', headerName: 'ID Caja', width: 150 },
  { field: 'fecha_actividad', headerName: 'Fecha Actividad', width: 200 },
  { field: 'nombre', headerName: 'Estado', width: 150 },
];

const DataTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('https://sistema-web-v.onrender.com/sistema/data')
      .then(response => {
        setRows(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Datos de Transformación de Cajas
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          getRowId={(row) => row.id}  // Usa el campo 'id' único
        />
      </div>
    </Container>
  );
}

export default DataTable;

