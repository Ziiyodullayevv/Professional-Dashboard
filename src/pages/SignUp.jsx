import "../styles/register.scss";

import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Register from "../components/register/Register.jsx";
import { redirect } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className={"register-container"}>
      <Header />
      <Register />
      <Footer />
    </div>
  );
};
export default SignUpPage;

// Register Actions:
export const action = async ({ request }) => {
  const data = await request.formData();

  const registerData = {
    full_name: data.get("full_name"),
    phone_number: data.get("phone_number"),
    status: 2,
    password: data.get("password"),
    confirm_password: data.get("confirm_password"),
  };

  const response = await fetch("http://127.0.0.1:8000/v1/customer/signup/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerData),
  });

  return response.status === 201 ? redirect("/login") : response;
};
