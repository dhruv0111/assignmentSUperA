import React, { useState } from "react";
import axios from "axios";
import QuestionEditor from "./QuestionEditor";

const FormBuilder = () => {
    const [title, setTitle] = useState("");
    const [headerImage, setHeaderImage] = useState("");
    const [questions, setQuestions] = useState([]);

    const addQuestion = (type) => {
        setQuestions([...questions, { id: Date.now(), type, questionText: "", options: [], categories: [], passage: "" }]);
    };

    const saveForm = async () => {
        const form = { title, headerImage, questions };
        await axios.post("http://localhost:5000/api/forms", form);
    };

    return (
        <div className="bg-white shadow p-5 rounded-lg">
            <div>
                <input type="text" placeholder="Form Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Header Image URL" value={headerImage} onChange={(e) => setHeaderImage(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addQuestion("categorize")}>Add Categorize</button>
                <button onClick={() => addQuestion("cloze")}>Add Cloze</button>
                <button onClick={() => addQuestion("comprehension")}>Add Comprehension</button>
            </div>
            {questions.map((question, index) => (
                <QuestionEditor key={question.id} question={question} setQuestions={setQuestions} questions={questions} index={index} />
            ))}
            <button onClick={saveForm}>Save Form</button>
        </div>
    );
};

export default FormBuilder;
