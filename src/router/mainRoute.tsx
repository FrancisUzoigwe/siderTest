import {createBrowserRouter} from "react-router-dom"
import Layout from "../common/Layout"
import MainPage from "../pages/MainPage"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true, 
                element: <MainPage/>
            }
        ]
    }
])
