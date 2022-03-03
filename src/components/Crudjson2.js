import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Crudjson2 = () => {
    const [crudjson2, setCrudjsons2] = useState([]);
    const [form, setForm] = useState({
        id: 0,
        no: "",
        nama: "",
        alamat: "",
        agama: {},
        hobi: ([{},{}]),
        jeniskelamin: {},
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
            agama: {},
            hobi: ([{},{}]),
            jeniskelamin: {},
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






    return (
        <>
            <Box sx={{ p: 5 }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 7 }}>DATA MASYARAKAT</Typography>
                <form onSubmit={form.id > 0 ? handleUpdate : handleSubmit}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 10.5 }}>NO KTP</Typography>
                        <input className="input" name="no" onChange={handleChange} value={form.no} type="text" />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 12.2 }}>NAMA </Typography>
                        <input className="input" name="nama" onChange={handleChange} value={form.nama} type="text" />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 9.9 }}>ALAMAT</Typography>
                        <input className="input" name="alamat" onChange={handleChange} value={form.alamat} type="text" />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 10.6 }}>AGAMA</Typography>
                        <select name="agama" id="cars" onChange={handleChange}>
                            <option value="Islam" name="agama" onChange={handleChange}>Islam</option>
                            <option value="Budha" name="agama" onChange={handleChange}>Budha</option>
                            <option value="Hindu" name="agama" onChange={handleChange}>Hindu</option>
                            <option value="Kristen" name="agama" onChange={handleChange}>Kristen</option>
                            <option value="Katholik" name="agama" onChange={handleChange}>Katholik</option>
                            <option value="KongHuCu" name="agama" onChange={handleChange}>Kong Hu Cu</option>
                        </select>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 12.5 }}>HOBI</Typography>
                        <td>
                            <input type="checkbox" value="Masak" name="hobi" onChange={handleChange} /><label for="masak">Masak</label><br />
                            <input type="checkbox" value="Musik" name="hobi" onChange={handleChange} /><label for="musik">Musik</label><br />
                            <input type="checkbox" value="Menonton" name="hobi" onChange={handleChange} /><label for="menonton">Menonton</label><br />
                            <input type="checkbox" value="Olahraga" name="hobi" onChange={handleChange} /><label for="olahraga">Olahraga</label><br />
                            <input type="checkbox" value="Jalan-Jalan" name="hobi" onChange={handleChange} /><label for="jalan">Jalan-Jalan</label><br />
                        </td>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 1.8 }}>JENIS KELAMIN</Typography>
                        <td>
                            <input type="radio" value="Laki-Laki" name="jeniskelamin" onChange={handleChange} /><label for="Laki-Laki">Laki-Laki</label>
                            <input type="radio" value="Perempuan" name="jeniskelamin" onChange={handleChange} /><label for="Perempuan" >Perempuan</label>
                        </td>
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