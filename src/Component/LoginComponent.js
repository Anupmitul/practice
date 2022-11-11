import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";

export function LoginComponent (){
    let navigate = useNavigate();
    const [cookies,setcookie,removecookie] = useCookies();
    const formik = useFormik({
        initialValues:{
            "UserName":"",
            "Password":"",
        },
        onSubmit:(value)=>{
            axios({
                method:"GET",
                url:"http://127.0.0.1:4000/getusers",
            }).then((response)=>{
                for(var user of response.data){
                    if(user.UserName==value.UserName && user.Password==value.Password){
                        setcookie('username',value.UserName);
                        navigate("/categories");
                        break;
                    } else {
                        navigate("/error");
                    }
                }
            })
        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
               <h2>User Login</h2>
               <dl>
                <dt>User Name</dt>
                <dd><input name="UserName" onChange={formik.handleChange} type="text"/></dd>
                <dt>Password</dt>
                <dd><input name="Password" onChange={formik.handleChange} type="password"/></dd>
               </dl>
               <button className="btn btn-primary">Login</button>
               <p><Link to="/register">New User ?</Link></p>
            </form>

        </div>
    )
}