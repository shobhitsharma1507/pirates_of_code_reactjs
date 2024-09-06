// components/Admin/Questions/EditModal.js
import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Box,
    IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const EditModal = ({
    open,
    onClose,
    question,
    onSave,
    categories,
    isNewQuestion,
}) => {
    const [formState, setFormState] = useState({
        question: "",
        options: ["", "", "", ""],
        answer: "",
        tags: "",
        hints: "",
        parts: [{ question: "", answer: "" }],
    });
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedChapter, setSelectedChapter] = useState("");

    useEffect(() => {
        if (question) {
            // Initialize form state based on the selected question
            setFormState({
                question: question.question || "",
                options: Array.isArray(question.options)
                    ? question.options
                    : ["", "", "", ""],
                answer: Array.isArray(question.answer)
                    ? question.answer.join(", ")
                    : question.answer || "",
                tags: Array.isArray(question.tags)
                    ? question.tags.join(", ")
                    : question.tags || "",
                hints: Array.isArray(question.hints)
                    ? question.hints.join(" | ")
                    : question.hints || "",
                parts: question.parts || [{ question: "", answer: "" }],
            });
            if (!isNewQuestion) {
                setSelectedCategory(question.category || "");
                setSelectedType(question.type || "");
                setSelectedChapter(question.chapter || "");
            }
        } else {
            // Reset form state for new question
            setFormState({
                question: "",
                options: ["", "", "", ""],
                answer: "",
                tags: "",
                hints: "",
                parts: [{ question: "", answer: "" }],
            });
            setSelectedCategory("");
            setSelectedType("");
            setSelectedChapter("");
        }
    }, [question, isNewQuestion]);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        console.log("Selected Category:", value); // Debugging log
        setSelectedCategory(value);
        setSelectedType(""); // Reset type when category changes
        setSelectedChapter(""); // Reset chapter when category changes
    };

    const handleTypeChange = (e) => {
        const value = e.target.value;
        console.log("Selected Type:", value); // Debugging log
        setSelectedType(value);
        setSelectedChapter(""); // Reset chapter when type changes
    };

    const handleChapterChange = (e) => {
        const value = e.target.value;
        console.log("Selected Chapter:", value); // Debugging log
        setSelectedChapter(value);
    };

    const handleChoiceChange = (index, value) => {
        const newOptions = [...formState.options];
        newOptions[index] = value;
        setFormState({ ...formState, options: newOptions });
    };

    const handlePartChange = (index, value, type) => {
        const newParts = [...formState.parts];
        newParts[index][type] = value;
        setFormState({ ...formState, parts: newParts });
    };

    const addNewPart = () => {
        setFormState({
            ...formState,
            parts: [...formState.parts, { question: "", answer: "" }],
        });
    };

    const handleSave = () => {
        console.log(
            "Saving with: ",
            selectedCategory,
            selectedType,
            selectedChapter
        ); // Debugging log
        const updatedQuestion = {
            ...formState,
            category: selectedCategory,
            type: selectedType,
            chapter: selectedChapter,
            options: selectedType === "MCQ" ? formState.options : undefined,
            parts: selectedType === "Blanks" ? formState.parts : undefined,
            answer:
                selectedType === "Boolean"
                    ? formState.answer
                    : formState.answer.split(",").map((ans) => ans.trim()),
        };
        onSave(updatedQuestion);
    };

    console.log(selectedCategory)

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>
                {isNewQuestion ? "Add New Question" : "Edit Question"}
            </DialogTitle>
            <DialogContent>
                {isNewQuestion && (
                    <>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                {categories.map((cat, index) => (
                                    <MenuItem key={cat.name} value={cat.name}>
                                        {cat.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl
                            fullWidth
                            margin="normal"
                            disabled={!selectedCategory}
                        >
                            <InputLabel>Question Type</InputLabel>
                            <Select
                                value={selectedType}
                                onChange={handleTypeChange}
                            >
                                {categories
                                    .find(
                                        (cat) => cat.name === selectedCategory
                                    )
                                    ?.questionTypes.map((type) => (
                                        <MenuItem
                                            key={type.type}
                                            value={type.type}
                                        >
                                            {type.type}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                        <FormControl
                            fullWidth
                            margin="normal"
                            disabled={!selectedType}
                        >
                            <InputLabel>Chapter</InputLabel>
                            <Select
                                value={selectedChapter}
                                onChange={handleChapterChange}
                            >
                                {categories
                                    .find(
                                        (cat) => cat.name === selectedCategory
                                    )
                                    ?.questionTypes.find(
                                        (type) => type.type === selectedType
                                    )
                                    ?.chapters.map((chapter) => (
                                        <MenuItem
                                            key={chapter.name}
                                            value={chapter.name}
                                        >
                                            {chapter.name}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </>
                )}

                {/* Dynamic form based on question type */}
                {selectedType === "MCQ" && (
                    <>
                        <TextField
                            label="Question"
                            name="question"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formState.question}
                            onChange={handleChange}
                        />
                        {[0, 1, 2, 3].map((i) => (
                            <TextField
                                key={i}
                                label={`Choice ${i + 1}`}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formState.options[i] || ""}
                                onChange={(e) =>
                                    handleChoiceChange(i, e.target.value)
                                }
                            />
                        ))}
                        <TextField
                            label="Correct Answer"
                            name="answer"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formState.answer}
                            onChange={handleChange}
                        />
                    </>
                )}

                {selectedType === "Boolean" && (
                    <>
                        <TextField
                            label="Question"
                            name="question"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formState.question}
                            onChange={handleChange}
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Answer</InputLabel>
                            <Select
                                value={formState.answer || ""}
                                onChange={(e) =>
                                    setFormState({
                                        ...formState,
                                        answer: e.target.value,
                                    })
                                }
                            >
                                <MenuItem value="True">True</MenuItem>
                                <MenuItem value="False">False</MenuItem>
                            </Select>
                        </FormControl>
                    </>
                )}

                {selectedType === "Blanks" && (
                    <>
                        {(
                            formState.parts || [{ question: "", answer: "" }]
                        ).map((part, index) => (
                            <Box
                                key={index}
                                sx={{ display: "flex", gap: 2, mb: 2 }}
                            >
                                <TextField
                                    label={`Question Part ${index + 1}`}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={part.question}
                                    onChange={(e) =>
                                        handlePartChange(
                                            index,
                                            e.target.value,
                                            "question"
                                        )
                                    }
                                />
                                <TextField
                                    label={`Answer Part ${index + 1}`}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={part.answer}
                                    onChange={(e) =>
                                        handlePartChange(
                                            index,
                                            e.target.value,
                                            "answer"
                                        )
                                    }
                                />
                            </Box>
                        ))}
                        <Button
                            startIcon={<AddIcon />}
                            onClick={addNewPart}
                            color="primary"
                            sx={{ mt: 2 }}
                        >
                            Add Part
                        </Button>
                    </>
                )}

                <TextField
                    label="Tags"
                    name="tags"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formState.tags}
                    onChange={handleChange}
                />
                <TextField
                    label="Hints"
                    name="hints"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formState.hints}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    {isNewQuestion ? "Add" : "Update"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditModal;
