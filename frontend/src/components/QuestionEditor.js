import React from "react";

const QuestionEditor = ({ question, questions, setQuestions, index }) => {
    const handleInputChange = (key, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][key] = value;
        setQuestions(updatedQuestions);
    };

    return (
        <div>
            <textarea placeholder="Enter question text" value={question.questionText} onChange={(e) => handleInputChange("questionText", e.target.value)} />
            {question.type === "categorize" && (
                <input type="text" placeholder="Enter categories" onChange={(e) => handleInputChange("categories", e.target.value.split(","))} />
            )}
            {question.type === "cloze" && (
                <textarea placeholder="Enter cloze text" value={question.options} onChange={(e) => handleInputChange("options", e.target.value.split(","))} />
            )}
            {question.type === "comprehension" && (
                <textarea placeholder="Enter comprehension passage" value={question.passage} onChange={(e) => handleInputChange("passage", e.target.value)} />
            )}
        </div>
    );
};

export default QuestionEditor;
