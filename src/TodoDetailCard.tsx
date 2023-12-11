import {Todo} from "./Todo.ts";
import {Link, useParams} from "react-router-dom";

type TodoDetailCardProps = {
    todos:Todo[]
}
export default function TodoDetailCard(props:TodoDetailCardProps){

    const id:string|undefined = useParams().id
    // console.log(id)
    const foundTodo:Todo|undefined = props.todos.find((todo:Todo) => todo.id === id)

    return(
        <>
            <h3>Details:</h3>
            <p>{foundTodo?.description}</p>
            <p>{foundTodo?.status}</p>
            <button><Link to={"/todos/"+foundTodo?.id+"/update"}>Edit To-do</Link></button>
        </>
    )
}