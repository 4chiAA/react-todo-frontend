import './App.css'
import TodoHeader from "./TodoHeader.tsx";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {Todo} from "./Todo.ts";
import Welcome from "./Welcome.tsx";
import TodoGallery from "./TodoGallery.tsx";

function App() {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(
        () => fetchAllTodos()
    )

    function fetchAllTodos():void {
        axios.get("/api/todo")
            .then((response) => setTodos(response.data))
            .catch((error) => alert(error.message))
    }


  return (
    <>
      <TodoHeader/>
      <Routes>
          <Route path={"/"} element={<Welcome/>}/>
          <Route path={"/todos"} element={<TodoGallery todos={todos}/>}/>
      </Routes>

    </>
  )
}

export default App
