import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export function ProductsIndex(){
    const[product,setproduct] = useState([]);
    const navigate = useNavigate();
    function GetProducts (){
        axios({
            method:"GET",
            url:"http://localhost:4000/products",
        })
        .then(response=>{
            setproduct(response.data)
        })
    }
    useEffect(()=>{
        GetProducts();
    },[])

    function HandleDeleteclick(e){
        axios({
            method:"DELETE",
            url:`http://localhost:4000/delete/${e.currentTarget.value}`
        })
        
        alert('Record deleted..');
        navigate('/home')
    }

    return(
        <div className="container-fluid">
            <h2>Products Details</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(products=>
                            <tr key={products.ProductId}>
                                <td>{products.Name}</td>
                                
                                <td>
                                    <Link to={'/productdetails/'+ products.ProductId} className="btn btn-info me-2">
                                        <span className="bi bi-eye-fill"></span>
                                    </Link>
                                    <Link to={'/editproduct/'+ products.ProductId} className="btn btn-warning me-2">
                                        <span className="bi bi-pen"></span>
                                    </Link>
                                    <button value={products.ProductId} onClick={HandleDeleteclick} className="btn btn-danger ">
                                        <span className="bi bi-trash"></span>
                                    </button>
                                </td>
                                
                            </tr>
                            )
                    }
                </tbody>
            </table>
            <div>
                <Link to="/registerproduct">Add New Product</Link>
            </div>
        </div>
    )
}