import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import scrollToTop from "../functions/ScrollToTop";
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // < 600px

    const toggleNavbar = () => {
        setIsExpanded((prev) => !prev);
    };

    const scrollAndToggle = () => {
        toggleNavbar();
        scrollToTop();
    };

    // Show hamburger menu on mobile
    if (isMobile) {
        return <HamburgerMenu />;
    }

    // Show vertical sidebar on tablet/desktop
    return (
        <AppBar
            className="glass-effect"
            position="fixed"
            sx={{
                width: isExpanded ? '200px' : '70px',
                height: '100vh',
                transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                zIndex: 1200,
                overflow: 'hidden',
                left: 0,
                background: 'rgba(10, 10, 15, 0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRight: '1px solid rgba(255, 255, 255, 0.06)',
                boxShadow: '4px 0 24px rgba(0, 0, 0, 0.2)',
            }}
        >
            {/* Toggle button to expand/collapse */}
            <Toolbar
                sx={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: 2,
                }}
            >
                <IconButton
                    onClick={toggleNavbar}
                    aria-label={isExpanded ? "Collapse navigation" : "Expand navigation"}
                    sx={{
                        marginBottom: 2,
                        color: '#F5F5F7',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 102, 255, 0.2)',
                            borderColor: 'rgba(0, 102, 255, 0.3)',
                        },
                    }}
                >
                    {isExpanded ? <CloseIcon /> : <MenuIcon />}
                </IconButton>

                {/* Display buttons vertically when expanded */}
                {isExpanded && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', px: 1 }}>
                        <Button
                            component={Link}
                            to="/portfolio"
                            onClick={scrollAndToggle}
                            fullWidth
                            sx={{
                                marginBottom: 2,
                                justifyContent: 'flex-start',
                                color: '#F5F5F7',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 102, 255, 0.2)',
                                    borderColor: 'rgba(0, 102, 255, 0.3)',
                                },
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/portfolio/contact"
                            onClick={scrollAndToggle}
                            fullWidth
                            sx={{
                                marginBottom: 2,
                                justifyContent: 'flex-start',
                                color: '#F5F5F7',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 102, 255, 0.2)',
                                    borderColor: 'rgba(0, 102, 255, 0.3)',
                                },
                            }}
                        >
                            Contact
                        </Button>
                        <Button
                            component="a"
                            href={`${process.env.PUBLIC_URL}/cv.pdf`}
                            download="cv.pdf"
                            onClick={toggleNavbar}
                            fullWidth
                            sx={{
                                marginBottom: 2,
                                justifyContent: 'flex-start',
                                color: '#FFFFFF',
                                background: 'linear-gradient(135deg, #0066FF 0%, #6B3FA0 100%)',
                                '&:hover': {
                                    boxShadow: '0 4px 16px rgba(0, 102, 255, 0.4)',
                                },
                            }}
                        >
                            Download CV
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
