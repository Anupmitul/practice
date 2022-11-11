import { Link } from "react-router-dom";

export function HomeComponent (){

    return(
        <div>
            <h3>Shopping Home</h3>
            <Link to='/register'>New User Register </Link>
            <span>|</span>
            <Link to='/login'>Existing User</Link>
        </div>
    )
}