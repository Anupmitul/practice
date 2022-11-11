import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomeComponent } from "./HomeComponent";
import { CategoriesComponent } from "./CategoriesComponent";
import './ShoppingIndex.css';
import { ProductsComponent } from "./ProductsComponent";
import { RegisterComponent } from "./RegisterComponent";
import { LoginComponent } from "./LoginComponent";
import { LoginErrorComponent } from "./LoginErrorComponent";
import { ProductsIndex } from "../CRUD/ProductsIndex";
import { RegisterProduct } from "../CRUD/RegisterProduct";
import { ProductDetails } from "../CRUD/ProductDetails";
import { EditProduct } from "../CRUD/EditProduct";

export function ShoppingIndex(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
               <header className="d-flex justify-content-between bg-dark text-white p-2">
                 <div className="brand">Shop Keepper.</div>
                 <div>
                    <span><Link to='/home'>Home</Link></span>
                    <span><Link to='/categories'>Categories</Link></span>
                    <span><Link to='/products'>Products</Link></span>
                    <span><Link to='/register'>Register</Link></span>
                    <span><Link to='/login'>Login</Link></span>
                 </div>
                 <div className="nav-icons">
                    <span className="bi bi-search"></span>
                    <span className="bi bi-person"></span>
                    <span className="bi bi-heart"></span>
                    <span className="bi bi-cart4"></span>
                 </div>
               </header>
               <section>
                  <Routes>
                    <Route path="/home" element={<HomeComponent/>}></Route>               
                    <Route path="/categories" element={<CategoriesComponent/>}></Route>   
                    <Route path="/products/:category" element={<ProductsComponent/>}></Route> 
                    <Route path="/register" element={<RegisterComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/error" element={<LoginErrorComponent/>}></Route>
                    <Route path="/products" element={<ProductsIndex/>}></Route>  
                    <Route path="/registerproduct" element={<RegisterProduct/>}></Route>  
                    <Route path="/productdetails/:Id" element={<ProductDetails/>}></Route> 
                    <Route path="/editproduct/:Id" element={<EditProduct/>}></Route>        
                    <Route path="/" element={<p>Select a link</p>}></Route>                 
                    <Route path="*" element={<code>Selected Path : Not Found</code>}></Route>                  
                  </Routes>
               </section>
               <footer className="row bg-dark text-white m-2 p-2">
                
                    <div className="col">
                        <h3>Shopper</h3>
                        <ul className="list-unstyled">
                            <li>contact</li>
                            <li>About us</li>
                            <li>Information</li>
                            <li>Office Address</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Shopper</h3>
                        <ul className="list-unstyled">
                            <li>contact</li>
                            <li>About us</li>
                            <li>Information</li>
                            <li>Office Address</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Shopper</h3>
                        <ul className="list-unstyled">
                            <li>contact</li>
                            <li>About us</li>
                            <li>Information</li>
                            <li>Office Address</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Shopper</h3>
                        <ul className="list-unstyled">
                            <li>contact</li>
                            <li>About us</li>
                            <li>Information</li>
                            <li>Office Address</li>
                        </ul>
                    </div>
                
               </footer>
            </BrowserRouter>

        </div>
    )
}