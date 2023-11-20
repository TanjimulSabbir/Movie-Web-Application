import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Layout from "./Layout";
import DetailsHome from "../components/Details/DetailsHome";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/:postId",
                element: <DetailsHome />
            }
        ]
    }
])


export default router;