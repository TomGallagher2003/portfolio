import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import myFace from '../images/me.jpg';

const AboutMe = () => {
    return (
        <Box id="about" textAlign="center" my={4}>
            <Avatar
                alt="My face should be here"
                src={myFace}
                sx={{ width: 100, height: 100, margin: 'auto' }}
            />
            <Typography variant="h4" component="h2" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1">
                Hello! I'm Tom Gallagher, a third-year Software Engineering student at UC. Finish the description.
            </Typography>
        </Box>
    );
};

export default AboutMe;

