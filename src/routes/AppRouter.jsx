import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../Layout/Dashboard";
import Profile from "../pages/dashboard/student/Profile";
import MyEnrolledClasses from "../pages/dashboard/student/MyEnrolledClasses";
import AdminHome from "../pages/dashboard/admin/AdminHome";
import TeacherRequests from "../pages/dashboard/admin/TeacherRequests";
import Users from "../pages/dashboard/admin/Users";
import AllClasses from "../pages/dashboard/admin/AllClasses";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                path: '/',
                element: <Home />
            }, {
                path: '/login',
                element: <Login />
            }, {
                path: '/register',
                element: <Register />
            }
        ]
    }, {

        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <div>Hello dashboard</div>

            },

            // Student routes
            {
                path: '/dashboard/my-enrolled-classes',
                element: <MyEnrolledClasses />
            },
            {
                path: '/dashboard/profile',
                element: <Profile />
            },

            // Admin routes
            {
                path: '/dashboard/admin-home',
                element: <AdminHome />
            },
            {
                path: '/dashboard/teacher-requests',
                element: <TeacherRequests />
            },
            {
                path: '/dashboard/users',
                element: <Users />
            },
            {
                path: '/dashboard/all-classes',
                element: <AllClasses />
            },
            {
                path: '/dashboard/admin-profile',
                element: <AdminHome />
            }
        ]
    }



]);
