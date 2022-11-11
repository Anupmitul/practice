import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";

export function CategoriesComponent (){
    let navigate = useNavigate()
    const [categories,setcategories] = useState([]);
    const [cookies,setcookie,removecookie] = useCookies();
    const [user,setuser] = useState();
    useEffect(()=>{
       if(cookies['username']==undefined){
        navigate('/login')
       }else {
        setuser(cookies['username']);
        fetch('http://fakestoreapi.com/products/categories')
        .then(Response=>Response.json())
        .then(data=>{
         setcategories(data);
        })
       }
    },[])

    return(
        <div>
            <h3>Products Categories -For {user} <button className="btn btn-link">Signout</button> </h3>
            <ol>
                {
                    categories.map(category=>
                        <li key={category}><Link to={'/products/' + category}>{category}</Link></li>
                        )
                }
            </ol>
        </div>
    )
}