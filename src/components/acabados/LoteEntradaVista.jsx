// LoteEntradaVista.js
import React, { useEffect, useState } from 'react';

const LoteEntradaVista = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://sistema-web-v.onrender.com/sistema/lote-entrada-vista/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Vista Lote Entrada</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID Entrada</th>
                        <th>Fecha Entrada</th>
                        <th>ID Tipo Lote</th>
                        <th>Cantidad</th>
                        <th>ID Dim Confeccion</th>
                        <th>ID Guia Confeccion</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id_entrada}>
                            <td>{item.id_entrada}</td>
                            <td>{item.fecha_entrada}</td>
                            <td>{item.id_tipo_lote}</td>
                            <td>{item.cantidad}</td>
                            <td>{item.id_dim_confeccion}</td>
                            <td>{item.id_guia_confeccion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoteEntradaVista;
