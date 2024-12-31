import React, { useState } from 'react'
import './todo.css'

function TodoApp() {
   const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData([...json.slice(0, 20)]);
      });
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    const checkPreviouslyInList = () =>
      todoList.some((td) => title === td.title);

    console.log(title);
    if (checkPreviouslyInList(title)) {
      return setTitle("");
    }

    if (title.trim() !== "") {
      console.log("TODO", title);

      setTodoList([
        ...todoList,
        { id: Date.now(), title: title, completed: false },
      ]);
    }
    setTitle("");
  };

  const toggleCompleted = (toggleTd) => {
    setTodoList(
      todoList.map((td) => {
        if (toggleTd.id == td.id) {
          return { ...toggleTd, completed: !toggleTd.completed };
        }
        return td;
      })
    );
  };

  return (
    <div className="app-container">
      <h1 className="title-bar">TODO APP</h1>
      <button
        onClick={() => {
          setIs + ModalOpen(true);
        }}
      >
        Add TODO
      </button>

      {data.map((td) => {
        return (
          <div key={td?.id}>
            <input
              type="checkbox"
              checked={td?.completed}
              onChange={() => toggleCompleted(td)}
            />
            <span
              style={{ textDecoration: td.completed ? "line-through" : "none" }}
            >
              {td?.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default TodoApp
