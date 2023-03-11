import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.scss";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "../../constants/formRegisterSchema";
import { useDispatch } from "react-redux";
import { actFetchRegister } from "../../redux/features/users/usersSlice";
const initialFormValue = {
  userName: "",
  email: "",
  password: "",
  isAdmin: false,
  image: "",
  address: "",
  phoneNumber: "",
};
const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginPage = () => {
    navigate("/login");
  };

  //Validate
  const methods = useForm({
    defaultValues: initialFormValue,
    resolver: yupResolver(registerFormSchema),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onRegister = (values) => {
    dispatch(actFetchRegister(values));
  };
  return (
    <div>
      <div className="register-page">
        <div className="register-container">
          <div className="register__form">
            <div className="register__form--heading">
              <h3>Register</h3>
            </div>
            <form onSubmit={handleSubmit(onRegister)}>
              {!!errors.email && (
                <span style={{ color: "red", textAlign: "left" }}>
                  {errors.email.message}
                </span>
              )}
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    value={value}
                    onChange={onChange}
                    type="email"
                    placeholder="Email"
                  />
                )}
              />

              {!!errors.password && (
                <span style={{ color: "red", textAlign: "left" }}>
                  {errors.password.message}
                </span>
              )}
              <Controller
                name="password"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    value={value}
                    onChange={onChange}
                    type="password"
                    placeholder="Password"
                  />
                )}
              />
              <span onClick={handleLoginPage}>I already have an account. Login here.</span>
              <div className="register__btn">
                <button className="register__btn--signin" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
