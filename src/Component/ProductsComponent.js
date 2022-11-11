import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function ProductsComponent (){
    const [categoryName,setcategoryName] = useState();
    const [product,setproduct] = useState([]);
    const params = useParams();
   useEffect(()=>{
    setcategoryName(params.category);
    fetch(`http://fakestoreapi.com/products/category/${params.category}`)
    .then(Response=>Response.json())
    .then(data=>{
        setproduct(data);
        console.log(data)
    });
   },[])

    return(
        <div>
            <h2>{categoryName} Poducts Details</h2>
            <div>
                {
                    product.map((products)=> {
                        <Link><img key={products.id} src={products.image} width='50' height='100' border='1' className=" m-2" /></Link>
                    })
                }
            </div>
            <Link to='/categories'>Back to categories</Link>
        </div>
    )
}