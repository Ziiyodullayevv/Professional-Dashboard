import React from "react";
import Header from "../header/Header.jsx";
import "../../styles/generic.scss";
import "../../styles/register.scss";
import { Button, Input, Typography } from "antd";
import { Link, useSearchParams, useNavigation, Form } from "react-router-dom";
import Footer from "../footer/Footer.jsx";
const { Title } = Typography;

const Auth = () => {
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();

  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";
  console.log(navigation.state, "navigation");
  return (
    <div className={"register-container"}>
      <Header />
      <div className={"register-wrapper"}>
        <div className={"register"}>
          <div className={"register-left"}>
            <div className={"blur"}></div>
            <Title className={"title"} level={2}>
              Xush Kelibsiz!
            </Title>
            <Title className="title" level={5}>
              {isLogin
                ? "Avval ro'yhatdan o'tmagan bo'lsangiz ro'yhatdan o'tish tugmasini bosing!"
                : "Biz bilan aloqada bo'lish uchun shaxsiy identifikatoringiz bilan tizimga kiring"}
            </Title>
            <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
              <Button
                ghost={true}
                style={{ marginTop: "20px" }}
                shape="round"
                className="btn-primary border"
              >
                {isLogin ? "RO'YHATDAN O'TISH" : "TIZIMGA KIRISH"}
              </Button>
            </Link>
          </div>
          <div className="register-right">
            <Form method={"POST"}>
              <Title className={"title"} level={2}>
                {isLogin ? "Tizimga Kirish" : "Ro'yhatdan o'tish"}
              </Title>
              {isLogin ? (
                <>
                  <Input
                    type="tel"
                    style={{ margin: "10px 0" }}
                    rootClassName="input"
                    name="phone_number"
                    placeholder="Telefon Raqam"
                  />
                  <Input
                    type={"password"}
                    name="password"
                    style={{ margin: "10px 0" }}
                    rootClassName={"input"}
                    placeholder="Parol"
                  />
                </>
              ) : (
                <>
                  <Input
                    required
                    type={"text"}
                    style={{ margin: "10px 0" }}
                    rootClassName={"input"}
                    placeholder="Ism va Familiya"
                  />

                  <Input
                    required
                    type={"tel"}
                    style={{ margin: "10px 0" }}
                    rootClassName={"input"}
                    placeholder="Telefon Raqam"
                  />
                  <Input
                    required
                    type={"password"}
                    style={{ margin: "10px 0" }}
                    rootClassName={"input"}
                    placeholder="Parol"
                  />
                  <Input
                    required
                    type={"password"}
                    style={{ margin: "10px 0" }}
                    rootClassName="input"
                    placeholder="Parolni Tasdiqlash"
                  />
                </>
              )}
              <Button
                htmlType={"submit"}
                loading={isSubmitting}
                style={{ marginTop: "15px" }}
                color="primary"
                size="medium"
                shape="round"
                className="btn-primary"
              >
                {isLogin ? "TIZIMGA KIRISH" : "RO'YHATDAN O'TISH"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Auth;
