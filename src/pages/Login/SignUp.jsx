// Signup.js
import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Paper,
    Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Signup = () => {
    const theme = useTheme();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = (event) => {
        event.preventDefault();

        const { name, email, password, confirmPassword } = formValues;

        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        // Handle signup logic here (e.g., API call)
        console.log("Signing up with:", { name, email, password });
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
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: theme.spacing(4),
                    maxWidth: 400,
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <form
                    onSubmit={handleSignup}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: theme.spacing(2),
                    }}
                >
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        type="text"
                        value={formValues.name}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        variant="outlined"
                        type="password"
                        value={formValues.password}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        variant="outlined"
                        type="password"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    {error && (
                        <Typography
                            color="error"
                            variant="body2"
                            sx={{ mb: 2 }}
                        >
                            {error}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Signup;
