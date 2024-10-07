import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import skills from '../data/skills.js';
import SkillCategory from './SkillCategory';

const Skills = () => {
    return (
        <Box id="skills" textAlign="center" py={4} sx={{ marginX: '50px', marginY: '20px' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{marginBottom: '25px', fontWeight: 'bold' }}>
                Skills
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {Object.keys(skills).map((category) => (
                    <Grid item xs={12} sm={6} md={4} key={category}>
                        <SkillCategory category={category} skills={skills[category]} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
