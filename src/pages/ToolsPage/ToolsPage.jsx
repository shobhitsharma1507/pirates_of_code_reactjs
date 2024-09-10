import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import "./ToolsPage.css";
import Footer from "../../components/HomePage/Footer";

export default function ToolsPage() {
    const formatters = ["html", "css", "javascript", "json", "php", "xml"];
    const [isFormattersExpanded, setIsFormattersExpanded] = useState(false);
    const [isConverterExpanded, setIsConverterExpanded] = useState(false);

    const converters = [
        { from: "json", to: "csv" },
        { from: "json", to: "excel" },
        { from: "json", to: "xml" },
        { from: "json", to: "yaml" },
        { from: "", to: "" },
    ];

    return (
        <>
            <Box
                className="flex-col"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Box className="flex-row tools-page-title">
                    <Typography variant="h4">Awesome Daily Tools</Typography>
                </Box>
                <Box
                    className="flex-row tools-section"
                    bgcolor="background.main"
                >
                    <Typography
                        color="text.main"
                        variant="h5"
                        sx={{
                            width: "100%",
                            padding: "0 5%",
                            textAlign: "left",
                        }}
                    >
                        Code Formatters
                    </Typography>
                    <Box className="flex-row formatter-tools">
                        {formatters
                            .slice(
                                0,
                                isFormattersExpanded ? formatters.length : 2
                            )
                            .map((e) => {
                                return (
                                    <Box
                                        className="flex-col formatter-tool-card"
                                        bgcolor="background.sidebar"
                                        color="text.main"
                                        
                                    >
                                        {e.toUpperCase()} Beautifier
                                    </Box>
                                );
                            })}
                        <Box
                            bgcolor="background.sidebar"
                            color="text.main"
                            className="flex-row formatter-tool-card"
                            onClick={() =>
                                setIsFormattersExpanded(!isFormattersExpanded)
                            }
                        >
                            <Box className="flex-col tools-collapse-button">
                                {isFormattersExpanded
                                    ? "<< See Less"
                                    : "See More >>"}
                            </Box>
                        </Box>
                    </Box>
                </Box>{" "}
                <Box
                    className="flex-row tools-section"
                    bgcolor="background.main"
                >
                    <Typography
                        color="text.main"
                        variant="h5"
                        sx={{
                            width: "100%",
                            padding: "0 5%",
                            textAlign: "left",
                        }}
                    >
                        Code Conveters
                    </Typography>
                    <Box className="flex-row conveter-tools">
                        {converters
                            .slice(
                                0,
                                isConverterExpanded ? converters.length : 2
                            )
                            .map((e) => {
                                return (
                                    <Box
                                        className="flex-col conveter-tool-card"
                                        bgcolor="background.sidebar"
                                        color="text.main"
                                    >
                                        {e.from.toUpperCase() +
                                            " to " +
                                            e.to.toUpperCase()}{" "}
                                        Conveter
                                    </Box>
                                );
                            })}
                        <Box
                            className="flex-row formatter-tool-card"
                            onClick={() =>
                                setIsConverterExpanded(!isConverterExpanded)
                            }
                            bgcolor="background.sidebar"
                            color="text.main"
                        >
                            <Box className="flex-col tools-collapse-button">
                                {isConverterExpanded
                                    ? "<< See Less"
                                    : "See More >>"}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
