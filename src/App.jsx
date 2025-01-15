import "./App.css";
import TodoApp from "./TODO/TodoApp";

function App() {
	return (
		<div className="main-container">
			<h1 className="title-bar">APP LISTS</h1>
			<div className="apps">
				<button className="todo-app">TODO APP</button>
				<button className="modal-app">MODAL DEMO</button>
				{/* <TodoApp /> */}
			</div>
		</div>
	);
}

export default App;
