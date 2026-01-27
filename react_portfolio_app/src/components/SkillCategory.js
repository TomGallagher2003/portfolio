import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Icon for skill item

const SkillCategory = ({ category, skills }) => {
    return (
        <Paper
            className="glass-effect"
            elevation={0}
            sx={{
                padding: 3,
                borderRadius: 4, // 16px - xl from design system
                height: '100%',
                background: 'rgba(20, 20, 26, 0.7)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2), 0 0 1px 0 rgba(255, 255, 255, 0.05) inset',
                transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    background: 'rgba(20, 20, 26, 0.85)',
                    borderColor: 'rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.25), 0 0 1px 0 rgba(255, 255, 255, 0.08) inset',
                },
            }}
        >
            <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{
                    fontWeight: 600,
                    color: '#0066FF',
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
                                color: '#22C55E',
                                marginRight: 1.5,
                                fontSize: '1.25rem',
                            }}
                        />
                        <ListItemText
                            primary={skill}
                            sx={{
                                '& .MuiTypography-root': {
                                    color: '#F5F5F7',
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
