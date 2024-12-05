import React from "react";
import FormBuilder from "./components/FormBuilder";

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <h1 className="text-3xl font-bold text-center mb-8">Form Builder</h1>
            <FormBuilder />
        </div>
    );
};

export default App;
