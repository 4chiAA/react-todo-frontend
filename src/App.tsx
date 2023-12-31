import './App.css'
import TodoHeader from "./TodoHeader.tsx";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {Todo} from "./Todo.ts";
import Welcome from "./Welcome.tsx";
import TodoGallery from "./TodoGallery.tsx";
import TodoCreater from "./TodoCreater.tsx";
import TodoDetailCard from "./TodoDetailCard.tsx";

function App() {

    const baseURL:string = "/api/todo"
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(
        () => fetchAllTodos()
    )

    function fetchAllTodos():void {
        axios.get(baseURL)
            .then((response) => setTodos(response.data))
            .catch((error) => alert(error.message))
    }

    /*
    function updateTodoById():void {
        axios.put(baseURL+todos.findIndex(id))
    }

     */

    function createTodo(newTodo:Todo) {
        axios.post<Todo>(baseURL, newTodo)
            .then((response) => {
                alert("Neues To-do \"" + response.data.description + "\" wurde erstellt");
                fetchAllTodos();
            })
            .catch((error) => alert(error.message))
    }


  return (
    <>
      <TodoHeader/>
      <Routes>
          <Route path={"/"} element={<Welcome/>}/>
          <Route path={"/todos/:id"} element={<TodoDetailCard todos={todos}/>}/>
          <Route path={"/todos"} element={<TodoGallery todos={todos}/>}/>
          <Route path={"/addtodo"} element={<TodoCreater addTodo={createTodo}/>}/>
      </Routes>

    </>
  )
}

export default App
