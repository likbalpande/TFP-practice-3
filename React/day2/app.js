import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const App = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [isDone, setIsDone] = useState(false);

    console.log("name:", name);
    console.log("city:", city);
    console.log("email:", email);

    const handleNameChange = (ev) => {
        const val = ev.target.value;
        setName(val);
    };

    const handleCityChange = (ev) => {
        const val = ev.target.value;
        setCity(val);
    };

    const handleEmailChange = (ev) => {
        const val = ev.target.value;
        setEmail(val);
    };

    const handleClick = () => {
        if (name.length > 0 && city.length > 0 && emailRegex.test(email)) {
            setIsDone(true);
        } else {
            alert("validation failed");
        }
    };

    return (
        <div>
            {isDone ? (
                <section>
                    <p>Employee Name: {name}</p>
                    <p>Residence: {city}</p>
                    <p>Contact: {email}</p>
                </section>
            ) : (
                <div className="form-comp">
                    <div className="form-item">
                        <label>Name:</label>
                        <input name="username" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="form-item">
                        <label>City:</label>
                        <input name="city" value={city} onChange={handleCityChange} />
                    </div>
                    <div className="form-item">
                        <label>Email:</label>
                        <input name="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <button onClick={handleClick}>Done</button>
                </div>
            )}
        </div>
    );
};

reactRoot.render(<App />);
