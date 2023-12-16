import React from "react";
import Header from "../header/Header.jsx";
import "./signup.scss";
import "../../styles/generic.scss";
import "../../styles/variables.scss";
import { Button, Input, Typography } from "antd";
const { Title } = Typography;

const SignUp = () => {
  const date = new Date().getFullYear();
  return (
    <div className={"signup"}>
      <Header />
      <div className={"register-wrapper"}>
        <div className={"register"}>
          <div className={"register-left"}>
            <Title className={"title"} level={2}>
              Welcome Back!
            </Title>
            <Title className={"title"} level={5}>
              To keep connected with us please login with your personal ino
            </Title>
            <Button
              ghost={true}
              style={{ marginTop: "20px" }}
              shape={"round"}
              className={"btn-primary border"}
            >
              SIGN IN
            </Button>
          </div>
          <div className={"register-right"}>
            <Title className={"title"} level={2}>
              Create account
            </Title>
            <Input
              style={{ margin: "10px 0" }}
              rootClassName={"input"}
              placeholder={"Ism va Familiyangiz"}
            />
            <Input
              type="tel"
              style={{ margin: "10px 0" }}
              rootClassName={"input"}
              placeholder={"Telefon Raqamingiz"}
            />
            <Input
              type={"password"}
              style={{ margin: "10px 0" }}
              rootClassName={"input"}
              placeholder={"Parolingizni kiriting"}
            />
            <Input
              style={{ margin: "10px 0" }}
              rootClassName={"input"}
              placeholder={"Parolingizni Tasdiqlang"}
            />
            <Button
              style={{ marginTop: "10px" }}
              color="primary"
              size={"medium"}
              loading={false}
              shape={"round"}
              className={"btn-primary"}
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
      <div className={"register-footer"}>
        Copyright &copy; Ninja Devs {date}
      </div>
    </div>
  );
};
export default SignUp;
