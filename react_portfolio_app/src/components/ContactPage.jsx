import React from 'react';
import { Typography, Container, Box, Link } from '@mui/material';

const ContactPage = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                backgroundColor: 'background.default',
                minWidth: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                paddingY: {
                    xs: 4,
                    sm: 6,
                },
                paddingX: {
                    xs: 2,
                    sm: 3,
                },
                marginLeft: {
                    xs: 0,        // No margin on mobile
                    sm: '70px',   // Sidebar margin on tablet+
                },
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    mb: 4,
                    color: 'primary.main',
                }}
            >
                Contact Information
            </Typography>

            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500, color: 'text.primary' }}>
                    Name:
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                    Tom Gallagher
                </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500, color: 'text.primary' }}>
                    Email:
                </Typography>
                <Link
                    href="mailto:gallaghertom0905@gmail.com"
                    variant="body1"
                    color="primary"
                    underline="hover"
                    sx={{
                        fontSize: '1.1rem',
                        transition: 'all 150ms cubic-bezier(0.33, 1, 0.68, 1)',
                        '&:hover': {
                            transform: 'scale(1.02)',
                        },
                    }}
                >
                    gallaghertom0905@gmail.com
                </Link>
            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500, color: 'text.primary' }}>
                    Phone:
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                    +64 (0)21 181 1521
                </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500, color: 'text.primary' }}>
                    GitHub:
                </Typography>
                <Link
                    href="https://github.com/TomGallagher2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body1"
                    color="primary"
                    underline="hover"
                    sx={{
                        fontSize: '1.1rem',
                        transition: 'all 150ms cubic-bezier(0.33, 1, 0.68, 1)',
                        '&:hover': {
                            transform: 'scale(1.02)',
                        },
                    }}
                >
                    github.com/TomGallagher2003
                </Link>
            </Box>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 500, color: 'text.primary' }}>
                    LinkedIn:
                </Typography>
                <Link
                    href="https://linkedin.com/in/gallaghertom"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body1"
                    color="primary"
                    underline="hover"
                    sx={{
                        fontSize: '1.1rem',
                        transition: 'all 150ms cubic-bezier(0.33, 1, 0.68, 1)',
                        '&:hover': {
                            transform: 'scale(1.02)',
                        },
                    }}
                >
                    linkedin.com/in/gallaghertom
                </Link>
            </Box>
        </Container>
    );
};

export default ContactPage;
