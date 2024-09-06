// UnauthorizedAccess.js
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const UnauthorizedAccess = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "calc(100vh - 80px)",
                backgroundColor: "#f5f5f5",
                padding: theme.spacing(3),
            }}
        >
            <Box textAlign="center">
                <Typography
                    variant="h3"
                    sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2 }}
                    color="error"
                >
                    Unauthorized Access
                </Typography>
                <Typography
                    sx={{ fontSize: "1.2rem", mb: 3 }}
                    color="textSecondary"
                >
                    You do not have permission to view this page.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGoHome}
                >
                    Go to Home
                </Button>
            </Box>
        </Container>
    );
};

export default UnauthorizedAccess;
