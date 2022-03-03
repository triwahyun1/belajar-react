import React from 'react'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function TableCustom() {
    var dataTable1 = [
        { "id": 1, "nama": "Budi", "alamat": "Dumai" },
        { "id": 2, "nama": "Andi", "alamat": "Duri" }
    ]
    var dataTable2 = [
        { "id": 1, "nama": "Sinta", "alamat": "Dumai" },
        { "id": 2, "nama": "Manda", "alamat": "Duri" }
    ]
    return (
        <>
            <Box sx={{p:5, ml:50}}>
                <Box>
                    <Button to={`/`} component={Link} sx={{ backgroundColor: '#fec1e4', color: 'black' }}>Back</Button>
                </Box>
                <Grid container direction="row" >
                    <Box marginRight={5} textAlign="center">
                        <Typography sx={{ fontWeight: 'bold' }}>Table 1</Typography>
                        <table border="1">
                            <tr>
                                <th colspan="3">DAFTAR SISWA A</th>
                            </tr>
                            <tr>
                                <td>NO</td>
                                <td>Nama</td>
                                <td>Alamat</td>
                            </tr>
                            <tbody>
                                {dataTable1.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.alamat}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tr>
                                <th colspan="3">DAFTAR SISWA B</th>
                            </tr>
                            <tr>
                                <td>NO</td>
                                <td>Nama</td>
                                <td>Alamat</td>
                            </tr>
                            <tbody>
                                {dataTable2.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.alamat}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Box>
                    <Box textAlign="center">
                        <Typography sx={{ fontWeight: 'bold' }}>Table 2</Typography>
                        <table border="1">
                            <tr>
                                <th colspan="3">DAFTAR SISWA A</th>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td>Nama</td>
                                <td>Upah</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>Dumai</td>
                                <td>Budi</td>
                                <td>20000</td>
                            </tr>
                            <tr>
                                <td>Andi</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Manji</td>
                                <td>20000</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>Duri</td>
                                <td>Gusti</td>
                                <td>20000</td>
                            </tr>
                            <tr>
                                <td>Andi</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Manda</td>
                                <td>20000</td>
                            </tr>
                            <tr>
                                <th colspan="3">DAFTAR SISWA B</th>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td>Nama</td>
                                <td>Upah</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>Pekanbaru</td>
                                <td>Budi</td>
                                <td>20000</td>
                            </tr>
                            <tr>
                                <td>Andi</td>
                                <td>30000</td>
                            </tr>
                            <tr>
                                <td>Manji</td>
                                <td>20000</td>
                            </tr>
                        </table>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default TableCustom
