import React from 'react';
import { Box } from '@mui/material';

const VideoPlayer = ({video}) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
            }}
        >
            <video width="720" height="480" controls>
                <source src={`${process.env.PUBLIC_URL}${video}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    );
};

export default VideoPlayer;
