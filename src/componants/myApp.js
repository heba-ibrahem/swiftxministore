
import { BrowserRouter as Router, Link, Route, Routes, Switch } from 'react-router-dom'
import Cart from './cart';
import Catagory from './category';
import Product from './product';



const MyApp = () => {

    return (
        <div>
            <Router >    
                <Routes> 
                    {/* <Route component={<Product/>} path="/product/:id"></Route> */}
                    <Route element={<Product/>} path="/product"></Route>
                    <Route element={<Cart/>} path="/cart"></Route>
                    <Route element={<Catagory/>} path="/home"></Route>
                    <Route element={<Catagory/>} path="/" exact></Route>
                    <Route path="*" render={() => (
                        <div >
                            <h1>404</h1>
                            <h1>Page Not Found
                                <Link to="/"> Navgiate to home</Link>
                            </h1>
                        </div>
                    )}></Route>
                </Routes>    
            </Router>
            
        </div>
    )
}

export default MyApp;