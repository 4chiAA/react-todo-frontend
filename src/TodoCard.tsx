import {Todo} from "./Todo.ts";

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
        </>
    )
}