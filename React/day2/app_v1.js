import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("root"); // real dom
const reactRoot = ReactDOM.createRoot(domRoot); // virtual dom (light copy of real dom)

// * component * vs element

// initially --> component run --> render / mounting
// uske bad --> re-run --> re-render / re-mount
// react will re-render the component on ** state change **
// to manage the react state --> you use state variables

// const obj = {
//     backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
//         Math.random() * 255
//     )})`,
//     padding: "2rem",
// };

const App = () => {
    // let name = "Raj";
    const [name, setName] = useState("Raj");
    console.log("out", name);

    const handleChange = (ev) => {
        const val = ev.target.value;
        // name = val;
        setName(val); // noted! --> kar dunga
        // console.log("in", name);
    };

    const obj = {
        backgroundColor: `${name}`,
        padding: "2rem",
    };

    let isAdmin = name === "likhilesh";
    console.log("🟡 : isAdmin:", isAdmin);

    // setTimeout(() => {
    //     setName("Manoj");
    // }, 10000);

    return (
        <div style={obj}>
            <input value={name} onChange={handleChange} />
            <h2>{name}</h2>
            {isAdmin ? <p>Hello! you are admin!</p> : null}
        </div>
    );
};

// reactRoot.render(App({xyz: 10, abcd:20}));
reactRoot.render(<App />);
