import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function Data() {
    const [integer, setInteger] = useState('');

    const [string, setString] = useState('');

    const [objek, setObjek] = useState({});
    const handleAdd = () => {
        var IdOjk = objek.id
        setObjek({ id: IdOjk + 1, name: 'Andi' })
    }

    const [array1, setArray1] = useState([]);
    const handleArr = () => {
        setArray1([{ age: 1, name: 'Andi' }, { age: 2, name: 'Budi' }])
    }

    const [array2, setArray2] = useState([]);

    const [array12, setArray12] = useState([]);
    const handleArray = () => {
        setArray12([{ id: 1, name: 'Andi' }, { id: 2, name: 'Budi' }, { id: 3, name: 'Siti' }, { id: 4, name: 'Yola' }])
    }

    return (
        <Box>
            <Box>
                <Button to={`/`} component={Link} sx={{ backgroundColor: '#fec1e4', color: 'black' }}>Back</Button>
            </Box>
            <Box marginLeft={15}>
                <Typography sx={{ fontWeight: "bold" }}>JENIS DATA</Typography>
            </Box>
            <Box display="flex">
                <Typography marginRight={17}>Data Integer</Typography>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={() => setInteger('1')}>Lihat</Button>
                <Typography sx={{ fontWeight: 'bold' }}>{integer}</Typography>
            </Box>

            <Box marginTop={5} display="flex">
                <Typography marginRight={18}>Data String</Typography>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={() => setString('saya adalah me')}>Lihat</Button>
                <Typography sx={{ fontWeight: 'bold' }}>{string}</Typography>
            </Box>

            <Box marginTop={5} display="flex">
                <Typography marginRight={18}>Data Objek</Typography>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={() => setObjek({ id: 1, name: 'Andi' })}>Lihat</Button>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black' }} onClick={() => setObjek(handleAdd)}>ADD</Button>
                <Typography sx={{ fontWeight: 'bold' }}>{JSON.stringify(objek)}</Typography>
            </Box>

            <Box marginTop={5} display="flex">
                <Typography marginRight={17}>Data Array 1</Typography>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={() => setArray1([{ id: 1, name: 'Andi' }, { id: 2, name: 'Budi' }])}>Lihat</Button>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black' }} onClick={() => setArray1(handleArr)}>ADD</Button>
                <Typography sx={{ fontWeight: 'bold' }}>{JSON.stringify(array1)}</Typography>
            </Box>

            <Box marginTop={5} display="flex">
                <Typography marginRight={17}>Data Array 2</Typography>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={() => setArray2([{ id: 3, name: 'Siti' }, { id: 4, name: 'Yola' }])}>Lihat</Button>
                <Typography sx={{ fontWeight: 'bold' }}>{JSON.stringify(array2)}</Typography>
            </Box>

            <Box marginTop={5} display="flex">
                <Typography marginRight={3}>Gabungan Arrayv1 & Array2</Typography>
                <Button sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} onClick={() => setArray12(handleArray)}>Lihat</Button>
                <Typography sx={{ fontWeight: 'bold' }}>{JSON.stringify(array12)}</Typography>
            </Box>
        </Box>
    )
}

export default Data
