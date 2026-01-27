import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import scrollToTop from "../functions/ScrollToTop";

const Project = ({ id, title, briefDescription, heroImage}) => {
    return (
        <Link to={`/portfolio/projects/${id}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
    <Card
        className="glass-effect"
        elevation={0}
        sx={{
            maxWidth: 345,
            height: 290,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: 4, // 16px - xl from design system
            padding: 1,
            background: 'rgba(20, 20, 26, 0.7)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2), 0 0 1px 0 rgba(255, 255, 255, 0.05) inset',
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
                transform: 'translateY(-4px)',
                background: 'rgba(20, 20, 26, 0.85)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                boxShadow: '0 12px 40px -4px rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(255, 255, 255, 0.1) inset',
            },
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

        <CardContent sx={{ flexGrow: 1, backgroundColor: 'transparent' }}>
            <Typography
                variant="h5"
                component="div"
                sx={{
                    color: '#F5F5F7',
                    fontWeight: 600,
                    mb: 1,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: '#A1A1AA',
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
