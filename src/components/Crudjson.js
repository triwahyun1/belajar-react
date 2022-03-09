import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Crudjson = () => {
  const [crudjson, setCrudjson] = useState([]);
  const [form, setForm] = useState({
    id: 0,
    no: "",
    nama: "",
    alamat: "",
  });

  const getData = async () => {
    const response = await fetch('http://localhost:8088/crudjson');
    const data = await response.json();
    setCrudjson(data);
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
    })
  };

  const deleteCrudjson = async (id) => {
    await fetch(`http://localhost:8088/crudjson/${id}`, {
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
    console.log(crudjson);
    await fetch('http://localhost:8088/crudjson', {
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
    console.log(crudjson);
    console.log(form);
    await fetch(`http://localhost:8088/crudjson/${form.id}`, {
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
        <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 4 }}>DATA MASYARAKAT</Typography>
        <form onSubmit={form.id > 0 ? handleUpdate : handleSubmit}>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 3.3 }}>NO KTP</Typography>
            <TextField name="no" onChange={handleChange} value={form.no}></TextField>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 5 }}>NAMA </Typography>
            <TextField name="nama" onChange={handleChange} value={form.nama}></TextField>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 2.8 }}>ALAMAT</Typography>
            <TextField name="alamat" onChange={handleChange} value={form.alamat}></TextField>
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
                <th>EDIT</th>
              </tr>
            </thead>
            <tbody>
              {crudjson.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.no}</td>
                  <td>{item.nama}</td>
                  <td>{item.alamat}</td>
                  <td>
                    <Button onClick={() => setForm({
                      id: item.id,
                      no: item.no,
                      nama: item.nama,
                      alamat: item.alamat,
                    })} sx={{ color: 'blue' }}>
                      Edit
                    </Button>
                    <Button onClick={() => deleteCrudjson(item.id)} sx={{ color: 'red' }}>Delete</Button>
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

export default Crudjson;
