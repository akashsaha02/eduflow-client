import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../pages/Home";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }



]);
