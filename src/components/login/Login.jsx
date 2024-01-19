import "../../styles/generic.scss";
import "../../styles/register.scss";
import { Button, Input, Typography } from "antd";
import { Form, useNavigation, useNavigate } from "react-router-dom";
import { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const { Title, Paragraph } = Typography;

const Login = () => {
  // navigate:
  const navigate = useNavigate();

  // loading button:
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // phone number actions:
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{12}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className={"register-wrapper"}>
      <div className={"register"}>
        <div className={"register-left"}>
          <div className={"shadow-blur"}></div>
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
            <Title
              style={{ fontWeight: 500, marginBottom: "20px" }}
              className={"title"}
              level={2}
            >
              Hisobni Tasdiqlash
            </Title>
            <span style={{ width: "100%" }}>
              <PhoneInput
                inputStyle={{
                  width: "100%",
                  color: "black",
                  padding: "22px 50px",
                  backgroundColor: "transparent",
                  border: "1px solid  #dfdfdf",
                }}
                buttonStyle={{
                  border: "1px solid  #dfdfdf",
                }}
                country={"uz"}
                inputProps={{
                  name: "phone_number",
                  required: true,
                  autoFocus: true,
                }}
                type={"text"}
                value={phoneNumber}
                onChange={handleChange}
              />
              {!valid && (
                <Paragraph style={{ marginBottom: "-10px" }} type={"danger"}>
                  Telefon raqam to'gri kiritilmagan
                </Paragraph>
              )}
            </span>
            <Input
              required
              status={"error"}
              type={"password"}
              style={{ margin: "20px 0 10px 0" }}
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
