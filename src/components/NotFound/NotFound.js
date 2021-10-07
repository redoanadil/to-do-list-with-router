import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg'

const NotFound = () => {
    return (
        <Box sx={{
            mt: -8,
            mx: 'auto',
            pt: 8,
            pb: 10,
            backgroundColor: "white"
        }}>
            <img style={{ width: "75%", marginBottom: "35px" }} src={img} alt="" /><br />
            <Link to="/home" style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large" sx={{ backgroundColor: "#ff6e40" }}>Go Homepage</Button>
            </Link>
        </Box>
    );
};

export default NotFound;