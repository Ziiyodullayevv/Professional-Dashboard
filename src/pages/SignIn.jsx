import "../styles/generic.scss";
import "../styles/register.scss";

import Header from "../components/header/Header.jsx";
import Login from "../components/login/Login.jsx";
import Footer from "../components/footer/Footer.jsx";
import { redirect, useActionData } from "react-router-dom";

const SignInPage = () => {
  const data = useActionData();
  console.log(data, "errorData");
  return (
    <div className={"register-container"}>
      <Header />
      <Login errorData={data} />
      <Footer />
    </div>
  );
};
export default SignInPage;

// Login Action:
export const action = async ({ request }) => {
  const data = await request.formData();

  let phoneData = data
    .get("phone_number")
    .slice(4)
    .replace(/ /g, "")
    .replace(/\(/g, "")
    .replace(/\)/g, "");

  const loginData = {
    password: data.get("password"),
    phone_number: phoneData,
  };

  const response = await fetch("http://127.0.0.1:8000/v1/customer/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });

  return response.status === 200 ? redirect("/") : response;
};
