import React from 'react';
import { Typography, Container, Box, Link } from '@mui/material';

const ContactPage = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                color: 'white',
                paddingTop: '50px',
                backgroundColor: '#4abdac',
                minWidth: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                Contact Information
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                    Name:
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    Tom Gallagher
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                    Email:
                </Typography>
                <Link
                    href="mailto:gallaghertom0905@gmail.com"
                    variant="body1"
                    color="primary"
                    underline="hover"
                    sx={{ fontSize: '1.1rem' }}
                >
                    gallaghertom0905@gmail.com
                </Link>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                    Phone:
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    +64 (0)21 181 1521
                </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                    GitHub:
                </Typography>
                <Link
                    href="https://github.com/TomGallagher2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body1"
                    color="primary"
                    underline="hover"
                    sx={{ fontSize: '1.1rem' }}
                >
                    github.com/TomGallagher2003
                </Link>
            </Box>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
                    LinkedIn:
                </Typography>
                <Link
                    href="https://linkedin.com/in/gallaghertom"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body1"
                    color="primary"
                    underline="hover"
                    sx={{ fontSize: '1.1rem' }}
                >
                    linkedin.com/in/gallaghertom
                </Link>
            </Box>
        </Container>
    );
};

export default ContactPage;
