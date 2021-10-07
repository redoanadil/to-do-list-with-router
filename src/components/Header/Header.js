import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "orange"
    }
    return (

        <Box sx={{
            mt: 5,
            mb: 15,
            height: 50,
            display: 'flex',
            justifyContent: "center"
        }}>
            <Box>
                <img src={logo} alt="" />
            </Box>
            <Box sx={{
                mt: 3,
                marginRight: 35
            }}>
                <NavLink style={{ textDecoration: "none", marginRight: "20px" }} to='/home' activeStyle={activeStyle}>Home</NavLink>
                <NavLink style={{ textDecoration: "none", marginRight: "20px" }} to='/chart' activeStyle={activeStyle}>Chart</NavLink>
                <NavLink style={{ textDecoration: "none", marginRight: "20px" }} to='/about' activeStyle={activeStyle}>About</NavLink>
            </Box>
        </Box>
    );
};

export default Header;