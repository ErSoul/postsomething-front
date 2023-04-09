import { createBrowserRouter } from 'react-router-dom';
import { Layout } from 'components';
import { LoginPage, RegisterPage, ConfirmAccount } from 'pages/Auth';
import { HomePage } from 'pages';

const MainNavigation = createBrowserRouter ([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/home",
                element: <HomePage/>,
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "/confirmation",
                element: <ConfirmAccount />
            }
        ]
    },
]);

export default MainNavigation;
