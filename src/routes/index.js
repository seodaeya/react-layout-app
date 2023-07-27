import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "./Home";
import Page2 from "./Page2";
import Login from "./Login";
import Axios from "./Axios";

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
    {
        path: "/axios",
        element: <DefaultLayout
            className={ 'Axios' }
            children={ <Axios /> }
        />,
    },
    // TODO others NotFoundPage
]);