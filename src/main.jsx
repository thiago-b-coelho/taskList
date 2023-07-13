import React from "react";
import ReactDOM from "react-dom/client";
import Tasks from "./Tasks";
import "./index.scss";
import Organizations from "./Organizations";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Organizations />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/tasks/:taskGroup",
        element: <Tasks />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
