import { Form, Link, useNavigate, useNavigation } from "react-router-dom";
import { Button, Input, Typography } from "antd";
const { Title } = Typography;

const Register = () => {
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
            Biz bilan aloqada bo'lish uchun shaxsiy identifikatoringiz bilan
            tizimga kiring
          </Title>
          <Button
            onClick={() => navigate("/login")}
            ghost={true}
            style={{ marginTop: "20px" }}
            shape="round"
            className="btn-primary-light"
          >
            TIZIMGA KIRISH
          </Button>
        </div>
        <div className="register-right">
          <Form method={"POST"}>
            <Title style={{ fontWeight: 500 }} className={"title"} level={2}>
              Hisob Yaratish
            </Title>
            <Input
              required
              type={"text"}
              style={{ margin: "10px 0" }}
              rootClassName={"input"}
              placeholder="Ism va Familiya"
              name={"full_name"}
            />
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
            <Input
              required
              type={"password"}
              style={{ margin: "10px 0" }}
              rootClassName="input"
              placeholder="Parolni Tasdiqlash"
              name={"confirm_password"}
            />
            <Button
              htmlType={"submit"}
              loading={isSubmitting}
              style={{ marginTop: "15px" }}
              size="medium"
              shape="round"
              className="btn-primary-dark"
            >
              RO'YHATDAN O'TISH
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
