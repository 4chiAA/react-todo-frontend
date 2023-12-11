import {Todo} from "./Todo.ts";
import TodoCard from "./TodoCard.tsx";

type TodoGalleryProps = {
    todos: Todo[]
}
export default function TodoGallery(props: TodoGalleryProps) {


    return (
        <>
            <h3>
                To-dos
            </h3>
            {props.todos.map(todo => <TodoCard
                key={todo.id}
                todo={todo}/>)}
        </>
    )
}