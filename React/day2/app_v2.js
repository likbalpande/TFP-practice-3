import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    const [name, setName] = useState({});
    console.log("name:", name);

    const handleChange = (ev) => {
        const val = ev.target.value;
        setName(val);
    };

    setTimeout(() => {
        setName({});
    }, 10000);

    return (
        <div>
            <input value={name} onChange={handleChange} />
        </div>
    );
};

reactRoot.render(<App />);
