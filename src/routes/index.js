import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "./Home";
import Page2 from "./Page2";
import Login from "./Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout
            className={ 'Home' }
            children={ <Home /> }
        />,
    },
    {
        path: "/page2",
        element: <DefaultLayout
            className={ 'Page2' }
            children={ <Page2 /> }
        />,
    },
    {
        path: "/login",
        element: <DefaultLayout
            className={ 'Login' }
            children={ <Login /> }
        />,
    },
    // TODO others NotFoundPage
]);