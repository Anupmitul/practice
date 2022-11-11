import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";


export function RegisterProduct (){
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            "ProductId": 0,
            "Name": '',
            "Price": 0,
            "Stock":true
        },
        onSubmit : (values)=>{
            values.Stock = (values.Stock==true) ? 'true':'false';
            axios({
                method:"POST",
                url   :'http://localhost:4000/addproducts',
                data  : values, 
            });
            alert('Product Added..');
            navigate('/products')
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Product Details</h2>
                <dl>
                    <dt>ProductId</dt>
                    <dd><input name="ProductId" onChange={formik.handleChange} type="number"/></dd>
                    <dt>Name</dt>
                    <dd><input name="Name" onChange={formik.handleChange} type="text"/></dd>
                    <dt>Price</dt>
                    <dd><input name="Price" onChange={formik.handleChange} type="text"/></dd>
                    <dt>Stock</dt>
                    <dd className="form-switch"><input name="Stock" onChange={formik.handleChange} className="form-check-input" type="checkbox"/> Available</dd>
                </dl>
                <button className="btn btn-primary">ADD PRODUCT</button>
            </form>
            <div>
                <Link to="/products">View Product</Link>
            </div>

        </div>
    )
}