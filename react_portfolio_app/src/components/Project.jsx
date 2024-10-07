import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import scrollToTop from "../functions/ScrollToTop";

const Project = ({ id, title, briefDescription, heroImage}) => {
    return (
        <Link to={`/portfolio/projects/${id}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
    <Card
        elevation={3}
        sx={{
            maxWidth: 345,
            height: 290,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: 2,
            padding: 1,
            backgroundColor: "#ffffff",
            color: "#0d7765",
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
            }
        }}
    >
        {/* Add Hero Image */}
        <CardMedia
            component="img"
            height="130"
            image={heroImage}
            alt="Hero image"
        />

        <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {briefDescription}
            </Typography>
        </CardContent>
    </Card>
        </Link>
);
};

export default Project;
