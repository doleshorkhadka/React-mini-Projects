import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./modal";
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com";

function App() {
	const [todoList, setTodoList] = useState([]);
	const [title, setTitle] = useState("");
	const [downloadOption, setDownloadOption] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const instance = axios.create({
		baseURL: apiUrl,
	});

	const submitForm = (e) => {
		e.preventDefault();

		// Check for duplicates
		if (todoList.some((td) => td.title === title.trim())) {
			setTitle("");
			return alert("Todo already exists in the list!");
		}

		if (title.trim() !== "") {
			setTodoList((prevTodos) => [
				...prevTodos,
				{ id: Date.now(), title: title.trim(), completed: false },
			]);
			setTitle("");
		}
	};

	const toggleCompleted = (toggleTd) => {
		setTodoList(
			todoList.map((td) =>
				toggleTd.id == td.id
					? { ...toggleTd, completed: !toggleTd.completed }
					: td
			)
		);
	};

	const downloadTodos = () => {
		const randomNumMinMaxCalculation = () => {
			const min = Math.floor(Math.random() * 10);
			const max = Math.floor(Math.random() * 10);

			if (min >= max) {
				return randomNumMinMaxCalculation();
			} else {
				return {
					min,
					max,
				};
			}
		};
		const randomMinMax = randomNumMinMaxCalculation();
		console.log(randomMinMax);

		instance
			.get("/todos")
			.then((response) => {
				console.log("downloading data");

				setTodoList([
					...todoList,
					...response.data.slice(randomMinMax.min, randomMinMax.max),
				]);
				setDownloadOption(false);
			})
			.catch((error) => {
				console.log("Error occcured while fetching data: ", error);
			});
	};

	// Clear Todos
	const clearTodos = () => {
		setTodoList([]);
		setDownloadOption(true);
	};

	return (
		<div className="app-container">
			<h1 className="title-bar">TODO APP</h1>
			<div className="actions-container ">
				<button
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					Add TODO
				</button>
				<button onClick={clearTodos}>Clear </button>
				<button
					onClick={downloadTodos}
					style={{
						cursor: !downloadOption && "not-allowed",
						pointerEvents: !downloadOption && "none",
						backgroundColor: !downloadOption && "grey",
					}}
				>
					Download TODOS
				</button>
			</div>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<form onSubmit={submitForm} method="post">
					<input
						type="text"
						name="todo"
						placeholder="Todo title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
					<button type="submit" className="submit-btn">
						Add
					</button>
				</form>
			</Modal>

			{todoList.map((td) => {
				return (
					<div key={td?.id}>
						<input
							type="checkbox"
							checked={td?.completed}
							onChange={() => toggleCompleted(td)}
						/>
						<span
							style={{
								textDecoration: td.completed ? "line-through" : "none",
							}}
						>
							{td?.title}
						</span>
					</div>
				);
			})}
		</div>
	);
}

export default App;
