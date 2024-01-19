import "../styles/generic.scss";
import "../styles/register.scss";

import Header from "../components/header/Header.jsx";
import Login from "../components/login/Login.jsx";
import Footer from "../components/footer/Footer.jsx";
import { redirect } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className={"register-container"}>
      <Header />
      <Login />
      <Footer />
    </div>
  );
};
export default SignInPage;

// Login Action:
export const action = async ({ request }) => {
  const data = await request.formData();

  const loginData = {
    password: data.get("password"),
    phone_number: data.get("phone_number").replaceAll(" ", "").slice(4, 13),
  };

  const response = await fetch("http://127.0.0.1:8000/v1/customer/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });

  return response.status === 200 ? redirect("/") : response;
};
