import {Link} from "react-router-dom";

export default function NavigationBar() {

    return (
        <>
            <Link to={"/"}> Home </Link>
            <Link to={"/todos"}> To-dos </Link>
        </>
    )
}