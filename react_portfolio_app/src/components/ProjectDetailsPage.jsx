import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import { Box, Typography, Button, Link, ImageList, ImageListItem, Paper, Grid } from '@mui/material';
import VideoPlayer from "./VideoPlayer";

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const project = projects[id];

    if (!project) {
        return (
            <Box textAlign="center" mt={4} sx={{backgroundColor: '#4abdac', color: 'white', margin: '0', paddingTop: '30px', paddingBottom: '30px', minHeight: '100vh'}}>
                <Typography variant="h4" color="error">
                    Project not found
                </Typography>
            </Box>
        );
    }

    return (
        <div style={{backgroundColor: '#4abdac', color: 'white', margin: '0', paddingTop: '30px', paddingBottom: '30px', minHeight: '100vh'}}>
            <Box
                sx={{
                    width: '80%',
                    margin: '40px auto',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#4abdac',
                    color: 'white'
                }}
            >
                {/* Project Description */}
                <Typography variant="h4" component="h2" gutterBottom>
                    {project.title}
                </Typography>

                <Typography variant="body1" paragraph>
                    {project.description}
                </Typography>

                {/* Video and Technologies Side by Side */}
                <Grid container spacing={4} sx={{ mt: 4, mb: 4 }}>
                    {/* Video */}
                    <Grid item xs={12} md={8}>
                        {project.video && project.videoTitle && (
                            <>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {project.videoTitle}
                                </Typography>
                                <VideoPlayer video={project.video}></VideoPlayer>
                            </>
                        )}
                    </Grid>

                    {/* Technologies in Paper */}
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ padding: 2, marginTop: '50px', height: 450 }}>
                            <Typography variant="h6" gutterBottom sx={{marginBottom: '20px'}}>
                                Technologies Used
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {project.technologies && project.technologies.map((tech, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <img src={tech.icon} alt={tech.name} style={{ width: '24px', height: '24px' }} />
                                        <Typography variant="body1">{tech.name}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Project Images */}
                {project.images && project.images.length > 0 && (
                    <ImageList cols={2} gap={10} sx={{ width: '100%' }}>
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
                                <Typography variant="h5" display="block" gutterBottom sx={{marginTop: '30px'}}>
                                    {image.title}
                                </Typography>
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    loading="lazy"
                                    style={{ width: '80%', borderRadius: '8px' }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                )}

                {/* Project Link */}
                {project.link && (
                    <Box mt={2}>
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <Button variant="contained" color="primary" size="large">
                                Visit Project
                            </Button>
                        </Link>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default ProjectDetailsPage;
