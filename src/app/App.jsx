import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "../components/notFound/NotFound.jsx";
import RootLayout from "../pages/Root.jsx";
import Order from "../pages/Order.jsx";
import SignUp, { action as SignUpAction } from "../pages/SignUp.jsx";
import SignIn, { action as SignInAction } from "../pages/SignIn.jsx";

// Router:
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "magazine", element: <h1>MagazinePage</h1> },
      { path: "order", element: <Order /> },
      { path: "customer", element: <h1>CustomerPage</h1> },
    ],
  },
  {
    path: "/register",
    element: <SignUp />,
    action: SignUpAction,
  },
  {
    path: "/login",
    element: <SignIn />,
    action: SignInAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
