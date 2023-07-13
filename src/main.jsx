import React from 'react'
import ReactDOM from 'react-dom/client'
import Tasks from './Tasks'
import './index.scss'
import Organizations from './Organizations';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Organizations />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
