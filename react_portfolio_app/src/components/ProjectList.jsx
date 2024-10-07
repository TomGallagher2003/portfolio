import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Project from './Project';
import projects from '../data/projects';




const ProjectList = () => {
    return (
        <Box id="projects" textAlign="center" my={4} sx={{marginX: '50px', marginY: '20px' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{marginBottom: '25px', fontWeight: 'bold' }}>
                Projects
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {Object.keys(projects).map((id) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <Project
                            id={id}  // Pass id as a string
                            title={projects[id].title}
                            briefDescription={projects[id].briefDescription}
                            heroImage={projects[id].heroImage}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProjectList;
