import "../../styles/generic.scss";
import "../../styles/register.scss";

import { useState } from "react";
import {
  Form,
  useNavigation,
  useNavigate,
  useActionData,
} from "react-router-dom";
import { Button, Input, Space, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

// phoneInput package:
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PatternFormat } from "react-number-format";

const { Title, Paragraph } = Typography;

const Login = ({ errorData }) => {
  // loading action:
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // navigate:
  const navigate = useNavigate();
  const response = useActionData();
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
            style={{ marginTop: "20px", position: "relative", zIndex: "3" }}
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
            {response?.detail && (
              <Paragraph style={{ marginTop: "-10px" }} type={"danger"}>
                Telefon raqam yoki parol noto'g'ri terilgan!
              </Paragraph>
            )}
            <Space
              style={{ width: "100%" }}
              direction={"vertical"}
              size={"middle"}
            >
              <div>
                <FormatInput name={"phone_number"} />
                {errorData?.phone_number && (
                  <Paragraph style={{ marginBottom: "-10px" }} type={"danger"}>
                    Telefon raqam to'gri kiritilmagan
                  </Paragraph>
                )}
              </div>

              <div className="custom-input-password">
                <Input.Password
                  required
                  type="password"
                  placeholder="Parol"
                  name="password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </div>
            </Space>
            <Button
              htmlType={"submit"}
              loading={isSubmitting}
              style={{ marginTop: "30px" }}
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
