import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Counter() {
    const [count, setCount] = useState(0);

    return (
        <Box textAlign="center" sx={{mt:5}}>
            <Typography variant="h5" sx={{fontFamily:'ariel'}}> Counter up & Dwon </Typography>
            <Typography variant="h3">{count}</Typography>
            <Button sx={{ backgroundColor: '#ffc09f', color:'black', ml:1, mr:1}} onClick={() => setCount(count + 1)}>Add</Button>
            <Button sx={{ backgroundColor: '#ffc09f', color:'black', ml:1, mr:1 }} onClick={() => setCount(count - 1)}>Less</Button>
            <Button sx={{ backgroundColor: '#ffc09f', color:'black', ml:1, mr:1 }} onClick={() => setCount(0)}>Remove</Button>
            <Box marginTop={2}>
                <Button to={`/`} component={Link} sx={{ backgroundColor: '#fec1e4', color:'black' }}>Back</Button>
            </Box>
        </Box >
    )
}

export default Counter

