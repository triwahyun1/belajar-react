import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";


function Home() {
    return (
        <Box>
            <Box sx={{ p: 5, ml:10 }}>
                <Typography variant="h5" marginLeft={35} sx={{ fontFamily: 'ariel', fontWeight: 'bold', }}>React Js Materi Logika Learn</Typography>
                <Typography marginLeft={40} sx={{ fontFamily: 'sains', fontWeight: 'bold' }}>Made By:Tri Wahyuni</Typography>
                <table border="1">
                    <tr>
                        <th colspan="3">A. BASIC</th>
                        <th colspan="3">B. CONDITION</th>
                        <th colspan="3">C. USER INTERFACE</th>
                        <th colspan="3">D. CHART</th>
                        <th colspan="3">E. WEB</th>
                    </tr>
                    <tr>
                        <th>No</th>
                        <th colspan="2">Materi</th>
                        <th>No</th>
                        <th colspan="2">Materi</th>
                        <th>No</th>
                        <th colspan="2">Materi</th>
                        <th>No</th>
                        <th colspan="2">Materi</th>
                        <th>No</th>
                        <th colspan="2">Materi</th>
                    </tr>
                    <tr >
                        <td>1</td>
                        <td><Typography>Counter</Typography></td>
                        <td> <Button to={`/counter`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>1</td>
                        <td><Typography>Nilai Huruf</Typography></td>
                        <td><Button to={`/nilaihuruf`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>1</td>
                        <td><Typography>Table Custom</Typography></td>
                        <td><Button to={`/tablecustom`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>1</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>1</td>
                        <td><Typography>Boots Land</Typography></td>
                        <td><Button to={`/bootsland`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                    </tr>
                    <tr >
                        <td>2</td>
                        <td><Typography>Calculator</Typography></td>
                        <td><Button to={`/calculator`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>2</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>2</td>
                        <td><Typography>Crud Json-server</Typography></td>
                        <td><Button to={`/crudjson`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>2</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>2</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                    </tr>
                    <tr >
                        <td>3</td>
                        <td><Typography>Segitiga</Typography></td>
                        <td><Button to={`/segitiga`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>3</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>3</td>
                        <td><Typography>Crud Json2-server</Typography></td>
                        <td><Button  to={`/crudjson2`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>3</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>3</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                    </tr>
                    <tr >
                        <td>4</td>
                        <td><Typography>Persegi Panjang</Typography></td>
                        <td><Button to={`/persegipanjang`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>4</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>4</td>
                        <td><Typography>Crud Json3-server</Typography></td>
                        <td><Button  to={`/crudjson3`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>4</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>4</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><Typography>Lingkaran</Typography></td>
                        <td><Button to={`/lingkaran`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>5</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>5</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>5</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>5</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td><Typography>Jenis Data</Typography></td>
                        <td><Button to={`/data`} component={Link} sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>6</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>6</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>6</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                        <td>6</td>
                        <td></td>
                        <td><Button sx={{ backgroundColor: '#ffc09f', color: 'black' }}>Klik</Button></td>
                    </tr>
                </table>
            </Box>
        </Box>
    )
}

export default Home;
