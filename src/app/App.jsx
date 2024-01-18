import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../components/notFound/NotFound.jsx";
import RootLayout from "../pages/Root.jsx";
import OrderPage from "../pages/OrderPage.jsx";
import AuthenticationPage, {
  action as authAction,
} from "../pages/Authentication.jsx";

// Router:
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "magazine", element: <h1>MagazinePage</h1> },
      { path: "order", element: <OrderPage /> },
      { path: "customer", element: <h1>CustomerPage</h1> },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationPage />,
    action: authAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
