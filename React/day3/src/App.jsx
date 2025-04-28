import "./App.css";
import { Navbar } from "./components/Navbar";
import { TodoApp } from "./components/TodoApp";

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <div className="body-container">
                <TodoApp />
            </div>
        </div>
    );
}

export default App;
