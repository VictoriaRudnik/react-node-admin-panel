import React, {useEffect} from "react";
import "./style.css";
import Input from "../../common/input";
import { useHistory } from "react-router-dom";
import { setAuthorize } from "../../../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const LoginPage = (props) => {
  const history = useHistory();

  const { handleSubmit, control, errors } = useForm();



  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.user.isAuthorized);

  useEffect(() => {
    if(isAuthorized) {
      history.push("/your_brands");
    }
  }, [isAuthorized]);

  const handleClick = handleSubmit(({ email, password }) => {
    if (email && password) {
      dispatch(setAuthorize(email, password));
    }
  });
  
  return (
    <div className="container">
      <p className="title">Login</p>
      <Input
        label="Email"
        type="email"
        customClass="login"
        control={control}
        name="email"
        rules={{
          required: { value: true, message: "This field is required" },
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message:
              "Please enter your email address in format: yourname@example.com",
          },
        }}
        errors={errors}
      />
      <Input
        label="Password"
        type="password"
        customClass="login"
        control={control}
        name="password"
        rules={{
          required: { value: true, message: "This field is required" },
          minLength: {
            value: 6,
            message: "The password has to be minimum 6 characters long!",
          },
        }}
        errors={errors}
      />
      <button className="button" onClick={() => handleClick()}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
