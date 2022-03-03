import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
function Calculator() {
    const [nilai1, setNilai1] = useState(0);
    const [nilai2, setNilai2] = useState(0);
    const [total, setTotal] = useState(0);


    function handleChangeN1(e) {
        setNilai1(e.target.value);
    }

    function handleChangeN2(e) {
        setNilai2(e.target.value);
    }

    function handleTambah(e) {
        setTotal(parseInt(nilai1) + parseInt(nilai2));
    }

    function handleKurang(e) {
        setTotal(parseInt(nilai1) - parseInt(nilai2));
    }

    function handleBagi(e) {
        setTotal(parseInt(nilai1) / parseInt(nilai2));
    }

    function handleKali(e) {
        setTotal(parseInt(nilai1) * parseInt(nilai2));
    }

    return (
        <Box textAlign="center" sx={{mt:5}}>
            <Typography variant="h5" sx={{ fontFamily: 'ariel' }}> Kalkulator</Typography>
            <Grid container  direction="row" justifyContent="center" alignItems="center">
                <Box>
                    <Typography>Nilai 1</Typography>
                    <TextField sx={{ backgroundColor: '#e8e8e8', color:'black', ml:1, mr:1}} onChange={handleChangeN1} value={nilai1} />
                </Box>
                <Box>
                    <Typography>Nilai 2</Typography>
                    <TextField sx={{ backgroundColor: '#e8e8e8', color:'black'}} onChange={handleChangeN2} value={nilai2} />
                </Box>
            </Grid>
            <Box>
                <Typography>Total</Typography>
                <TextField sx={{ backgroundColor: '#e8e8e8', color:'black'}} value={total} />
            </Box>
            <Box  marginTop={2}>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={handleTambah}>+</Button>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={handleKurang}>-</Button>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={handleBagi}>/</Button>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={handleKali}>*</Button>
            </Box>
            <Box marginTop={2}>
                <Button to={`/`} component={Link} sx={{ backgroundColor: '#fec1e4', color: 'black' }}>Back</Button>
            </Box>
        </Box>
    )
}

export default Calculator
