import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import App from "./App.tsx";
import Resume from "./pages/Resume/index.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/resume",
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
