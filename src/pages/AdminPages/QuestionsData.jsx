// QuestionsData.js
import React, { useEffect, useState } from "react";
import {
    Container,
    Typography,
    Box,
    TextField,
    Grid,
    Button,
    CircularProgress,
    LinearProgress,
} from "@mui/material";
import QuestionsTable from "../../components/Admin/Questions/QuestionsTable";
import EditModal from "../../components/Admin/Questions/EditModal";

import { useSelector, useDispatch } from "react-redux";
import { fetchCategoriesAction } from "../../store/actions/categories";

const QuestionsData = () => {
    const dispatch = useDispatch();
    const { categories, isLoading } = useSelector(
        (state) => state.local.categories
    );
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({
        language: "",
        questionType: "",
        tag: "",
    });
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [selectedCat, setSelectedCat] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedChapter, setSelectedChapter] = useState("");
    const [isNewQuestion, setIsNewQuestion] = useState(false);

    useEffect(() => {
        // fetchCategories()
        //   .then((response) => {
        //     setData(response);
        //     setFilteredData(response);
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching data:", error);
        //   });
        dispatch(
            fetchCategoriesAction({
                successCallback: () => {
                    setData(categories);
                    setFilteredData(categories);
                },
            })
        );
    }, []);

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddQuestion = () => {
        setSelectedQuestion({
            question: "",
            options: [],
            answer: [],
            tags: [],
            hints: [],
        });
        setIsNewQuestion(true);
        setEditModalOpen(true);
    };

    const handleEdit = (question, qCat, qType, qChapter) => {
        setSelectedCat(qCat);
        setSelectedType(qType);
        setSelectedChapter(qChapter);
        setSelectedQuestion(question);
        setIsNewQuestion(false);
        setEditModalOpen(true);
    };

    const handleEditSave = (updatedQuestion) => {
        if (isNewQuestion) {
            const category = data.find(
                (cat) => cat.name === updatedQuestion.category
            );
            const questionTypeObj = category?.questionTypes.find(
                (qt) => qt.type === updatedQuestion.type
            );
            const chapter = questionTypeObj?.chapters.find(
                (ch) => ch.name === updatedQuestion.chapter
            );

            if (category && questionTypeObj && chapter) {
                chapter.questions.push({
                    ...updatedQuestion,
                    options: updatedQuestion.options
                        .split(",")
                        .map((opt) => opt.trim()),
                    answer: updatedQuestion.answer
                        .split(",")
                        .map((ans) => ans.trim()),
                    tags: updatedQuestion.tags
                        .split(",")
                        .map((tag) => tag.trim()),
                    hints: updatedQuestion.hints
                        .split("|")
                        .map((hint) => hint.trim()),
                });
            }

            setData([...data]);
            setFilteredData([...data]);
        } else {
            const updatedData = data.map((category) => ({
                ...category,
                questionTypes: category.questionTypes.map(
                    (questionTypeObj) => ({
                        ...questionTypeObj,
                        chapters: questionTypeObj.chapters.map((chapter) => ({
                            ...chapter,
                            questions: chapter.questions.map((q) =>
                                q.question === selectedQuestion.question
                                    ? { ...q, ...updatedQuestion }
                                    : q
                            ),
                        })),
                    })
                ),
            }));

            setData(updatedData);
            setFilteredData(updatedData);
        }

        setEditModalOpen(false);

        // updateData(data).catch((error) => {
        //   console.error("Error updating data:", error);
        // });
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Dashboard - Categories and Questions
            </Typography>
            <Box sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <TextField
                            label="Filter by Language Name"
                            variant="outlined"
                            fullWidth
                            name="language"
                            value={filters.language}
                            onChange={handleFilterChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            label="Filter by Question Type"
                            variant="outlined"
                            fullWidth
                            name="questionType"
                            value={filters.questionType}
                            onChange={handleFilterChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField
                            label="Filter by Tag"
                            variant="outlined"
                            fullWidth
                            name="tag"
                            value={filters.tag}
                            onChange={handleFilterChange}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddQuestion}
                        >
                            Add Question
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            {isLoading ? (
                <LinearProgress />
            ) : (
                <QuestionsTable
                    data={filteredData}
                    onEdit={handleEdit}
                    onDelete={(question) => {
                        if (
                            window.confirm(
                                "Are you sure you want to delete this question?"
                            )
                        ) {
                            const updatedData = data.map((category) => ({
                                ...category,
                                questionTypes: category.questionTypes.map(
                                    (questionTypeObj) => ({
                                        ...questionTypeObj,
                                        chapters: questionTypeObj.chapters.map(
                                            (chapter) => ({
                                                ...chapter,
                                                questions:
                                                    chapter.questions.filter(
                                                        (q) =>
                                                            q.question !==
                                                            question.question
                                                    ),
                                            })
                                        ),
                                    })
                                ),
                            }));
                            setData(updatedData);
                            setFilteredData(updatedData);
                            //   updateData(updatedData).catch((error) => {
                            //     console.error("Error updating data:", error);
                            //   });
                        }
                    }}
                />
            )}
            <EditModal
                open={editModalOpen}
                onClose={() => setEditModalOpen(false)}
                question={selectedQuestion}
                onSave={handleEditSave}
                categories={data}
                isNewQuestion={isNewQuestion}
                qCat={selectedCat}
                qType={selectedType}
                qChapter={selectedChapter}
            />
        </Container>
    );
};

export default QuestionsData;
