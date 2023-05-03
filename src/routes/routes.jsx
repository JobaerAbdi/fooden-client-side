import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Blogs from "../components/Blogs/Blogs";
import ChefRecipesItem from "../components/ChefRecipesItem/ChefRecipesItem";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/home',
                element : <Home></Home>,
            },
            {
                path : '/profile',
                element :  <Profile></Profile>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/blogs',
                element : <Blogs></Blogs>
            },
            {
                path : '/recipes/:id',
                element : <ChefRecipesItem/>,
                loader : ({params})=> fetch(`http://localhost:5000/recipes/${params.id}`)
            },
        ]
    }
])
export default router;