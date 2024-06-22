import Home from './pages/home/Home';
import UserList from './pages/users/UserList';
import NewUser from './pages/newUser/NewUser';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import NotFound from './pages/notFound/NotFound';

let routes = [
    {path: "/", element: <Home/>},
    {path: "/users", element: <UserList/>},
    {path: "/newuser", element: <NewUser/>},
    {path: "/products", element: <Products/>},
    {path: "/product/:productID", element: <Product/>},
    {path: "*", element: <NotFound/>},
];

export default routes;