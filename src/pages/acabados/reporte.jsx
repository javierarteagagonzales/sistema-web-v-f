import React from "react";
import { useState, useEffect } from "react";
import Sidenav from "../../components/Sidenav";
import Navbar from "../../components/Navbar";
import { Button, Box } from "@mui/material";

//navegation
import Navigation from "../../components/Navigation";
import TablaReporte from "../../components/acabados/tabla-reporte";

import Bot from "../../components/acabados/bot";


import { TextField, Grid } from "@mui/material";
import SkeletonLoader from "../SkeletonLoader"; // Importar el componente de skeleton

export default function Reporte() {
  //Skeleton
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de datos
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Tiempo de espera simulado de 3 segundos
  }, []);

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {loading ? (
            <SkeletonLoader /> // Mostrar el skeleton mientras se cargan los datos
          ) : (
            <>
              <h1>Área de Acabados</h1>
              <div>
                <Navigation />
              </div>

              <Grid container spacing={3} alignItems="center" sx={{ padding: 2 }}>
                <Grid item xs={3}>
                  <TextField
                    id="date-start"
                    label="Fecha inicio"
                    type="date"
                    defaultValue=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="date-end"
                    label="Fecha fin"
                    type="date"
                    defaultValue=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#881C62", color: "white" }}
                  >
                    Buscar
                  </Button></Grid>
                  <Grid item xs={2}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "green", color: "white" }}
                  >
                    Imprimir
                  </Button></Grid>
                  <Grid item xs={1}>
                  <Bot />
                  </Grid>
                
              </Grid>
              <Box>
                <TablaReporte />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
