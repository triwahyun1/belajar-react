import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Lingkaran() {
    const [nilair, setNilair] = useState(0);
    const [nilaiR, setNilaiR] = useState(0);
    const [total, setTotal] = useState(0);

    function handleChangeNr(e) {
        setNilair(e.target.value);
    }

    function handleChangeNR(e) {
        setNilaiR(e.target.value);
    }

    function handleTotal(e) {
        setTotal(3.14 * parseInt(nilair) * parseInt(nilaiR));
    }
    return (
        <Box textAlign="center" sx={{ mt: 5 }}>
            <Typography variant="h5" sx={{ fontFamily: 'ariel' }}> Rumus Luas Lingkaran</Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Box>
                    <Typography>r</Typography>
                    <TextField sx={{ backgroundColor: '#e8e8e8', color: 'black', ml: 1, mr: 1 }} onChange={handleChangeNr} value={nilair} />
                </Box>
                <Box>
                    <Typography>r</Typography>
                    <TextField sx={{ backgroundColor: '#e8e8e8', color: 'black' }} onChange={handleChangeNR} value={nilaiR} />
                </Box>
            </Grid>
            <Box>
                <Typography>Hasil</Typography>
                <TextField sx={{ backgroundColor: '#e8e8e8', color: 'black' }} value={total} />
            </Box>
            <Box sx={{ mt:2, ml:3 }}>
                <Button to={`/`} component={Link} sx={{ backgroundColor: '#fec1e4', color: 'black' }}>Back</Button>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={handleTotal}>=</Button>
            </Box>
        </Box >
    )
}

export default Lingkaran
