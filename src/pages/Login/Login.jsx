// Login.js
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
import axios from "axios";
import { userLoginAction } from "../../store/actions/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { userDetails } = useSelector((state) => state.local.auth);

    const handleLogin = async (e) => {
        e.preventDefault();

        dispatch(
            userLoginAction({
                payload: { email: email, password: password },
                successCallback: () => {
                    navigate("/");
                },
            })
        );
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
                    Login
                </Typography>
                <form
                    onSubmit={handleLogin}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: theme.spacing(2),
                    }}
                >
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        Login
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
