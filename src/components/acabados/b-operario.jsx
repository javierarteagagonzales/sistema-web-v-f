import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const IDDropdown = () => {
  const [idOperario, setIdOperario] = React.useState('');

  const handleChange = (event) => {
    setIdOperario(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="id-operario-label">ID Operario</InputLabel>
      <Select
        labelId="id-operario-label"
        id="id-operario-select"
        value={idOperario}
        onChange={handleChange}
        label="ID Operario"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Operario 10</MenuItem>
        <MenuItem value={20}>Operario 20</MenuItem>
        <MenuItem value={30}>Operario 30</MenuItem>
        {/* Añade más opciones según sea necesario */}
      </Select>
    </FormControl>
  );
};

export default IDDropdown;
