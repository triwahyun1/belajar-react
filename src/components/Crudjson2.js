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


const Crudjson2 = () => {
    const [crudjson2, setCrudjsons2] = useState([]);
    const [form, setForm] = useState({
        id: 0,
        no: "",
        nama: "",
        alamat: "",
        agama: "",
        hobi: [],
        jeniskelamin: "",
    });

    const getData = async () => {
        const response = await fetch('http://localhost:8088/crudjson2');
        const data = await response.json();
        setCrudjsons2(data);
    };

    useEffect(() => {
        getData();
    }, []);

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

    const deleteCrudjson2 = async (id) => {
        await fetch(`http://localhost:8088/crudjson2/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        getData();
        resetForm();
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(crudjson2);
        await fetch('http://localhost:8088/crudjson2', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        getData();
        resetForm();
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        console.log(crudjson2);
        console.log(form);
        await fetch(`http://localhost:8088/crudjson2/${form.id}`, {
            method: "PUT",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        getData();
        resetForm();
    }

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        });
    }





    const handleChangeHoby = (e) => {
        e.preventDefault();
        // final resulrt
        // ['Memasak', 'Musik']
        var value = e.target.value;
        // empty array
        var newState = [];
        // console.log(e.target.value);
        // console.log(form.hobi);
        // Count hoby if exist
        var countHobi = form.hobi.filter((fl) => fl === value).length;
        if (countHobi > 0) {
            // remove value
            newState = arrayRemove(form.hobi, value);
        } else {
            // insert to array
            newState = [...form.hobi, value];
        }
        setForm({
            ...form,
            [e.target.name]: newState,
        });
    };

    function arrayRemove(arr, value) {
        return arr.filter(function (ele) {
            return ele !== value;
        });
    }


    return (
        <>
            <Box sx={{ p: 5 }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 7 }}>DATA MASYARAKAT</Typography>
                <form onSubmit={form.id > 0 ? handleUpdate : handleSubmit}>
                    <Box sx={{ display: 'flex', mt:1  }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 10.5 }}>NO KTP</Typography>
                        <TextField name="no" onChange={handleChange} value={form.no}></TextField>
                    </Box>
                    <Box sx={{ display: 'flex', mt:1  }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 12.2 }}>NAMA </Typography>
                        <TextField name="nama" onChange={handleChange} value={form.nama}></TextField>
                    </Box>
                    <Box sx={{ display: 'flex', mt:1  }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 9.9 }}>ALAMAT</Typography>
                        <TextField name="alamat" onChange={handleChange}value={form.alamat}></TextField>
                    </Box>
                    <Box sx={{ display: 'flex', mt:1 }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 10.6 }}>AGAMA</Typography>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name="agama" onChange={handleChange}>
                            <MenuItem value="Islam" name="agama" onChange={handleChange}>Islam</MenuItem>
                            <MenuItem value="Budha" name="agama" onChange={handleChange}>Budha</MenuItem>
                            <MenuItem value="Hindu" name="agama" onChange={handleChange}>Hindu</MenuItem>
                            <MenuItem value="Kristen" name="agama" onChange={handleChange}>Kristen</MenuItem>
                            <MenuItem value="Katholik" name="agama" onChange={handleChange}>Khatolik</MenuItem>
                            <MenuItem value="KongHuCu" name="agama" onChange={handleChange}>Kong Hu Cu</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='body1' sx={{ mt: 1, fontWeight: 'bold', mr: 12.5 }}>HOBI</Typography>
                        <FormGroup>
                            <FormControlLabel checked={form.hobi.filter((fl) => fl === 'Memasak').length > 0 ? true : false} value="Memasak" name="hobi" onChange={handleChangeHoby} control={<Checkbox />} label="Memasak" />
                            <FormControlLabel checked={form.hobi.filter((fl) => fl === 'Musik').length > 0 ? true : false} value="Musik" name="hobi" onChange={handleChangeHoby}control={<Checkbox />} label="Musik" />
                            <FormControlLabel checked={form.hobi.filter((fl) => fl === 'Menonton').length > 0 ? true : false} value="Menonton" name="hobi" onChange={handleChangeHoby} control={<Checkbox />} label="Menonton" />
                            <FormControlLabel checked={form.hobi.filter((fl) => fl === 'Olahraga').length > 0 ? true : false} value="Olahraga" name="hobi" onChange={handleChangeHoby} control={<Checkbox />} label="Olahraga" />
                            <FormControlLabel checked={form.hobi.filter((fl) => fl === 'Jalan-Jalan').length > 0 ? true : false} value="Jalan-Jalan" name="hobi" onChange={handleChangeHoby}  control={<Checkbox />} label="Jalan-Jalan" />
                        </FormGroup>

                    </Box>

                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='body1' sx={{ mt: 1, fontWeight: 'bold', mr: 1.8 }}>JENIS KELAMIN</Typography>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel checked={form.jeniskelamin === 'Laki-Laki' ? true : false} value="Laki-Laki" name="jeniskelamin" onChange={handleChange}control={<Radio />} label="Lak-Laki" />
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
                            {crudjson2.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.no}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.alamat}</td>
                                    <td>{item.agama}</td>
                                    <td>{item.hobi.map((item) => {return item + ',';})}</td>
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
                                        <Button onClick={() => deleteCrudjson2(item.id)} sx={{ color: 'red' }}>Delete</Button>
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

export default Crudjson2;