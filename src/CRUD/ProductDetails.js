import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export function ProductDetails(){
    const params = useParams();
    const [product,setproduct] = useState([{}]);
    useEffect(()=>{
        axios({
            method:'GET',
            url:`http://localhost:4000/details/${params.Id}`
        })
        .then(response=>{
            setproduct(response.data)
        })
    },[]);
    return(
        <div className="container-fluid">
             <h2>Details</h2>
             <dl>
                <dt>Name</dt>
                <dd>{product[0].Name}</dd>
                <dt>Price</dt>
                <dd>{product[0].Price}</dd>
                <dt>Stock</dt>
                <dd>{(product[0].Stock==true)?"Available":"Out of stock"}</dd>
             </dl>
             <Link to='/products'>Back to Products</Link>
        </div>
    )
}