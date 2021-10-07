import { Box } from '@mui/system';
import React from 'react';

const About = () => {
    return (
        <Box>
            <Box sx={{
                mx: 'auto',
                py: 1,
                mb: 10,
                width: '100%',
                height: 100,
                fontSize: 20,
                backgroundColor: "#ff6e40",
                color: "white"
            }}>
                <h1>Get to know us</h1>
            </Box>
            <Box sx={{
                mx: 'auto',
                width: 500,
                height: 100,
                fontSize: 30,
                borderBottom: 6,
                borderBottomColor: "#ff6e40"
            }}>
                <h1>Who We Are?</h1>
            </Box>
            <Box sx={{
                my: 5,
                mx: 'auto',
                fontSize: 20,
                width: '50%',
                lineHeight: 2
            }}>
                <p>Having troubled to manage your daily task? Then you are in the right place. TaskUp is the easy, free, flexible, and visual way to manage your projects and organize anything.</p>
            </Box>
        </Box>
    );
};

export default About;