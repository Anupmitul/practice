import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export function EditProduct (){
   const params = useParams();
   const [product,setproduct] = useState([{}]);
   const formik = useFormik({
    initialValues:{
        'ProductId': 0,
        "Name":"",
        'Price':0,
        'Stock': true
    },
    onSubmit : (values)=>{
        axios.update(`http://localhost:4000/edit/${values.ProductId}`,{
           Name:values.Name,
           Price:values.Price,
           Stock:values.Stock    
        })
        alert(values)
    }
})
   useEffect(()=>{
    axios({
        method:'GET',
        url:`http://localhost:4000/details/${params.Id}`
    })
    .then(response=>{
        setproduct(response.data)
    })
   },[])
    return(
        <div className="container-fluid">
            <h2>Edit Details</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input value={product[0].Name} onChange={formik.handleChange} type='text'/></dd>
                    <dt>Price</dt>
                    <dd><input value={product[0].Price} type='text'/></dd>
                    <dt>Stock</dt>
                    <dd className="form-switch"><input checked={product[0].Stock} className="form-check-input" type='checkbox'/> Available</dd>
                </dl>
                <button className="btn btn-info"> Update </button>
            </form>
            <div>
                <Link to='/products'>Back to product</Link>
            </div>

        </div>
    )
}