import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const[todo,setTodo]=useState([])
  const [inputTodo, setInputTodo] = useState('')

function handleTodolist(newTodo){
  const newTodolist=[...todo, newTodo]
  setTodo(newTodolist)

}

function deleteTodo(index){
  const newTodolist=todo.filter((todo,todoindex)=>{
    return todoindex != index
  })
  setTodo(newTodolist)
}

function editTodo(index){
  const valueEdit=todo[index]
  setInputTodo(valueEdit)
  deleteTodo(index)
}


  return (
    <>
      <TodoInput inputTodo={inputTodo} setInputTodo={setInputTodo} handleTodolist={handleTodolist} />
      <TodoList editTodo={editTodo} todo={todo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
