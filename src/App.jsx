import { Navigate, useNavigate } from "react-router";
import "./App.css";
import TodoApp from "./TODO/TodoApp";

function App() {
	const navigate = useNavigate();
	return (
		<div className="main-container">
			<h1 className="title-bar">APP LISTS</h1>
			<div className="apps">
				<button className="todo-app">TODO APP</button>
				<button className="modal-app" onClick={() => navigate("/about")}>
					MODAL DEMO
				</button>
				{/* <TodoApp /> */}
			</div>
		</div>
	);
}

export default App;
