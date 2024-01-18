import "../styles/generic.scss";
import "../styles/register.scss";

import Header from "../components/header/Header.jsx";
import Login from "../components/login/Login.jsx";
import Footer from "../components/footer/Footer.jsx";

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
