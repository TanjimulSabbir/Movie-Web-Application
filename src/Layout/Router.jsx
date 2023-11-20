import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import App from "../App";
import Layout from "./Layout";
import DetailsPost from "../components/DetailsPost/DetailsPost";

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
                element: <DetailsPost />
            }
        ]
    }
])


export default router;