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
            className="glass-effect-light"
            position="fixed"
            sx={{
                width: isExpanded ? '200px' : '70px',
                height: '100vh',
                transition: 'width 300ms cubic-bezier(0.33, 1, 0.68, 1)',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                zIndex: 1200,
                overflow: 'hidden',
                left: 0,
                backgroundColor: 'rgba(0, 102, 255, 0.15)',
                borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: 6,
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
                    color="primary"
                    onClick={toggleNavbar}
                    aria-label={isExpanded ? "Collapse navigation" : "Expand navigation"}
                    sx={{
                        marginBottom: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                        },
                    }}
                >
                    {isExpanded ? <CloseIcon /> : <MenuIcon />}
                </IconButton>

                {/* Display buttons vertically when expanded */}
                {isExpanded && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', px: 1 }}>
                        <Button
                            color="primary"
                            component={Link}
                            to="/portfolio"
                            onClick={scrollAndToggle}
                            fullWidth
                            sx={{
                                marginBottom: 2,
                                justifyContent: 'flex-start',
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                },
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            color="primary"
                            component={Link}
                            to="/portfolio/contact"
                            onClick={scrollAndToggle}
                            fullWidth
                            sx={{
                                marginBottom: 2,
                                justifyContent: 'flex-start',
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                },
                            }}
                        >
                            Contact
                        </Button>
                        <Button
                            component="a"
                            href={`${process.env.PUBLIC_URL}/cv.pdf`}
                            download="cv.pdf"
                            color="primary"
                            onClick={toggleNavbar}
                            fullWidth
                            sx={{
                                marginBottom: 2,
                                justifyContent: 'flex-start',
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'white',
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
