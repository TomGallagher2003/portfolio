import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import myFace from '../images/me.jpg';

const AboutMe = () => {
    return (
        <Box id="about" textAlign="center" my={4} sx={{ marginBottom: '45px', marginTop: "50px"}}>
            <Typography variant="h3" sx={{ marginBottom: '30px' }}>
                Tom Gallagher | Portfolio
            </Typography>
            <Avatar
                alt="My face should be here"
                src={myFace}
                sx={{ width: 100, height: 100, margin: 'auto', marginBottom: '30px'}}
            />
            <Typography variant="body1">
                Hi! I'm Tom Gallagher, a third-year Software Engineering student at UC. Finish the description.
            </Typography>
        </Box>
    );
};

export default AboutMe;

