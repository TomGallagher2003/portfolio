import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Project from './Project';
import projects from '../data/projects';




const ProjectList = () => {
    return (
        <Box
            id="projects"
            textAlign="center"
            sx={{
                marginLeft: {
                    xs: 0,        // No margin on mobile (hamburger menu)
                    sm: '90px',   // Sidebar margin on tablet+
                },
                marginY: {
                    xs: 4,        // 32px on mobile
                    sm: 8,        // 64px on tablet+
                },
                paddingX: {
                    xs: 2,        // 16px padding on mobile
                    sm: 3,        // 24px padding on tablet+
                },
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    marginBottom: 4,
                    color: 'primary.main',
                }}
            >
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
