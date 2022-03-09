import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const Crudjson3 = () => {
    const [crudjson3, setCrudjsons3] = useState([]);
    const [form, setForm] = useState({
        id: 0,
        no: "",
        nama: "",
        alamat: "",
        agama: "",
        hobi: [],
        jeniskelamin: "",
    });
    const [agama, setAgama] = useState([]);
    const [hobi, setHobi] = useState([]);


    const getData = async () => {
        const response = await fetch('http://localhost:8088/crudjson3');
        const data = await response.json();
        setCrudjsons3(data);
    };

    const getAgama = async () => {
        const response = await fetch('http://localhost:8088/agama');
        const data = await response.json();
        setAgama(data);
        // console.log(agama);
    };

    const getHobi = async () => {
        const response = await fetch('http://localhost:8088/hobi');
        const data = await response.json();
        setHobi(data);
        console.log(hobi);
    };


    useEffect(() => {
        getData();
        getAgama();
        getHobi();
    });

    const resetForm = () => {
        setForm({
            id: 0,
            no: "",
            nama: "",
            alamat: "",
            agama: "",
            hobi: [],
            jeniskelamin: "",
        })
    };

    const deleteCrudjson3 = async (id) => {
        await fetch(`http://localhost:8088/crudjson3/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        getData();
        getAgama();
        getHobi();
        resetForm();
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(crudjson3);
        await fetch('http://localhost:8088/crudjson3', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        getData();
        getAgama();
        getHobi();
        resetForm();
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        console.log(Crudjson3);
        console.log(form);
        await fetch(`http://localhost:8088/crudjson3/${form.id}`, {
            method: "PUT",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        getData();
        getAgama();
        getHobi();
        resetForm();
    }

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        });
    }

    const handleChangeAgama = (e) => {
        e.preventDefault();
        setAgama({
            ...agama,
            [e.target.name]: e.target.value,

        });
    }

    const handleChangeHobi = (e) => {
        e.preventDefault();
        setHobi({
            ...hobi,
            [e.target.hobi]: e.target.value,
        });
    }




    //     const handleChangeHoby = (e) => {
    //         e.preventDefault();
    //         // final resulrt
    //         // ['Memasak', 'Musik']
    //         var value = e.target.value;
    //         // empty array
    //         var newState = [];
    //         // console.log(e.target.value);
    //         // console.log(form.hobi);
    //         // Count hoby if exist
    //         var countHobi = form.hobi.filter((fl) => fl === value).length;
    //         if (countHobi > 0) {
    //             // remove value
    //             newState = arrayRemove(form.hobi, value);
    //         } else {
    //             // insert to array
    //             newState = [...form.hobi, value];
    //         }
    //         setForm({
    //             ...form,
    //             [e.target.name]: newState,
    //         });
    //     };

    //     function arrayRemove(arr, value) {
    //         return arr.filter(function (ele) {
    //             return ele !== value;
    //         });
    //     }


    return (
        <>
            <Box sx={{ p: 5 }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 7 }}>DATA MASYARAKAT</Typography>
                <form onSubmit={form.id > 0 ? handleUpdate : handleSubmit}>
                    <Box sx={{ display: 'flex', mt: 1 }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 10.5 }}>NO KTP</Typography>
                        <TextField name="no" onChange={handleChange} value={form.no}></TextField>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 1 }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 12.2 }}>NAMA </Typography>
                        <TextField name="nama" onChange={handleChange} value={form.nama}></TextField>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 1 }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 9.9 }}>ALAMAT</Typography>
                        <TextField name="alamat" onChange={handleChange} value={form.alamat}></TextField>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 1 }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 10.6 }}>AGAMA</Typography>
                        <Select name="agama" onChange={handleChange}>
                            {agama.map((agama) => (
                                <MenuItem value={agama.name} key={agama.id} onChange={handleChangeAgama}>
                                    {agama.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='body1' sx={{ mt: 1, fontWeight: 'bold', mr: 12.5 }}>HOBI</Typography>
                        <FormGroup name="hoby" onChange={handleChange}>
                            {hobi.map((hobi) => (
                                <FormControlLabel label={hobi.hoby} value={hobi.hoby} key={hobi.id} onChange={handleChangeHobi} control={<Checkbox Checked={true} onChange={handleChange}/>} />
                            ))}
                        </FormGroup>

                    </Box>

                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='body1' sx={{ mt: 1, fontWeight: 'bold', mr: 1.8 }}>JENIS KELAMIN</Typography>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel checked={form.jeniskelamin === 'Laki-Laki' ? true : false} value="Laki-Laki" name="jeniskelamin" onChange={handleChange} control={<Radio />} label="Lak-Laki" />
                            <FormControlLabel checked={form.jeniskelamin === 'Perempuan' ? true : false} value="Perempuan" name="jeniskelamin" onChange={handleChange} control={<Radio />} label="Perempuan" />
                        </RadioGroup>
                    </Box>

                    <Box sx={{ mt: 4, ml: 13 }}>
                        <Button to={`/`} component={Link} sx={{ backgroundColor: '#fec1e4', color: 'black' }}>Back</Button>
                        <Button type='submit' sx={{ backgroundColor: '#ffc09f', color: 'black', ml: 1, mr: 1 }} >Save</Button>
                    </Box>
                </form>

                <Box sx={{ mt: 4 }}>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>N0 KTP</th>
                                <th>NAMA</th>
                                <th>ALAMAT</th>
                                <th>AGAMA</th>
                                <th>HOBI</th>
                                <th>JENISKELAMIN</th>
                                <th>EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {crudjson3.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.no}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.alamat}</td>
                                    <td>{item.agama}</td>
                                    <td>{item.hobi}</td>
                                    <td>{item.jeniskelamin}</td>
                                    <td>
                                        <Button onClick={() => setForm({
                                            id: item.id,
                                            no: item.no,
                                            nama: item.nama,
                                            alamat: item.alamat,
                                            agama: item.agama,
                                            hobi: item.hobi,
                                            jeniskelamin: item.jeniskelamin,
                                        })} sx={{ color: 'blue' }}>
                                            Edit
                                        </Button>
                                        <Button onClick={() => deleteCrudjson3(item.id)} sx={{ color: 'red' }}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
            </Box>
        </>
    )
}


export default Crudjson3;