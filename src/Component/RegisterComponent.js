import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function RegisterComponent (){
    let navigate = useNavigate();
    const [usermsg,setusermsg] = useState('');
    const [errorcolor,seterrorcolor] = useState('');
    const formik = useFormik({
        initialValues:{
            UserName:"",
            Password:'',
            Email:'',
            Mobile:''
        },
        onSubmit:(values)=>{
            axios({
                method:"POST",
                url:"http://127.0.0.1:4000/registeruser",
                data:values
            }).catch((err)=>{
                console.log(err);
            })
            alert("Register Successfully");
            navigate("/login")
        }
    })

    function VerifyUsers (e){
        axios({
            method:"GET",
            url:"http://127.0.0.1:4000/getusers"
        }).then((response)=>{
            for(var user of response.data){
                if(user.UserName==e.target.value){
                    setusermsg("User Name Taken- Try Another");
                    seterrorcolor('text-danger')
                    break;
                } else {
                    setusermsg("User Name Available");
                    seterrorcolor("text-success")
                }
            }
        })
    }

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd><input name="UserName" onKeyUp={VerifyUsers} onChange={formik.handleChange} type='text' /></dd>
                    <dd className={errorcolor}>{usermsg}</dd>
                    <dt>Password</dt>
                    <dd><input name="Password" onChange={formik.handleChange} type='password' /></dd>
                    <dt>Email</dt>
                    <dd><input name="Email" onChange={formik.handleChange} type='email' /></dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile" onChange={formik.handleChange} type='text' /></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <p><Link to="/login">Existing User</Link></p>
            </form>

        </div>
    )
}