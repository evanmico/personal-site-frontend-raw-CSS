import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Root from "./routes/root.jsx";
import "./index.css";
import { 
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";
import ErrorPage from "./error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    {/*     <Router>
            <Route path="/" component={App} />
        </Router> */}
      <RouterProvider router={router} />
    </React.StrictMode>
);

