import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Icon for skill item

const SkillCategory = ({ category, skills }) => {
    return (
        <Paper
            className="glass-effect-light"
            elevation={3}
            sx={{
                padding: 3,
                borderRadius: 3, // 12px - lg from design system
                height: '100%',
                transition: 'all 250ms cubic-bezier(0.33, 1, 0.68, 1)',
                '&:hover': {
                    transform: 'translateY(-2px)', // Subtle lift
                    boxShadow: 6,
                },
                // Semi-transparent background for readability
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}
        >
            <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 2,
                }}
            >
                {category}
            </Typography>
            <List sx={{ py: 0 }}>
                {skills.map((skill, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                        <CheckCircleIcon
                            sx={{
                                color: 'success.main',
                                marginRight: 1.5,
                                fontSize: '1.25rem',
                            }}
                        />
                        <ListItemText
                            primary={skill}
                            sx={{
                                '& .MuiTypography-root': {
                                    color: 'text.primary',
                                    fontSize: '0.95rem',
                                }
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default SkillCategory;
