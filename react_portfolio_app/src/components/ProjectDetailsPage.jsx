import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';
import { Box, Typography, Button, Link, ImageList, ImageListItem } from '@mui/material';

const ProjectDetailsPage = () => {
    const { id } = useParams();
    const project = projects[id];

    if (!project) {
        return (
            <Box textAlign="center" mt={4}>
                <Typography variant="h4" color="error">
                    Project not found
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                width: '80%',
                margin: '40px auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="h3" component="h1" gutterBottom>
                {project.title}
            </Typography>

            <Typography variant="body1" paragraph>
                {project.description}
            </Typography>

            {project.images && project.images.length > 0 && (
                <ImageList cols={2} gap={10} sx={{ width: '100%', marginTop: '20px' }}>
                    {project.images.map((image, index) => (
                        <ImageListItem
                            key={index}
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',}}
                        >
                            <Typography variant="h5" display="block" gutterBottom>
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
    );
};

export default ProjectDetailsPage;
