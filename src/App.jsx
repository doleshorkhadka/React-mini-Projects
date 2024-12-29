import { useState } from "react";

function App() {
    const [todoList,setTodoList] = useState([])
    const [todo,setTodo] = useState('')
    
  const submitForm = e=>{
    e.preventDefault()
    if(todo.trim() !== ''){
      setTodoList([...todoList,{id:Date.now(),todo:todo,completed:false}])
      setTodo('')
    }
  }

  const toggleCompleted = toggleTd =>{
    setTodoList(
      todoList.map(td=>{
        if(toggleTd.id == td.id){
          return {...toggleTd,completed:!toggleTd.completed}
        }
        return td
      })
    )
  }
  return (
    <>
    <form onSubmit={submitForm} method="post">
      <label htmlFor="todo"></label>
      <input type="text" name="todo" id="" onChange={e=> setTodo(e.target.value)} value={todo}/>
      <button type="submit">Add</button>
    </form>
    {
      todoList.map(td=>{
        return <div key={td?.id}>
        <input type="checkbox" checked={td?.completed} onChange={()=>toggleCompleted(td)} />
        <span style={{textDecoration: td.completed ? 'line-through' : 'none'}}>{td?.todo}</span>
        </div>
      })
    }

    </>
  )
}

export default App
