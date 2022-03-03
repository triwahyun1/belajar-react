import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
function PresegiPanjang() {
    const [nilaiP, setNilaiP] = useState(0);
    const [nilaiL, setNilaiL] = useState(0);
    const [total, setTotal] = useState(0);

    function handleChangeNP(e) {
        setNilaiP(e.target.value);
    }

    function handleChangeNL(e) {
        setNilaiL(e.target.value);
    }

    function handleTotal(e) {
        setTotal(parseInt(nilaiP) * parseInt(nilaiL));
    }
    return (
        <Box textAlign="center" sx={{ mt: 5 }}>
            <Typography variant="h5" sx={{ fontFamily: 'ariel' }}> Rumus Luas Persegi Panjang</Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Box>
                    <Typography>Panjang</Typography>
                    <TextField sx={{ backgroundColor: '#e8e8e8', color: 'black', ml: 1, mr: 1 }} onChange={handleChangeNP} value={nilaiP} />
                </Box>
                <Box>
                    <Typography>Lebar</Typography>
                    <TextField sx={{ backgroundColor: '#e8e8e8', color: 'black' }} onChange={handleChangeNL} value={nilaiL} />
                </Box>
            </Grid>
            <Box>
                <Typography>Hasil</Typography>
                <TextField sx={{ backgroundColor: '#e8e8e8', color: 'black' }} value={total} />
            </Box>
            <Box sx={{mt:2, ml:3}}>
                <Button to={`/`} component={Link} sx={{ backgroundColor: '#fec1e4', color: 'black' }}>Back</Button>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={handleTotal}>=</Button>
            </Box>
        </Box>
    )
}

export default PresegiPanjang
