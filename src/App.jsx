import "./App.css";
import TodoApp from "./TODO/TodoApp";

function App() {
  return (
    <div className="main-container">
      <h1 className="title-bar">APP LISTS</h1>
      <div className="apps">
        <button className="todo-app">TODO APP</button>
        <button className="modal-app">MODAL DEMO</button>
      </div>
      {/* <TodoApp /> */}
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={submitForm} method="post" className="main-form">
          <label htmlFor="todo">Todo Title</label>
          <input
            type="text"
            name="todo"
            id=""
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button type="submit">Add</button>
        </form>
      </Modal> */}
    </div>
  );
}

export default App;
