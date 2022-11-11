import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AboutTemplate } from './AboutTemplate';
import { HomeTemplate } from './HomeTemplate';
import { FurnitureTemplate } from './FurnitureTemplate';
import { TestimonialTemplate } from './TestimonialTemplate';
import './Index.css';
import { RegisterTemplate } from './RegisterTemplate';

export function PracticeIndex (){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className='d-flex justify-content-between bg-primary text-white p-5'>
                <div className='brand'><span>M</span>ical</div>
                <div>
                    <span><Link to='/home'>Home</Link></span>
                    <span><Link to='/about'>About</Link></span>
                    <span><Link to='/furniture'>Furniture</Link></span>
                    <span><Link to='/testimonial'>testimonial</Link></span>
                    <span><Link to='/contactus'>Contact Us</Link></span>
                    <span><Link to='/register'>Login/Register</Link></span>
                    <span className='bi bi-search'></span>
                </div>
                
            </header>
            <section>
                    <Routes>
                        <Route path='/home' element={<HomeTemplate/>}></Route>                       
                        <Route path='/about' element={<AboutTemplate/>}></Route>
                        <Route path='/furniture' element={<FurnitureTemplate/>}></Route>
                        <Route path='/testimonial' element={<TestimonialTemplate/>}></Route>
                        <Route path='register' element={<RegisterTemplate/>}></Route>
                        <Route path='/' element={<HomeTemplate/>}></Route>
                    </Routes>
            </section>
            <footer>
                
                <div>
                    <div className='row'>
                        <div className='col-4 p-4'>Contact Us</div>
                        <div className='col-8 d-flex p-4'>
                            <span className='bi bi-balloon-fill'>Location</span>
                            <span>+918908452841</span>
                            <span className='bi bi-messenger'>mail@domain.com</span>
                        </div>
                    </div>
                    <div className='main'>
                        <div className='col'>
                            <form>
                                <input type='text' placeholder='Full Name' name='Full Name'></input>
                                <input type='email' placeholder='Email' name='Email'></input>
                                <input type='number' placeholder='Number' name='Number'></input>
                                <input type='text' placeholder='Message' name='Message'></input>
                                <div><button className='btn btn-primary'>Send</button></div>
                            </form>
                        </div>
                        <div className='col'>
                                <dd><input type='email' placeholder='Enter Your Email'/></dd>
                                <dt><input type='text' placeholder='SUBSCRIBE'/></dt>
                        </div>
                    </div>
                </div>
            </footer>
            </BrowserRouter>
        </div>
    )
}