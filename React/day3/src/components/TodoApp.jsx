import { useState } from "react";

function TodoApp() {
    // const [title, setTitle] = useState("");
    const [todo, setTodo] = useState({});
    // const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.title.value);
        // setTitle(e.target.title.value);
        // console.log(e.target.description.value);
        // setDescription(e.target.description.value);
        setTodo({
            title: e.target.title.value,
            description: e.target.description.value,
        });
    };

    return (
        <div className="todo-app-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" required />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" />
                </div>
                <button>Add</button>
            </form>
            <div>
                <h1>{todo.title}</h1>
                <h4>{todo.description}</h4>
            </div>
        </div>
    );
}

export { TodoApp };
