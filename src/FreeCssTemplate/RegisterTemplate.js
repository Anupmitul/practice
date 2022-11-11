import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom"


export function RegisterTemplate(){
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            UserName:"",
            Password:'',
            Email   :'',
            Mobile  :''
        },
        onSubmit:(value)=>{
            axios({
               method:'POST',
               url   :  '#' ,
               data  : value
            })
            alert('Registered successfully')
            navigate('/')
        }
    })

    return(
        <div className="container-fluid">
            <div className="login">
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type='text' onChange={formik.handleChange} name="UserName"/></dd>
                    <dt>Password</dt>
                    <dd><input type='password' onChange={formik.handleChange} name="Password"/></dd>
                    <dt>Email</dt>
                    <dd><input type='email' onChange={formik.handleChange} name="Email"/></dd>
                    <dt>Mobile</dt>
                    <dd><input type='number' onChange={formik.handleChange} name="Mobile"/></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
            </div>

        </div>
    )
}