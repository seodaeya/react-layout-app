import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import DefaultLayout from './layouts/DefaultLayout';

import Home from './routes/Home';
import Page2 from './routes/Page2';
// import NotFoundPage from './routes/NotFoundPage';

const router = createBrowserRouter([
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
    // TODO others NotFoundPage
]);

export default function App() {
  return (
      <RouterProvider router={router} />
  );
}