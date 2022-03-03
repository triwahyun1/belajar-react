import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Crudjson = () => {
  const [crudjson, setCrudjsons] = useState([]);

  const getData = async () => {
    const response = await fetch('http://localhost:8088/crudjson');
    const data = await response.json();
    setCrudjsons(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const deleteCrudjson = async (id) => {
    await fetch(`http://localhost:8088/crudjson/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    getData();
  }

  const [id, setID] = useState(0);
  const [no, setNo] = useState('');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');


  const saveCrudjson = async (e) => {
    e.preventDefault();
    const crudjson = { no, nama, alamat };
    console.log(crudjson);

    await fetch('http://localhost:8088/crudjson', {
      method: "POST",
      body: JSON.stringify(crudjson),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    getData();
  }


  const updateCrudjson = async (e) => {
    e.preventDefault();
    const crudjson = { no, nama, alamat };
    console.log(crudjson);
    await fetch(`http://localhost:8088/crudjson/${id}`, {
      method: "PUT",
      body: JSON.stringify(crudjson),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    getData();

    setID(null)
    setNama('')
    setAlamat('')
    setNo('')
  }


  return (
    <>
      <Box sx={{ p: 5 }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold', ml: 4 }}>DATA MASYARAKAT</Typography>
        <form onSubmit={id ? updateCrudjson : saveCrudjson}>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 3.3 }}>NO KTP</Typography>
            <input className="input" value={no} onChange={(e) => setNo(e.target.value)} type="text" />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 5 }}>NAMA </Typography>
            <input className="input" value={nama} onChange={(e) => setNama(e.target.value)} type="text" />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='body1' sx={{ fontWeight: 'bold', mr: 2.8 }}>ALAMAT</Typography>
            <input className="input" value={alamat} onChange={(e) => setAlamat(e.target.value)} type="text" />
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
              {crudjson.map((crudjson, index) => (
                <tr key={crudjson.id}>
                  <td>{crudjson.no}</td>
                  <td>{crudjson.nama}</td>
                  <td>{crudjson.alamat}</td>
                  <td>
                    <Button onClick={() => {
                      setID(crudjson.id)
                      setNo(crudjson.no)
                      setNama(crudjson.nama)
                      setAlamat(crudjson.alamat)
                    }} sx={{ color: 'blue' }}>
                      Edit
                    </Button>
                    <Button onClick={() => deleteCrudjson(crudjson.id)} sx={{ color: 'red' }}>Delete</Button>
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
