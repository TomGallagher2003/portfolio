import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import { Box, Typography, Button, Link, ImageList, ImageListItem, Paper, Grid } from '@mui/material';

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const project = projects[id];

    if (!project) {
        return (
            <Box
                textAlign="center"
                sx={{
                    backgroundColor: 'background.default',
                    color: 'text.primary',
                    margin: 0,
                    paddingTop: 4,
                    paddingBottom: 4,
                    minHeight: '100vh',
                    marginLeft: {
                        xs: 0,
                        sm: '70px',
                    },
                }}
            >
                <Typography variant="h4" color="error">
                    Project not found
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                color: 'text.primary',
                margin: 0,
                paddingTop: 4,
                paddingBottom: 4,
                minHeight: '100vh',
                marginLeft: {
                    xs: 0,
                    sm: '70px',
                },
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: '90%',
                        sm: '85%',
                        md: '80%',
                    },
                    margin: '40px auto',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* Project Title & Description */}
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 600,
                        color: '#F5F5F7',
                        mb: 3,
                    }}
                >
                    {project.title}
                </Typography>

                <Typography
                    variant="body1"
                    paragraph
                    sx={{
                        maxWidth: 800,
                        lineHeight: 1.7,
                        fontSize: { xs: '1rem', sm: '1.125rem' },
                        mb: 5,
                        color: '#A1A1AA',
                    }}
                >
                    {project.description}
                </Typography>

                {/* Technologies */}
                <Grid container spacing={4} justifyContent="center" sx={{ mt: 2, mb: 4 }}>
                    <Grid item xs={12} md={6}>
                        <Paper
                            className="glass-effect"
                            elevation={0}
                            sx={{
                                padding: 3,
                                borderRadius: 4,
                                background: 'rgba(20, 20, 26, 0.7)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2), 0 0 1px 0 rgba(255, 255, 255, 0.05) inset',
                            }}
                        >
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    marginBottom: 3,
                                    fontWeight: 600,
                                    color: '#0066FF',
                                }}
                            >
                                Technologies Used
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {project.technologies && project.technologies.map((tech, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            loading="lazy"
                                            style={{ width: '24px', height: '24px' }}
                                        />
                                        <Typography variant="body1" sx={{ color: '#F5F5F7' }}>{tech.name}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Project Images */}
                {project.images && project.images.length > 0 && (
                    <ImageList
                        cols={2}
                        gap={10}
                        sx={{
                            width: '100%',
                            gridTemplateColumns: {
                                xs: 'repeat(1, 1fr) !important',
                                sm: 'repeat(2, 1fr) !important',
                            },
                        }}
                    >
                        {project.images.map((image, index) => (
                            <ImageListItem
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h5" display="block" gutterBottom sx={{ marginTop: 4, color: '#F5F5F7' }}>
                                    {image.title}
                                </Typography>
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    loading="lazy"
                                    style={{ width: '80%', borderRadius: '12px' }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                )}

                {/* Project Link */}
                {project.link && (
                    <Box mt={4}>
                        <Link href={project.link} target="_blank" rel="noopener noreferrer" underline="none">
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    background: 'linear-gradient(135deg, #0066FF 0%, #6B3FA0 100%)',
                                    color: '#FFFFFF',
                                    fontWeight: 600,
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 2,
                                    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 24px -4px rgba(0, 102, 255, 0.4)',
                                    },
                                }}
                            >
                                Visit Project
                            </Button>
                        </Link>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ProjectDetailsPage;
