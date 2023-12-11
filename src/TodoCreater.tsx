import {ChangeEvent, FormEvent, useState} from "react";
import {Todo} from "./Todo.ts";

type TodoCreatorProps = {
    addTodo:(newTodo:Todo) => void
}
export default function TodoCreater(props:TodoCreatorProps) {

    const [inputDescription, setInputDescription] = useState<string>("")

    function updateInputDescription(event:ChangeEvent<HTMLInputElement>) {
        setInputDescription(event.target.value)
    }

    function createNewTodo(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        const newTodo:Todo =
            {
                description: inputDescription,
                status: "OPEN"
            }
        props.addTodo(newTodo)
        setInputDescription("")
    }



    return (
        <>
        <h3>Create your To-do</h3>
        <form onSubmit={createNewTodo}>
            <p>Plase enter a description</p>
            <input
                type={"text"}
                value={inputDescription}
                onChange={updateInputDescription}/>
            <button>Create your To-do</button>
        </form>
        </>
    )
}