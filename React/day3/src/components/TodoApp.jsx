import { useState } from "react";

// re-render --- re-run --> kuch naya return --> kuch alag dikhega
function TodoApp() {
    const [todo, setTodo] = useState(() => {
        console.log("--- setting useState -------");
        const oldTodosString = localStorage.getItem("todos");
        if (oldTodosString === null) return [];
        else {
            const oldTodosArr = JSON.parse(oldTodosString);
            return oldTodosArr;
        }
    });

    const [editIndex, setEditIndex] = useState(-1);
    console.log("🟡 : editIndex:", editIndex);

    localStorage.setItem("todos", JSON.stringify(todo));

    const handleSubmit = (e) => {
        e.preventDefault();
        // mutability in js

        // const temp = [...todo];
        // temp.push({
        //     title: e.target.title.value,
        //     description: e.target.description.value,
        // });
        // setTodo(temp);

        // setTodo([
        //     ...todo, // []
        //     {
        //         title: e.target.title.value,
        //         description: e.target.description.value,
        //         priority: "low",
        //     },
        // ]); // kr dunga ---> noted! // schedule

        // setTodo([
        //     ...todo,
        //     {
        //         title: e.target.title.value,
        //         description: e.target.description.value,
        //         priority: "high",
        //     },
        // ]); // kr dunga ---> noted! // schedule

        setTodo((prev) => {
            return [
                ...prev, // [{}]
                {
                    title: e.target.title.value,
                    description: e.target.description.value,
                    priority: "low",
                },
            ];
        });

        setTodo((prev) => {
            return [
                ...prev, // [{}]
                {
                    title: e.target.title.value,
                    description: e.target.description.value,
                    priority: "high",
                },
            ];
        });
    };

    const handleDelete = (i) => {
        console.log(i);
        setTodo((prev) => {
            const temp = [...prev];
            temp.splice(i, 1);
            return temp;
        }); // noted!
    };

    const handleEditTodo = (e) => {
        console.log(e);
        e.preventDefault();
    };

    const handleCancelEdit = () => {
        setEditIndex(-1);
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
            <div className="todo-card-container">
                {todo.map((elem, idx) => {
                    if (editIndex !== idx) {
                        return (
                            <div className="todo-card" key={idx}>
                                <h2>{elem.title}</h2>
                                <h3>{elem.description}</h3>
                                <p>{elem.priority}</p>
                                <button
                                    onClick={() => {
                                        handleDelete(idx);
                                    }}
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => {
                                        setEditIndex(idx);
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        );
                    } else {
                        return (
                            <div className="todo-card" key={idx}>
                                <form onSubmit={handleEditTodo} onReset={handleCancelEdit}>
                                    <div>
                                        <label>Title</label>
                                        <input defaultValue={elem.title} required></input>
                                    </div>
                                    <div>
                                        <label>Description</label>
                                        <input defaultValue={elem.description} required></input>
                                    </div>
                                    <div>
                                        <label>Priority</label>
                                        <input defaultValue={elem.priority} required></input>
                                    </div>
                                    <button>Save</button>
                                    <button type="reset">Cancel</button>
                                </form>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export { TodoApp };
