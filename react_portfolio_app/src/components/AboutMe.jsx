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
                    xs: 4,
                    sm: 6,
                },
                paddingX: {
                    xs: 2,
                    sm: 0,
                },
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    marginBottom: 4,
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #0066FF 0%, #6B3FA0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                Tom Gallagher
            </Typography>
            <Avatar
                alt="Tom Gallagher"
                src={myFace}
                sx={{
                    width: { xs: 100, sm: 120 },
                    height: { xs: 100, sm: 120 },
                    margin: 'auto',
                    marginBottom: 4,
                    border: '3px solid',
                    borderColor: '#0066FF',
                    boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)',
                }}
            />
            <Typography
                variant="body1"
                sx={{
                    maxWidth: 650,
                    margin: '0 auto',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    color: '#A1A1AA',
                }}
            >
                Hi! I'm Tom Gallagher, a Software Engineering student at the University of Canterbury.
                I'm passionate about building modern, user-focused applications with clean code and intuitive design.
                My interests span full-stack development, with experience in React, Python, Java, and cloud technologies.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    maxWidth: 650,
                    margin: '16px auto 0',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    color: '#A1A1AA',
                }}
            >
                Currently focused on expanding my skills in web development and exploring new technologies.
                I enjoy tackling complex problems and creating solutions that make a real impact.
            </Typography>
        </Box>
    );
};

export default AboutMe;

