import {ChangeEvent, FormEvent, useState} from "react";
import {Todo} from "./Todo.ts";
import {useParams} from "react-router-dom";

type TodoUpdaterProps = {
    todos:Todo[]
    updateTodo:(updatedTodo:Todo) => void
}
export default function TodoUpdater(props:TodoUpdaterProps) {

    // const id:string|undefined = useParams().id
    // const foundTodo:Todo|undefined = props.todos.find((todo:Todo) => todo.id === id)
    const [inputDescription, setInputDescription] = useState<string>("")

    function updateInputDescription(event:ChangeEvent<HTMLInputElement>) {
        setInputDescription(event.target.value)
    }

    function updateTodo(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        const updatedTodo:Todo =
            {
                description: inputDescription,
                status: "OPEN"
            }
        props.updateTodo(updatedTodo)
        setInputDescription("")
    }


    return (
        <>
            <h3>Update your To-do</h3>
            <form onSubmit={updateTodo}>
                <p>Plase update your description</p>
                <input
                    type={"text"}
                    value={inputDescription}
                    onChange={updateInputDescription}/>
                <button>Update your To-do</button>
            </form>
        </>
    )
}