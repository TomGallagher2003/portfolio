import React, { useState } from 'react';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Divider,
    Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import scrollToTop from '../functions/ScrollToTop';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
        scrollToTop();
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setOpen(false);
        }
    };

    const menuItems = [
        { label: 'Home', path: '/portfolio' },
        { label: 'Contact', path: '/portfolio/contact' },
    ];

    return (
        <>
            {/* Hamburger Button - Fixed Position Top Right */}
            <IconButton
                onClick={handleToggle}
                aria-label="Open navigation menu"
                sx={{
                    position: 'fixed',
                    top: 16,
                    right: 16,
                    zIndex: 1300,
                    width: 48,
                    height: 48,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transition: 'all 150ms cubic-bezier(0.33, 1, 0.68, 1)',
                    '&:hover': {
                        backgroundColor: 'primary.dark',
                        transform: 'scale(1.05)',
                    },
                    '&:active': {
                        transform: 'scale(0.95)',
                    },
                }}
            >
                {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            {/* Drawer Menu */}
            <Drawer
                anchor="right"
                open={open}
                onClose={handleClose}
                onKeyDown={handleKeyDown}
                PaperProps={{
                    className: 'glass-effect',
                    sx: {
                        width: '80vw',
                        maxWidth: 300,
                        padding: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    },
                }}
                sx={{
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                }}
            >
                <Box
                    role="navigation"
                    aria-label="Main navigation"
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Close Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                        <IconButton
                            onClick={handleClose}
                            aria-label="Close navigation menu"
                            sx={{
                                width: 44,
                                height: 44,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    {/* Navigation Links */}
                    <List sx={{ flexGrow: 1 }}>
                        {menuItems.map((item) => (
                            <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
                                <ListItemButton
                                    component={Link}
                                    to={item.path}
                                    onClick={handleClose}
                                    sx={{
                                        borderRadius: 2,
                                        minHeight: 48,
                                        transition: 'all 150ms ease-out',
                                        '&:hover': {
                                            backgroundColor: 'primary.light',
                                            color: 'white',
                                            transform: 'translateX(4px)',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontSize: '1.125rem',
                                            fontWeight: 500,
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ mb: 2 }} />

                    {/* Download CV Button */}
                    <Box sx={{ mt: 'auto' }}>
                        <Button
                            component="a"
                            href={`${process.env.PUBLIC_URL}/cv.pdf`}
                            download="cv.pdf"
                            variant="contained"
                            fullWidth
                            onClick={handleClose}
                            sx={{
                                minHeight: 48,
                                fontSize: '1rem',
                                fontWeight: 500,
                            }}
                        >
                            Download CV
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default HamburgerMenu;
