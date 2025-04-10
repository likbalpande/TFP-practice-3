// CJS: common js format --> const react = require("react");
// ESM: es modules       --> import React from "react"
import React from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

// element

// const title = React.createElement(
//     "h1",
//     {
//         key: "ramesh",
//         style: {
//             backgroundColor: "blue",
//             color: "white",
//             padding: "2rem 1rem 2rem 5rem",
//         },
//     },
//     "Likhilesh"
// );

// component
const title = (name) => {
    return React.createElement(
        "h1",
        {
            key: name,
            style: {
                backgroundColor: "blue",
                color: "white",
                padding: "2rem 1rem 2rem 5rem",
            },
        },
        name
    );
};

const para = React.createElement(
    "p",
    {
        key: "mohan",
        style: {
            backgroundColor: "lime",
        },
    },
    "Noida"
);

// const card = React.createElement(
//     "div",
//     {
//         style: {
//             padding: "1rem",
//             border: "1px solid brown",
//             flexGrow: "1",
//         },
//     },
//     [title("Likhilesh"), para]
// );

const card = (name, key) => {
    return React.createElement(
        "div",
        {
            key: key,
            style: {
                padding: "1rem",
                border: "1px solid brown",
                flexGrow: "1",
            },
        },
        [title(name), para]
    );
};

// const parent = React.createElement(
//     "div",
//     {
//         style: {
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "1rem",
//             padding: "1rem",
//             border: "1px solid green",
//         },
//     },
//     card("Likhilesh"),
//     card("Hemant"),
//     card("Rizwan"),
//     card("Rajat")
// );

const getData = () => {
    const pr1 = fetch("https://api.github.com/users");
    pr1.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            const parentElement = parent(data);
            reactRoot.render(parentElement);
        });
    });
};

const parent = (data) => {
    return React.createElement(
        "div",
        {
            style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                padding: "1rem",
                border: "1px solid green",
            },
        },
        data.map((elem) => {
            return card(elem.login, elem.id);
        })
    );
};

getData();
