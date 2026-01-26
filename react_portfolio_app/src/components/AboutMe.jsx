import React from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import myFace from '../images/me.jpg';

const AboutMe = () => {
    return (
        <Box
            id="about"
            textAlign="center"
            sx={{
                marginY: {
                    xs: 4,      // 32px on mobile
                    sm: 6,      // 48px on tablet+
                },
                paddingX: {
                    xs: 2,      // 16px padding on mobile
                    sm: 0,      // No extra padding on tablet+
                },
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    marginBottom: 4,
                    fontWeight: 600,
                    color: 'primary.main',
                }}
            >
                Tom Gallagher | Portfolio
            </Typography>
            <Avatar
                alt="Tom Gallagher"
                src={myFace}
                sx={{
                    width: { xs: 80, sm: 100 },
                    height: { xs: 80, sm: 100 },
                    margin: 'auto',
                    marginBottom: 4,
                    border: '3px solid',
                    borderColor: 'primary.light',
                }}
            />
            <Typography
                variant="body1"
                sx={{
                    maxWidth: 600,
                    margin: '0 auto',
                    lineHeight: 1.7,
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                }}
            >
                Hi! I'm Tom Gallagher, a third-year Software Engineering student at UC. Finish the description.
            </Typography>
        </Box>
    );
};

export default AboutMe;

