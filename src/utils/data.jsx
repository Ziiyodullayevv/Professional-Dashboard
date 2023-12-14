import Users from "../components/users/Users.jsx";
import Products from "../components/products/Products.jsx";
export const data = [
  {
    id: 1,
    title: "Users",
    path: "/users",
    element: <h1 style={{ background: "red" }}>Users</h1>,
    private: false,
  },
  {
    id: 2,
    title: "Products",
    path: "/products",
    element: <h1 style={{ background: "red" }}>Products</h1>,
    private: false,
  },
];
