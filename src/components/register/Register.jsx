import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Button, Input, Space, Typography } from "antd";
import { useState } from "react";
const { Title, Paragraph } = Typography;

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { PatternFormat } from "react-number-format";

const FormatInput = ({ status, name, onChange }) => {
  return (
    <div className={"custom-phone-format"}>
      <PatternFormat
        required
        mask={"_"}
        className={`phone-format ${status}`}
        format="+998 (##) ### ## ##"
        name={name}
        onValueChange={onChange}
        valueIsNumericString={true}
        placeholder="Telefon raqam kiriting"
      />
    </div>
  );
};

const Register = () => {
  const navigate = useNavigate();

  // loading action:
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // formData error-validations:
  const [nameError, setIsError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    full_name: "",
    password: "",
    confirm_password: "",
  });

  const validateChange = (e) => {
    const { name, value } = e.target;
    setErrorMessage({ ...errorMessage, [name]: value });
  };

  const [phoneValue, setPhoneValue] = useState("");

  const valueChange = ({ value }) => {
    setPhoneValue(value);
  };

  const formErrorHandler = () => {
    errorMessage.full_name === " " ? setIsError(true) : setIsError(false);

    phoneValue.length < 9 && phoneValue !== ""
      ? setPhoneNumberError(true)
      : setPhoneNumberError(false);

    errorMessage.password.length < 6 && errorMessage.password !== ""
      ? setPasswordError(true)
      : setPasswordError(false);

    errorMessage.password.length > 6 &&
    errorMessage.confirm_password !== errorMessage.password
      ? setConfirmPassword(true)
      : setConfirmPassword(false);
  };

  const response = useActionData();
  console.log(response, "res");

  return (
    <div className={"register-wrapper"}>
      <div className={"register"}>
        <div className={"register-left"}>
          <div className={"shadow-blur"}></div>
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
            style={{ marginTop: "20px", position: "relative", zIndex: "3" }}
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
            {response?.phone_number && (
              <Paragraph style={{ marginTop: "-10px" }} type="danger">
                Bu telefon raqam oldin royhatdan o'tgan!
              </Paragraph>
            )}
            <Space
              style={{ width: "100%" }}
              direction={"vertical"}
              size={"middle"}
            >
              <div className="wrapper-input">
                <div style={{ width: "100%" }}>
                  <Input
                    helpertext={"Enter"}
                    required
                    status={nameError ? "error" : "success"}
                    type={"text"}
                    rootClassName={"input"}
                    placeholder="Ism va Familiya"
                    name={"full_name"}
                    onChange={validateChange}
                  />
                  {nameError && (
                    <Paragraph className="error-message">
                      Iltimos ism va familiyangizni kiriting!
                    </Paragraph>
                  )}
                </div>
              </div>

              <div className="custom-input-password">
                <FormatInput name={"phone_number"} onChange={valueChange} />
                {phoneNumberError && (
                  <Paragraph className="error-message">
                    Telefon raqam to'g'ri kiritilmagan!
                  </Paragraph>
                )}
              </div>
              <div className="custom-input-password">
                <Input.Password
                  required
                  status={passwordError ? "error" : "success"}
                  placeholder="Parol"
                  name={"password"}
                  onChange={validateChange}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                {passwordError && (
                  <Paragraph className="error-message">
                    Parol 6ta belgidan kam bo'lmasligi kerak!
                  </Paragraph>
                )}
              </div>
              <div className="custom-input-password">
                <Input.Password
                  required
                  status={confirmPassword ? "error" : "success"}
                  onChange={validateChange}
                  type={"password"}
                  placeholder="Parolni Tasdiqlash"
                  name={"confirm_password"}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                {confirmPassword && (
                  <Paragraph className="error-message">
                    Parolni xato kiritdingiz!
                  </Paragraph>
                )}
              </div>
            </Space>
            <Button
              onClick={formErrorHandler}
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
