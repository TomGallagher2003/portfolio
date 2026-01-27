import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import skills from '../data/skills.js';
import SkillCategory from './SkillCategory';

const Skills = () => {
    return (
        <Box
            id="skills"
            textAlign="center"
            sx={{
                paddingY: {
                    xs: 4,      // 32px on mobile
                    sm: 5,      // 40px on tablet+
                },
                marginX: {
                    xs: 2,      // 16px margin on mobile
                    sm: 4,      // 32px margin on tablet+
                },
                marginY: {
                    xs: 3,      // 24px on mobile
                    sm: 4,      // 32px on tablet+
                },
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                    marginBottom: 4,
                    fontWeight: 700,
                    color: '#F5F5F7',
                }}
            >
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
