import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import scrollToTop from "../functions/ScrollToTop";

const Project = ({ id, title, briefDescription, heroImage}) => {
    return (
        <Link to={`/portfolio/projects/${id}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
    <Card
        className="glass-effect"
        elevation={3}
        sx={{
            maxWidth: 345,
            height: 290,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: 3, // 12px - lg from design system
            padding: 1,
            transition: 'all 250ms cubic-bezier(0.33, 1, 0.68, 1)',
            '&:hover': {
                transform: 'translateY(-4px)', // Lift effect
                boxShadow: 10, // Elevation increase
            },
            // Ensure text readability on glass background
            '& .MuiCardContent-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '0 0 12px 12px',
            }
        }}
    >
        {/* Add Hero Image */}
        <CardMedia
            component="img"
            height="130"
            image={heroImage}
            alt={`${title} hero image`}
            loading="lazy"
            sx={{
                borderRadius: '12px 12px 0 0',
                objectFit: 'cover',
            }}
        />

        <CardContent sx={{ flexGrow: 1 }}>
            <Typography
                variant="h5"
                component="div"
                sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 1,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: 'text.primary',
                    lineHeight: 1.6,
                }}
            >
                {briefDescription}
            </Typography>
        </CardContent>
    </Card>
        </Link>
);
};

export default Project;
