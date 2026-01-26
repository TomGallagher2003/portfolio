import React from 'react';
import { Box } from '@mui/material';
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import Skills from "./Skills"

const Home = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                color: 'text.primary',
                margin: 0,
                marginLeft: {
                    xs: 0,        // No margin on mobile (hamburger menu)
                    sm: '70px',   // Sidebar margin on tablet+
                },
                paddingTop: {
                    xs: 3,        // 24px on mobile
                    sm: 4,        // 32px on tablet+
                },
                paddingBottom: {
                    xs: 3,        // 24px on mobile
                    sm: 4,        // 32px on tablet+
                },
                minHeight: '100vh',
            }}
        >
            <AboutMe />
            <ProjectList />
            <Skills />
        </Box>
    );
};

export default Home;

