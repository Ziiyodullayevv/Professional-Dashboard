import "../../styles/generic.scss";
import "../../styles/register.scss";
import { Button, Input, Typography } from "antd";
import { Link, Form, useNavigation, useNavigate } from "react-router-dom";
const { Title } = Typography;

const Login = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();

  const isSubmitting = navigation.state === "submitting";
  return (
    <div className={"register-wrapper"}>
      <div className={"register"}>
        <div className={"register-left"}>
          <div className={"blur"}></div>
          <Title className={"title"} level={2}>
            Xush Kelibsiz!
          </Title>
          <Title className="title" level={5}>
            Avval ro'yhatdan o'tmagan bo'lsangiz ro'yhatdan o'tish tugmasini
            bosing!
          </Title>

          <Button
            onClick={() => navigate("/register")}
            style={{ marginTop: "20px" }}
            shape="round"
            size="medium"
            className="btn-primary-light"
          >
            RO'YHATDAN O'TISH
          </Button>
        </div>
        <div className="register-right">
          <Form method={"POST"}>
            <Title style={{ fontWeight: 500 }} className={"title"} level={2}>
              Hisobni Tasdiqlash
            </Title>
            <Input
              required
              type={"tel"}
              style={{ margin: "10px 0" }}
              rootClassName={"input"}
              placeholder="Telefon Raqam"
              name={"phone_number"}
            />
            <Input
              required
              type={"password"}
              style={{ margin: "10px 0" }}
              rootClassName={"input"}
              placeholder="Parol"
              name={"password"}
            />
            <Button
              htmlType={"submit"}
              loading={isSubmitting}
              style={{ marginTop: "15px" }}
              size="medium"
              shape="round"
              className="btn-primary-dark"
            >
              TIZIMGA KIRISH
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
