import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function NilaiHuruf() {
    const [nama, setNama] = useState('');

    const [count, setCount] = useState(0);
    const [nh, setNh] = useState('');

    const handleClick = () => {
        setCount(parseInt(count));

        var nHuruf = "";
        if ((count >= 1) && (count <= 59)) {
            nHuruf = "Nilai anda adalah E"
        } else if ((count >= 60) && (count <= 69)) {
            nHuruf = "Nilai anda adalah D"
        } else if ((count >= 70) && (count <= 79)) {
            nHuruf = "Nilai anda adalah C"
        } else if ((count >= 80) && (count <= 89)) {
            nHuruf = "Nilai anda adalah B"
        } else if ((count >= 90) && (count <= 100)) {
            nHuruf = "Nilai anda adalah A"
        } else {
            nHuruf = "Anda Salah Input"
        }
        setNh(nHuruf);
    }

    const handleChangeData = (event) => {
        setCount(event.target.value)
    };


    function handleChangeNama(e) {
        setNama(e.target.value);
    }


    return (
        <Box textAlign="center"sx={{mt:5}}>
            <Typography variant="h5" sx={{ fontFamily: 'ariel' }}> Nilai Huruf</Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Box>
                    <Typography>Masukkan Nama Anda</Typography>
                    <TextField sx={{ backgroundColor: '#e8e8e8', color: 'black', ml: 1, mr: 1 }} onChange={handleChangeNama} value={nama} />
                </Box>
                <Box>
                    <Typography>Masukkan Nilai Angka</Typography>
                    <TextField sx={{ backgroundColor: '#e8e8e8', color: 'black' }} id="nilai-bebas" lable="Text Nilai" onChange={handleChangeData} />
                </Box>
            </Grid>
            
            <Typography sx={{fontWeight:'bold'}}>{nh}</Typography>

            <Box marginTop={2}>
            <Button to={`/`} component={Link} sx={{ backgroundColor: '#fec1e4', color: 'black' }}>Back</Button>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={handleClick}>Result</Button>
            </Box>
        </Box>
    )
}

export default NilaiHuruf
