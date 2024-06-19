import React from "react";
import Sidenav from "../../components/Sidenav";
import Navbar from "../../components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "../../App.css";
import { Grid } from "@mui/material";

//navegation
import Navigation from "../../components/Navigation";

import ListaAcabados from "../../components/acabados/AcabadoList";
import IDDropdown from "../../components/acabados/b-operario";
import Tacabado from "../../components/acabados/t-acabado";


export default function AcabadoPage() {

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Área de Acabados</h1>
          <div>
            <Navigation />
          </div>

          <Typography paragraph>resumen</Typography>
          <Grid container spacing={3} alignItems="center" sx={{ padding: 2 }}>
            <Grid item xs={3}>
              <div>
                <IDDropdown />
              </div>
            </Grid>
          </Grid>
          <div className="App2">
            <div className="container">
              <div className="field">
                <label>Nombres completos:</label>
                <span>Jorge Alonso Coveñas </span>
              </div>
              <div className="field">
                <label>Correo:</label>
                <span>jorge.ac@vircatex.com</span>
              </div>
            </div>
          </div>
          <div>
          <Tacabado />
          </div>
          
          <div className="App">
            <ListaAcabados />
          </div>
         
         
        </Box>
      </Box>
    </>
  );
}
