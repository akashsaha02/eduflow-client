import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../Layout/Dashboard";
import StudentHome from "../pages/dashboard/student/StudentHome";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                path: '/',
                element: <Home/>
            },{
                path:'/login',
                element: <Login/>
            },{
                path:'/register',
                element: <Register/>
            }
        ]
    },{

        path: '/dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'/dashboard',
                element: <div>Hello dashboard</div>

            },
            {
                path:'/dashboard/student-home',
                element: <StudentHome/>
            }
        ]
    }



]);
