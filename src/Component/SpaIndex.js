import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function SpaIndex (){

    return(
        <div className="container-fluid">
            <h2 className="text-center bg-dark text-white p-2">Web Tutorials</h2>
            <BrowserRouter>
            <section className="row">
                  <nav className="col-3">
                      <ul>
                       <li><Link to="home">Home</Link></li>
                       <li><Link to="html"> HTML</Link></li>
                       <li><Link to="css">CSS</Link></li>
                       <li><Link to="js">JAVASCRIPT</Link></li>
                      </ul>
                  </nav>
                  <main className="col-9">
                    <Routes>
                        <Route path="/home" element={
                            <div>
                                <h3>Tutorial-Home</h3>
                                <ul className="list-unstyled">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JAVASCRIPT</li>
                                </ul>
                            </div>
                        }>
                        </Route>

                        <Route path="/html" element={
                            <div>
                                <h3>HTML</h3>
                                <p>It is a Markup language</p>
                            </div>
                        }>
                        </Route>

                        <Route path="/css" element={
                            <div>
                                <h3>CSS</h3>
                                <p>It is used to define style of element</p>
                            </div>
                        }>
                        </Route>

                        <Route path="/js" element={
                            <div>
                                <h3>JAVASCRIPT</h3>
                                <p>It is a scripting language to interact with client</p>
                            </div>
                        }>
                        </Route>


                        <Route path="/" element={
                            <h2>Select a Topic</h2>
                        }>
                        </Route>

                        <Route path="*" element={
                            <code>Not Found : page you requested not found</code>
                        }>
                        </Route>

                    </Routes>

                  </main>
                  
               </section>
            </BrowserRouter>
        </div>
    )
}
