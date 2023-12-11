import {Todo} from "./Todo.ts";
import {Link} from "react-router-dom";

type TodoCardProps = {
    todo: Todo
}

export default function TodoCard(props: TodoCardProps) {

    return (
        <>
            <p>
                {props.todo.description}
            </p>
            <p>
                {props.todo.status}
            </p>
            <button><Link to={"/todos/"+props.todo.id}> Details </Link></button>
        </>
    )
}