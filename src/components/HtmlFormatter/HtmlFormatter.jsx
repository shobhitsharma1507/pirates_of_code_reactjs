import React, { useState, useRef } from "react";
import { html as beautifyHtml } from "js-beautify";
import "./HtmlFormatter.css";

const HtmlFormatter = () => {
    const [rawHtml, setRawHtml] = useState("");
    const [formattedHtml, setFormattedHtml] = useState("");
    const [indentSize, setIndentSize] = useState(4);

    // Create a ref for the file input element
    const fileInputRef = useRef(null);

    const formatHtml = () => {
        const formatted = beautifyHtml(rawHtml, {
            indent_size: indentSize,
        });
        setFormattedHtml(formatted);
    };

    const minifyHtml = () => {
        const minified = rawHtml
            .replace(/<!--.*?-->/g, '')
            .replace(/\n/g, '')
            .replace(/\s{2,}/g, ' ')
            .replace(/>\s</g, '><');
        setFormattedHtml(minified);
    };

    const handleInputChange = (e) => {
        setRawHtml(e.target.value);
    };

    const handleIndentChange = (e) => {
        setIndentSize(Number(e.target.value));
    };

    const handleFormatClick = () => {
        formatHtml();
    };

    const handleMinifyClick = () => {
        minifyHtml();
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(formattedHtml);
    };

    const handleReset = () => {
        setRawHtml("");
        setFormattedHtml("");
        // Reset the file input by setting its value to an empty string
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setRawHtml(event.target.result);
            };
            reader.readAsText(file);
        }
    };

    return (
        <>
            <div className="html-formatter">
                <div className="inputBox">
                    <textarea
                        value={rawHtml}
                        onChange={handleInputChange}
                        placeholder="Paste your HTML here"
                    />
                    <div className="btn">
                        <input
                            type="file"
                            accept=".html"
                            onChange={handleUpload}
                            ref={fileInputRef} // Attach the ref to the file input
                        />
                    </div>
                </div>

                <div className="inputBox">
                    <div className="formatted-output">
                        <pre>{formattedHtml}</pre>
                    </div>
                    <div className="btn">
                        <button onClick={handleCopy}>Copy</button>
                    </div>
                </div>
            </div>

            <div className="format">
                <div className="button">
                    <button onClick={handleFormatClick}>Format</button>
                </div>
                <div className="buttons">
                    <select value={indentSize} onChange={handleIndentChange}>
                        <option value={2}>2 Spaces</option>
                        <option value={4}>4 Spaces</option>
                    </select>
                    <button onClick={handleMinifyClick}>Minify</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    );
};

export default HtmlFormatter;
