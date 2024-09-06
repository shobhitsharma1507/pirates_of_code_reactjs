// NotFoundPage.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'calc(100vh - 80px)',
                textAlign: 'center',
            }}
        >
            <Box
                sx={{
                    fontSize: '6rem',
                    fontWeight: 'bold',
                    color: 'primary.main',
                }}
            >
                404
            </Box>
            <Typography variant="h4" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                The page you are looking for doesn’t exist or has been moved.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleBackToHome}
                sx={{ mt: 2 }}
            >
                Back to Home
            </Button>
        </Container>
    );
};

export default NotFoundPage;
