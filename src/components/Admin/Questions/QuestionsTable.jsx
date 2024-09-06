// components/QuestionsData/QuestionsTable.js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from "@mui/material";

const QuestionsTable = ({ data, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Question Type</TableCell>
                        <TableCell>Chapter</TableCell>
                        <TableCell>Question</TableCell>
                        <TableCell>Options</TableCell>
                        <TableCell>Answer</TableCell>
                        <TableCell>Tags</TableCell>
                        <TableCell>Hints</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.flatMap((category) =>
                        category.questionTypes.flatMap((questionTypeObj) =>
                            questionTypeObj.chapters.flatMap((chapter) =>
                                chapter.questions.map((question, index) => (
                                    <TableRow
                                        key={`${category.name}-${questionTypeObj.type}-${chapter.name}-${index}`} // Ensure unique keys
                                    >
                                        <TableCell>{category.name}</TableCell>
                                        <TableCell>
                                            {questionTypeObj.type}
                                        </TableCell>
                                        <TableCell>{chapter.name}</TableCell>
                                        <TableCell>
                                            {question.question}
                                        </TableCell>
                                        <TableCell>
                                            {Array.isArray(question.options)
                                                ? question.options.join(", ")
                                                : "N/A"}
                                        </TableCell>
                                        <TableCell>
                                            {Array.isArray(question.answer)
                                                ? question.answer.join(", ")
                                                : "N/A"}
                                        </TableCell>
                                        <TableCell>
                                            {Array.isArray(question.tags)
                                                ? question.tags.join(", ")
                                                : ""}
                                        </TableCell>
                                        <TableCell>
                                            {Array.isArray(question.hints)
                                                ? question.hints.join(" | ")
                                                : ""}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() =>
                                                    onDelete(question)
                                                }
                                                sx={{ mr: 1 }}
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => onEdit(question)}
                                            >
                                                Edit
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default QuestionsTable;
