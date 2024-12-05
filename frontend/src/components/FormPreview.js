// src/components/FormPreview.js
import React from "react";

const FormPreview = ({ form }) => {
    return (
        <div className="bg-white shadow p-5 rounded-lg">
            <h2 className="text-xl font-bold mb-5">{form.title}</h2>
            {form.headerImage && <img src={form.headerImage} alt="Header" className="mb-5" />}
            {form.questions.map((q, i) => (
                <div key={i} className="mb-4">
                    <p className="font-semibold">{q.questionText}</p>
                    {/* Additional logic to render options/passage */}
                </div>
            ))}
        </div>
    );
};

export default FormPreview;
