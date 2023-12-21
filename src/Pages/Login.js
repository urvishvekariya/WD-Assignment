import React, { useState } from "react";
import { Form, Row, Col } from "antd";
import { ToastContainer, toast } from "react-toastify";
import Logo from "../assets/images/logo.png";
import InputDefault from "../Components/InputDefault/InputDefault";
import ButtonDefault from "../Components/ButtonDefault/ButtonDefault";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const defaultemail = "user@example.com";
  const defaultPassword = "123";

  const validateCredentials = (inputEmail, inputPassword) => {
    return inputEmail === defaultemail && inputPassword === defaultPassword;
  };

  const handleLogin = () => {
    const isValid = validateCredentials(email, password);

    if (isValid) {
      navigate("/dashboard");
    } else {
      toast.warn("Wrong Credentials!", {
        toastId: email,
      });
      toast.info(
        `Default Credentials | Email: ${defaultemail} Password: ${defaultPassword}`,
        {
          toastId: 1,
        }
      );
    }
  };

  return (
    <div className="main-div">
      <ToastContainer />
      <div className="d-flex justify-content-center logo-div">
        <img src={Logo} alt="moptro-logo" />
      </div>
      <div className="login-form-div">
        <Form
          name="wrap"
          labelCol={{ flex: "110px" }}
          labelAlign="left"
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          style={{ maxWidth: 600 }}
        >
          <Row gutter={[0, 25]}>
            <Col xs={24}>
              <InputDefault
                placeholder="E-mail"
                type="email"
                name="email"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col xs={24}>
              <InputDefault
                placeholder="Password"
                type="Password"
                name="Password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
            <Col xs={24}>
              <ButtonDefault title="Login" block={true} onClick={handleLogin} />
            </Col>
          </Row>
          <p className="ml-link mt-3">Forgot Password?</p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
