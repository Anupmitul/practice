import { Link } from "react-router-dom";


export function LoginErrorComponent (){

    return(
        <div className="container-fluid">
            <p className="text-danger">Invalid UserName / Password</p>
            <Link to="/login">Try Again</Link>
        </div>
    )
}