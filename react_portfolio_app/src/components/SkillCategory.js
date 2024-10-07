import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Icon for skill item

const SkillCategory = ({ category, skills }) => {
    return (
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, height: '100%' }}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: '500', color: '#333' }}>
                {category}
            </Typography>
            <List>
                {skills.map((skill, index) => (
                    <ListItem key={index}>
                        <CheckCircleIcon sx={{ color: '#4caf50', marginRight: 1 }} />
                        <ListItemText primary={skill} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default SkillCategory;
