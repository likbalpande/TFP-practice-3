// CJS: common js format --> const react = require("react");
// ESM: es modules       --> import React from "react"
import React from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const Card = (obj) => {
    const styleObj = {
        padding: "1rem",
        border: "1px solid brown",
        flexGrow: "1",
    };

    return (
        <div style={styleObj}>
            <h1 style={{ backgroundColor: "blue", padding: "1rem", color: "white" }}>{obj.name}</h1>
            {/* <p>{obj.text}</p> */}
            <img src={obj.img} />
        </div>
    );
};

const getData = () => {
    const pr1 = fetch("https://api.github.com/users");
    pr1.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            const parentElement = Parent(data);
            reactRoot.render(parentElement);
        });
    });
};

const Parent = (data) => {
    return (
        <div>
            {data.map((elem) => {
                return <Card key={elem.id} name={elem.login} img={elem.avatar_url} />;
            })}
        </div>
    );
};

getData();
