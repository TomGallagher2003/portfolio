import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import scrollToTop from "../functions/ScrollToTop";

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded((prev) => !prev);
    };

    const scrollAndToggle = () => {
        toggleNavbar();
        scrollToTop();
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#28675e',
                width: isExpanded ? '200px' : '50px',
                height: '100vh',
                transition: 'width 0.3s ease',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                zIndex: '100',
                overflow: 'hidden',
                left: '0'
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
                <IconButton color="inherit" onClick={toggleNavbar} sx={{ marginBottom: 2 }}>
                    {isExpanded ? <CloseIcon /> : <MenuIcon />}
                </IconButton>

                {/* Display buttons vertically when expanded */}
                {isExpanded && (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/portfolio"
                            onClick={scrollAndToggle}
                            sx={{ marginBottom: 2 }}
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/portfolio/contact"
                            onClick={scrollAndToggle}
                            sx={{ marginBottom: 2 }}
                        >
                            Contact
                        </Button>
                        <a href="/cv.pdf" download="cv.pdf" style={{ color: "white" }}>
                            <Button
                                color="inherit"
                                sx={{ marginBottom: 2 }}
                                onClick={toggleNavbar}
                            >
                                Download my CV
                            </Button>
                        </a>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
